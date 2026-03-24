import React from 'react'
import servicebg from "../../../assets/Services/servicebg.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from "../../../assets/Portfolio/6.jpg"
import img2 from "../../../assets/Portfolio/7.jpg"
import img3 from "../../../assets/Portfolio/8.jpg"
import img4 from "../../../assets/Portfolio/16.jpg"
import img5 from "../../../assets/Portfolio/18.jpg"
import img6 from "../../../assets/Portfolio/39.jpg"
// Import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Portfolio() {
  // Sample Data
  const galleryItems = [
    { id: 1, title: 'Actual Image', tag: '', url: img1 },
    { id: 2, title: 'Actual Image', tag: '', url: img2 },
    { id: 3, title: 'Actual Image', tag: '', url: img3 },
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
                  Our Portfolio: A Gallery Of Masterpices
                </h1>

                <p
                  className='banner-sub-heading'
                  data-aos="fade"
                  data-aos-duration="1600"
                  data-aos-delay="700"
                >
                  Step into a world where vision takes form, and design transcends
                  the ordinary. Each project in our collection is a testament to bespoke
                  luxury and timeless artistry.
                </p>

              </div>
            </div>
          </div>

        </div>

      </section>
      <section id='domain-sec' >
        <div className="domain-sec-wrap container">
          <div className='sec-title-parent text-left '>
            <h2
              className='section-title'
              data-aos="fade"
              data-aos-duration="1400"
              data-aos-delay="200"
            >
              Explore Our Domain
            </h2>
            <p
              className='section-subtitle'
              data-aos="fade"
              data-aos-duration="1600"
              data-aos-delay="700"
            >
              Our
              diverse body of work spans various scales and ambitions, each executed
              with the same unwavering commitment to perfection.
            </p>

          </div>
          <div className="gallery-container">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              speed={1500}   // ✅ added smooth transition speed

              coverflowEffect={{
                rotate: 25,     // 🔽 reduced from 35
                stretch: 0,
                depth: 120,     // 🔽 reduced from 160
                modifier: 1.5,  // 🔽 reduced from 3 (very important)
                slideShadows: false, // 🔽 smoother without heavy shadows
              }}

              autoplay={{
                delay: 3000,   // slightly balanced timing
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}

              pagination={{ clickable: true }}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              {galleryItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="slide-content">
                    <img src={item.url} alt={item.title} />
                    <div className="slide-overlay">
                      <span>{item.tag}</span>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </section>
      <section id='legacy-sec' >
        <div className="legacy-sec-wrap container">
          <div className='sec-title-parent text-left '>
            <h2
              className='section-title'
              data-aos="fade"
              data-aos-duration="1400"
              data-aos-delay="200"
            >
              Commission Your Legacy
            </h2>
           

          </div>
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

        </div>

      </section>


    </>
  )
}
