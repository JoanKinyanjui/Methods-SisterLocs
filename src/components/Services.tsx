import { services } from '@/data/services'
import React from 'react'
import Card from './commons/Card'
import Title from './commons/Title'

function Services() {
  return (
   <Card>
<div className='grid w-full mx-auto'>

<div className='my-2 mx-auto text-center'>
  <Title title='Our Sercvices'/>
</div>

<div className='md:w-[90%] mx-auto'>
 <p className='text-center text-[14px] md:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend in risus a tincidunt. Donec pharetra est neque, a malesuada massa dignissim vitae.</p>
</div>

<div className="carousel carousel-center w-full py-8 space-x-4  rounded-box">
{services.map((item)=>(
  <div className="carousel-item relative w-[200px] md:w-[300px] h-[280px] md:h-[400px]" key={item.id}>
  <img src={item.image} className="rounded-md h-full w-full" />
  <div className="absolute inset-0 rounded-md" style={{ backgroundImage: 'linear-gradient(to top, black,transparent,transparent)' }}></div>
  <div className='absolute bottom-0 px-2 py-1'>
   <p className='text-[14px] md:text-[17px] font-medium text-white '>{item.title}</p>
   <p className='text-[10px] md:text-[12px] text-white font-thin'>{item.description}</p>
  </div>
</div> 
))}
</div>
</div>
   </Card>
  )
}

export default Services
