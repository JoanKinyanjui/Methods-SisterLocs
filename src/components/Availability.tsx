import Image from 'next/image'
import React from 'react'
import Card from './commons/Card'

function Availability() {
  return (
  <div className=' bg-black_1 w-full'>
<Card>
<div className=' flex  items-start  justify-between py-[20px] md:py-[30px] w-full'>
        <div className='grid justify-center'>
            <div><Image src='/icons/location.png' alt='icons' width={17} height={17} className='mx-auto py-1 md:w-[25px] md:h-[28px]' /></div>
            <div className='grid text-center  font-medium text-[10px] md:text-[12px] lg:text-[14px]'>
                <p>KTDA PLAZA 5th Floor</p>
                <p>Ronald Ngara, Nairobi</p>
            </div>
        </div>
        <div className='grid justify-center'>
            <div><Image src='/icons/whatsapp.png' alt='icons' width={17} height={17} className='mx-auto py-1 md:w-[25px] md:h-[28px]' /></div>
            <div className='grid text-center  font-medium text-[10px] md:text-[12px] lg:text-[14px]'>
                <p>+254 789 738 893</p>
            </div>
        </div>
        <div className='grid justify-center'>
            <div><Image src='/icons/clock.png' alt='icons' width={17} height={17} className='mx-auto py-1 md:w-[25px] md:h-[28px]' /></div>
            <div className='grid text-center  font-medium text-[10px] md:text-[12px] lg:text-[14px]'>
                <p>Mon-Sat</p>
                <p>(7:00AM - 9:00PM)</p>
            </div>
        </div>
      
    </div>
</Card>
   </div>
  )
}

export default Availability
