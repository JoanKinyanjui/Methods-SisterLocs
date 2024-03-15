import Image from 'next/image';
import React from 'react';
import Card from './commons/Card';
import Title from './commons/Title';
import Button from './commons/Button';
import styles from '../styles/globals.module.css'

function About() {
  return (
 <Card>
  <div>
    <Title title='About Us'/>
  </div>

  <div className='w-full grid lg:flex items-center max-h-max '>

  <div className='w-full  lg:w-[40%] xl:w-[50%]    grid gap-1 md:pr-10 pr-0 font-[Inter] text-[14px] md:text-[16px]'>
 <p className={`text-black_1 text-[18px] md:text-[24px] font-[700] font-frank md:py-4 `}>Learn A Little About Us</p>
 <p>Welcome to Methods Sisterlocks Salon, the premier destination for the artistry of Sisterlocks, founded by natural hair enthusiast Kinyua Tarah. Here, we celebrate the natural beauty and individuality of every client through the empowering craft of Sisterlocks. Our salon stands as a beacon of natural hair care, where skilled stylists dedicate themselves to the intricacy of Sisterlocks installation, retightening, maintenance, styling, and care. Experience the precision, care, and commitment that define our haven, and join us in the ultimate celebration of your beautiful, natural self. Welcome home to Methods Sisterlocks Salon, your trusted partner on this transformative hair care journey.</p>
<div className='py-1 md:py-2'>
<p>We are Specialized in :</p>
 <ul className='list-disc pl-5'>
  <li>Sisterlocks Installation</li>
  <li>Retie and Maintenance</li>
  <li>Styling and Care</li>
 </ul>
</div>
 <Button />
  </div>

  <div className='w-full sm:w-[80%] lg:w-[60%] xl:w-[50%] h-[310px] lg:h-[510px]  grid mx-auto '>
  <div className='w-full h-[150px] lg:h-[250px] flex justify-between gap-1'>
   <div className='w-[50%]  '>
      <Image src='/images/logo.jpg' height={300} width={300} alt='img' className=' w-[100%] h-[100%] rounded-[5px]'/>
    </div>
    <div className='w-[50%] flex'>
      <video className="w-full  h-full rounded-[5px] bg-black_1 object-contain"  autoPlay loop controls muted playsInline >
    <source src="/videos/sisterlocs.MP4" type="video/mp4"  />
    Your browser does not support the video tag.
  </video>
    </div>
   </div>

   <div className='w-full h-[150px] lg:h-[250px] flex justify-between gap-1'>
   <div className='w-[50%]  '>
      <Image src='/images/group.jpg' height={300} width={300} alt='img' className=' w-[100%] h-[100%] rounded-[5px]'/>
    </div>
    <div className='w-[50%]'>
    <Image src='/images/delivery2.jpg' height={300} width={300} alt='img' className=' w-[100%] h-[100%] rounded-[5px]'/>
    </div>
   </div>
  </div>
  

  </div>
 </Card>
    
  )
}

export default About
