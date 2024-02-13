import { services } from '@/data/services'
import React from 'react'

function Services() {
  return (
    <div className='grid w-11/12 md:w-10/12 mx-auto'>

     <div className='my-2'>
    <p className='text-[20px] md:text-[24px] font-semibold text-black_1'>Our Services</p>
    <div className='h-1 w-[50px] bg-[navajowhite]  '></div>
    </div>

    <div>
      <p className='text-start  md:text-start text-[14px] md:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend in risus a tincidunt. Donec pharetra est neque, a malesuada massa dignissim vitae.</p>
    </div>

     <div className="carousel carousel-center w-full py-8 space-x-4  rounded-box">
    {services.map((item)=>(
       <div className="carousel-item relative" key={item.id}>
       <img src={item.image} className="rounded-md" />
       {/* <div className="absolute inset-0 rounded-md" style={{ backgroundImage: 'linear-gradient(to top, #212121,transparent,transparent)' }}></div> */}
       <div className='absolute bottom-0 px-2 py-1'>
        <p className='text-[14px] md:text-[17px] font-medium textwhite text-[navajowhite]'>{item.title}</p>
        <p className='text-[12px] md:text-[14px] text-gray_text'>{item.description}</p>
       </div>
     </div> 
    ))}
</div>
    </div>
  )
}

export default Services
