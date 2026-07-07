import crypto from 'crypto'

let cachedToken: { token: string; expiresAt: number } | null = null

function base64UrlEncode(data: string | Buffer): string {
  return Buffer.from(data).toString('base64url')
}

function getServiceAccountCredentials(): Record<string, string> | null {
  const json = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  if (json) {
    try {
      const parsed = JSON.parse(json) as Record<string, string>
      if (parsed.client_email && parsed.private_key) return parsed
    } catch { /* ignore */ }
  }
  return null
}

export function isGoogleConfigured(): boolean {
  return !!getServiceAccountCredentials() && !!process.env.GSC_SITE_URL
}

export async function getGoogleAccessToken(scopes: string[]): Promise<string | null> {
  const creds = getServiceAccountCredentials()
  if (!creds) return null

  const now = Math.floor(Date.now() / 1000)
  if (cachedToken && cachedToken.expiresAt > now + 60) {
    return cachedToken.token
  }

  const header = base64UrlEncode(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claims = base64UrlEncode(JSON.stringify({
    iss: creds.client_email,
    scope: scopes.join(' '),
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  }))

  const input = `${header}.${claims}`
  const signature = crypto.sign('RSA-SHA256', Buffer.from(input), creds.private_key)
  const jwt = `${input}.${base64UrlEncode(signature)}`

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  })

  if (!res.ok) return null
  const data = await res.json() as { access_token?: string; expires_in?: number }
  if (!data.access_token) return null

  cachedToken = {
    token: data.access_token,
    expiresAt: now + (data.expires_in ?? 3600),
  }
  return data.access_token
}

export function getGscSiteUrl(): string | null {
  return process.env.GSC_SITE_URL || null
}
