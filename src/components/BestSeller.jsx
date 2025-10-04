import React from 'react'
import ProductCard from './ProductCard';
import "../styles/BestSeller.css"

const products = [
    {
      title: "Microwave Oven",
      originalPrice: 12000,
      reducedPrice: 8999
    },
    {
      title: "Mixer Grinder",
      originalPrice: 4500,
      reducedPrice: 2999
    },
    {
      title: "Refrigerator (Double Door)",
      originalPrice: 32000,
      reducedPrice: 27999
    },
    {
      title: "Electric Kettle",
      originalPrice: 2500,
      reducedPrice: 1499
    },
    {
      title: "Air Fryer",
      originalPrice: 9000,
      reducedPrice: 6999
    },
    {
      title: "Toaster",
      originalPrice: 3500,
      reducedPrice: 2499
    },
    {
      title: "Dishwasher",
      originalPrice: 45000,
      reducedPrice: 38999
    },
    {
      title: "Induction Cooktop",
      originalPrice: 6000,
      reducedPrice: 4499
    },
    {
      title: "Coffee Maker",
      originalPrice: 8000,
      reducedPrice: 5999
    },
    {
      title: "Hand Blender",
      originalPrice: 3000,
      reducedPrice: 1999
    }
  ];
  

const BestSeller = () => {
  return (
    <section className='bestsellerP'>
        {products.map((e,index)=>(
            <ProductCard key={index} title={e.title} originalPrice={e.originalPrice} reducedPrice={e.reducedPrice}/>
        ))}
    </section>
  )
}

export default BestSeller
