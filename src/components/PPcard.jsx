import React from 'react'
import { star } from '../assets/icons'

const PPcard = ({imgUrl,name,price,i}) => {
  return (
<div className='flex flex-col m-auto '>
        <img src={imgUrl} alt={name} key={i} className='w-[282px] h-[282px]' />
    <div className='flex flex-row justify-start mt-4'>
        <img src={star} alt="start-icon" /> 
        <h3 className='font-montserrat font-semibold text-slate-gray ml-2'>(4.5)</h3>
    </div>
    <div className='mt-2'>
       <h3 className='font-bold text-lg mt-1'>{name}</h3>
       <h3 className='font-semibold text-coral-red mt-1'>{price}</h3> 
    </div>

</div>
  )
}

export default PPcard