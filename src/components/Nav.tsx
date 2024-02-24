"use client"
import { useState } from "react";
import styles from '../styles/globals.module.css'


function Nav() {
  const [show,setShow] = useState(false);

  return (
    <div className='fixed top-0 z-50 bg-white  w-full h-[50px] md:h-[70px]  mx-auto text-[System] grid items-center'>
   <div className=" w-11/12 md:w-[80%] xl:w-[70%] flex justify-between  mx-auto items-center cursor-pointer ">
   <div className={`bg-gradient-to-r from-brown_1 via-[#FFAF00] to-brown_1 text-[18px] md:text-[24px] font-[700] font-frank ${styles.TextGradient}`}>Methods Sisterlocs</div>

<div className=''>
  <ul className='md:flex gap-8 hidden text-black_1 opacity-85 text-[15px]  font-[600]'>
    <li className=" hover:scale-105" ><a href='#About'>About</a></li>
    <li  className="hover:scale-105"  ><a href='#Services'>Services</a></li>
    <li  className="hover:scale-105"><a  href='#Team'>Team</a></li>
    <li  className="hover:scale-105" ><a href='#Reviews'>Reviews</a></li>
  </ul>

<div>
<div className={` ${show ? 'hidden' : 'grid'} flex md:hidden  text-black_1 relative `} onClick={()=>setShow(!show)}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <defs>
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" style={{stopColor:"#8B4513",stopOpacity:"1"}} />
      <stop offset="50%" style={{stopColor:"#FFAF00",stopOpacity:"1"}} />
      <stop offset="100%" style={{stopColor:"#8B4513",stopOpacity:"1"}} />
    </linearGradient>
  </defs>
  <path stroke="url(#gradient1)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
</svg>
  </div>

  <div className={` ${show ? 'grid' : 'hidden'}  bg-white z-50  md:hidden absolute top-0 right-0 xxs:w-[60%] xs:w-[50%] sm:w-[40%] grid mt-4  rounded-l-[5px] px-4 pt-2 pb-4 gap-1 max-h-max`}>
   <div className='flex justify-between w-full gap-5 ' onClick={()=>{setShow(!show)}}>
   <div className={`bg-gradient-to-r from-brown_1 via-[#FFAF00] to-brown_1 text-[15px] font-[700] font-frank ${styles.TextGradient}`}>Methods Sisterlocs</div>
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
  <defs>
    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{stopColor:"#8B4513",stopOpacity:"1"}} />
      <stop offset="50%" style={{stopColor:"#FFAF00",stopOpacity:"1"}} />
      <stop offset="100%" style={{stopColor:"#8B4513",stopOpacity:"1"}} />
    </linearGradient>
  </defs>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="none" stroke="url(#gradient2)" stroke-width="1"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="none" stroke="url(#gradient2)" stroke-width="1"/>
</svg>

    </div>
   <ul className={`gap-2 grid justify-start  `}>
     <li className=" text-[12px] md:text-[16px] font-normal hover:scale-105" ><a href='#About'>About</a></li>
      <li  className="text-[12px] md:text-[16px] font-normal hover:scale-105 "  ><a href='#Services'>Services</a></li>
      <li  className="text-[12px] md:text-[16px] font-normal hover:scale-105 "><a  href='#Team'>Team</a></li>
    <li  className="text-[12px] md:text-[16px] font-normal hover:scale-105 " ><a href='#Reviews'>Reviews</a></li>
    </ul> 
   </div> 
</div>  



</div>
   </div>
</div>

  )}

export default Nav
