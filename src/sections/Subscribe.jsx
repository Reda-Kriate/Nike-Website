import React from 'react'
import Button from '../components/Button.jsx'
const Subscribe = () => {
  return (
    <section className='max-container flex lg:flex-row flex-col items-center justify-between gap-10'>
        <h1 className='font-palanquin font-bold text-4xl leading-[68px] lg:max-w-md  w-full text-center'>Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter</h1>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type="text" placeholder='example@Nike.com' className='input'/>

        <Button
        label="Sign Up"
        bgColor="bg-coral-red"
        textColor="text-white"/>
      </div>
    </section>
  )
}

export default Subscribe