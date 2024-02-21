import Image from 'next/image'
import React from 'react'
import Card from './commons/Card'

function StatsJumbotron() {
  return (
  <Card>
      <div className='grid md:flex md:justify-between py-[50px] '>

<div className='grid xs:flex w-full md:w-1/2 py-2.5'>
<div className='flex items-center mx-auto '>
  <div><Image src='/icons/support.png' alt='' width={47} height={47} /></div>
  <div className='grid '>
    <p className='text-[14px] md:text-[15px] font-[500] text-black_1'>Support 24/7</p>
    <p className='text-[10px] sm:text-[12px] md:text-[13px] font-light text-center'>Contact us 24 hours a day</p>
  </div>
</div>
<div className='flex items-center mx-auto '>
  <div><Image src='/icons/support.png' alt='' width={47} height={47} /></div>
  <div className='grid '>
    <p className='text-[14px] md:text-[15px] font-[500] text-black_1'>Support 24/7</p>
    <p className='text-[10px] sm:text-[12px] md:text-[13px] font-light text-center'>Contact us 24 hours a day</p>
  </div>
</div>
</div>

<div className='grid xs:flex  w-full md:w-1/2 py-2.5'>
<div className='flex items-center mx-auto '>
  <div><Image src='/icons/support.png' alt='' width={47} height={47} /></div>
  <div className='grid '>
    <p className='text-[14px] md:text-[15px] font-[500] text-black_1'>Support 24/7</p>
    <p className='text-[10px] sm:text-[12px] md:text-[13px] font-light text-center'>Contact us 24 hours a day</p>
  </div>
</div>
<div className='flex items-center mx-auto '>
  <div><Image src='/icons/support.png' alt='' width={47} height={47} /></div>
  <div className='grid '>
    <p className='text-[14px] md:text-[15px] font-[500] text-black_1'>Support 24/7</p>
    <p className='text-[10px] sm:text-[12px] md:text-[13px] font-light text-center'>Contact us 24 hours a day</p>
  </div>
</div>
</div>
</div>
  </Card>
  )
}

export default StatsJumbotron
