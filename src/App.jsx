
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Outlet_Com from "./Components/Outlet_Com";
import Home from "./Components/Main_Components.jsx/Home";
import About from "./Components/Main_Components.jsx/About/About";
import Portfolio from "./Components/Main_Components.jsx/Portfolio/Portfolio";
import Services from "./Components/Main_Components.jsx/Services/Services";
import Contact from "./Components/Main_Components.jsx/Contact/Contact";





function App() {
 

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
