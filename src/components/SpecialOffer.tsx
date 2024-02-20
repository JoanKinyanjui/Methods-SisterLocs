import Image from 'next/image'
import React from 'react';
import styles from '../styles/globals.module.css'
import Button from './commons/Button';

function SpecialOffer() {
  const onBookNow = () =>{
    console.log('Book Now')
  }


  return (
    <div >

    <div className='grid w-full relative py-[50px] md:py-[100px] bg-black_1 place-content-center items-center text-white font-[500] gap-1 md:gap-2'>
      <p className='mx-auto text-[20px] md:text-[24px]'>Special Offer</p>
      <p className={`mx-auto ${styles.TextGradient} text-[40px] sm:text-[50px] font-[700] bg-gradient-to-r from-brown_1 via-[#FFAF00] to-brown_1`}>50% OFF</p>
      <p className='mx-auto auto text-[20px] md:text-[24px]'>Rush while it still lasts</p>
     <div className='mx-auto w-full'> <Button onButtonClick={onBookNow}  buttonText='Book Now'/></div>
    </div>

    </div>
  )
}

export default SpecialOffer
