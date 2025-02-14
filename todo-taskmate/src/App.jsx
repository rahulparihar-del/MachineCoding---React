import { useState } from "react";

function App() {

   const [tasks, setTasks] = useState([]);
   const [input, setInput] = useState("");


   const addTask = () => {
    if(input.trim() === "") return;
    setTasks([...tasks, {id: Date.now(), text: input}]);
    setInput("");
   }


   const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
   }


  return (
    <>
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h2>Todo - APP</h2>
      <input type="text" placeholder="Add New Task..." value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTask} >Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
