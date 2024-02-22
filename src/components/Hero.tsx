import Image from 'next/image'
import React from 'react'
import Nav from './Nav'
import Button from './commons/Button'

function Hero() {
  const onBook = () =>{
    console.log('Book Now')
  }

  return (
 <div className='relative bg-[#feebce] w-full flex justify-center pt-[70px] ' style={{backgroundImage:"url('/images/background9.png')", backgroundPosition:"center" ,backgroundRepeat:"no-repeat"}}>
 {/* Overlay */}
 <div className="absolute w-full h-full bg-black_1 bg-opacity-0"></div>

  <div className='w-11/12 md:w-[80%] xl:w-[70%] py-5 md:pt-10 md:py-0 z-30'>
  <div className=' relative grid gap-5 md:gap-0'>
  <div className='flex mx-auto md:mr-0 w-full md:w-1/2 lg:w-[50%] justify-center md:justify-end'>
    <Image src='/images/background0.png' alt='' width={300} height={300} className='rounded-full sm:w-[400px] sm:h-[400px] md:w-[90%] xl:w-[80%] md:h-auto flex-shrink-0 flex-grow-0'/>
  </div>

  <div className='grid  w-full md:w-1/2  gap-4 text-center md:text-start  md:absolute md:left-0 md:top-1/2  md:-translate-y-1/2  '>
   <div className='w-[100%] md:w-[100%] xl:w-[110%] grid text-black_1 '>
   <div className='font-[700] mb-3 md:mb-4'>
   <p className='text-[24px] md:text-[30px] lg:text-[45px] xl:text-[60px] font-frank'>Beauty is Whatever</p>
    <p className='text-[24px] md:text-[30px] lg:text-[45px] xl:text-[60px] font-frank'>Brings Perfect</p>
   </div>
    <p className='text-[14px] md:text-[16px] lg:text-[17px] font-[Inter] w-[90%] md:w-[100%] xl:w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  aliquip ex ea commodo consequat. </p>
    <div className='mx-auto md:mx-0'><Button buttonText='Book Now' onButtonClick={onBook}/></div>
   </div>
  </div>
 </div>
 </div>
 </div>
  )
}

export default Hero
