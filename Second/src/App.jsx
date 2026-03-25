import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center font-mono text-sm">
      <h1>Counter: {count}</h1>
      <button onClick={handleClick} className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Click me
      </button>
    </div>
  )
}

export default App
