import { useState } from "react";

function App() {
  const [color,setColor] = useState('red');

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
        <button className="w-10 h-5 bg-green-500 rounded-xl m-6" onClick={()=>setColor('green')}></button>
        <button className="w-10 h-5 bg-yellow-400 rounded-xl m-6" onClick={()=>setColor('yellow')}></button>
        <button className="w-10 h-5 bg-violet-700 rounded-xl m-6" onClick={()=>setColor('violet')}></button>
        <button className="w-10 h-5 bg-orange-600 rounded-xl m-6" onClick={()=>setColor('orange')}></button>
        <button className="w-10 h-5 bg-blue-400 rounded-xl m-6" onClick={()=>setColor('blue')}></button>
        <button className="w-10 h-5 bg-black rounded-xl m-6" onClick={()=>setColor('black')}></button>
      </div>
    </div>
  )
}

export default App
