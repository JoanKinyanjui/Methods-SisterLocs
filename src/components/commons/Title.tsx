import React from 'react'
import SlideAnimation from './SlideAnimation';
  type TitleProps = {
    title: string;
  }
function Title({title}:TitleProps) {
  return (
  <div >
<div className='py-5  grid  justify-center'>
<div className='text-[20px] md:text-[30px] text-black_1  capitalize font-semibold  font-[System]'>
     <h1> {title}</h1>
    </div>
     <div className='h-[3px] md:h-1 w-[30px] md:w-[50px]  bg-gradient-to-r from-brown_1  via-[#FFAF00]  to-[#FFAF00] '></div>
</div>
  </div>
  )
}

export default Title
