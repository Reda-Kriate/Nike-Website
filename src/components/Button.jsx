import React from 'react'

const Button = ({src,label,bgColor,borderColor,textColor}) => {
  return (
    <button className={`${bgColor} flex flex-row gap-2 justify-center items-center py-4 px-7 rounded-full font-montserrat border ${borderColor} leading-none `}>
        <p className={`${textColor}`}>{label}</p>
        {src && (
        <img
          src={src}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  )
}

export default Button