import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <>
        <div className="top-bar">
        For services and product related queries contact us on <a href="tel:+919818885799">+91-9818885799</a>
        </div>
        <div className="middle-bar">
            <div className="logo">
                <img src="./logo-1-2048x622.png.webp" alt="" />
            </div>
            <div className="search-box">
            <input
                type="search"
                placeholder="🔍 Search for Products"
            />
            </div>
            <div className="login-cart">
                <button>
                <FontAwesomeIcon icon={faUser} size="xl" style={{color: "#ffffff",}} /> Login/Register
                </button>
                <button>
                <FontAwesomeIcon icon={faCartShopping} size="xl" style={{color: "#ffffff",}} /> Cart
                </button>
            </div>
        </div>
        <div className="bottom-bar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/">Brands</Link></li>
            <li><Link to="/">Offer & Deals</Link></li>
            <li><Link to="/">Choose Your Industry</Link></li>
            <li><Link to="/">Clientele</Link></li>
            <li><Link to="/">About us</Link></li>
            <li><Link to="/">Career</Link></li>
            <li><Link to="/">Track Your Order</Link></li>
            <li><Link to="/">Support</Link></li>
        </div>
    </>
  )
}

export default Navbar
