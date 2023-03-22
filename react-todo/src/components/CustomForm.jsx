import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';


function CustomForm({addTask}) {

	const [task,setTask] =useState("");


    const handleFormSubmit =(e)=>{
        e.preventDefault();
		addTask({
			name : task,
			checked: false,
			id : Date.now()
		});
        setTask("");

    }
		

  return (
    <form className='todo flex justify-evenly gap-1'
    onSubmit={handleFormSubmit}
	>
	{/* <p>{task}</p> */}
      <div className="wrapper relative justify-center items-center flex ">
			<input 
				type="text" 
				className="input h-8 px-4  flex-col rounded-md "
				value={task} 
				id="task" 
				onInput={(e)=>{
					setTask(e.target.value)
				}}
				required
				autoFocus
				maxLength={60}
				placeholder="Enter Task"

			/>
			<label htmlFor="" className='label px-6'>Enter Task</label>
      </div>   
		<button className='btn' type='submit' aria-label='Add task'>		
			<PlusIcon className='h-6'/>
		</button>
    </form>
  )
}

export default CustomForm
