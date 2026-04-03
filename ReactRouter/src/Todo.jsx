import { useState } from "react"; 
function App() {
  const [text, setText] = useState("Hello World");
  const [tasks,setTasks] = useState([]);
  const handleChange = (e) => {
    console.log(text);
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    console.log(...tasks)
    setTasks([...tasks, text])
  }
  return(
    <>
    <input onChange={handleChange}type="text" value={text} />
    <input type="submit" onClick={handleSubmit}name="" id="" />
    <ul>
      {tasks.map((task, index) => ( 
        <h1 key={index}>{task}</h1>
      ))}
    
    
    </ul>
    </>
  )
}