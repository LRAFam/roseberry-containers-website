import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'

marked.setOptions({ gfm: true, breaks: true })

export function renderMarkdown(content: string): string {
  const html = marked.parse(content) as string
  return DOMPurify.sanitize(html, {
    ADD_ATTR: ['target', 'rel'],
  })
}
