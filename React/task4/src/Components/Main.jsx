import React, { useState } from "react";
import Usericon from "../images/icons8-user-50.png";
import Noticon from "../images/icons8-notifications-64.png"
import Activeicon from "../images/icons8-activities-48.png"
import logo from "../images/professional-portfolio.png"


const Main = () => {
 
  return (
    <>
    {/* <div className="ml-[16%] p-4 sm:flex sm:flex-col">
      <div className="top flex justify-around">
        <div className="bg-yellow-300 text-black p-4 rounded-lg w-32">
          <div className="flex items-center">
            <img className="logo w-15 h-15 pr-1 " src={Usericon} alt="logo" />
            <div className="flex flex-col ml-2">
              <span className="font-bold ">20</span>
              <span className="font-bold ">Users</span>
            </div>
          </div>
        </div>
        <div className="bg-green-600 text-black p-4 rounded-lg ">
          <div className="flex items-center">
            <img className="logo w-15 h-15 pr-1 " src={Noticon} alt="logo" />
            <div className="flex flex-col ml-2">
              <span className="font-bold ">40</span>
              <span className="font-bold ">Notifications</span>
            </div>
          </div>
        </div>
        <div className="bg-red-600 text-black p-4 rounded-lg ">
          <div className="flex items-center">
            <img className="logo w-15 h-15 pr-1 " src={Activeicon} alt="logo" />
            <div className="flex flex-col ml-2">
              <span className="font-bold ">16</span>
              <span className="font-bold ">Activities</span>
            </div>
          </div>
        </div>
      </div>
      </div> */}
      {/* */}

<div className=" ml-[16%]  justify-center items-center flex gap-4 p-4">
 

  <div className="w-full sm:w-1/4  bg-yellow-400 text-white rounded-lg p-4 text-center shadow-md">
    <div className="text-5xl mb-2">👥</div>
    <div className="text-2xl font-bold">20</div>
    <div className="text-sm">Users</div>
  </div>

  
  <div className="w-full sm:w-1/4  bg-green-500 text-white rounded-lg p-4 text-center shadow-md">
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



    
    </>
  );
};

export default Main;
