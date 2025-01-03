import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route ,useLocation  } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Notifications from "./Pages/Notifications";
import Users from "./Pages/Users";
import "./App.css";
import Productdetail from "./Pages/Productdetail";
import { useState } from "react";

function App() {
  const [hs, setHs] = useState(0);
  return (
    <>
      <div className="h-[100vh] overflow-auto ">
        <Router>
          <Sidebar hs={hs} setHs={setHs}/>
          {/* inside router ullil vannath link property riuter dom propeerty ahn */}
          {/* <div className="w-[84%] bg-gray-100 p-4 "> */}
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/products" element={<Users hs={hs} setHs={setHs}/>} />
            <Route path="/pd/:id/:name" element={<Productdetail  />} />
          </Routes>
          {/* </div> */}
        </Router>
      </div>
    </>
  );
}

export default App;
