import './App.css'

import Header from './components/Header'
import MarkdownGuide from './components/MarkdownGuide'
import { useState } from 'react';
import MarkdownInput from './components/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput';
function App() {
  const [showGuide, setShowGuide]=useState<boolean>(false);
  const [markdown,setMarkdown]=useState<string>("# Hello World")
  const handleGuide=():void=>{
    setShowGuide(!showGuide)
  }
  
  const onChange=(inputString:string):void=>{
    console.log(inputString)
      setMarkdown(inputString)
  }

  return (
      <div className='main'>
        <Header setShowGuide={handleGuide}/>
        <MarkdownGuide showGuide={showGuide}/>
        <div className='markdown-area'>
          <MarkdownInput markdown ={markdown} onChange={onChange}/>
          <MarkdownOutput markdown={markdown}/>
        </div>
      </div>
  )
}

export default App
