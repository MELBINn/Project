import React, { useState } from "react";
import Usericon from "../images/icons8-user-50.png";
import Noticon from "../images/icons8-notifications-64.png"
import Activeicon from "../images/icons8-activities-48.png"
import logo from "../images/professional-portfolio.png"


const Main = () => {
 
  return (
    <>
   

<div className=" ml-[14%] w-[84%] justify-center items-center flex gap-4 p-4">
 

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
