import bcrypt from 'bcrypt'
import { scryptSync, timingSafeEqual } from 'crypto'

const BCRYPT_ROUNDS = 12
const MIN_PASSWORD_LENGTH = 8
const SCRYPT_KEYLEN = 64
const SCRYPT_OPTIONS = { N: 16384, r: 8, p: 1 }

export function validatePasswordStrength(password: string): string | null {
  if (!password || password.length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`
  }
  return null
}

export function hashPassword(password: string): string {
  return bcrypt.hashSync(password, BCRYPT_ROUNDS)
}

export function verifyPassword(password: string, stored: string): boolean {
  if (!stored) return false
  if (stored.startsWith('scrypt:')) return verifyLegacyScryptPassword(password, stored)
  try {
    return bcrypt.compareSync(password, stored)
  } catch {
    return false
  }
}

function verifyLegacyScryptPassword(password: string, stored: string): boolean {
  const parts = stored.split(':')
  if (parts.length !== 3 || parts[0] !== 'scrypt') return false

  const [, salt, expectedHex] = parts
  if (!salt || !expectedHex) return false

  const derived = scryptSync(password, salt, SCRYPT_KEYLEN, SCRYPT_OPTIONS)
  const expected = Buffer.from(expectedHex, 'hex')
  if (expected.length !== derived.length) return false

  try {
    return timingSafeEqual(expected, derived)
  } catch {
    return false
  }
}
