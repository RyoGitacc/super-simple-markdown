
type HeaderPropsType={
    setShowGuide:()=>void
}

export default function Header({setShowGuide}:HeaderPropsType) {
 


  return (
    <div className='header'>
      <span>Markdown Previewer</span>
      <button className='cheatsheet-btn' onClick={setShowGuide}>Markdown cheet sheet</button>
    </div>
  )
}
