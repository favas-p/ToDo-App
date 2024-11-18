import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Todo.css"
import AddTask from './AddTask'
import ListTask from './ListTask'

const Todo = () => {
  const [tasks, setTasks] = useState([])

  const [isEditing, setIsEditing] = useState(false); // Track if editing
  const [currentEditIndex, setCurrentEditIndex] = useState(null); // Index of task being edited
  useEffect(() => {
    document.title = `ToDo App`
  })


  // Add or Update task
  const addTask = (title) => {
    if (isEditing && currentEditIndex !== null) {
      const updatedTasks = tasks.map((task, index) =>
        index === currentEditIndex ? { ...task, title } : task
      );
      setTasks(updatedTasks);
      setIsEditing(false);
      setCurrentEditIndex(null);
    } else {
      const newTask = [...tasks, { title }];
      setTasks(newTask);
    }
  };
  // Remove task
  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  // Start editing
  const startEditing = (index) => {
    const taskToEdit = tasks[index];
    setIsEditing(true);
    setCurrentEditIndex(index);
    return taskToEdit.title; // Return the title to populate in the input field
  };

  // const addTask = (title)=>{
  //   const newTask =[...tasks,{title}]
  //   setTasks(newTask)
  // }


  // const removeTask=(index)=>{
  //   const newTask=[...tasks]
  //   newTask.splice(index,1)
  //   setTasks(newTask)
  // }
  return (
    <>
      <div className='todo-container'>
        <div className="background"></div>
        <div className='header' >
          <h1 className='app-name'>TODO APP</h1>
          <p className='task-count'>You have <span>{tasks.length}</span> Pending Tasks</p>
        </div>
        <div className='add-task'>
          <AddTask addTask={addTask}
            isEditing={isEditing}
            currentTask={
              isEditing && currentEditIndex !== null
                ? tasks[currentEditIndex].title
                : ""
            }
          />
        </div>
        <div className='tasks'>
          {tasks.map((task, index) => (
            <ListTask task={task} removeTask={removeTask}
              startEditing={startEditing}
              index={index} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Todo