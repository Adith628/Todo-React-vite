import { useState } from 'react'
import TaskList from './components/TaskList';

import './App.css'
import CustomForm from './components/CustomForm'

// npm run dev

function App() {

  const[tasks,setTasks] = useState([]);
  
  const addTask =(task)=>{
    setTasks(prevState =>[...prevState,task]);

  }

  const deleteTask=(id)=>{
    setTasks(prevState=>prevState.filter(t =>t.id !== id))
  }

  return (
    <div className="Container">
      <header>
        <h1 className='text-6xl  text-green-600 my-6 ' >My Task List</h1>
      </header>
        <CustomForm addTask={addTask}  />
        {tasks && <TaskList tasks={tasks} deleteTask={deleteTask}  />}
    </div>
  )
}

export default App
