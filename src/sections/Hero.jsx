import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { statistics } from '../components/data'
import { bigShoe1 } from '../assets/images'
import { shoes } from '../components/data'
import ShoeCard from '../components/ShoeCard'
import { useState } from 'react'

const Hero = () => {
 const [bigshoeimg,setBigshoeimg] = useState(bigShoe1)
  return (
    <section id="hero" className="w-full flex xl:flex-row flex-col min-h-screen justify-center gap-10 max-container ">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28  ">
        <p className="text-lg text-coral-red font-montserrat">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] font-bold ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span><br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-slate-gray font-montserrat text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">Discover stylish Nike Arrivals, quality confort, and innovation for your active life.</p>
        <Button
        label="Shop Now"
        src={arrowRight}
        bgColor="bg-coral-red"
        borderColor="border-coral-red"
        textColor="text-white"
        />
        <div className=" flex justify-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((data,i)=>(
            <div key={i}>
              <p className="text-4xl font-bold font-palanquin">{data.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">{data.label}</p> 
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
          <img src={bigshoeimg} alt="Nike Shoe"className="object-contain relative z-10" />
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6" width={610} height={502}>
            {shoes.map((data,i)=>(
              <div key={i}>
                <ShoeCard 
                index={i}
                imgSrc={data}
                ChangeImg={(shoe)=>setBigshoeimg(shoe)}
                bigShoeImg={bigshoeimg} />
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Hero