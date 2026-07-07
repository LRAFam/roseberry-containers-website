import jwt from 'jsonwebtoken'
import type { H3Event } from 'h3'

const COOKIE_NAME = 'site_token'
const MAX_AGE = 8 * 60 * 60

export function setSiteToken(event: H3Event, clientId: string) {
  const config = useRuntimeConfig(event)
  const secret = config.siteJwtSecret
  if (!secret) throw new Error('SITE_JWT_SECRET is not set')

  const token = jwt.sign({ role: 'site_admin', client_id: clientId }, secret, { expiresIn: '8h' })
  setCookie(event, COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: MAX_AGE,
    path: '/',
  })
}

export function clearSiteToken(event: H3Event) {
  deleteCookie(event, COOKIE_NAME, { path: '/' })
}

export function requireSiteAdmin(event: H3Event): { clientId: string } {
  const config = useRuntimeConfig(event)
  const token = getCookie(event, COOKIE_NAME)
  if (!token) throw createError({ statusCode: 401, message: 'Unauthorized' })

  try {
    const payload = jwt.verify(token, config.siteJwtSecret) as { client_id: string }
    return { clientId: payload.client_id }
  } catch {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
}
