import Image from 'next/image'
import React from 'react';
import styles from '../styles/globals.module.css'
import Button from './commons/Button';

function SpecialOffer() {
  const onBookNow = () =>{
    console.log('Book Now')
  }


  return (
         <div className="relative h-[40vh] sm:h-[50vh] lg:h-[75vh] w-full bg-white">
    {/* Background Image */}
    <Image src="/images/hero2.png" layout="fill" objectFit="cover" alt="Background" priority />

    {/* Black Gradient/Blur Overlay */}
    <div className="absolute inset-0 bg-black_1 opacity-40 md:opacity-70"></div>

    {/* Content */}
    <div className="relative z-10 flex justify-center items-center h-full">
    <div className='grid w-full relative   place-content-center items-center text-white font-[500] gap-1 md:gap-2'>
      <p className='mx-auto text-[20px] md:text-[24px]'>Special Offer</p>
      <p className={`mx-auto ${styles.TextGradient} text-[40px] sm:text-[50px] font-[700] bg-gradient-to-r from-brown_1 via-[#FFAF00] to-brown_1`}>50% OFF</p>
      <p className='mx-auto auto text-[20px] md:text-[24px]'>Rush while it still lasts</p>
     <div className='mx-auto w-full'> <Button onButtonClick={onBookNow}  buttonText='Book Now'/></div>
    </div>
    </div>

    </div>
  )
}

export default SpecialOffer;
