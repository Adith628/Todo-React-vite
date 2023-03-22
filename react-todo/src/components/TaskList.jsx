import React from 'react'
import TaskItem from './TaskItem'

// styles


function TaskList({tasks,deleteTask,toggleTask,enterEditMode}) {
  return (
    <ul className='h-auto overflow-y-scroll max-h-70 w-auto p-5 flex-col gap-1 border-solid border-white' >
    {
        tasks.sort((a,b)=>b.id -a.id).map(task =>(
            <TaskItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                enterEditMode={enterEditMode}
            />
        ))
    }
      
    </ul>
  )
}

export default TaskList
