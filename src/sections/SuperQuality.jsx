import React from 'react'
import { shoe8 } from '../assets/images'
import Button from '../components/Button'

const SuperQuality = () => {
  return (
    <section className='flex flex-row justify-between items-center max-lg:flex-col'>
      <div className='max-w-lg max-lg:max-w-full max-lg:mb-12'>
        <h1 className='text-4xl max-lg:text-6xl max-lg:mb-10 font-semibold mb-5'>We Provide You <span className='text-coral-red'>Super</span><br /> <span className='text-coral-red'>Quality</span> Shoes</h1>
        <p className='text-slate-gray font-montserrat leading-8  max-lg:text-lg max-lg:leading-8 max-lg:mb-8 mb-3 max'>Experience unmatched comfort and style with our premium shoes. Crafted from the finest materials, they offer exceptional durability and support. Every detail, from the cushioned insoles to the precise stitching.</p>
        <p className='text-slate-gray font-montserrat mb-8 leading-8 max-lg:text-lg max-lg:leading-8 max-lg:mb-8'>Enjoy comfort and style with our premium shoes. Durable, supportive, and built to last.</p>
        <Button
        label="View Details"
        bgColor="bg-coral-red"
        borderColor="border-coral-red"
        textColor="text-white"/>
      </div>
      <div className=''>
        <img src={shoe8} alt="shoe collection" width={570} height={522} className='max-lg:mt-4'/>
      </div>
    </section>
  )
}

export default SuperQuality