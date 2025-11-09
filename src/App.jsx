import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Layout from './Components/Layout';

import About from './Components/Midpart/About/About';
import Blogs from './Components/Midpart/Blogs/Blogs';
import Contact from './Components/Midpart/Contact/Contact';
import Gallery from './Components/Midpart/Gallery/Gallery';
import Home_Interior from './Components/Midpart/Home_Int/Home_Interior';
import Home from './Components/Midpart/Home/Home';
import Modular_kitchen from './Components/Midpart/Modular_kit/Modular_Kitchen';
import Office_Interior from './Components/Midpart/Office_Int/Office_Interior';




function App() {



  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />} >

        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home_int" element={<Home_Interior />} />
        <Route path="/modular_kit" element={<Modular_kitchen />} />
        <Route path="/office_int" element={<Office_Interior />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
      

    </>
  )
}

export default App
