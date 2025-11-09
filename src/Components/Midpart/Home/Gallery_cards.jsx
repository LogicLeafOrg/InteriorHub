import React from 'react'
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";

export default function Gallery_cards() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox='gallery']", {
            Thumbs: false,
            Toolbar: { display: ["close"] },
            animated: true,
            dragToClose: true,
        });
        return () => Fancybox.destroy();
    }, []);
    return (
        <div className="row">
            <div className="col-md-3 col-lg-3 col-6 col-sm-6">
                <div className="gallery-card-img-wrap">
                    <a href="src/assets/ser-1.webp" data-fancybox="gallery">
                        <img src="src/assets/ser-1.webp" alt="Service 1" />
                        <div className='search-icon' >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </a>

                </div>
            </div>

            <div className="col-md-3 col-lg-3 col-6 col-sm-6">
                <div className="gallery-card-img-wrap">
                    <a href="src/assets/ser-1.webp" data-fancybox="gallery">
                        <img src="src/assets/ser-1.webp" alt="Service 1" />
                        <div className='search-icon' >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-md-3 col-lg-3 col-6 col-sm-6">
                <div className="gallery-card-img-wrap">
                     <a href="src/assets/ser-1.webp" data-fancybox="gallery">
                        <img src="src/assets/ser-1.webp" alt="Service 1" />
                        <div className='search-icon' >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-md-3 col-lg-3 col-6 col-sm-6">
                <div className="gallery-card-img-wrap">
                     <a href="src/assets/ser-1.webp" data-fancybox="gallery">
                        <img src="src/assets/ser-1.webp" alt="Service 1" />
                        <div className='search-icon' >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-md-3 col-lg-3 col-6 col-sm-6">
                <div className="gallery-card-img-wrap">
                     <a href="src/assets/ser-1.webp" data-fancybox="gallery">
                        <img src="src/assets/ser-1.webp" alt="Service 1" />
                        <div className='search-icon' >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-md-3 col-lg-3 col-6 col-sm-6">
                <div className="gallery-card-img-wrap">
                    <a href="src/assets/ser-1.webp" data-fancybox="gallery">
                        <img src="src/assets/ser-1.webp" alt="Service 1" />
                        <div className='search-icon' >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-md-3 col-lg-3 col-6 col-sm-6">
                <div className="gallery-card-img-wrap">
                    <a href="src/assets/ser-1.webp" data-fancybox="gallery">
                        <img src="src/assets/ser-1.webp" alt="Service 1" />
                        <div className='search-icon' >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-md-3 col-lg-3 col-6 col-sm-6">
                <div className="gallery-card-img-wrap">
                     <a href="src/assets/ser-1.webp" data-fancybox="gallery">
                        <img src="src/assets/ser-1.webp" alt="Service 1" />
                        <div className='search-icon' >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
