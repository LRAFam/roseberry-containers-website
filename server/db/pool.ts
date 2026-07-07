import pg from 'pg'

const { Pool } = pg

let pool: pg.Pool | null = null

function resolveDatabaseUrl(): string {
  // Nitro runtimeConfig is populated from nuxt.config at request time on Vercel.
  try {
    const config = useRuntimeConfig()
    if (config.databaseUrl) return config.databaseUrl
  } catch {
    // Outside Nitro request context (e.g. scripts)
  }
  return process.env.DATABASE_URL || process.env.DATABASE_PUBLIC_URL || ''
}

function needsSsl(connectionString: string): boolean {
  return (
    process.env.NODE_ENV === 'production'
    || connectionString.includes('railway')
    || connectionString.includes('rlwy.net')
    || connectionString.includes('sslmode=require')
  )
}

export function getPool(): pg.Pool {
  if (!pool) {
    const connectionString = resolveDatabaseUrl()
    if (!connectionString) {
      throw new Error('DATABASE_URL is not set')
    }
    pool = new Pool({
      connectionString,
      ssl: needsSsl(connectionString) ? { rejectUnauthorized: false } : undefined,
    })
  }
  return pool
}

export async function query<T>(text: string, params?: unknown[]): Promise<T[]> {
  const { rows } = await getPool().query(text, params)
  return rows as T[]
}

export async function queryOne<T>(text: string, params?: unknown[]): Promise<T | null> {
  const rows = await query<T>(text, params)
  return rows[0] ?? null
}
