import { useState } from 'react'
import TaskList from './components/TaskList';
import EditForm from './components/EditForm';

import './App.css'
import CustomForm from './components/CustomForm'

// npm run dev

function App() {

  const[isEditing,setIsEditing] = useState(false);
  
  const[tasks,setTasks] = useState([]);
  
  const[editedTask,setEditedTask] = useState(null);

  const addTask =(task)=>{
    setTasks(prevState =>[...prevState,task]);

  }

  const deleteTask=(id)=>{
    setTasks(prevState=>prevState.filter(t =>t.id !== id))
  }

  const toggleTask =(id)=>{
    setTasks(prevState => prevState.map(t => (
      t.id === id
      ?{...t,checked : !t.checked}
      : t

    )))
  }
  const updateTask =(task)=>{
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
      ?{...t,name : task.name}
      : t

    )))
  }

  const enterEditMode =(task)=>{
    setEditedTask(task);
    setIsEditing(true);
  }
  



  return (
    <div className="Container">
      <header>
        <h1 className='text-6xl  text-green-600 my-6 ' >My Task List</h1>
      </header>
      {
        isEditing && <EditForm
        editedTask={editedTask}
        updatedTask={updateTask}
      />
      }
      
        <CustomForm addTask={addTask}  />
        {tasks && <TaskList 
        tasks={tasks} 
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editedTask={editedTask}
        enterEditMode ={enterEditMode}
        
          />}
    </div>
  )
}

export default App
