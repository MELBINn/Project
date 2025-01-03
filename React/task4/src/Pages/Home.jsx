import React, { useState } from 'react'
import Main from '../Components/Main'
import Content from '../Components/Content'
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddClick = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, { id: uuidv4(), text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleCompleteTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      {/* Main Section */}
      <div className=" mt-20 ml-[14%] justify-center items-center flex gap-4 p-4">
        <div className="w-full sm:w-1/4 bg-yellow-400 text-white rounded-lg p-4 text-center shadow-md">
          <div className="text-5xl mb-2">👥</div>
          <div className="text-2xl font-bold">20</div>
          <div className="text-sm">Users</div>
        </div>

        <div className="w-full sm:w-1/4 bg-green-500 text-white rounded-lg p-4 text-center shadow-md">
          <div className="text-5xl mb-2">🔔</div>
          <div className="text-2xl font-bold">16</div>
          <div className="text-sm">Notifications</div>
        </div>

        <div className="w-full sm:w-1/4 bg-red-500 text-white rounded-lg p-4 text-center shadow-md">
          <div className="text-5xl mb-2">📋</div>
          <div className="text-2xl font-bold">40</div>
          <div className="text-sm">Activities</div>
        </div>
      </div>

      {/* Task Manager Section */}
      <div className="flex items-center justify-center flex-col mt-8">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Add task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
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
          {tasks.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between p-4 rounded-lg shadow-lg w-[400px] mb-2"
            >
              <button
                onClick={() => toggleCompleteTask(item.id)}
                className={`text-sm font-medium px-4 py-2 rounded-md transition duration-300 ${
                  item.completed
                    ? "invisible"
                    : "text-green-600 border border-green-600 hover:bg-green-600 hover:text-white"
                }`}
              >
                Complete
              </button>

              <span
                className={`text-lg font-semibold break-words ${
                  item.completed ? "text-green-700 line-through" : ""
                }`}
              >
                {item.text}
              </span>

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
    </div>
  );
};

export default Home;
