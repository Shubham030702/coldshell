import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <img src="/logo-1-2048x622.png.webp" alt="Logo" className="footer-logo" />
        </div>

        <div className="footer-middle">
    
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.75443581308!2d77.93473292427196!3d30.325402625509135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1759570448285!5m2!1sen!2sin" 
            width="400"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="location"
          ></iframe>
        </div>

        <div className="footer-right">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ColdShell. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
