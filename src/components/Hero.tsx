import Image from 'next/image'
import React from 'react'
import Nav from './Nav'

function Hero() {
  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full">
    {/* Background Image */}
    <Image src="/images/hero.png" layout="fill" objectFit="cover" alt="Background" priority />

    {/* Black Gradient/Blur Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-90"></div>

    {/* Content */}
    <div className="relative z-10 flex items-center justify-center h-full">
      <div>
        <h1 className="text-white text-4xl font-bold text-center">Welcome to Our Website</h1>
        <p className="text-white text-xl text-center mt-4">Explore the world of possibilities with us.</p>
      </div>
    </div>
{/* Nav */}
      <div className='absolute w-full top-0  flex  items-start h-[70px] bg-gray_1'>
       <Nav />
      </div>

  </div>
  )
}

export default Hero
