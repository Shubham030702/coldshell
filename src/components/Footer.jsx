import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
      <div className="footer-middle">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.75443581308!2d77.93473292427196!3d30.325402625509135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1759570448285!5m2!1sen!2sin" 
          height={400}
          width={600}
          allowFullScreen=""
          loading="lazy"
          title="location"
        ></iframe>
      </div>
      <div className="footer-right">
          <h4>Quick Links</h4>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Products</Link></li>
          <li><Link to="/">Brands</Link></li>
          <li><Link to="/">Offer & Deals</Link></li>
          <li><Link to="/">Choose Your Industry</Link></li>
          <li><Link to="/">Clientele</Link></li>
          <li><Link to="/">About Us</Link></li>
          <li><Link to="/">Career</Link></li>
          <li><Link to="/">Track Your Order</Link></li>
          <li><Link to="/">Support</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <img src="/logo-1-2048x622.png.webp" alt="Logo" className="footer-logo" />
        </div>
        
        &copy; {new Date().getFullYear()} ColdShell. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
