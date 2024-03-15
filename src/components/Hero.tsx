import Image from 'next/image'
import React from 'react'
import Nav from './Nav'
import Button from './commons/Button'

function Hero() {
  const onBook = () =>{
    console.log('Book Now')
  }

  return (
 <div className='relative  w-full mt-[40px] md:mt-[70px] flex justify-center  bg-center bg-cover' style={{backgroundImage:"url('/images/delivery.jpg')"}}>
 {/* Overlay */}
 <div className="absolute w-full h-full bg-black_1 bg-opacity-60 "></div>

  <div className='w-11/12 md:w-[80%] xl:w-[70%] pt-5 md:pt-10 md:py-0 z-30'>
  <div className=' relative grid gap-4 md:gap-0 h-[400px] md:h-[550px] lg:h-[750px]'>
  {/* <div className='flex mx-auto md:mr-0 w-full md:w-1/2 lg:w-[50%] justify-center md:justify-end h-[400px] lg:h-[750px]'>
    <Image 
    src='/images/background1.png' 
    // src='/images/redbg.jpg' 
     alt='hero img' width={200} height={150}
     className='rounded-full w-[180px] h-auto  sm:w-[400px] sm:h-[400px] md:w-[100%] xl:w-[90%] md:h-auto flex-shrink-0 flex-grow-0'
     layout='responsive'
     priority
     />
     
  </div> */}

  <div className='grid  w-full md:w-3/4   gap-4 text-center md:text-start  absolute md:left-0 top-3/4 -translate-y-3/4 md:top-1/2  md:-translate-y-1/2  '>
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
