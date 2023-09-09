
import ReactMarkdown from 'react-markdown'

type MarkdownOutputProps={
    markdown:string;
}
export default function MarkdownOutput({markdown}:MarkdownOutputProps) {
  return (
    <div className='markdown-output'>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}
