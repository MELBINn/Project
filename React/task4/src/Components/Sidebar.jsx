import React, { useState } from "react";

import HIcon from "../images/icons8-home-50.png";
import Noticon from "../images/icons8-notifications-64.png";
import Activeicon from "../images/icons8-activities-48.png";
import Usericon from "../images/icons8-user-50.png";
import Abouticon from "../images/icons8-about-50.png";
import Contacticon from "../images/icons8-contact-50.png";
import logo from "../images/professional-portfolio.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="flex justify-between bg-gradient-to-r from-indigo-500 to-teal-400 h-20 items-center">
        <div className="left ml-3">
          <h1>
            <a href="/">
              <img
                className="logo w-8 h-9 hidden sm-block"
                src={logo}
                alt="logo"
              />
            </a>
          </h1>
        </div>

        <div className="right flex hidden sm:block">
          <h1>
            {/* <a href="/">
              <img className="logo w-7 " src={logo} alt="logo" />
            </a> */}
          </h1>
          <h1 className="ml-2 mr-2 ">melbinsunny46@gmail.com</h1>
        </div>
      </header>

      <div>
        {/* togglebutton */}
        {/* ${
        isOpen ? "translate-x-0" : "-translate-x-full"  sm:translate-x-0 w-10
      } */}
        <button
          onClick={toggleSidebar}
          className={`sm:hidden fixed top-6 left-10  bg-pink-500 text-white p-3 rounded-lg shadow-md hover:bg-pink-600  
      `}
        >
          ☰
        </button>
      </div>


        {/* sidebar */}
        <div
          className={`sidebar w-32  text-center  fixed  top-20 bottom-0 bg-white ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }  sm:translate-x-0 sm:block z-40`}
        >
          <div className="links h-full  flex flex-col">
            <a
              href=""
              className="flex-1 flex items-center justify-center  hover:bg-gradient-to-r from-pink-500 hover:to-orange-500 hover:rounded-lg hover:scale-95"
            >
              <img className="logo w-5 h-5 pr-1 " src={HIcon} alt="logo" /> Home
            </a>
            <a
              href=""
              className="flex-1 flex items-center justify-center  hover:bg-gradient-to-r from-pink-500 hover:to-orange-500 hover:rounded-lg hover:scale-95"
            >
              <img className="logo w-5 h-5 pr-1 " src={Usericon} alt="logo" />
              Users
            </a>
            <a
              href=""
              className="flex-1 flex items-center justify-center  hover:bg-gradient-to-r from-pink-500 hover:to-orange-500 hover:rounded-lg hover:scale-95"
            >
              <img className="logo w-5 h-5 pr-1 " src={Noticon} alt="logo" />
              Notifications
            </a>
            <a
              href=""
              className="flex-1 flex items-center justify-center  hover:bg-gradient-to-r from-pink-500 hover:to-orange-500 hover:rounded-lg hover:scale-95"
            >
              <img className="logo w-5 h-5 pr-1 " src={Activeicon} alt="logo" />
              Activies
            </a>
            <a
              href=""
              className="flex-1 flex items-center justify-center  hover:bg-gradient-to-r from-pink-500 hover:to-orange-500 hover:rounded-lg hover:scale-95"
            >
              <img
                className="logo w-5 h-5 pr-1 "
                src={Contacticon}
                alt="logo"
              />
              Contact
            </a>
            <a
              href=""
              className="flex-1 flex items-center justify-center  hover:bg-gradient-to-r from-pink-500 hover:to-orange-500 hover:rounded-lg hover:scale-95"
            >
              <img className="logo w-5 h-5 pr-1 " src={Abouticon} alt="logo" />
              About
            </a>
          </div>
        </div>

          {/* <div className="flex h-screen">
       
      <aside 
      className={`fixedleft-0 h-screen bg-white shadow-md p-4 transition-transform duration-300 w-64 ${
          isOpen ? 'block' : 'hidden'
        } sm:block`}
     >
        <ul className="space-y-6">
          <li>
            <a href="#" className="flex items-center space-x-4 text-blue-600 font-bold">
              <span className="text-2xl">🏠</span>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4 text-gray-700 hover:text-blue-600">
              <span className="text-2xl">👥</span>
              <span>Users</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4 text-gray-700 hover:text-blue-600">
              <span className="text-2xl">🔔</span>
              <span>Notifications</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4 text-gray-700 hover:text-blue-600">
              <span className="text-2xl">📋</span>
              <span>Activities</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4 text-gray-700 hover:text-blue-600">
              <span className="text-2xl">ℹ️</span>
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4 text-gray-700 hover:text-blue-600">
              <span className="text-2xl">📇</span>
              <span>Contact</span>
            </a>
          </li>
        </ul>
        
      </aside>  */}
      
      </>
  );
};

export default Sidebar;
