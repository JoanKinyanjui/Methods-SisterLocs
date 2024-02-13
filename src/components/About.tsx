import Image from 'next/image';
import React from 'react';

function About() {
  return (
   <div className='py-[30px] md:py-[50px]'>
     <div className='hidden lg:flex md:justify-between w-full xl:w-10/12 mx-auto '>
      
      <div className='w-[40%] xl:w-1/2 items-center grid px-5 '>
    <div>
    <div className='my-2'>
    <p className='text-[20px] md:text-[24px] font-semibold text-black_1'>About Us</p>
    <div className='h-1 w-[50px] bg-[navajowhite]  '></div>
    </div>
     <p className='text-start md:text-start text-[14px] md:text-[16px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere faucibus enim, sed efficitur ligula ultricies in. Etiam ac sagittis justo, sed ullamcorper arcu. Proin mollis consectetur suscipit. Nulla eget eros nulla. Nam a neque id ex hendrerit aliquet at nec odio. Nulla ut nulla risus. Etiam mattis ipsum a enim tincidunt, id viverra enim vestibulum. Nulla congue dolor sed egestas consectetur. Ut sit amet eleifend elit, sed molestie nisl. Nunc est quam, accumsan nec leo id, feugiat accumsan tellus. Aenean tempor ligula ipsum, in interdum eros rutrum sed. Curabitur tincidunt urna quis ante hendrerit tempor. Vivamus sodales, justo eu porttitor hendrerit, dolor arcu commodo metus, id finibus nisl magna sit amet odio. Fusce nec tellus tortor. Sed feugiat vitae odio nec scelerisque. Morbi egestas mi vel justo semper, et rutrum augue consequat.</p>
   
    </div>
    </div>
 
    <div className="w-[60%] xl:w-1/2 flex justify-end items-center md:h-[700px]">
       <div className="relative flex w-full h-full justify-end items-end">
         {/* Bottom Image */}
         <div className="absolute bottom-0 right-0 h-[600px] w-[60%]">
           <Image src="/images/hero2.png" alt="" layout="fill" objectFit="cover" />
         </div>
         {/* Top Image */}
         <div className="absolute bottom-[50px] right-[350px] h-[450px] w-[40%] z-10">
           <Image src="/images/hero.png" alt="" layout="fill" objectFit="cover" />
         </div>
       </div>
    </div>
 
 </div>

 <div className='grid lg:hidden   md:w-10/12 mx-auto'>
      <div className='w-11/12 mx-auto items-center grid my-5 '>
    <div className=''>
    <div className='my-2'>
    <p className='text-[20px] md:text-[24px] font-semibold text-black_1'>About Us</p>
    <div className='h-1 w-[50px] bg-[navajowhite]  '></div>
    </div>
     <p className='text-start text-[14px] md:text-[16px]'> Lorem ipsum dolor sit consectetur. Ut sit amet eleifend elit, sed molestie nisl. Nunc est quam, accumsan nec leo id, feugiat accumsan tellus. Aenean tempor ligula ipsum, in interdum eros rutrum sed. Curabitur tincidunt urna quis ante hendrerit tempor. Vivamus sodales, justo eu porttitor hendrerit, dolor arcu commodo metus, id finibus nisl magna sit amet odio. Fusce nec tellus tortor. Sed feugiat vitae odio nec scelerisque. Morbi egestas mi vel justo semper, et rutrum augue consequat.</p>
    </div>
    </div>
 
    <div className="w-11/12 mx-auto flex justify-end items-center h-[350px] md:h-[500px] pb-[50px]">
       <div className="relative grid w-full h-full  ">
         {/* Bottom Image */}
         <div className="absolute top-[0px] right-0 h-[200px] md:h-[250px] w-full ">
         <Image src="/images/hero.png" alt="" layout="fill" objectFit="cover" />
         </div>
         {/* Top Image */}
         <div className="absolute  top-[150px]  md:top-[180px] rigt-0 h-[150px] md:h-[180px] w-[200px]  z-10 rounded-[300px]">
         <Image src="/images/hero2.png" alt="" layout="fill" objectFit="cover" />
         </div>
       </div>
    </div>
 
 </div>
   </div>


    
  )
}

export default About
