import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../components/data'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='my-2 px-6'>

      <section className='flex flex-row justify-between max-xl:flex-col'>
      <div className='flex flex-col gap-8 w-1/4 justify-between items-start max-xl:mb-14 max-xl:w-1/3 max-sm:w-full'>
           <a href="/">
           <img src={footerLogo} width={150} height={46} alt="footer logo" />
           </a>
          <p className='text-white-400 font-montserrat'>Get shoes ready for the new term at your nearest Nike store. Find
          Your perfect Size In Store. Get Rewards</p>
          <div className='flex flex-row gap-8 rounded-full'>
          {socialMedia.map((data,i)=>(
              <div className='bg-white rounded-full p-2 cursor-pointer hover:shadow-3xl hover:shadow-slate-400'>
                <a href="">
                    <img src={data.src} alt={data.alt} key={i} className='flex'/>
                </a>
              </div>
                ))}
              </div>
      </div>
      <div className='grid grid-cols-3 items-start gap-32 font-montserrat max-sm:grid-cols-1 max-sm:items-center max-sm:pl-4 max-lg:gap-16 '>
        {footerLinks.map((data,i)=>(
          <div className='flex flex-col' key={i}>
          <h3 className='text-white text-2xl mb-4'>{data.title}</h3>
          {data.links.map((doto)=>(
            <div className=''>
              <a href={doto.link} className='text-white-400 hover:text-gray-600'>{doto.name}</a>
            </div>
          ))}
          </div>
        ))}
      </div>
      </section>
      <section className='flex flex-row gap-2 mt-20'>
        <img src={copyrightSign} alt="" />
        <p className='text-white'> Copyright. All rights reserved</p>
      </section>
      
    </footer>
  )
}

export default Footer