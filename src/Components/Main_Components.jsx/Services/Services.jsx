import React from 'react'
import servicebg from "../../../assets/Services/servicebg.jpg"
import our from "../../../assets/Services/serove.jpg"
import legecy from "../../../assets/Services/legacy.jpg"

export default function Services() {
  const cards = [
    {
      id: 1,
      title: "High-End Residential Interior Design",
      description:
        "Custom-tailored residential interiors blending comfort, elegance, and functionality to create timeless living spaces.",
      image: "/images/residential.jpg",
    },
    {
      id: 2,
      title: "Luxury Commercial & Hospitality Design",
      description:


        "Premium commercial and hospitality environments designed to deliver memorable experiences with refined aesthetics.",
      image: "/images/commercial.jpg",
    },
    {
      id: 3,
      title: "Bespoke Furniture & Architectural Millwork",
      description:
        "Handcrafted furniture and detailed millwork solutions built to complement architectural character and luxury interiors.",
      image: "/images/furniture.jpg",
    },
  ];
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
      <section id='service-ove' >
        <div className="service-ove-wrapper container">
          <div className="row">
            <div className="col-md-6 col-lg-5 offset-lg-1">
              <div className="service-ove-text-parent h-100 d-flex align-items-center ">

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
              <div className="service-ove-img-parent">
                <img className='img-fluid' src={our} alt="our service image" />
              </div>
            </div>
          </div>
        </div>

      </section>
      <section id='ourfeilds' >
        <div className="container ourfeilds-wrapper">
          <div className='sec-title-parent mb-4'>
            <h2
              className='section-title'
              data-aos="fade"
              data-aos-duration="1400"
              data-aos-delay="200"
            >
              Our Fields of Mastery
            </h2>

          </div>
          <div className="ourfeilds-card-parent">
            <div className="row">
              {
                cards.map((ele) => {
                  return <div className="col-lg-4">
                    <div className="ourfeilds-card">
                      <div className="oufeilds-card-imgwrap">
                        <img src={our} alt="A large, dark smoked-oak table sits on a veined
black marble floor." />
                      </div>
                      <div className="ourfeilds-text-parent ">
                        <h4>{ele.title}</h4>
                        <p>{ele.description}</p>

                      </div>
                    </div>
                  </div>
                })
              }
            </div>
          </div>

        </div>

      </section>
      <section id='our-legacy' >
        <div className="our-legacy-wrap container">
          <div className="our-legacy-head">
            <div className='sec-title-parent text-center '>
              <h2
                className='section-title'
                data-aos="fade"
                data-aos-duration="1400"
                data-aos-delay="200"
              >
                Commission Our Legacy
              </h2>

            </div>

          </div>
          <div className='lagacy-img-wrap' >


          </div>


        </div>

      </section>
    </>


  )
}
