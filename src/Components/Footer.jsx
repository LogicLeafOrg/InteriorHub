import React from 'react'

export default function Footer() {
  return (
    <footer id='footersec' >
      <div className="footer-wrapper container">
        <div className="row">
          <div className="col-md-12 col-lg-4 bg-dark">
            <div className="footer-p1-wrap">
              <div className="footer-img-wrap">
                <img src="src/assets/interior-logo.png" alt="" />
              </div>
              <p>Interior Design isn’t just about making project decorative, it’s about making them feel like your own home or your own comfortable space,</p>
              <div className="social-links-parent">
                <a href="">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>

          </div>
          <div className="col-md-12 col-lg-8 ">
            <div className="row">
              <div className="col-md-6  col-6 col-lg-4 bg-dark">
                <div className="useful-link-wrapper">
                  <h6>Useful Links</h6>
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Gallery</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="col-md-6  col-6 col-lg-4 bg-dark">
                <div className="useful-link-wrapper">
                  <h6>Services</h6>
                  <ul>
                    <li>
                      <a href="">Home Interior</a>
                    </li>
                    <li>
                      <a href="">Office Interior</a>
                    </li>
                    <li>
                      <a href="">Modular Kitchen</a>
                    </li>


                  </ul>
                </div>
              </div>
              <div className="col-md-6  col-6 col-lg-4 bg-dark">
                <div className="useful-link-wrapper">
                  <h6>Our Address</h6>
                  <p>561 jessore road near emami city Kolkata -700028</p>
                  <a href="">+9100000000000</a>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <p>© Copyright 2024 All Rights Resurved | Designed by Turain Software</p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
