import React, { useEffect, useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';


function EditForm({editedTask,updateTask,closeEditMode}) {

	const [updatedTaskName,setUpdatedTaskName] = useState(editedTask.name);

    useEffect(()=>{

        const closeModalIfEscaped =(e)=>{
            e.key === "Escape" && closeEditMode()
        }

        window.addEventListener('keydown',closeModalIfEscaped);

        return ()=>{
            window.removeEventListener('keydown',closeModalIfEscaped)
        }

    },[closeEditMode])

    const handleFormSubmit =(e)=>{
        e.preventDefault();
        updateTask({...editedTask, name: updatedTaskName});
		
    }
	


  return (
    <div role='dialog' 
    aria-labelledby='editTask'
    onClick={(e)=>{
        e.target===e.currentTarget && closeEditMode()
    }} 
    className='Editor bg-white '
    >
        <form className='edittask  flex justify-evenly bg-black bg-opacity-95 rounded-lg h-max px-20 py-10 gap-1'
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
