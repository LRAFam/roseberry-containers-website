declare module '#app' {
  interface PageMeta {
    /** Which admin session(s) this page requires. Default: assistant */
    adminAuth?: 'assistant' | 'site' | 'both'
  }
}

export {}
