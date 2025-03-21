import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [counter, setCounter] = useState(0); //hook
  useEffect(() => {
    setCounter(100);
  }, [])
  return (
      <div className="App">
        <button onClick={() => setCounter((prevcount) => prevcount -1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={() =>  setCounter((prevcount) => prevcount +1)} >+</button>
      </div>
  )
}

export default App
