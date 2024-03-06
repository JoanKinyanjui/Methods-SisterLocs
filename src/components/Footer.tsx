import Image from 'next/image'
import React, { useState } from 'react'
import InputField from './commons/InputField'
import Button from './commons/Button';
import Card from './commons/Card';
import styles from '../styles/globals.module.css'
function Footer() {
  const [phoneNo,setPhoneNo]=useState('');

  const onChangePhoneNumber = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setPhoneNo(e.target.value)
  }

  const onBookNow = () =>{
    console.log('Book Now')
  }

  return (
    <div className='grid px-5  bg-black_1  text-[14px] md:text-[16px] text-gray_text font-[Inter] '>
      <Card>
     <div className='pt-5 md:pt-0 md:py-5 grid md:flex md:justify-between justify-center gap-8 md:gap-5 md:my-10  md:items-start'>

      <div className='w-full md:w-1/3 grid text-start gap-2 md:gap-3 mx-auto  justify-start md:justify-center md:px-5  '>
        <p className={`${styles.TextGradien} text-white`}>Methods Sisterlocks</p>
        <p className=' '>Welcome to Methods Sisterlocks Salon, the premier destination for the artistry of Sisterlocks, founded by the enthusiastic Kinyua Tarah. Our salon stands as a beacon of natural hair care, where skilled stylists dedicate themselves to the intricacy of Sisterlocks installation, retightening, maintenance, styling, and care. It's more than just a salon; it's a space of self-expression and confidence, embracing diversity and promoting healthy hair.Welcome home to Methods Sisterlocks Salon, your trusted partner on this transformative hair care journey</p>
       <div className='flex items-center gap-2 w-full'>
        <p className=' font-[500] '>Follow us :</p>
        <div className='flex gap-2 flex-shrink-0'>
       <a href='https://www.facebook.com/profile.php?id=6155595093938&mibextid=ZbWKwL'><Image  src='/icons/facebook.png'  width={18} height={18} alt='fb' className='md:w-[25px] md:h-[25px] '/> </a>
        <a href='https://www.instagram.com/methods_sisterlocks'> <Image  src='/icons/instagram.png'  width={18} height={18} alt='instagram' className=' md:w-[25px] md:h-[25px]'/> </a>
        <a href='https://www.tiktok.com/methods_sisterlocks'> <Image  src='/icons/tiktok.png'  width={18} height={18} alt='tiktok' className=' md:w-[25px] md:h-[25px]'/> </a>
        </div>
       </div>
      </div>

      <div className='w-full md:w-1/3 grid gap-1 md:gap-2 items-center  md:px-5'>
        <div className='md:mx-auto grid gap-2'>
        <div className='text-start  md:mx-auto'> <Image  src='/icons/blow.png'  width={18} height={18} alt='tiktok' className=' md:w-[25px] md:h-[25px]'/></div>
        <a href='#Home' className='text-start '>Home</a>
        <a  href='#About'  className='text-start '>About Us</a>
        <a  href='#Services' className='text-start '>Services</a>
        <a  href='#Team' className='text-start '>Team</a>
        <a  href='#Reviews' className='text-start '>Reviews</a>
        </div>
      </div>

      <div className=' w-full md:w-1/3 items-center grid md:justify-center '>
   <div className=' grid justify-start md:px-5 w-full  '>
     <p className='font-[500] text-white py-2'>Stay Connected</p>
     <InputField placeholder='Enter phone number' onchange={onChangePhoneNumber}  value={phoneNo}/>
     <Button  /> 
   </div>
      </div>

     </div>
     </Card>
     <div className='w-full grid my-2 md:my-4 '>
    <div className='bg-gradient-to-r  from-brown_1 via-[#FFAF00] to-brown_1 h-[1px] opacity-50   w-full'></div>
      <p className='  mx-auto mt-4'>&copy; 2024  Methods Sisterlocks. All rights reserved</p>
     </div>
    </div>
    
  )
}

export default Footer
