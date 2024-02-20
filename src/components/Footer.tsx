import Image from 'next/image'
import React, { useState } from 'react'
import InputField from './commons/InputField'
import Button from './commons/Button';

function Footer() {
  const [phoneNo,setPhoneNo]=useState('');

  const onChangePhoneNumber = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setPhoneNo(e.target.value)
  }

  const onBookNow = () =>{
    console.log('Book Now')
  }

  return (
    <div className='grid px-5 w-screen bg-black_1  text-[12px] md:text-[14px] text-gray_text '>
     <div className='py-5 grid md:flex md:justify-between justify-center gap-8 md:gap-5 my-5 md:my-10 '>

      <div className='w-full md:w-1/3 grid text-start gap-4 mx-auto  justify-start md:justify-center md:px-5  '>
        <p className=' '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae diam suscipit, eleifend est quis, efficitur orci. Nullam molestie turpis mi, ac sagittis arcu luctus eget. Etiam laoreet sit amet augue vel accumsan. Nunc non massa dolor</p>
       <div className='flex items-center gap-2 w-full'>
        <p className=' font-[500] text-white '>Follow us :</p>
        <div className='flex gap-2 flex-shrink-0'>
        <Image  src='/icons/facebook.png'  width={18} height={18} alt='fb' className='md:w-[25px] md:h-[25px] '/>
         <Image  src='/icons/instagram.png'  width={18} height={18} alt='instagram' className=' md:w-[25px] md:h-[25px]'/>
         <Image  src='/icons/tiktok.png'  width={18} height={18} alt='tiktok' className=' md:w-[25px] md:h-[25px]'/>
        </div>
       </div>
      </div>

      <div className='w-full md:w-1/3 grid gap-1 md:gap-2 items-center  md:px-5'>
        <div className='md:mx-auto grid gap-2'>
        <div className='text-start  md:mx-auto'> <Image  src='/icons/tiktok.png'  width={18} height={18} alt='tiktok' className=' md:w-[25px] md:h-[25px]'/></div>
        <p className='text-start '>Home</p>
        <p className='text-start '>About Us</p>
        <p className='text-start '>Services</p>
        <p className='text-start '>Book</p>
        </div>
      </div>

      <div className=' w-full md:w-1/3 items-center grid md:justify-center '>
   <div className=' grid justify-start md:px-5 w-full  '>
     <p className='font-[500] text-white py-2'>Stay Connected</p>
     <InputField placeholder='Enter phone number' onchange={onChangePhoneNumber}  value={phoneNo}/>
     <Button buttonText='Book Now' onButtonClick={onBookNow} /> 
   </div>
      </div>

     </div>

     <div className='w-full grid my-2 md:my-4 '>
    <div className='bg-gradient-to-r  from-brown_1 via-[#FFAF00] to-brown_1 h-[0.8px]   w-full'></div>
      <p className='  mx-auto mt-4'>&copy; 2024  Methods Sisterlocs. All rights reserved</p>
     </div>
    </div>
  )
}

export default Footer
