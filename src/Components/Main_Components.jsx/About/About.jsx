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
        <div className="banner-wrapper">

          <img className='img-fluid banner-img w-100' src={image} alt=" A master designer's hand from Interior Designer Mumbai
   sketching a
   precise architectural blueprint, symbolizing the art and precision of our
   design firm" />
          <div className="banner-text-wrapper ">
            <div className='row m-0' >
              <div className="offset-xl-1 col-xl-6 col-md-10 offset-md-1">
                <h1 className='banner-heading' >  We
                  Don't Just Build Rooms. We Build Legacies.


                </h1>
                <p className='banner-sub-heading' > Interior Designer Mumbai is not a company. It is an atelier a
                  multi-generational collective of master artisans, architects, and
                  designers, dedicated to the singular art of creating timeless spaces</p>

              </div>


            </div>


          </div>
        </div>

      </section>
      <section id='about-content' >
        <div className="about-content-wrapper container">
          <div className='sec-title-parent' >
            <h2 className='section-title ' >
              Our Philosophy & Founder: A Journey In Co-Creation
            </h2>

          </div>
          <div className="row">
            <div className="col-xl-3 col-sm-6">
              <div className="about-img-wrapper ">
                <img className='img-fluid' src={man} alt="" />
              </div>

            </div>
            <div className="col-xl-6 col-sm-6">
              <div className="about-midtext-wrapper">
                <div>
                  <h3 className='about-midtext-head' > Our Guiding Philosophy: The Purity of a Single, Perfect Detail
                  </h3>
                  <h4 className='about-mid-subtext' >  Founded
                    in 1975, Interior Designer Mumbai was born from a philosophy that
                    rejects the transient nature of trends. Our founder believed that true
                    luxury is an intellectual and sensory experience, found in the perfect
                    alignment of a marble vein, the weight of a custom-forged door handle, or
                    the profound silence of a well-proportioned room. This ethos guides every
                    sketch and every decision we make today. We are the custodians of this
                    legacy.
                  </h4>
                </div>

              </div>

            </div>
            <div className="col-xl-3 col-sm-12 d-xl-block  d-sm-none">
              <div className="about-img-wrapper ">
                <img className='img-fluid' src={man2} alt="" />
              </div>

            </div>
          </div>
        </div>


      </section>
      <section id='atelier-Process' >
        <div className="atelier-Process-wrapper container">
          <div className='sec-title-parent' >
            <h2 className='section-title ' >
              The Atelier Process: A Journey in Co-Creation.
            </h2>


          </div>
          <div className="row">
            <div className="col-xl-4 ">
              <div className="at-process-card">
                <div className='process-card-img-parent' >
                  <img src={chatting} alt="" />

                </div>
                <div className="process-card-text">
                  <h5>
                    The Dialogue (Discovery & Vision)
                  </h5>
                  <p> We begin with conversation. We seek to
                    understand the "why" behind your vision, your aspirations, your
                    daily rituals, and the legacy you wish to build. </p>


                </div>


              </div>
            </div>
            <div className="col-xl-4 ">
              <div className="at-process-card">
                <div className='process-card-img-parent' >
                  <img src={blueprint} alt="" />

                </div>
                <div className="process-card-text">
                  <h5>
                    The Blueprint (Concept & Materiality)
                  </h5>
                  <p>  Our atelier develops a comprehensive
                    concept, presented through tactile mood boards dark marble, brushed gold,
                    smoked oak, rich velvets and architectural visualizations. This is where
                    the vision gains its form.
                  </p>


                </div>


              </div>
            </div>
            <div className="col-xl-4 ">
              <div className="at-process-card">
                <div className='process-card-img-parent' >
                  <img src={mastery} alt="" />

                </div>
                <div className="process-card-text">
                  <h5>
                    The Mastery (Execution & Precision)
                  </h5>
                  <p>Our team of master artisans and project
                    managers takes full command. We orchestrate every detail with obsessive
                    precision, ensuring a flawless execution that is delivered on time and
                    beyond expectation. Your presence is only required for the final,
                    breathtaking reveal.  </p>


                </div>


              </div>
            </div>




          </div>
        </div>

      </section>
      <section id='about-begin-legacy' >
        <div className="about-legacy-wrapper container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="about-legacy-text-wrapper">
                <div className='sec-title-parent' >
                  <h2 className='section-title ' >
                    Commendations from Our Patrons.
                  </h2>
                  <p className='section-subtitle' style={{fontSize:"18px"}} > Our
                    reputation is built on discretion and a legacy of results. We are
                    privileged to share the words of clients who have entrusted us with their
                    vision.

                  </p>


                </div>
                <div className='enquire-btn-wrapper' >
                  <button className='enquire-btn' >
                    Enquire Now
                  </button>

                </div>

              </div>
            </div>
            <div className="col-md-6 m-0 p-0">
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
