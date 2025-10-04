import React from 'react'
import "../styles/ProductCard.css"

const ProductCard = (props) => {
  return (
        <div className="Pcard" style={{ backgroundImage: `url(${props.image})`}}>
            <div className="overlay-text">
                <div className="title">
                    {props.title}
                </div>
                <div className="cost">
                <span className="original">₹{props.originalPrice}</span>
                <span className="reduced">₹{props.reducedPrice}</span>
                </div>
            </div>
            <div className="hover-overlay">
            <button className="add-btn">Add to Cart</button>
            </div>
        </div>
  )
}

export default ProductCard
