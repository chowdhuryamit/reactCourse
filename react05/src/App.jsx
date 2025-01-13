import { useCallback, useEffect, useRef, useState } from "react"
import './App.css'


function App() {
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumber]=useState(false);
  const [charAllowed,setChar]=useState(false);
  const [Password,setPassword]=useState("");

  // const generatePassword=useCallback(()=>{
  //   let str="QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
  //   let pass=""
  //   if(numberAllowed){
  //     str+="1234567890"
  //   }
  //   if(charAllowed){
  //     str+="!@#$&*%)(?><"
  //   }
  //   for(let i=0;i<length;i++){
  //     pass+=str.charAt(Math.floor(Math.random()*str.length))
  //   }
  //   setPassword(pass)
  // },[length,numberAllowed,charAllowed,setPassword])

  const generatePassword=(length,charAllowed,numberAllowed)=>{
    let str="QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
    let pass=""
    if(numberAllowed){
      str+="1234567890"
    }
    if(charAllowed){
      str+="!@#$&*%)(?><"
    }
    for(let i=0;i<length;i++){
      pass+=str.charAt(Math.floor(Math.random()*str.length))
    }
    setPassword(pass)
  }

  const passwordRef=useRef(null)

  const copyToClipBoard=useCallback(()=>{
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(()=>{
    generatePassword(length,numberAllowed,charAllowed)
  },[length,numberAllowed,charAllowed])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-700 bg-gray-600">
      <h1 className='text-center text-white'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text" 
          value={Password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyToClipBoard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={5} max={50} value={length} onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setNumber(!numberAllowed)}} />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>{setChar(!charAllowed)}} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
