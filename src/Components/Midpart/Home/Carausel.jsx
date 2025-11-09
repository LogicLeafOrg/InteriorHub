import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // screens smaller than 1024px
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // screens smaller than 768px (mobile)
                settings: {
                    slidesToShow: 1,
                },
            },

        ],
    };

    return (
        <div className="carousel-container" style={{ width: "80%", margin: "auto" }}>
            <Slider {...settings}>
                <div className="thoughts-card-parent" >
                    <div className="thoughts-card-wrap">
                        <img className="thoughts-img thoughts-img-filter" src="src/assets/quote.svg" alt="" />
                        <p  >Working with InteriorHubs was an absolute pleasure. They listened to my preferences,
                            respected my budget, and transformed my home into a place I never want to leave. The
                            space optimization was brilliant!</p>
                        <div className="customer-name-sec" >
                            <img className="thoughts-img" src="src/assets/no-user.svg" alt="" />
                            <div>
                                <p><b>komal sharma</b></p>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="thoughts-card-parent" >
                    <div className="thoughts-card-wrap">
                        <img className="thoughts-img thoughts-img-filter" src="src/assets/quote.svg" alt="" />
                        <p  >Working with InteriorHubs was an absolute pleasure. They listened to my preferences,
                            respected my budget, and transformed my home into a place I never want to leave. The
                            space optimization was brilliant!</p>
                        <div className="customer-name-sec" >
                            <img className="thoughts-img" src="src/assets/no-user.svg" alt="" />
                            <div>
                                <p><b>komal sharma</b></p>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="thoughts-card-parent" >
                    <div className="thoughts-card-wrap">
                        <img className="thoughts-img thoughts-img-filter" src="src/assets/quote.svg" alt="" />
                        <p  >Working with InteriorHubs was an absolute pleasure. They listened to my preferences,
                            respected my budget, and transformed my home into a place I never want to leave. The
                            space optimization was brilliant!</p>
                        <div className="customer-name-sec" >
                            <img className="thoughts-img" src="src/assets/no-user.svg" alt="" />
                            <div>
                                <p><b>komal sharma</b></p>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="thoughts-card-parent" >
                    <div className="thoughts-card-wrap">
                        <img className="thoughts-img thoughts-img-filter" src="src/assets/quote.svg" alt="" />
                        <p  >Working with InteriorHubs was an absolute pleasure. They listened to my preferences,
                            respected my budget, and transformed my home into a place I never want to leave. The
                            space optimization was brilliant!</p>
                        <div className="customer-name-sec" >
                            <img className="thoughts-img" src="src/assets/no-user.svg" alt="" />
                            <div>
                                <p><b>komal sharma</b></p>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="thoughts-card-parent" >
                    <div className="thoughts-card-wrap">
                        <img className="thoughts-img thoughts-img-filter" src="src/assets/quote.svg" alt="" />
                        <p  >Working with InteriorHubs was an absolute pleasure. They listened to my preferences,
                            respected my budget, and transformed my home into a place I never want to leave. The
                            space optimization was brilliant!</p>
                        <div className="customer-name-sec" >
                            <img className="thoughts-img" src="src/assets/no-user.svg" alt="" />
                            <div>
                                <p><b>komal sharma</b></p>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="thoughts-card-parent" >
                    <div className="thoughts-card-wrap">
                        <img className="thoughts-img thoughts-img-filter" src="src/assets/quote.svg" alt="" />
                        <p  >Working with InteriorHubs was an absolute pleasure. They listened to my preferences,
                            respected my budget, and transformed my home into a place I never want to leave. The
                            space optimization was brilliant!</p>
                        <div className="customer-name-sec" >
                            <img className="thoughts-img" src="src/assets/no-user.svg" alt="" />
                            <div>
                                <p><b>komal sharma</b></p>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Slider>
        </div>
    );
}
