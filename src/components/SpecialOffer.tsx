import Image from 'next/image'
import React from 'react'

function SpecialOffer() {
  return (
    <div >

    <div className='grid w-full relative py-[100px] bg-black_1 place-content-center items-center text-white font-[500] gap-1 md:gap-2'>
      <p className='mx-auto text-[20px] md:text-[24px]'>Special Offer</p>
      <p className='mx-auto text-gold  text-[40px] sm:text-[50px] font-[700]'>50% OFF</p>
      <p className='mx-auto auto text-[20px] md:text-[24px]'>Rush while it still lasts</p>
     <div className='mx-auto'> <button className='bg-[navajowhite] py-4 px-10 rounded-[5px] mt-4'>Book Now</button></div>
    </div>

    </div>
  )
}

export default SpecialOffer
