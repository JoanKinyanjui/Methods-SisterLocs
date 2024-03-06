import { services } from '@/data/services'
import React from 'react'
import Card from './commons/Card'
import Title from './commons/Title'

function Services() {
  return (
   <Card>
<div className='grid w-full mx-auto'>

<div className='my-2 mx-auto text-center'>
  <Title title='Our Services'/>
</div>

<div className='md:w-[90%] mx-auto'>
 <p className='text-start md:text-center text-[14px] md:text-[16px]'>At Methods Sisterlocks Salon, we're committed to providing exceptional service and helping you look and feel your best. Book your appointment today and experience the difference of our specialized expertise and personalized care.Below are a list of services we offer:</p>
</div>

<div className="carousel carousel-center w-full py-8 space-x-4  rounded-box">
{services.map((item)=>(
  <div className="carousel-item  w-[200px] md:w-[300px] h-[280px] md:h-[400px] relative" key={item.id}>
  <img src={item.image} className="rounded-md h-full w-full "  alt='service'/>
  <div className="absolute inset-0 rounded-md" style={{ backgroundImage: 'linear-gradient(to top, black,transparent,transparent)' }}></div>
  <div className='absolute bottom-0 px-2 py-1'>
   <p className='text-[13px] md:text-[15px] font-normal text-white  '>{item.title}</p>
   {/* <p className='text-[10px] md:text-[12px] text-white font-thin'>{item.description}</p> */}
   <p className='text-[10px] md:text-[12px] font-normal   rounded-sm  py-2 text-white w-[max-content]'>Ksh {item.price}</p>
  </div>
  {/* <p className='absolute top-0 right-0 text-[10px] md:text-[12px] font-normal bg-black_1 m-1 mt-1 px-2 md:px-3 rounded-sm  py-1 md:py-2 text-white w-[max-content]'>Ksh {item.price}</p> */}
</div> 
))}
</div>
</div>
   </Card>
  )
}

export default Services
