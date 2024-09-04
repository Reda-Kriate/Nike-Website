import React from 'react'
import { star } from '../assets/icons'

const CustomerCard = ({srcImg,feed,note,name}) => {
  return (
    <div className='flex flex-col justify-center items-center w-[27%] max-lg:w-[70%] max-lg:mb-24'>
        <img src={srcImg} alt="customer" className='w-[120px] h-[120px] rounded-full mb-5'/>
        <p className='text-center text-slate-gray mb-1 font-montserrat'>{feed}</p>
        <div className='flex flex-wrap gap-2 mb-2'>
            <img src={star} alt="start-icon" />
            <p className='text-slate-gray font-montserrat'>{note}</p>
        </div>
        <h3 className='font-montserrat font-bold'>{name}</h3>
    </div>
  )
}

export default CustomerCard