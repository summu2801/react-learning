import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind css</h1>
      <Card username="Hello" />
      <Card username="chai aur code" btnText="click me"/>

    </>
  )
}

export default App
