import Image from 'next/image';
import React from 'react';
import Card from './commons/Card';

function About() {
  return (
 <Card>
  <div className='my-5'>
  <div className='my-2 mx-auto text-center'>
<p className='text-[20px] md:text-[24px] font-semibold text-black_1'>About Us</p>
{/* <div className='h-1 w-[50px]  bg-gradient-to-r from-brown_1  via-[#FFAF00]  to-[#FFAF00] '></div> */}
</div>

<div className='md:w-[90%] mx-auto'>
 <p className='text-center  text-[14px] md:text-[16px] text-black_1'>At Methods Sisterlocks , our passion for haircare and styling is matched only by our commitment to our clients satisfaction. Founded by Kinyua, a certified Sisterlocks consultant, our salon has been a sanctuary for those looking to embrace their natural hair texture in a comfortable and welcoming environment. Our team of experienced stylists is dedicated to helping you achieve and maintain the perfect look.</p>
</div>
  </div>


<div className='flex flex-wrap justify-center text-black_1 gap-4 my-5'>
<div className='w-full sm:w-[35%]  lg:w-[30%] grid items-center py-5  shadow-lg sm: px-4 my-2'>
<div className='w-full grid justify-center gap-1'>
 <p className='mx-auto text-[18px] font-[500]'>Installation</p>
 <p className='mx-auto text-center text-[12px] md:text-[14px] '>Begin your Sisterlocks journey with us. Our installation service is thorough, ensuring each lock is perfectly formed to complement your natural beauty.</p>
</div>

<div className='w-full flex justify-center py-2'>
   <Image src='/images/sisterlocsday1.png' alt='about' width={100} height={100} className=' w-[100px] h-[100px] rounded-[600px] shadow-lg shadow-black_1'  />
 </div>
</div>

<div className='w-full sm:w-[35%]  lg:w-[30%] grid items-center py-5  shadow-lg sm: px-4 my-2'>
<div className='w-full grid justify-center gap-1'>
 <p className='mx-auto text-[18px] font-[500]'>Maintenance & Tightening</p>
 <p className='mx-auto text-center text-[12px] md:text-[14px] '>Keep your Sisterlocks looking their best with our maintenance services, designed to ensure your locks remain healthy and beautiful.</p>
</div>

<div className='w-full flex justify-center py-2'>
   <Image src='/images/sisterlocs4.png' alt='about' width={100} height={100} className=' w-[100px] h-[100px] rounded-[600px]  shadow-lg shadow-black_1' />
 </div>
</div>

<div className='w-full  sm:w-[35%]  lg:w-[30%]  grid items-center py-5  shadow-lg sm: px-4 my-2'>
<div className='w-full grid justify-center gap-1'>
 <p className='mx-auto text-[18px] font-[500]'>Styling & Updos</p>
 <p className='mx-auto text-center text-[12px] md:text-[14px] sm:w-[70%]'>Whether it’s a special occasion or you’re just looking to switch things up, our stylists can create stunning styles and updos for your Sisterlocks.</p>
</div>

<div className='w-full flex justify-center  py-2'>
   <Image src='/images/sisterlocs1.png' alt='about' width={100} height={100} className=' w-[100px] h-[100px] rounded-[600px]  shadow-lg shadow-black_1' />
 </div>
</div>
</div>
 </Card>
    
  )
}

export default About
