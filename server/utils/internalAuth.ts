import { timingSafeEqual } from 'node:crypto'
import type { H3Event } from 'h3'

export function requireInternalApiKey(event: H3Event) {
  const apiKey = process.env.INTERNAL_API_KEY || process.env.API_KEY
  if (!apiKey) {
    throw createError({ statusCode: 500, message: 'INTERNAL_API_KEY is not configured.' })
  }

  const provided = getHeader(event, 'x-api-key')
  if (!provided) {
    throw createError({ statusCode: 401, message: 'Unauthorised: X-API-Key header required.' })
  }

  let valid = false
  try {
    valid = timingSafeEqual(Buffer.from(provided), Buffer.from(apiKey))
  } catch {
    valid = false
  }

  if (!valid) {
    throw createError({ statusCode: 401, message: 'Unauthorised: invalid API key.' })
  }
}
