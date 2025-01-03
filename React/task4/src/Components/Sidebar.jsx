import React, { useState } from "react";
import HIcon from "../images/icons8-home-50.png";
import Noticon from "../images/icons8-notifications-64.png";
import Activeicon from "../images/icons8-activities-48.png";
import Usericon from "../images/icons8-user-50.png";
import Abouticon from "../images/icons8-about-50.png";
import Contacticon from "../images/icons8-contact-50.png";
import logo from "../images/professional-portfolio.png";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const [hs, setHs] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (value) => {
    console.log("Clicked:", value);
    setHs(value);
  };

  const toggleSidebar = () => {
    console.log("Sidebar Open:", !isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <header className="flex justify-between bg-gradient-to-r from-indigo-500 to-teal-400 h-20 items-center fixed top-0 left-0 right-0 z-10">
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
            <h1></h1>
            <h1 className="ml-2 mr-2 ">melbinsunny46@gmail.com</h1>
          </div>
        </header>

        <div>
          <button
            onClick={toggleSidebar}
            className={`sm:hidden fixed top-6 left-10  bg-pink-500 text-white p-3 rounded-lg shadow-md hover:bg-pink-600  
      z-50  block`}
            // z index koduthapo ahn mukalil vanne priority mattullathinekall
          >
            ☰
          </button>
        </div>
       </div>
        {/* sidebar */}

        <div
          className={`text-center top-20 bottom-0 left-0 fixed bg-white  ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }  sm:translate-x-0 sm:block z-50 flex`}
          // w-[14%]
        >
          <div className="links h-full  flex flex-col">
            <Link
              to="/"
              className={`flex-1  flex items-center justify-center hover:bg-gradient-to-r from-pink-500 hover:to-orange-500 hover:rounded-lg hover:scale-95 ${
                hs === 0 ? "current" : "nc"
              }`}
              onClick={() => handleClick(0)}
            >
              <img className="logo w-5 h-5 pr-1" src={HIcon} alt="logo" />
              Home
            </Link>
            <Link
              to="/products"
              className={`flex-1 flex items-center justify-center hover:bg-gradient-to-r from-pink-500 hover:to-orange-500 hover:rounded-lg hover:scale-95 ${
                hs === 1 ? "current" : "nc"
              }`}
              onClick={() => handleClick(1)}
            >
              <img className="logo w-5 h-5 pr-1" src={Activeicon} alt="logo" />
              Products
            </Link>
            <Link
              to="/contact"
              className={`flex-1 flex items-center justify-center hover:bg-gradient-to-r from-pink-500 hover:to-orange-500 hover:rounded-lg hover:scale-95 ${
                hs === 2 ? "current" : "nc"
              }`}
              onClick={() => handleClick(2)}
            >
              <img className="logo w-5 h-5 pr-1" src={Usericon} alt="logo" />
              Contact
            </Link>
            <Link
              to="/about"
              className={`flex-1 flex items-center justify-center hover:bg-gradient-to-r from-pink-500 hover:to-orange-500 hover:rounded-lg hover:scale-95 ${
                hs === 3 ? "current" : "nc"
              }`}
              onClick={() => handleClick(3)}
            >
              <img className="logo w-5 h-5 pr-1" src={Abouticon} alt="logo" />
              About
            </Link>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Sidebar;
