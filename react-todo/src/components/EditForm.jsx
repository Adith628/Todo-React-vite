import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';


function EditForm({editedTask,updatedTask}) {

	const [updatedTaskName,setUpdatedTaskName] = useState(editedTask.name);


    const handleFormSubmit =(e)=>{
        e.preventDefault();
        // updatedTask()
		

    }
		

  return (
    <div role='dialog' 
    aria-labelledby='editTask'
    // onClick={} 
    className='Editor bg-white '
    >
        <form className='edittask  flex justify-evenly bg-black rounded-md h-max px-20 py-10 gap-1'
            onSubmit={handleFormSubmit}
            >
            {/* <p>{task}</p> */}
          <div className="wrapper relative justify-center items-center flex ">
                    <input 
                        type="text" 
                        className="input h-8 px-4  flex-col rounded-md "
                        value={updatedTaskName} 
                        id="editTask" 
                        onInput={(e)=>{
                            setUpdatedTaskName(e.target.value)
                        }}
                        required
                        autoFocus
                        maxLength={60}
                        placeholder="Update Task"
        
                    />
                    <label htmlFor="editedTask" className='updatelabel px-6 '>Update Task</label>
          </div>   
                <button className='btn bg-blue-600 h-8  flex justify-center items-center mx-3' type='submit' 
                aria-label={`confirm edited task to now read ${updatedTaskName}`}
                >		
                    <CheckIcon strokeWidth={2} className='h-6'/>
                </button>
        </form>
    </div>
  )
}

export default EditForm
