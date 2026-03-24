import React from 'react'
import aboutimg from "../../../assets/contact.jpg"
import ContactForm from "../Contact/ContactForm"
export default function Contact() {
  return (
    <>
      <section id='contactus' >
        <div className="contactus-wrap container">
          <div className="row">
            <div className="col-md-5 col-md-offset-1">
              <div className="contactus-content-wrap">
                <div className='sec-title-parent'>
                  <h2
                    className='section-title'
                    data-aos="fade"
                    data-aos-duration="1400"
                    data-aos-delay="200"
                  >
                    Contact the Atelier
                  </h2>
                  <p className='my-4 contactus-dis' >Our atelier reviews all inquiries with the utmost discretion.
                    Please provide the initial details of your project, and our team will be
                    in touch to schedule a private consultation.</p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="contactus-img-wrapper">
                <img src={aboutimg} alt="An evocative, symbolic image implying a formal invitation
from a
master atelier." />
              </div>

            </div>

          </div>

        </div>

      </section>
      <section>
        <ContactForm />
      </section>
    </>
  )
}








