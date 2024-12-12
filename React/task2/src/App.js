
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Contact/>
    <Footer/>
    </>
    
  );
}

export default App;
