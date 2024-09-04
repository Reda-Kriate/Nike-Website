import React from 'react'
import { reviews } from '../components/data'
import CustomerCard from '../components/CustomerCard'

const CustomerReviews = () => {
  return (
    <section className='flex flex-col gap-8 items-center'>
      <div className='flex items-center justify-center flex-col w-1/2 mb-12 max-xl:w-full'>
        <h3 className='text-4xl font-palanquin font-bold mb-4 max-md:text-center max-sm:text-[38px] max-sm:mt-2'>What Our <span className='text-coral-red'>Customers</span> Say?</h3>
        <p className='text-slate-gray m-auto text-center'>See what our customers are saying! Discover why they love our products with real reviews and experiences.</p>
      </div>
      <div className='flex flex-row justify-evenly max-lg:flex-col max-lg:items-center'>
      {reviews.map((data,i)=>(
        <CustomerCard
        srcImg={data.imgURL}
        feed={data.feedback}
        note={data.rating}
        name={data.customerName}
        />
      ))}
      </div>
    </section>
  )
}

export default CustomerReviews