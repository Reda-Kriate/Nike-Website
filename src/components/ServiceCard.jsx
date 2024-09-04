import React from 'react'

const ServiceCard = ({img,label,text,i}) => {
  return (
    <div key={i} className='flex flex-col w-1/3 rounded-lg px-10 py-12 shadow-3xl max-lg:w-full'>
        <div className='flex items-center justify-start mb-5'>
             <div className='bg-coral-red rounded-full w-10 h-10 p-2 flex'>
                    <img src={img} alt={label} width={30} height={30} />
             </div>
        </div>
        <h3 className='text-xl font-semibold font-palanquin mb-4'>{label}</h3>
        <p className='font-montserrat text-slate-gray text-[15px] max-w-70 '>{text}</p>
    </div>
  )
}

export default ServiceCard