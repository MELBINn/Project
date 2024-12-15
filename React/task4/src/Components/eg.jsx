import React, { useState } from "react";
import HIcon from "./path/to/HIcon"; // Replace with actual paths
import Usericon from "./path/to/Usericon";
import Noticon from "./path/to/Noticon";
import Activeicon from "./path/to/Activeicon";
import Contacticon from "./path/to/Contacticon";
import Abouticon from "./path/to/Abouticon";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="sm:block hidden fixed top-4 left-4 z-50 bg-pink-500 text-white p-2 rounded-lg shadow-md hover:bg-pink-600"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar fixed top-20 bottom-0 bg-white text-center transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 w-[16%]`}
      >
        <div className="links h-full flex flex-col">
          <a
            href="#"
            className="flex-1 flex items-center justify-center hover:bg-gradient-to-r from-pink-500 to-orange-500 hover:rounded-lg hover:scale-95"
          >
            <img className="logo w-5 h-5 pr-1" src={HIcon} alt="Home" /> Home
          </a>
          <a
            href="#"
            className="flex-1 flex items-center justify-center hover:bg-gradient-to-r from-pink-500 to-orange-500 hover:rounded-lg hover:scale-95"
          >
            <img className="logo w-5 h-5 pr-1" src={Usericon} alt="Users" /> Users
          </a>
          <a
            href="#"
            className="flex-1 flex items-center justify-center hover:bg-gradient-to-r from-pink-500 to-orange-500 hover:rounded-lg hover:scale-95"
          >
            <img
              className="logo w-5 h-5 pr-1"
              src={Noticon}
              alt="Notifications"
            />{" "}
            Notifications
          </a>
          <a
            href="#"
            className="flex-1 flex items-center justify-center hover:bg-gradient-to-r from-pink-500 to-orange-500 hover:rounded-lg hover:scale-95"
          >
            <img
              className="logo w-5 h-5 pr-1"
              src={Activeicon}
              alt="Activities"
            />{" "}
            Activities
          </a>
          <a
            href="#"
            className="flex-1 flex items-center justify-center hover:bg-gradient-to-r from-pink-500 to-orange-500 hover:rounded-lg hover:scale-95"
          >
            <img
              className="logo w-5 h-5 pr-1"
              src={Contacticon}
              alt="Contact"
            />{" "}
            Contact
          </a>
          <a
            href="#"
            className="flex-1 flex items-center justify-center hover:bg-gradient-to-r from-pink-500 to-orange-500 hover:rounded-lg hover:scale-95"
          >
            <img className="logo w-5 h-5 pr-1" src={Abouticon} alt="About" /> About
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
