import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'; // Example icon

const ListTask = ({ task, index, startEditing, removeTask }) => {
  return (
    <>
      <div className='list-tasks'>
        <p>{task.title}</p>
        <div className='btns'>
          <button onClick={() => {
            startEditing(index)
          }} className='edit-btn'>
            <FontAwesomeIcon icon={faPenToSquare} /></button>
          <button onClick={() => { removeTask(index) }} className='delete-btn'>
            <FontAwesomeIcon icon={faTrash}/></button>
        </div>
      </div>
    </>
  )
}

export default ListTask
