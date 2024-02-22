import React from 'react'
  type TitleProps = {
    title: string;
  }
function Title({title}:TitleProps) {
  return (
  <div className='py-5  grid  justify-center'>
      <div className='text-[20px] md:text-[30px] text-black_1  capitalize font-semibold  font-[System]'>
      {title}
    </div>
     <div className='h-1 w-[50px]  bg-gradient-to-r from-brown_1  via-[#FFAF00]  to-[#FFAF00] '></div>
  </div>
  )
}

export default Title
