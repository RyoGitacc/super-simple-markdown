
const MARKDOWNSHEET:string[]=['# H1', '## H2' ,'### H3' , 'New line - Double enter', '**bold**' ,'*italic*' ,'[Link](http://a.com)' ,
                      '![Image](http://url/a.png)', "`inline code`" ,'```block code```', '- list item']

type MarkdownGuidePropsType={
    showGuide:boolean
}

export default function MarkdownGuide({showGuide}:MarkdownGuidePropsType) {
  return (
   showGuide && (
    <div className='markdown-guide'>
      <h3>Markdown cheet sheet</h3>
      <ul>
       {MARKDOWNSHEET.map((ms,index)=>(
           <li key={index}>{ms}</li>
       ))}
      </ul>
    </div>
  )
  )
}
