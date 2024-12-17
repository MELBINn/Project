import React, { useState } from 'react'


const Content = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
    const handleAddClick = (e) => {
      console.log("hello")
    }
  return (
    <div className='ml-[40%] flex justify-center flex-col'>
       
      <div className="">
      <input
        type="text"
        placeholder="Add task"
        value={inputValue}
        onChange={handleInputChange}
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
            <li>
                <button className='bg-red-500 text-white px-4 py-2 rounded-lg ml-3 mt-4'>Delete</button>
                <span className='font-medium ml-3'>Playing</span>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg ml-2'>Add</button>
            </li>
            <li>
                <button className='bg-red-500 text-white px-4 py-2 rounded-lg ml-3 mt-4'>Delete</button>
                <span className='font-medium ml-3'>Playing</span>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg ml-2'>Add</button>
            </li>
            <li>
                <button className='bg-red-500 text-white px-4 py-2 rounded-lg ml-3 mt-4'>Delete</button>
                <span className='font-medium ml-3'>Playing</span>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg ml-2'>Add</button>
            </li>
        </ul>
    </div>
   
  )
}

export default Content