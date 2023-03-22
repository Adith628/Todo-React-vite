import { useState } from 'react'
import TaskList from './components/TaskList';
import EditForm from './components/EditForm';

// custom hooks
import useLocalStorage from './hooks/useLocalStorage'

import './App.css'
import CustomForm from './components/CustomForm'

// npm run dev

function App() {

  const[tasks,setTasks] = useLocalStorage('react-todo.tasks',[]);
  // const[tasks,setTasks] = useState([]);
  const[isEditing,setIsEditing] = useState(false);
  const[editedTask,setEditedTask] = useState(null);
  const[previousFocusEl,setPreviousFocusEl] =useState(null)

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
    closeEditMode();

  }

  const closeEditMode =()=>{
    setIsEditing(false);
    previousFocusEl.focus();
    // 
  }

  const enterEditMode =(task)=>{
    setEditedTask(task);
    setIsEditing(true);

    setPreviousFocusEl(document.activeElement);
    

  }
  



  return (
    <div className="Container">
      <header>
        <h1 className='text-6xl font-extrabold text-green-600 my-6 ' >My Task List</h1>
      </header>
      {
        isEditing && <EditForm
        editedTask={editedTask}
        updateTask={updateTask}
        closeEditMode={closeEditMode}
      />
      }
      
        <CustomForm addTask={addTask}  />
        {tasks && <TaskList 
        tasks={tasks} 
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editedTask={editedTask}
        enterEditMode={enterEditMode}
        
          />}
    </div>
  )
}

export default App
