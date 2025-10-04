import React from 'react'
import ProductCard from './ProductCard';
import "../styles/BestSeller.css"

const products = [
  { title: "Microwave Oven", originalPrice: 12000, reducedPrice: 8999, image: "/images/one.jpg" },
  { title: "Mixer Grinder", originalPrice: 4500, reducedPrice: 2999, image: "/images/two.jpg" },
  { title: "Refrigerator (Double Door)", originalPrice: 32000, reducedPrice: 27999, image: "/images/three.jpg" },
  { title: "Electric Kettle", originalPrice: 2500, reducedPrice: 1499, image: "/images/four.jpg" },
  { title: "Air Fryer", originalPrice: 9000, reducedPrice: 6999, image: "/images/five.jpg" },
  { title: "Toaster", originalPrice: 3500, reducedPrice: 2499, image: "/images/six.jpg" },
  { title: "Dishwasher", originalPrice: 45000, reducedPrice: 38999, image: "/images/seven.jpg" },
  { title: "Induction Cooktop", originalPrice: 6000, reducedPrice: 4499, image: "/images/eight.jpg" },
  { title: "Coffee Maker", originalPrice: 8000, reducedPrice: 5999, image: "/images/nine.jpg" },
  { title: "Hand Blender", originalPrice: 3000, reducedPrice: 1999, image: "/images/ten.jpg" }
];


  

const BestSeller = () => {
  return (
    <section className='bestsellerP'>
        {products.map((e,index)=>(
            <ProductCard key={index}   image={e.image} title={e.title} originalPrice={e.originalPrice} reducedPrice={e.reducedPrice}/>
        ))}
    </section>
  )
}

export default BestSeller
