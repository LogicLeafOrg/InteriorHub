import React from 'react'
import image from "../../assets/Home/banner.jpg"
import overviewimg from "../../assets/Home/overviewsign.jpg"
import lagacyimage from "../../assets/Home/legacyright.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "@fancyapps/ui/dist/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const a = import.meta.glob("../../assets/Home/project1/*.jpg", { eager: true });
const b = Object.values(a).map(x => x.default);
const pro2 = import.meta.glob("../../assets/Home/project2/*.jpg", { eager: true });
const p2 = Object.values(pro2).map(x => x.default);
const pro3 = import.meta.glob("../../assets/Home/project3/*.jpg", { eager: true });
const p3 = Object.values(pro3).map(x => x.default);




export default function Home() {

    Fancybox.bind("[data-fancybox='project1']", {
        Thumbs: false,
        Toolbar: true,
        loop: true,
    });
    Fancybox.bind("[data-fancybox='project2']", {
        Thumbs: false,
        Toolbar: true,
        loop: true,
    });
    Fancybox.bind("[data-fancybox='project3']", {
        Thumbs: false,
        Toolbar: true,
        loop: true,
    });

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
                                <h1 className='banner-heading' > Where Legacy Meets Vision: Mumbai's Definitive Name in
                                    Luxury
                                    Interior Design.


                                </h1>
                                <p className='banner-sub-heading' > We do not simply design spaces. We sculpt environments, curating
                                    timeless sanctuaries that become an extension of your legacy.</p>

                            </div>


                        </div>


                    </div>
                </div>

            </section>
            <section id='overview' >
                <div className="overview-wrapper container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className='sec-title-parent' >
                                <h2 className='section-title' >
                                    Our Ethos
                                </h2>
                                <h3 className='section-title' >
                                    Design as an Art Form
                                </h3>
                                <p className='section-subtitle' >For
                                    decades, our studio, Interior Designer Mumbai, has operated on a
                                    single principle: perfection is not an option; it is the standard. We are
                                    artisans and architects, not just designers. Our work is a profound
                                    dialogue between form and function, light and shadow. We believe true
                                    luxury is not loud; it is felt in the weight of a custom-forged handle,
                                    the precise grain-matching of smoked oak, and the perfect, warm hue of
                                    cinematic light.
                                </p>
                            </div>

                        </div>
                        <div className="col-xl-3">
                            <div>
                                <h2 className='section-title' >
                                    A Legacy in
                                </h2>
                                <h3 className='section-title' >
                                    Form: Our Signature Works
                                </h3>
                                <p className='section-subtitle' >For
                                    decades, our studio, Interior Designer Mumbai, has operated on a
                                    single principle: perfection is not an option; it is the standard. We are
                                    artisans and architects, not just designers. Our work is a profound
                                    dialogue between form and function, light and shadow. We believe true
                                    luxury is not loud; it is felt in the weight of a custom-forged handle,
                                    the precise grain-matching of smoked oak, and the perfect, warm hue of
                                    cinematic light.
                                </p>
                            </div>


                        </div>
                        <div className="col-xl-3">
                            <div className="overview-img-wrapper mt-sm-2">
                                <img src={overviewimg} alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="overview-slider-card">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="overview-carausel-card-parent">
                                    <div className="my-swiper">
                                        <Swiper
                                            modules={[Navigation, Autoplay]}
                                            navigation
                                            spaceBetween={20}
                                            speed={1000}
                                            grabCursor={true}
                                            loop={true}
                                            autoplay={{
                                                delay: 4000,
                                                disableOnInteraction: false,
                                            }}
                                            breakpoints={{
                                                0: { slidesPerView: 1 },
                                                768: { slidesPerView: 1 },
                                                1024: { slidesPerView: 1 },
                                            }}

                                        >
                                            {

                                                b.map((x, i) => (
                                                    <SwiperSlide key={i}>
                                                        <a data-fancybox="project1" href={x}>
                                                            <img src={x} className="slide-img" />

                                                        </a>
                                                    </SwiperSlide>
                                                ))

                                            }

                                        </Swiper>
                                        <div className='card-swiper-text' >
                                            <p>The Opulent Residence, Bandra</p>
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="overview-carausel-card-parent">
                                    <div className="my-swiper">
                                        <Swiper
                                            modules={[Navigation, Autoplay]}
                                            navigation
                                            spaceBetween={20}
                                            speed={1000}
                                            grabCursor={true}
                                            loop={true}
                                            autoplay={{
                                                delay: 4000,
                                                disableOnInteraction: false,
                                            }}
                                            breakpoints={{
                                                0: { slidesPerView: 1 },
                                                768: { slidesPerView: 1 },
                                                1024: { slidesPerView: 1 },
                                            }}
                                        >
                                            {

                                                p2.map((x, i) => (
                                                    <SwiperSlide key={i}>
                                                        <a data-fancybox="project2" href={x}>
                                                            <img src={x} className="slide-img" />

                                                        </a>
                                                    </SwiperSlide>
                                                ))

                                            }
                                        </Swiper>
                                        <div className='card-swiper-text' >
                                            <p>The Corporate Atelier, BKC</p>
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="overview-carausel-card-parent">
                                    <div className="my-swiper">
                                        <Swiper
                                            modules={[Navigation, Autoplay]}
                                            navigation
                                            spaceBetween={20}
                                            speed={1000}
                                            grabCursor={true}
                                            loop={true}
                                            autoplay={{
                                                delay: 4000,
                                                disableOnInteraction: false,
                                            }}
                                            breakpoints={{
                                                0: { slidesPerView: 1 },
                                                768: { slidesPerView: 1 },
                                                1024: { slidesPerView: 1 },
                                            }}
                                        >
                                            {

                                                p3.map((x, i) => (
                                                    <SwiperSlide key={i}>
                                                        <a data-fancybox="project3" href={x}>
                                                            <img src={x} className="slide-img" />

                                                        </a>
                                                    </SwiperSlide>
                                                ))

                                            }
                                        </Swiper>
                                        <div className='card-swiper-text' >
                                            <p>The Skyline Sanctuary, Worli</p>
                                        </div>
                                    </div>



                                </div>
                            </div>



                        </div>

                    </div>
                </div>

            </section>
            <section id='legacy' >
                <div className="legacy-wrapper container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="legacy-text-wrapper d-flex align-items-center h-100">
                                <div className="row">
                                    <div className="col-xl-7 ">
                                        <div>
                                            <h2 className='section-title' >
                                                Commission Your Legacy
                                            </h2>

                                            <p className='section-subtitle' >For
                                                process is one of selective partnership. We invite you to begin the
                                                conversation with Interior Designer Mumbai. Let us explore how we can
                                                translate your singular vision into a timeless masterpiece.
                                            </p>
                                            <div className='enquire-btn-wrapper' >
                                                <button className='enquire-btn' >
                                                    Enquire Now
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="legacy-image-wrapper">
                                <img src={lagacyimage} alt="" />
                            </div>


                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
