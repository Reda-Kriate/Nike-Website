import React from 'react'
import { products } from '../components/data'
import PPcard from '../components/PPcard'

const PopularProduct = () => {
  return (
    <section className='flex flex-col'>
      <div className='max-w-2xl pl-2 max-xl:flex max-xl:items-center max-xl:flex-col'>
        <h1 className='text-4xl mt-2 mb-10'>Our <span className='text-coral-red font-semibold'>Popular</span> Products</h1>
        <p className='text-xl mb-24 leading-8 font-montserrat'>Discover our top-selling products, loved by customers for their quality and value. Shop these favorites and find your next must-have item today!</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:gap-6 gap-14'>
          {products.map((data,i)=>(
            <PPcard key={i}
            imgUrl = {data.imgURL}
            name = {data.name} 
            price = {data.price}
            i={i}/>
          ))}
      </div>
    </section>
  )
}

export default PopularProduct