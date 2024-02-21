"use client"
import { useState } from "react";
import styles from '../styles/globals.module.css'


function Nav() {
  const [show,setShow] = useState(false);

  return (
    <div className=' bg-white w-screen h-[70px]'>
   {/* <div className="flex justify-between w-11/12 md:w-[80%] xl:w-[70%]  mx-auto items-center h-full py-4 cursor-pointer">
   <div className={`bg-gradient-to-r from-brown_1 via-[#FFAF00] to-brown_1 text-[16px] md:text-[20px] font-semibold ${styles.TextGradient}`}>Methods Sisterlocs</div>

<div className=''>
  <ul className='md:flex gap-5 hidden '>
    <li className="text-white text-[10px] sm:text-[12px] md:text-[16px] font-normal">About</li>
    <li  className="text-white text-[10px] sm:text-[12px] md:text-[16px] font-normal" >Services</li>
    <li  className="text-white text-[10px] sm:text-[12px] md:text-[16px] font-normal">Book</li>
  </ul>

<div>
<div className={` ${show ? 'hidden' : 'grid'} flex md:hidden  text-black relative `} onClick={()=>setShow(!show)}>
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
  </div>

  <div className={` ${show ? 'grid' : 'hidden'}  bg-[black] opacity-70 md:hidden absolute top-5 right-0 w-[150px] grid  rounded-[5px] px-4 pt-2 pb-4 gap-1 max-h-max`}>
   <div className='justify-end flex w-full text-white' onClick={()=>{setShow(!show)}}>
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-x" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
    </div>
   <ul className={`gap-2 grid justify-start  `}>
     <li className="text-white text-[10px] sm:text-[12px] md:text-[16px] font-normal">About</li>
      <li  className="text-white text-[10px] sm:text-[12px] md:text-[16px] font-normal" >Services</li>
      <li  className="text-white text-[10px] sm:text-[12px] md:text-[16px] font-normal">Book</li>
    </ul> 
   </div> 
</div>  



</div>
   </div> */}
</div>

  )}

export default Nav
