#!/usr/bin/env node
/**
 * Run a SQL migration file against DATABASE_URL.
 * Usage: node --env-file=.env scripts/run-migration.mjs 002_analytics.sql
 */
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'

const migrationName = process.argv[2]
if (!migrationName) {
  console.error('Usage: node --env-file=.env scripts/run-migration.mjs <filename.sql>')
  process.exit(1)
}

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  console.error('DATABASE_URL is not set')
  process.exit(1)
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const sqlPath = join(__dirname, '..', 'server', 'db', 'migrations', migrationName)
const sql = readFileSync(sqlPath, 'utf8')

const pool = new pg.Pool({ connectionString: databaseUrl, ssl: databaseUrl.includes('railway') ? { rejectUnauthorized: false } : undefined })

try {
  await pool.query(sql)
  console.log(`Migration applied: ${migrationName}`)
} catch (err) {
  console.error(`Migration failed: ${err.message}`)
  process.exit(1)
} finally {
  await pool.end()
}
