CREATE TABLE IF NOT EXISTS gsc_daily_stats (
  id              BIGSERIAL PRIMARY KEY,
  stat_date       DATE NOT NULL,
  dimension_type  VARCHAR(16) NOT NULL,
  dimension_value VARCHAR(768) NOT NULL DEFAULT '',
  dimension_hash  CHAR(32) NOT NULL,
  clicks          INTEGER NOT NULL DEFAULT 0,
  impressions     INTEGER NOT NULL DEFAULT 0,
  ctr             DECIMAL(8, 4) NOT NULL DEFAULT 0,
  position        DECIMAL(8, 2) NOT NULL DEFAULT 0,
  synced_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (stat_date, dimension_type, dimension_hash)
);

CREATE INDEX IF NOT EXISTS gsc_daily_type_date_idx ON gsc_daily_stats(dimension_type, stat_date);

CREATE TABLE IF NOT EXISTS analytics_sync_logs (
  id           BIGSERIAL PRIMARY KEY,
  provider     VARCHAR(32) NOT NULL,
  status       VARCHAR(16) NOT NULL,
  rows_synced  INTEGER NOT NULL DEFAULT 0,
  message      TEXT,
  period_start DATE,
  period_end   DATE,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
