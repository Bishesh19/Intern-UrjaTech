
import { useState } from 'react'
function App() {

  const [count, setCount] = useState(0)
  const [multiply, setMultiply] = useState(2)
    const [divide, setDivide] = useState(500)
    const [String, setString] = useState('Click This Button')
    const[boolean, setBoolean] = useState()
    const[array, setArray] = useState([])
  
  return (
    <div>
      <p>count: {count}</p>
      <p>multiply: {multiply}</p>
      <p>divide: {divide}</p>
      <p>String: {String}</p>
        <p>boolean: {boolean}</p>
        <p>array: {array}</p>
        
      <button onClick={() => setCount(prev => prev + 1)}> Increment </button>
      <button onClick={() => setCount(prev => prev - 1)}> Decrement </button>
      <button onClick={() => setCount(0)}> Reset </button>
      <button onClick={() => setMultiply(prev => prev * 2)}> Double </button>
      <button onClick={() => setDivide(prev => prev / 2)}> Halve </button>
      <button onClick={() => setString('Hello, Its me bishesh lamichhane. I am a software developer and I am learning React hooks.')}> Change String </button>
      <button onClick={() => setBoolean(prev => !prev)}> Toggle Boolean </button>
      <button onClick={() => setArray([...array, " new Item"])}> Add to Array </button>
    <button onClick={() => console.log('Button clicked successfully!')}> Log Click </button>
    <button onClick={() => alert('button is clicked!')}> Alert Click </button>
    </div>
  )
} 

export default App    
