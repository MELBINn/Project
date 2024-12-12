import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    // </div>
    //   <div>
    //   <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
    //     <div className="container-fluid">

    //       <a className="navbar-brand" href="#">
    //         <img
    //           src={require("../images/professional-portfolio.png")}
    //           alt="Logo"
    //           width="30"
    //           height="24"
    //           className="d-inline-block align-text-top"
    //         />
    //       </a>

    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>

    //       <div className="collapse navbar-collapse" id="navbarNav">
    //         <ul className="navbar-nav ms-auto">
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="#">
    //               Home
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">
    //               Features
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    //   <div>

    //   <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
    //     <div className="container-fluid">

    //       <a className="navbar-brand" href="#">
    //         <img
    //           src={require("../images/professional-portfolio.png")}
    //           alt="Logo"
    //           width="30"
    //           height="24"
    //           className="d-inline-block align-text-top"
    //         />
    //       </a>

    //       {/* Hamburger menu for responsive behavior */}
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>

    //       {/* Links on the right */}
    //       <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    //         <ul className="navbar-nav">
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="#">
    //               Home
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">
    //               Features
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>

    // bg-dark

    //   <nav className="navbar  navbar-expand-lg  border-bottom border-body">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="#">
    //         <img
    //           src={require("../images/professional-portfolio.png")}
    //           alt="Logo"
    //           width="30"
    //           height="24"
    //           class="d-inline-block align-text-top"
    //         ></img>
    //       </a>
    //       {/* //justify-content-end */}
    //       <div
    //         className="collapse navbar-collapse  d-none d-sm-flex"
    //         id="navbarNav"
    //       >
    //         <ul className="navbar-nav">
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="#">
    //               Home
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="#">
    //               About
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link " href="#">
    //               Contact
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="dropdown d-sm-none justify-content-end  ">
    //       <button
    //         className="btn btn-dark dropdown-toggle"
    //         type="button"
    //         data-bs-toggle="dropdown"
    //         aria-expanded="false"
    //       ></button>
    //       <ul className="dropdown-menu">
    //         <li>
    //           <a className="dropdown-item" href="/">
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a className="dropdown-item" href="#">
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a className="dropdown-item" href="#">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // );
    <>
      <header className="z-1">
        <div className="left">
          <h1>
            <a href="/">
              <img
                src={require("../images/professional-portfolio.png")}
                alt="bf"
              />
            </a>
          </h1>
        </div>
        <div className="right d-none d-sm-flex">
          <a
            className="text-white position-relative text-decoration-none"
            href="/"
          >
            <span>Home</span>
          </a>
          <a className="text-white text-decoration-none" href="/">
            <span>About</span>
          </a>
          <a className="text-white text-decoration-none" href="/">
            <span>contact</span>
          </a>
        </div>
        <div className="dropdown  d-sm-none">
          <button
            className=" "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              width: "30px", // Adjust button size
              height: "30px", // Adjust button size
              padding: "0", // Remove padding for better image fit

              overflow: "hidden", // Ensures the image fits within the button
            }}
          >
            <img
              src={require("../images/icons8-button-50.png")}
              alt="Button Icon"
              style={{
                backgroundColor: "#758bac",
                width: "100%", // Ensures the image fits the button size
                height: "100%",
                objectFit: "cover", // Scales the image properly
              }}
            />
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                About
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Navbar;
