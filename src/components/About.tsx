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

  <div className='w-full grid lg:flex items-center'>

  <div className='w-full  lg:w-[40%]   grid gap-1 md:pr-10 pr-0 font-[Inter] text-[14px] md:text-[16px]'>
 <p className={`text-black_1 text-[18px] md:text-[24px] font-[700] font-frank md:py-4 `}>Learn A Little About Us</p>
 <p>Established in 2010 by sisterlocks enthusiast Tarasicio Kinyua, Sisterlocks Salon is a haven for natural hair care aficionados. Our salon is not just a place for styling; it's a space where women can celebrate their natural beauty with confidence and pride. Committed to promoting healthy hair, embracing diversity, and providing unparalleled service, Sisterlocks Salon is your trusted partner in your hair care journey.</p>
<div className='py-1 md:py-2'>
<p>We are Specialized in :</p>
 <ul className='list-disc pl-5'>
  <li>Sisterlocks Installation</li>
  <li>Retightening and Maintenance</li>
  <li>Styling and Care</li>
 </ul>
</div>
 <Button buttonText='Book Now' onButtonClick={()=>console.log('Book Now')}/>
  </div>

  <div className='w-full  lg:w-[60%] h-[160px] xs:h-[250px] md:h-[300px] lg:h-[430px] rounded-lg overflow-hidden '>
  <video className="w-full h-full rounded-[20px] bg-[gainsboro]" autoPlay loop controls>
    <source src="/videos/salon.mp4" type="video/mp4"  />
    Your browser does not support the video tag.
  </video>
  </div>

  </div>
 </Card>
    
  )
}

export default About
