import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <section className='flex flex-wrap gap-10 max-xl:flex-col-reverse items-center max-container'>
      <div className='flex-1'>
        <img src={offer} alt="special-offer" width={773} height={687} className='object-container w-full'/>
      </div>
      <div className='flex-1 object-container flex flex-col'>
        <h1 className='text-4xl font-bold font-palanquin mb-4'><span className='text-coral-red'>Special</span> Offer</h1>
        <p className='text-slate-gray info-text mb-6'>Don't miss out on our special offer! Grab your favorite Nike shoes at unbeatable prices for a limited time. Elevate your style and performance with premium footwear at a fraction of the cost. Shop now before the deal runs out!</p>
        <p className='text-slate-gray info-text mb-11'>Take advantage of our exclusive offer on Nike shoes! Get top-quality footwear at special discounted prices for a limited time. Perfect your look and performance with the best in the game. Hurry, these deals won’t last long.</p>
        <div className='flex flex-wrap gap-7'>
          <Button
          label="Shop now"
          src={arrowRight}
          bgColor="bg-coral-red"
          borderColor="border-coral-red"
          textColor="text-white"/>
          <Button
          label="Learn more"
          bgColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers