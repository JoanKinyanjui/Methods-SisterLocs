import Image from 'next/image'
import React from 'react'
import Nav from './Nav'
import Button from './commons/Button'

function Hero() {
  const onBook = () =>{
    console.log('Book Now')
  }

  return (
 <div className='relative  w-full mt-[40px] md:mt-[70px] flex justify-center  bg-left-bottom bg-cover' style={{backgroundImage:"url('/images/background3.jpg')"}}>
 {/* Overlay */}
 <div className="absolute w-full h-full bg-black_1 bg-opacity-60 "></div>

  <div className='w-11/12 md:w-[80%] xl:w-[70%] pt-5 md:pt-10 md:py-0 z-30'>
  <div className=' relative grid gap-4 md:gap-0'>
  <div className='flex mx-auto md:mr-0 w-full md:w-1/2 lg:w-[50%] justify-center md:justify-end'>
    <Image 
    src='/images/background0.png' 
    // src='/images/redbg.jpg' 
     alt='hero img' width={200} height={150}
     className='rounded-full  sm:w-[400px] sm:h-[400px] md:w-[100%] xl:w-[90%] md:h-auto flex-shrink-0 flex-grow-0'
     layout='responsive'
     priority
     />
     
  </div>

  <div className='grid  w-full md:w-1/2  gap-4 text-center md:text-start  md:absolute md:left-0 md:top-1/2  md:-translate-y-1/2  '>
   <div className='w-[100%] md:w-[100%] xl:w-[110%] grid text-white '>
   <div className='font-[700] mb-3 md:mb-4'>
   <h1 className='text-[24px] md:text-[30px] lg:text-[40px] xl:text-[55px] font-frank'>Discover Sisterlocks Installation </h1>
    <h1 className='text-[24px] md:text-[30px] lg:text-[40px] xl:text-[55px] font-frank'>in Nairobi Kenya</h1>
   </div>
    <h6 className='text-[14px] md:text-[16px] lg:text-[17px] font-[Inter] w-[90%] md:w-[100%] xl:w-[70%] mx-auto md:mx-0'>Experience flawless sisterlocks installation, precision retightening, personalized maintenance, and stunning styling options </h6>
    <div className='mx-auto md:mx-0'><Button /></div>
   </div>
  </div>
 </div>
 </div>
 </div>
  )
}

export default Hero
