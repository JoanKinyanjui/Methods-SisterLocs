import Image from 'next/image'
import React from 'react';
import styles from '../styles/globals.module.css'
import Button from './commons/Button';

function SpecialOffer() {
  const onBookNow = () =>{
    console.log('Book Now')
  }


  return (
      <div className='relative w-full  h-[40vh] md:h-[50vh]'>
        <div className="bg-fixed bg-top bg-cover  h-full w-full grid items-center justify-center" style={{backgroundImage:"url('/images/background.jpg')"}} >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black_2 bg-opacity-50  "></div>
          <div className='grid gap-2 px-4 w-[80%] md:w-[70%] xl:w-[50%] mx-auto z-50'>
            <p className='text-center mx-auto font-[500] text-[18px] md:text-[20px] text-white'>Special Offer for Sisterlocks Installation</p>
            <p className={`${styles.TextGradient} text-center mx-auto font-[700] text-[24px] md:text-[30px]  bg-gradient-to-r from-brown_1  via-[#FFAF00]  to-[#FFAF00]`}>50% OFF</p>
            <p className='text-center mx-auto text-[12px] md:text-[14px] text-white font-[400]'>Discount For All Orders Over . We are always willing to make our customers happy and are ready to support your most bold and creative ideas in hairstyle and hair coloring!</p>
            <div className=' mx-auto'><Button buttonText='Book Now' onButtonClick={onBookNow}/></div>
          </div>
        </div>

      </div>
  )
}

export default SpecialOffer;
