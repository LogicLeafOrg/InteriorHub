import React from "react";

const Footer = () => {
  return (
    <footer className="simple-footer text-center text-white p-4">
      <div className="container">

        <p className="mb-2 text-center">
          &copy; 2025 Your Company. All Rights Reserved.
        </p>

        <p className="footer-links mb-3 text-center">
          <a href="/" className="footer-link">Home</a> |
          <a href="/about" className="footer-link"> About</a> |
          <a href="/contact" className="footer-link"> Contact</a>
        </p>

        <p className="footer-disclaimer text-center">
          Disclaimer: The content on this website is for informational purposes only.
          All designs, visuals, and text are the property of their respective owners.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
