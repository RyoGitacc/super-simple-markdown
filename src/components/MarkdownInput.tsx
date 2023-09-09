
type MarkdownInputProps={
    onChange:(inputStrin:string)=>void
    markdown:string
}

export default function MarkdownInput({markdown,onChange}:MarkdownInputProps) {
  return (
    <div className='markdown-input'>
      <textarea name="" value={markdown} className='textarea' onChange={(e)=>onChange(e.target.value)}/>
    </div>
  )
}
