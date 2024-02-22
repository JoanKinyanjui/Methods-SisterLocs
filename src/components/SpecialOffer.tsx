import Image from 'next/image'
import React from 'react';
import styles from '../styles/globals.module.css'
import Button from './commons/Button';

function SpecialOffer() {
  const onBookNow = () =>{
    console.log('Book Now')
  }


  return (
      <div className='relative w-full  font-[Inter]'>
        <div className="bg-fixed bg-left-bottom bg-cover  h-full w-full grid items-center justify-center py-10" style={{backgroundImage:"url('/images/background2.jpg')"}} >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-brown_1 bg-opacity-10  "></div>
          <div className='grid md:flex md:items-center gap-2 md:gap-4 px-4 w-[100%] md:w-[80%] xl:w-[70%] mx-auto z-40 '>
            <div><Image src='/images/background1.png' alt='' width={250} height={250} className='md:w-[600px] md:h-auto rounded-full mx-auto md:mx-0' /></div>
           <div>
   <div className='w-[100%] sm:w-[90%] md:w-[100%] '>
   <p className='text-center md:text-start mx-auto font-thin text-[18px] md:text-[20px] text-white uppercase'>Special Offer </p>
            <p className={`${styles.TextGradient} py-2 text-center md:text-start mx-auto font-[700] text-[24px] md:text-[30px]  bg-gradient-to-r from-brown_1  via-[#FFAF00]  to-[#FFAF00]`}>50% OFF</p>
            <p className='w-[90%] md:w-[100%]  text-center md:text-start mx-auto text-[12px] md:text-[14px] text-white font-[400]'>Discount For All Orders Over . We are always willing to make our customers happy and are ready to support your most bold and creative ideas in hairstyle and hair coloring!</p>
            <div className=' mx-auto  flex justify-center md:justify-start'><Button buttonText='Book Now' onButtonClick={onBookNow}/></div>
   </div>
           </div>
          </div>
        </div>

      </div>
  )
}

export default SpecialOffer;
