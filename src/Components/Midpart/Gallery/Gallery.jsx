import React from 'react'
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
export default function Gallery() {
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
    <>
      <section id='gallery-banner' >
        <div className="gallery-banner-wrapper">
          <div className="gallery-text-parent">
            <div>
              <h2>Gallery</h2>
              <p>Transforming spaces into timeless reflections of style, comfort, and individuality.</p>

            </div>

          </div>
        </div>

      </section>
      <section id='our-collection' >
        <div className="collection-wrapper container">
          <h3 className="sec-head" >Our <span>Gallery</span></h3>
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
        </div>
      </section>
      
    </>
  )
}
