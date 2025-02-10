import React from 'react'

export const Heading = ({ text, description }) => {
  return (
    <div className='my-5'>
      <h1 className='text-center text-[#282828] md:text-[25px] font-poppins font-[600] '>{text}</h1>
      {description && <p className='text-center text-[#282828] mt-1 text-[12px] font-poppins'>{description}</p>}
    </div>
  )
}
