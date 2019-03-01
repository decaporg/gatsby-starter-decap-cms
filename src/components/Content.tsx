import React from 'react'

type HtmlContentProps = {
  content: string
  className?: string
}
export const HTMLContent: React.SFC<HtmlContentProps> = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

type ContentProps = {
  content: React.ReactNode
  className?: string
}
const Content: React.FC<ContentProps> = ({ content, className }) => (
  <div className={className}>{content}</div>
)
export default Content
