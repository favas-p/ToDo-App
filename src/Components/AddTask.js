import React, { useState, useEffect } from 'react'

const AddTask = ({ addTask, isEditing, currentTask }) => {
  const [input, setInput] = useState("")

  useEffect(() => {
    setInput(currentTask); // Update input when editing
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput(""); // Clear input after adding/updating
    }
  };

  // const addItem =()=>{
  //   addTask(value)
  //   setValue("")
  // }
  //   return (
  //     <div className='input-container'>
  //       <input type='"text' className='input' placeholder='Enter Content'
  //       value={value} 
  //       onChange={(e)=>{
  //         setValue(e.target.value
  //         )}}/>
  //       <button className='add-btn' onClick={addItem}>ADD</button>
  //     </div>
  //   )
  // }

  // export default AddTask
  return (
    <form onSubmit={handleSubmit}>
      <input
        className='input'
        type="text"
        placeholder="Add or edit a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      // style={{
      //   width: "70%",
      //   padding: "8px",
      //   marginRight: "5px",
      //   border: "1px solid #ccc",
      //   borderRadius: "4px",
      // }}
      />
      <button
        type="submit"
        className='add-edit-btn'
        style={{
          backgroundColor: isEditing ? "#947a8a" : "#a27f99"
        }}
      >
        {isEditing ? "Save" : "Add"}
      </button>
    </form>
  );
};

export default AddTask;