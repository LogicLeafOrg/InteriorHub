import React from 'react'
import image from "../../../assets/About/aboutbanner.jpg"
import man from "../../../assets/About/man.jpg"
import man2 from "../../../assets/About/man2.jpg"
import blueprint from "../../../assets/About/icons/blueprint.png"
import chatting from "../../../assets/About/icons/chatting.png"
import mastery from "../../../assets/About/icons/mastery.png"
import legacyimg from "../../../assets/About/2.jpg"

export default function About() {
  return (
    <>
      <section className='banner-sec' >
        <div
          className="banner-wrapper"

        >

          {/* Background Image */}
          <img
            className='img-fluid banner-img w-100'
            src={image}
            alt="A master designer's hand from Interior Designer Mumbai sketching a precise architectural blueprint"

          />

          <div className="banner-text-wrapper">
            <div className='row m-0'>
              <div
                className="offset-xl-1 col-xl-6 col-md-10 offset-md-1"
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
                  We Don&apos;t Just Build Rooms. We Build Legacies.
                </h1>

                <p
                  className='banner-sub-heading'
                  data-aos="fade"
                  data-aos-duration="1600"
                  data-aos-delay="700"
                >
                  Interior Designer Mumbai is not a company. It is an atelier — a
                  multi-generational collective of master artisans, architects, and
                  designers, dedicated to the singular art of creating timeless spaces.
                </p>

              </div>
            </div>
          </div>

        </div>

      </section>
      <section
        id='about-content'

      >
        <div className="about-content-wrapper container">

          {/* Section Title */}
          <div className='sec-title-parent'>
            <h2
              className='section-title'
              data-aos="fade"
              data-aos-duration="1400"
              data-aos-delay="200"
            >
              Our Philosophy & Founder: A Journey In Co-Creation
            </h2>
          </div>

          <div className="row">

            {/* Left Image */}
            <div
              className="col-xl-3 col-sm-6"
              data-aos="fade"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div className="about-img-wrapper">
                <img className='img-fluid' src={man} alt="" />
              </div>
            </div>

            {/* Middle Text */}
            <div
              className="col-xl-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="400"
            >
              <div className="about-midtext-wrapper">
                <div>
                  <h3
                    className='about-midtext-head'
                    data-aos="fade"
                    data-aos-duration="1400"
                    data-aos-delay="500"
                  >
                    Our Guiding Philosophy: The Purity of a Single, Perfect Detail
                  </h3>

                  <h4
                    className='about-mid-subtext'
                    data-aos="fade"
                    data-aos-duration="1500"
                    data-aos-delay="650"
                  >
                    Founded in 1975, Interior Designer Mumbai was born from a philosophy that rejects the transient nature of trends. Our founder believed that true luxury is an intellectual and sensory experience, found in the perfect alignment of a marble vein, the weight of a custom-forged door handle, or the profound silence of a well-proportioned room. This ethos guides every sketch and every decision we make today. We are the custodians of this legacy.
                  </h4>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div
              className="col-xl-3 col-sm-12 d-xl-block d-sm-none"
              data-aos="fade"
              data-aos-duration="1600"
              data-aos-delay="550"
            >
              <div className="about-img-wrapper">
                <img className='img-fluid' src={man2} alt="" />
              </div>
            </div>

          </div>
        </div>
      </section>
      <section
        id='atelier-Process'

      >
        <div className="atelier-Process-wrapper container">

          {/* Section Title */}
          <div className='sec-title-parent'>
            <h2
              className='section-title'
              data-aos="fade"
              data-aos-duration="1400"
              data-aos-delay="200"
            >
              The Atelier Process: A Journey in Co-Creation.
            </h2>
          </div>

          <div className="row">

            {/* Card 1 */}
            <div
              className="col-xl-4"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div className="at-process-card">
                <div className='process-card-img-parent'>
                  <img src={chatting} alt="" />
                </div>
                <div className="process-card-text">
                  <h5>The Dialogue (Discovery & Vision)</h5>
                  <p>
                    We begin with conversation. We seek to understand the "why" behind
                    your vision, your aspirations, your daily rituals, and the legacy
                    you wish to build.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="col-xl-4"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="450"
            >
              <div className="at-process-card">
                <div className='process-card-img-parent'>
                  <img src={blueprint} alt="" />
                </div>
                <div className="process-card-text">
                  <h5>The Blueprint (Concept & Materiality)</h5>
                  <p>
                    Our atelier develops a comprehensive concept, presented through
                    tactile mood boards—dark marble, brushed gold, smoked oak, rich
                    velvets, and architectural visualizations.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="col-xl-4"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="600"
            >
              <div className="at-process-card">
                <div className='process-card-img-parent'>
                  <img src={mastery} alt="" />
                </div>
                <div className="process-card-text">
                  <h5>The Mastery (Execution & Precision)</h5>
                  <p>
                    Our team of master artisans and project managers takes full command,
                    orchestrating every detail with obsessive precision for a flawless
                    delivery.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section
        id='about-begin-legacy'
        
      >
        <div className="about-legacy-wrapper container-fluid">
          <div className="row">

            {/* Text Side */}
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <div className="about-legacy-text-wrapper">
                <div className='sec-title-parent'>
                  <h2
                    className='section-title'
                    data-aos="fade"
                    data-aos-duration="1400"
                    data-aos-delay="350"
                  >
                    Commendations from Our Patrons.
                  </h2>

                  <p
                    className='section-subtitle'
                    style={{ fontSize: "18px" }}
                    data-aos="fade"
                    data-aos-duration="1500"
                    data-aos-delay="500"
                  >
                    Our reputation is built on discretion and a legacy of results. We
                    are privileged to share the words of clients who have entrusted us
                    with their vision.
                  </p>
                </div>

                <div
                  className='enquire-btn-wrapper'
                  data-aos="fade"
                  data-aos-duration="1400"
                  data-aos-delay="650"
                >
                  <button className='enquire-btn'>
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div
              className="col-md-6 m-0 p-0"
              data-aos="fade"
              data-aos-duration="1800"
              data-aos-delay="300"
            >
              <div className="about-legacy-image-wrapper">
                <img src={legacyimg} alt="" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
