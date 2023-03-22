import React, { useState } from 'react';
import { CheckIcon,PencilIcon } from '@heroicons/react/24/solid';
import {TrashIcon} from '@heroicons/react/24/solid';

function TaskItem({task,deleteTask,toggleTask,enterEditMode}) {

    const [isChecked,setIsChecked]=useState(task.checked);

    const handleCheckBoxChange =(e)=>{
        setIsChecked(!isChecked);
        toggleTask(task.id)
    }


  return (
    <li className='task h-auto  px-4 py-2 flex justify-between items-center  w-auto  '  >
      {/* {task.name} */}
      <div className="task-group flex">
        <input type="checkbox" 
            className='mx-3 bg-transparent' 
            name={task.name} 
            id={task.id}
            checked={isChecked}
            onChange={handleCheckBoxChange}
         />
         <label htmlFor={task.id}
            className='flex'
            >
             {task.name }
             {/* <p className=''>
                <CheckIcon strokeWidth={2} width={24} height={24}/>
             </p> */}
         </label>
      </div>
      <div className='flex gap-3'>
            <button className='pen bg-blue-800 px-3' 
            aria-label={`Update ${task.name} Task`}
            onClick={()=>{enterEditMode(task)}}
            >
               <PencilIcon width={18} height={18}/>
            </button>
            <button className= 'dlt bg-red-700  px-3 py-2' 
            aria-label={`Update  Task`}
            onClick={()=>deleteTask(task.id)}
            >
               <TrashIcon width={17} height={17}/>
            </button>
             
      </div>
    </li>
  )
}

export default TaskItem;