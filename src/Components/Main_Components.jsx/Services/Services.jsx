import React from 'react'
import servicebg from "../../../assets/Services/servicebg.jpg"
import our from "../../../assets/Services/ourfeilds.jpg"

export default function Services() {
  return (
    <>
      <section className='banner-sec' >
        <div
          className="banner-wrapper"

        >

          {/* Background Image */}
          <img
            className='img-fluid banner-img w-100'
            src={servicebg}
            alt="A master designer's hand from Interior Designer Mumbai sketching a precise architectural blueprint"

          />

          <div className="banner-text-wrapper">
            <div className='row m-0'>
              <div
                className="  col-md-8 offset-md-1"
                data-aos="fade-up"
                data-aos-duration="1600"
                data-aos-delay="300"
              >

                <h1
                  className='banner-heading'
                  data-aos="fade"
                  data-aos-duration="1500"
                  data-aos-delay="500"
                >
                  Space Planning & Layout Optimization
                </h1>

                <p
                  className='banner-sub-heading'
                  data-aos="fade"
                  data-aos-duration="1600"
                  data-aos-delay="700"
                >
                  Smart planning transforms spaces. We optimize layouts to improve functionality while maintaining aesthetic harmony.
                </p>

              </div>
            </div>
          </div>

        </div>

      </section>
      <section id='our-feilds' >
        <div className="our-feilds-wrapper container">
          <div className="row">
            <div className="col-md-6 col-lg-5 offset-lg-1">
              <div className="our-feilds-text-parent h-100 d-flex align-items-center ">
               
                <div className='sec-title-parent'>
                  <h2
                    className='section-title'
                    data-aos="fade"
                    data-aos-duration="1400"
                    data-aos-delay="200"
                  >
                    A Mastery of Form, Function, and Experience.
                  </h2>
                  <p className='my-4' >Our expertise is not a list of services; it is a profound
                    understanding of space and its power to shape human experience. We
                    undertake commissions of significance, sculpting environments that endure.</p>
                </div>

              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="our-feilds-img-parent">
                <img className='img-fluid' src={our} alt="" />
              </div>
            </div>
          </div>
        </div>

      </section>
    </>


  )
}
