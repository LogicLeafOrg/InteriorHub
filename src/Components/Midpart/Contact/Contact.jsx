import React from 'react'
import Contact_Form from '../Home/Contact_Form'


export default function Contact() {
  return (
    <>
      <section id='contact-banner' >
        <div className="contact-banner-wrapper">
          <div className="contact-text-parent">
            <div>
              <h2>Contact Us</h2>
              <p>Transforming spaces into timeless reflections of style, comfort, and individuality.</p>

            </div>

          </div>
        </div>

      </section>
      <section id='contact-forms' >
        <div className="contact-forms-wrapper container">
          <h3 className="sec-head" >Our <span>Gallery</span></h3>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="con-form-wrapper">
                <h5>Get In Touch</h5>
                <p>Our team will contact you within 24 hours</p>
                <Contact_Form />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="address-img-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7365.310048421512!2d88.418588!3d22.629354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f004337a5ed%3A0x68d48e9757449344!2sEmami%20City%20D2%20%2C%20jessore%20road%20%2C%20golpark%20%2Cdumdum!5e0!3m2!1sen!2sin!4v1762358959822!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

      </section>
      <section id='contact-detail' >
        <div className=" container contact-detail-wrapper">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="detail-card">
                <div className='detail-icon' >
                  <i className="fas fa-building"></i>
                  <span>Our Offices</span>
                </div>
                <p>Located across the country, ready to assist in planning & booking your perfect vacation.</p>
                <a href="">Locate Us</a>
              </div>

            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="detail-card">
                <div className='detail-icon' >
                  <i className="fas fa-building"></i>
                  <span>Call Support</span>
                </div>
                <p>Located across the country, ready to assist in planning & booking your perfect vacation.</p>
                <a href="">Locate Us</a>
              </div>

            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="detail-card">
                <div className='detail-icon' >
                  <i className="fas fa-building"></i>
                  <span>Write To Us</span>
                </div>
                <p>Located across the country, ready to assist in planning & booking your perfect vacation.</p>
                <a href="">Locate Us</a>
              </div>

            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="detail-card">
                <div className='detail-icon' >
                  <i className="fas fa-building"></i>
                  <span>Connect With Us
                  </span>
                </div>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>

                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="mailto:info@example.com">
                    <i className="fa-solid fa-envelope"></i>
                  </a>


                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>

  )
}
