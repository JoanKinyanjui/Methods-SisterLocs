import Image from 'next/image'
import React from 'react'

function WhatsappIcon() {
  return (
    <div onClick={() => {
        const phoneNumber = "+254722810585";
        const message = "Hello, I'm interested in your services.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappUrl;
      }}>
        
      <Image  src='/icons/whatsaap.svg' alt='whatsapp Icon for sisterlocs slaon in nairobi' height={50} width={50} className='md:w-[70px] md:h-[70px]'/>
    </div>
  )
}

export default WhatsappIcon
