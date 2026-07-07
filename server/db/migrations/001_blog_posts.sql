-- Blog posts for website CMS (from assistant migration 008)
CREATE TABLE IF NOT EXISTS blog_posts (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id       UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  title           TEXT NOT NULL,
  slug            TEXT NOT NULL,
  excerpt         TEXT NOT NULL,
  content         TEXT NOT NULL,
  category        TEXT NOT NULL DEFAULT 'guides',
  status          TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  seo_title       TEXT,
  seo_description TEXT,
  featured_image  TEXT,
  tags            TEXT[] NOT NULL DEFAULT '{}',
  view_count      INTEGER NOT NULL DEFAULT 0,
  published_at    TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (client_id, slug)
);

CREATE INDEX IF NOT EXISTS blog_posts_client_status_idx ON blog_posts(client_id, status);
CREATE INDEX IF NOT EXISTS blog_posts_published_at_idx ON blog_posts(published_at DESC);
