import Image from 'next/image'
import React from 'react'

function SpecialOffer() {
  return (
    <div >

    <div className='flex w-full relative h-[50vh] bg-[navajowhite]'>
      <p>Special Offer</p>
      <p>50% OFF</p>
      <p>Rush while it still lasts</p>
    </div>

    <div className='grid w-full h-[50vh]'>
    <div className='flex'>
    <Image src="/images/sisterlocs1.png" alt="Special Offer" layout="fill" objectFit="cover" />
    <Image src="/images/sisterlocs1.png" alt="Special Offer" layout="fill" objectFit="cover" />
    </div>
    <div className='flex'>
    <Image src="/images/sisterlocs1.png" alt="Special Offer" layout="fill" objectFit="cover" />
    <Image src="/images/sisterlocs1.png" alt="Special Offer" layout="fill" objectFit="cover" />
    </div>
    </div>

    </div>
  )
}

export default SpecialOffer
