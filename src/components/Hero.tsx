import Image from 'next/image'
import React from 'react'
import Nav from './Nav'

function Hero() {
  return (
    <div className="relative h-[50vh] sm:h-[60vh] lg:h-[75vh] w-full">
    {/* Background Image */}
    <Image src="/images/straightening.jpg" layout="fill" objectFit="cover" alt="Background" priority />

    {/* Black Gradient/Blur Overlay */}
    <div className="absolute inset-0 bg-black_1 opacity-40"></div>

    {/* Content */}
    <div className="relative z-10 flex items-center justify-between  top-[70px] h-[40vh] sm:h-[50vh] lg:h-[65vh] w-11/12 sm:w-10/12  md:w-[80%]  mx-auto">
      <div className='mx-auto sm:mx-0'>
        <h1 className="text-white  font-bold  text-[24px] sm:text-[28px] md:text-[38px] text-center md:text-start">Welcome Methods_Sisterlocks</h1>
        <p className="text-white text-[18px] md:text-[20px] text-center sm:text-start mt-4 capitalize">What a Better way to start your lock journey</p>
      </div>

      <div className='absolute bottom-3 sm:bottom-[5%] right-0'>
        <div className='grid gap-2'>
         <Image  src='/icons/facebook.png'  width={20} height={20} alt='fb' className='md:w-[30px] md:h-[30px] '/>
         <Image  src='/icons/instagram.png'  width={20} height={20} alt='instagram' className=' md:w-[30px] md:h-[30px]'/>
         <Image  src='/icons/tiktok.png'  width={20} height={20} alt='tiktok' className=' md:w-[30px] md:h-[30px]'/>
        </div>
      </div>
    </div>

     {/* Nav */}
      <div className='absolute w-full top-0  flex  items-start h-[70px]'>
       <Nav />
      </div>

  </div>
  )
}

export default Hero
