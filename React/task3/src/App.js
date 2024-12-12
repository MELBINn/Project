// // App.js
// import React from 'react';
// import climberImage from './images/climb.jpg';

// const App = () => {
//   return (
//     <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${climberImage})` }}>
//       {/* Navbar */}
//       <header className="bg-white bg-opacity-80 py-4 px-6 flex justify-between items-center">
//         <h1 className="text-xl font-bold uppercase tracking-wider">Allan Johnson</h1>
//         <nav className="hidden md:flex space-x-6">
//           {['Home', 'About', 'Services', 'Blog', 'Guides', 'Contact'].map((link) => (
//             <a
//               key={link}
//               href={`#${link.toLowerCase()}`}
//               className="text-gray-700 hover:text-gray-900 font-medium"
//             >
//               {link}
//             </a>
//           ))}
//         </nav>
//         <div className="dropdown  d-sm-none">
//           <button
//             className=" "
//             type="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//             style={{
//               width: "30px", // Adjust button size
//               height: "30px", // Adjust button size
//               padding: "0", // Remove padding for better image fit

//               overflow: "hidden", // Ensures the image fits within the button
//             }}
//           >
//             <img
//               src={require("./images/icons8-button-50.png")}
//               alt="Button Icon"
//               style={{
//                 backgroundColor: "#758bac",
//                 width: "100%", // Ensures the image fits the button size
//                 height: "100%",
//                 objectFit: "cover", // Scales the image properly
//               }}
//             />
//           </button>
//           <ul className="dropdown-menu">
//             <li>
//               <a className="dropdown-item" href="/">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 About
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="flex flex-col justify-center items-center text-center text-white h-full bg-black bg-opacity-50 px-4">
//         <p className="text-sm md:text-lg uppercase tracking-wider">Ambition is the first step towards</p>
//         <h2 className="text-4xl md:text-6xl font-bold mt-2">Success</h2>
//         <p className="mt-4 text-sm md:text-lg">Now Available for Online Coaching</p>
//         <button
//           className="mt-6 px-6 py-3 bg-black bg-opacity-70 text-white text-sm md:text-base uppercase tracking-wider font-semibold rounded-md hover:bg-opacity-90"
//         >
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

// App.js
import React, { useState } from 'react';
import climberImage from './images/climb.jpg';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${climberImage})` }}>
      {/* Navbar */}
      <header className="bg-white bg-opacity-80 py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold uppercase tracking-wider">Allan Johnson</h1>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
          <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
          <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium">Services</a>
          <a href="#blog" className="text-gray-700 hover:text-gray-900 font-medium">Blog</a>
          <a href="#guides" className="text-gray-700 hover:text-gray-900 font-medium">Guides</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            width: "30px",
            height: "30px",
            padding: "0",
            overflow: "hidden",
          }}
        >
          <img
            src={require("./images/icons8-button-50.png")}
            alt="Button Icon"
            style={{
             
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="absolute top-16 left-0 w-full bg-white shadow-md z-10 md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium">Services</a>
              </li>
              <li>
                <a href="#blog" className="text-gray-700 hover:text-gray-900 font-medium">Blog</a>
              </li>
              <li>
                <a href="#guides" className="text-gray-700 hover:text-gray-900 font-medium">Guides</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center text-center text-white h-full bg-black bg-opacity-50 px-4">
        <p className="text-sm md:text-lg uppercase tracking-wider">Ambition is the first step towards</p>
        <h2 className="text-4xl md:text-6xl font-bold mt-2">Success</h2>
        <p className="mt-4 text-sm md:text-lg">Now Available for Online Coaching</p>
        <button
          className="mt-6 px-6 py-3 bg-black bg-opacity-70 text-white text-sm md:text-base uppercase tracking-wider font-semibold rounded-md hover:bg-opacity-90"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default App;
