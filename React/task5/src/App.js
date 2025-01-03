import { useState } from "react";
import "./App.css";

// import Home, { value } from './components/Home';

// import "bootstrap/dist/css/bootstrap.min.css";

// import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import { createContext } from "react";
// import About from "./Components/About";
// import Header from "./Components/Header";
// import Contact from "./Components/Contact";
// import Productdetail from "./Components/Productdetail";
// import Products from "./Components/Products";
 import Home from "./Components/Home";


// export const sidebarContext = createContext();

function App() {
//   const [hs, setHs] = useState(0);

  return (
//     <div className="App bg-zinc-300  h-[100vh] overflow-auto">
//       <sidebarContext.Provider value={{ hs, setHs }}>
//         <Header />
//         <Router>
//           <Routes>
//             <Route path="/" element={<Home />} />
<Home/>
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact/>} />
//             <Route path="/products" element={<Products/>} />
//             <Route path="/pd/:id" element={<Productdetail/>} />
//           </Routes>
//         </Router>
//       </sidebarContext.Provider>

//       {/* <Footer/> */}
//     </div>
  );
}

export default App;
