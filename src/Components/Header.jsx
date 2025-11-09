import React, { useEffect, useState } from 'react'
import logo from '../assets/interior-logo.png'
import { Link } from 'react-router-dom';


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav id='nav-sec' className={`navbar ${scrolled ? "scrolled" : ""}`} >
      <div className="nav-wrapper container ">
        <div className='nav-logo' >
          <img src={logo} alt="" />


        </div>
        <div className="nav-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className='service' >
              <a >Services <span className='bottom-icon' ><i className="fas  fa-chevron-right"></i></span> </a>
              <ul className='service-subpoint' >
                <li>
                  <Link to="/home_int">Home Interior</Link>
                </li>
                <li>
                  <Link to="/office_int">Office Interior</Link>
                </li>
                <li>
                  <Link to="/modular_kit">Modular Kitchen</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className='nav-contact' >
          <a href="">0000000000</a>
        </div>
      </div>
      <div className="nav-for-mobile-view">
        <div className="container mobile-view-wrapper">
          <div className='nav-logo' >
            <img src={logo} alt="" />


          </div>

          <div className='menuicon'  >


            <i className="fas fa-bars" onClick={() => setIsOpen(!isOpen)} ></i>
          </div>
          <div className={`mobileview-nav-content ${isOpen ? "slider1" : ""}`}>
            <div className="nav-list">
              <ul>
                <li onClick={() => setIsOpen(!isOpen)} >
                  <Link to="/">Home</Link>
                </li>
                <li onClick={() => setIsOpen(!isOpen)} >
                  <Link to="/about">About</Link>
                </li>
                <li  className='service' >
                  <a >Services <span className='bottom-icon' ><i className="fas  fa-chevron-right"></i></span> </a>
                  <ul className='service-subpoint' >
                    <li onClick={() => setIsOpen(!isOpen)} >
                      <Link to="/home_int">Home Interior</Link>
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)} >
                      <Link to="/office_int">Office Interior</Link>
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)} >
                      <Link to="/modular_kit">Modular Kitchen</Link>
                    </li>
                  </ul>
                </li>
                <li onClick={() => setIsOpen(!isOpen)}>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li onClick={() => setIsOpen(!isOpen)}>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li onClick={() => setIsOpen(!isOpen)}>
                  <Link to="/contact">Contact</Link>
                </li>
                <div className='nav-contact' >
                  <a href="">0000000000</a>
                </div>
              </ul>


            </div>

          </div>
        </div>




      </div>



    </nav>

  )
}
