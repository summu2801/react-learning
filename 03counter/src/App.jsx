import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=15
  // const addValue=()=>{
  //   // console.log("value added",Math.random());
  //   counter=counter+1;
  //   console.log("clicked",counter);
  // }

  const[counter,setCounter]=useState(15)
  const addValue=()=>{
    // counter=counter+1;
    setCounter(counter+1);
  }
  const removeValue=()=>{
    // counter=counter+1;
    setCounter(counter-1);
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
