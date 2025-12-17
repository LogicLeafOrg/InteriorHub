
import "./App.css";
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Outlet_Com from "./Components/Outlet_Com";
import Home from "./Components/Main_Components.jsx/Home";
import About from "./Components/Main_Components.jsx/About/About";
import Portfolio from "./Components/Main_Components.jsx/Portfolio/Portfolio";
import Services from "./Components/Main_Components.jsx/Services/Services";
import Contact from "./Components/Main_Components.jsx/Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";





function App() {
 useEffect(() => {
  AOS.init({
    once: true,                 // animate only once
    offset: 120,                // trigger when section is near view
    duration: 1200,
    easing: "ease-out-cubic",
    anchorPlacement: "top-bottom", // trigger when top hits bottom of screen
  });
}, []);

    return (
      <>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Outlet_Com />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="services" element={<Services />} />
              <Route path="portfolio" element={<Portfolio />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>


    )
  }

export default App
