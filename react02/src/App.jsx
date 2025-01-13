import './App.css'
import { useState } from 'react';

function App() {
  //let counter=10;
  let [counter,setCounter]=useState(10);

  const addValue=()=>{
    // counter+=1;
    // console.log(counter);
    if(counter<20){
      setCounter(counter+1);
    }
  }
  const removeValue=()=>{
    // counter-=1;
    // console.log(counter);
    if(counter>0){
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>amit chowdhury {counter}</h1>
      <button onClick={addValue}>increase value:{counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>decrease value:{counter}</button>
    </>
  )
}

export default App
