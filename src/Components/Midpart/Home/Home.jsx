import React, { useState, useEffect, useRef } from "react";
import Gallery_cards from "./Gallery_cards";
import Carausel from "./Carausel";
import Contact_Form from "./Contact_Form";


export default function Home() {
    const [counts, setCounts] = useState({
        review: 0,
        experience: 0,
        clients: 0,
        staff: 0,
    });

    const counterRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {

        const target = { review: 900, experience: 14, clients: 1200, staff: 50 };
        const duration = 2000;
        const intervalTime = 50;

        const handleScroll = () => {
            if (!counterRef.current || hasAnimated) return;
            const top = counterRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (top < windowHeight - 100) {
                setHasAnimated(true);

                const increments = {
                    review: target.review / (duration / intervalTime),
                    experience: target.experience / (duration / intervalTime),
                    clients: target.clients / (duration / intervalTime),
                    staff: target.staff / (duration / intervalTime),
                };

                const interval = setInterval(() => {
                    setCounts((prev) => {
                        const newCounts = {
                            review: Math.min(prev.review + increments.review, target.review),
                            experience: Math.min(
                                prev.experience + increments.experience,
                                target.experience
                            ),
                            clients: Math.min(prev.clients + increments.clients, target.clients),
                            staff: Math.min(prev.staff + increments.staff, target.staff),
                        };
                        if (
                            newCounts.review === target.review &&
                            newCounts.experience === target.experience &&
                            newCounts.clients === target.clients &&
                            newCounts.staff === target.staff
                        ) {
                            clearInterval(interval);
                        }
                        return newCounts;
                    });
                }, intervalTime);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // trigger if already in view

        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasAnimated]);

    return (
        <>
            <section className="hero-section">
                <div className="video-background">
                    <iframe
                        src="https://www.youtube.com/embed/NoWyNgAQe34?autoplay=1&mute=1&loop=1&playlist=NoWyNgAQe34&controls=0&showinfo=0&modestbranding=1"

                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h1>
                        Best Interior Designer in Rajarhat Newtown, Kolkata Making Every
                        <span>Space Uniquely Yours.</span>
                    </h1>
                    <p>Experience outstanding quality & timely delivery with INTERIORHUBS</p>
                    <div className="nav-contact">
                        <a href="#">ENQUIRY NOW</a>
                    </div>
                </div>
            </section>

            <section id="about-us">
                <div className="aboutus-wrapper container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="src/assets/about-img-1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-text-wrapper">
                                <span className="about-text">About Us</span>
                                <div className="about-head-text">
                                    <h3>Transform Your Home with the</h3>
                                    <h3 className="colour-change">
                                        Best Interior Designers in Rajarhat Newtown, Kolkata
                                    </h3>
                                </div>
                                <p>
                                    At INTERIORHUBS, we come up with creative and functional
                                    concepts to transform and make spaces a personal masterpiece.
                                    Currently, based in Rajarhat Newtown, Kolkata, we specialize in
                                    interior design solutions that represent the best version of
                                    you-your unique style and vision. It could be an elegant home
                                    or a dynamic office, featuring inspirational, comfortable, and
                                    impressive environments. Beautifully and seamlessly,
                                    INTERIORHUBS truly is the perfect destination for your dream
                                    space, given quality attention to detail and a commitment to
                                    client satisfaction. So, don’t wait! Elevate your space by
                                    collaborating with one of our interior decorators in Rajarhat
                                    Newtown, Kolkata.
                                </p>
                                <div className="about-btn-parent">
                                    <div className="about-btn">
                                        <i className="fa-solid fa-city"></i>
                                        <p>Commercial Design</p>
                                    </div>
                                    <div className="about-btn">
                                        <i className="fa-solid fa-house"></i>
                                        <p>Residential Design</p>
                                    </div>
                                </div>
                                <div className="nav-contact">
                                    <a href="#">ENQUIRY NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-counter-sec" ref={counterRef}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-lg-3 col-6 col-sm-6">
                                    <div className="counter-wrapper">
                                        <div className="counter-text">
                                            <i className="fa-solid fa-comment-dots"></i>
                                            <span> Happy Client Review</span>
                                        </div>
                                        <div className="counter-num">
                                            <span>{Math.floor(counts.review).toLocaleString()}</span>
                                            <span>+</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-lg-3 col-6 col-sm-6">
                                    <div className="counter-wrapper">
                                        <div className="counter-text">
                                            <i className="fa-solid fa-briefcase"></i>
                                            <span> Years Of Experience</span>
                                        </div>
                                        <div className="counter-num">
                                            <span>{Math.floor(counts.experience).toLocaleString()}</span>
                                            <span>+</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-lg-3 col-6 col-sm-6">
                                    <div className="counter-wrapper">
                                        <div className="counter-text">
                                            <i className="fa-solid fa-face-smile"></i>
                                            <span> Our Happy Client</span>
                                        </div>
                                        <div className="counter-num">
                                            <span>{Math.floor(counts.clients).toLocaleString()}</span>
                                            <span>+</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-lg-3 col-6 col-sm-6">
                                    <div className="counter-wrapper">
                                        <div className="counter-text">
                                            <i className="fa-solid fa-users"></i>
                                            <span> Staff Members</span>
                                        </div>
                                        <div className="counter-num">
                                            <span>{Math.floor(counts.staff).toLocaleString()}</span>
                                            <span>+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="our-services" >
                <div className="container">
                    <h3 className="sec-head" >Our <span>Services</span></h3>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 ">
                            <div className="service-card-wrapper">
                                <div className="inner-content" >
                                    <a href="">
                                        <img className="service-img" src="src/assets/ser-1.webp" alt="" />
                                    </a>
                                    <div className="service-card-text" >
                                        <span>Home Interior</span>
                                    </div>


                                </div>
                                <div className="arrow-btn" >
                                    <a href="">

                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <div className="service-card-wrapper">
                                <div className="inner-content" >
                                    <a href="">
                                        <img className="service-img" src="src/assets/ser-1.webp" alt="" />
                                    </a>
                                    <div className="service-card-text" >
                                        <span>Office Interior</span>
                                    </div>


                                </div>
                                <div className="arrow-btn" >
                                    <a href="">

                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <div className="service-card-wrapper">
                                <div className="inner-content" >
                                    <a href="">
                                        <img className="service-img" src="src/assets/ser-1.webp" alt="" />
                                    </a>
                                    <div className="service-card-text" >
                                        <span>Modular Kitchen</span>
                                    </div>


                                </div>
                                <div className="arrow-btn" >
                                    <a href="">

                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>
            <section id="gallery" >
                <div className="container">
                    <h3 className="sec-head" >Our <span>Gallery</span></h3>
                    <Gallery_cards />
                    <div className="gallery-btn" >
                        <div className="nav-contact">
                            <a href="#">View More</a>
                        </div>
                    </div>


                </div>


            </section>
            <section id="how-it-works" >
                <div className="container">
                    <h3 className="sec-head" >How <span>It Works

                    </span></h3>
                    <div className="row">
                        <div className="offset-lg-1 col-lg-2 col-md-3">
                            <div className="work-card-wrapper">
                                <i className="fa-solid fa-user"></i>
                                <h4>Connect with a Designer</h4>

                            </div>

                        </div>
                        <div className=" col-lg-2 col-md-3">
                            <div className="work-card-wrapper">
                                <i className="fa-solid fa-calendar-check"></i>
                                <h4>Book your Project</h4>
                                <p>( Make Partial Payment )</p>

                            </div>

                        </div>
                        <div className=" col-lg-2 col-md-3">
                            <div className="work-card-wrapper">
                                <i className="fa-solid fa-gear"></i>
                                <h4>Sourcing Materials & Starting the Process</h4>
                                <p>( Make Partial Payment )</p>

                            </div>

                        </div>
                        <div className=" col-lg-2 col-md-3">
                            <div className="work-card-wrapper">
                                <i className="fa-solid fa-calendar-check"></i>
                                <h4>Final Installations</h4>
                                <p>( Make Partial Payment )</p>

                            </div>

                        </div>
                        <div className=" col-lg-2 col-md-3">
                            <div className="work-card-wrapper">
                                <i className="fa-solid fa-house"></i>
                                <h4>Move in and Enjoy</h4>
                                {/* <p>( Make Partial Payment )</p> */}

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            <section id="why-choose" >
                <div className=" why-choose-wrapper container">
                    <h3 className="sec-head" >Why <span>Choose Us

                    </span></h3>
                    <div className="row choose-content-wrap">
                        <div className="col-lg-6 col-lg-6">
                            <div className="why-choose-imgwrap">
                                <img className="img-fluid" src="src/assets/gal-27.webp" alt="" />
                            </div>

                        </div>
                        <div className="col-lg-6 ">
                            <div className="why-choose-text-wrapper">
                                <p>At <b>INTERIORHUBS</b>, we believe that great design transcends space and transforms experiences. Our talented team of interior designer in Rajarhat Newtown, Kolkata brings a mix of creativity, technical expertise, and dedication to each of their projects. Here's why we are different:</p>
                                <div className="why-choose-list-wrapper">
                                    <ul>
                                        <li>
                                            <b>Tailored to You:</b><span>We become one with you. It is all about your vision, and we work closely with you to develop an interior that perfectly mirrors your style, lifestyle, and personality.</span>
                                        </li>
                                        <li>
                                            <b>Innovative Solutions:</b><span>Each space is unique, just as we are. We take what's in vogue and what's cutting-edge to give you thoughtfully creative, functional designs where each inch is maximized for the perfect tiny living room or the expansive office.</span>
                                        </li>
                                        <li>
                                            <b>Attention to Detail:</b><span>Choice of color palette, material quality, and even pit tarp detailed perfection-the flawless finish, way beyond expectation.</span>
                                        </li>
                                        <li>
                                            <b>On-Time Execution:</b><span>Care for budget and time with no compromise on the quality of delivering the results in time.</span>
                                        </li>
                                        <li>
                                            <b>End-to-End Service:</b><span> Our team takes control at all stages, from design conceptualization to execution, and ensures a smooth experience from start to finish.</span>
                                        </li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id="clients-thoughts" >
                <div className="container clients-thoughts-wrapper">
                    <h3 className="sec-head" >Our <span>Clients Thoughts

                    </span></h3>
                    <div className="carausel-parent">
                        <Carausel />

                    </div>

                </div>

            </section>
            <section id="contactus" >
                <div className="contact-us-wrapper container">
                    <h3 className="sec-head" >Contact <span>Us

                    </span></h3>
                    <div className="row form-sec">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="con-form-wrapper">
                                <h5>Get In Touch</h5>
                                <p>Our team will contact you within 24 hours</p>
                                <Contact_Form/>
                            </div>
                        </div>
                        <div className=" col-lg-6 col-md-12 col-sm-12">
                            <div className="contact-img-wrapper">
                                <img src="src/assets/contact-img.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}
