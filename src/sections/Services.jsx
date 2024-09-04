import React from 'react'
import { services } from '../components/data'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
<section className='p-16 max-sm:p-12 max-lg:p-4'>
  <div className='flex flex-row gap-14 max-lg:grid max-lg:grid-cols-2 max-lg:gap-14 max-sm:grid-cols-1'>
    {services.map((data,i)=>(
      <ServiceCard
      i={i}
      img={data.imgURL}
      label={data.label}
      text={data.subtext}/>
    ))}
  </div>
</section>
  )
}

export default Services