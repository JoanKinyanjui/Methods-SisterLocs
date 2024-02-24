import Image from 'next/image'
import React from 'react'
import Card from './commons/Card'

function StatsJumbotron() {
  return (
  <Card>
      <div className='grid md:flex md:justify-between font-[System] '>

<div className='grid xs:flex w-full md:w-1/2 py-2.5 justify-center xs:justify-between gap-2 xs:gap-0'>
<div className=' grid  items-start mx-auto w-full  xs:w-1/2 md:w-full px-4  '>
  <div><Image src='/icons/location.png' alt='' width={40} height={40} className='flex-shrink-0 border md:w-[47px] md:h-[47px] mx-auto ' /></div>
  <div className='grid '>
    <p className='text-[14px] md:text-[16px] font-[600] opacity-80 text-black_1 mx-auto '>Convenient Location</p>
    <p className='text-[8px] sm:text-[12px] md:text-[14px] font-light font-[Inter] text-center mx-auto  '>We are located along Kimathi street,Kilimanjaro building</p>
  </div>
</div>
<div className='grid  items-start mx-auto w-full  xs:w-1/2 md:w-full px-4  '>
  <div><Image src='/icons/support.png' alt='' width={40} height={40} className='flex-shrink-0 border md:w-[47px] md:h-[47px] mx-auto ' /></div>
  <div className='grid '>
    <p className='text-[14px] md:text-[16px] font-[600] opacity-80 text-black_1 mx-auto '>Free Consultation</p>
    <p className='text-[8px] sm:text-[12px] md:text-[14px] font-light font-[Inter] text-center mx-auto  '> Reach out to us at +2547 90 234 568 for a free consultation.</p>
  </div>
</div>
</div>

<div className='grid xs:flex  w-full md:w-1/2 py-2.5 justify-center xs:justify-between gap-2 xs:gap-0'>
<div className=' grid  items-start mx-auto w-full  xs:w-1/2 md:w-full px-4  '>
  <div><Image src='/icons/followup.png' alt='' width={40} height={40} className='flex-shrink-0 border md:w-[47px] md:h-[47px] mx-auto ' /></div>
  <div className='grid '>
    <p className='text-[14px] md:text-[16px] font-[600] opacity-80 text-black_1 mx-auto '>Client Follow Up</p>
    <p className='text-[8px] sm:text-[12px] md:text-[14px] font-light font-[Inter] text-center mx-auto  '>We send timely reminders to keep you on track and ensure your locks always look their best.</p>
  </div>
</div>
<div className=' grid  items-start mx-auto w-full  xs:w-1/2 md:w-full px-4 '>
  <div><Image src='/icons/essentialoils.png' alt='' width={40} height={40} className='flex-shrink-0 border md:w-[47px] md:h-[47px] mx-auto ' /></div>
  <div className='grid '>
    <p className='text-[14px] md:text-[16px] font-[600] opacity-80 text-black_1 mx-auto '>Hair Products</p>
    <p className='text-[8px] sm:text-[12px] md:text-[14px] font-light font-[Inter] text-center mx-auto  '>In addition to our salon services, we also offer a curated selection of premium hair products</p>
  </div>
</div>
</div>
</div>
  </Card>
  )
}

export default StatsJumbotron
