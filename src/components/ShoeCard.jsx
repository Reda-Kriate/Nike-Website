import React from 'react'
import { useState } from 'react'

const ShoeCard = ({imgSrc , ChangeImg , bigShoeImg}) => {

    const funcClick = ()=>{
        if(bigShoeImg !== imgSrc.bigShoe){
            ChangeImg(imgSrc.bigShoe)
        }
    }

  return (
<div className={`border-2 rounded-xl ${
    imgSrc.bigShoe === bigShoeImg? "border-coral-red" : "border-transparent"
} cursor-pointer max-sm:flex-1 flex flex-row`
}
onClick={funcClick } >
    <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img src={imgSrc.thumbnail} alt="collection"   width={127}   height={103.34}    className='object-contain' />
    </div>
</div>

  )
}

export default ShoeCard