import React from 'react'
import logo from "../assets/logo/logo.png"
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header id='header' >
            <div className="header-wrapper container">
                <div className="for-web-view-nav">
                    <div className='left-side-nav' >
                        <div className="logo-wrapper">
                            <img src={logo} alt="" />
                            <span className='logotext' >Interior Designer Mumbai</span>
                        </div>
                    </div>
                    <div className="right-side-nav">
                        <nav className='custom-navbar' >
                            <ul>
                                <li>
                                    <Link className='custom-nav-link' to="">HOME</Link>
                                </li>
                                <li>
                                    <Link className='custom-nav-link' to="/services">Services</Link>
                                </li>
                                <li>
                                    <Link className='custom-nav-link' to="/about">About</Link>
                                </li>
                                <li>
                                    <Link className='custom-nav-link' to="/portfolio">PORTFOLIO</Link>
                                </li>
                                <li>
                                    <Link className='custom-nav-link' to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="for-mobile-view-nav">
                    <div className='left-side-nav' >
                        <div className="logo-wrapper">
                            <img src={logo} alt="" />
                            <span className='logotext' >Interior Designer Mumbai</span>
                        </div>
                    </div>
                    <div className="mobile-nav">
                        <div className="mobile-nav d-md-none">

                            <button
                                className="btn btn-white  shadow-sm"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#mnav"
                            >
                                ☰
                            </button>

                            <div className="offcanvas offcanvas-start" id="mnav">
                                <div className="offcanvas-header">
                                    <h5>Menu</h5>
                                    <button className="btn-close my-close" data-bs-dismiss="offcanvas"></button>
                                </div>

                                <div className="offcanvas-body  text-center" >
                                    <div data-bs-dismiss="offcanvas">
                                        <Link className="nav-link mb-3" to="">Home</Link>

                                    </div>
                                    <div data-bs-dismiss="offcanvas">
                                        <Link className="nav-link mb-3" to="/about">About</Link>

                                    </div>
                                    <div data-bs-dismiss="offcanvas">
                                        <Link className="nav-link mb-3" to="/services">Services</Link>


                                    </div>
                                    <div data-bs-dismiss="offcanvas">
                                        <Link className="nav-link" to="/portfolio">Portfolio</Link>

                                    </div>
                                    <div data-bs-dismiss="offcanvas">
                                        <Link className="nav-link" to="/contact">Contact</Link>

                                    </div>





                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </header>
    )
}
