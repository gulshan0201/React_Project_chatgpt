import { useState } from 'react'
import './App.css'

function App() {
  const [question,setQuestion] = useState('')

  const askQuestion=()=> {
    console.log(question)
  } 
   

  return (
    <div className='grid grid-cols-5 h-screen text-center'>
      <div className='col-span-1 bg-zinc-800'>
       
      </div>

      <div className='col-span-4 p-10'>
        <div className="container h-110">

        </div>
        
        <div className='bg-zinc-800 w-1/2 p-1 pr-5. text-white m-auto rounded-4xl border border-zinc-400 flex h-16'>
          <input type="text" value={question} onChange={(event)=>setQuestion(event.target.value)} className='w-full h-full p-3 outline-none' placeholder='Ask me anything' />
          <button onClick={askQuestion}>ASK</button>
        </div>

      </div>
    </div>
  )
}

export default App
