import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Content = () => {

  // One for the current input value 
 


//   to coonsole the typed in console below add handleclick console.log
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };
const [taskInput, setTaskInput] = useState("");  
const [tasks,setTasks] = useState([]);

const handleAddClick = (e) => {
    setTasks([...tasks,{id:uuidv4(), text:taskInput}])
    setTaskInput("");
  };
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task)=> task.id !== id)
    setTasks(updatedTasks)
  }
const toggleCompleteTask = (id) =>{
        const compTasks = tasks.map((task)=> task.id === id ?{...task,completed: !task.completed }
        :task) 
        setTasks(compTasks);
  }
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="">
        <input
          type="text"
          placeholder="Add task"
          value={taskInput} //give usestate 
          onChange={(e)=>setTaskInput(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>

      <ul>
        {/* <li>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg ml-3 mt-4">
            Delete
          </button>
          <span className="font-medium ml-3">Playing</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">
            Add
          </button>
        </li>
        <li>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg ml-3 mt-4">
            Delete
          </button>
          <span className="font-medium ml-3">Playing</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">
            Add
          </button>
        </li>
        <li>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg ml-3 mt-4">
            Delete
          </button>
          <span className="font-medium ml-3">Playing</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">
            Add
          </button>
        </li> */}
      </ul>
      {/* <ul>
      {tasks.map((item) => (
          <li key={item.id}
          className={`mt-3 flex justify-around`}
          >
             <button  onClick={() => deleteTask(item.id)} className="p-3 px-3 bg-green-500 rounded-lg">Completed</button>
            {item.text}
            <button  onClick={() => deleteTask(item.id)} className="p-3 bg-red-700 rounded-lg">Delete</button>
          </li>
        ))}
      </ul> */}
  <ul>
  {tasks.map((item) => (
    <li
      key={item.id}
      className="flex items-center justify-between  p-4 rounded-lg shadow-lg w-[400px]"
    >
      {/* Complete Button */}
     
        <button
         onClick={() => toggleCompleteTask(item.id)}
        className={`text-sm font-medium px-4 py-2 rounded-md
         transition duration-300 
         ${
          item.completed ? "invisible": " text-green-600 border border-green-600  hover:bg-green-600 hover:text-white"
         }`}
      >
        Complete
      </button>
      
    

      {/* Task Text */}
      <span
        className={`text-lg font-semibold break-words${
          item.completed ? "text-green-700 line-through" : ""
        }`}
      >
        {item.text}
      </span>

      {/* Delete Button */}
      <button
        onClick={() => deleteTask(item.id)}
        className="text-sm font-medium text-red-600 border border-red-600 px-4 py-2 rounded-md hover:bg-red-600 hover:text-white transition duration-300"
      >
        Delete
      </button>
    </li>
  ))}
</ul>

    </div>
  );
};

export default Content;
