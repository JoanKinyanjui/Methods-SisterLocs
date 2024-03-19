import Image from 'next/image'
import React from 'react';
import styles from '../styles/globals.module.css'

function ReviewSlider() {
  return (
<>
  <div className="carousel w-full  ">
    
  <div id="item1" className="carousel-item w-full  grid justify-center">
    <div className='grid w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto md:gap-1'>
    <Image src="https://i.pinimg.com/474x/3e/75/ea/3e75ea1eced5809aa745d0ce8c6ca7c9.jpg" alt="sisterlocks in nairobi" width={70} height={70} className='mx-auto rounded-[1000px] w-[80px] h-[80px] md:w-[100px] md:h-[100px]'/>
    <p className='mx-auto text-[15px] font-semibold text-black_1 opacity-85'>Rebecca Mwangi</p>
    <p className='mx-auto font-light text-[13px] md:text-[14px]'>Business Woman</p>
      <div className='flex gap-1 mx-auto'>
      {Array.from({ length: 5 }, (_, i) => (
  <div key={i} className='w-[15px] h-[15px]'> {/* key moved here */}
    <Image src="/icons/star.png" alt="top rated sisterlocks salon in nairobi" width={15} height={15} className='w-[15px] h-[15px]'/>
  </div>
))}
                </div>
       <p className='text-center mx-auto px-2 text-[10px] sm:text-[12px] md:text-[14px] text-black_1 my-2 w-full '>I had a wonderful experience at Methods Sisterlocks Salon. The staff were friendly and professional, and my hair looks amazing! I highly recommend their services to anyone looking for quality natural hair care.</p>
    </div>
  </div> 
  

  <div id="item2" className="carousel-item w-full  grid justify-center">
    <div className='grid w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto md:gap-1'>
    <Image src="https://i.pinimg.com/474x/e5/f0/4c/e5f04c48228c03b8fb7d695a827ef058.jpg" alt="sisterlocks in nairobi" width={70} height={70} className='mx-auto rounded-[1000px] w-[80px] h-[80px] md:w-[100px] md:h-[100px]'/>
    <p className='mx-auto text-[15px] font-semibold text-black_1 opacity-85'>Stella Wanjiru</p>
    <p className='mx-auto font-light text-[13px] md:text-[14px]'>Doctor</p>
      <div className='flex gap-1 mx-auto'>
     {Array.from({ length: 5 }, (_, i) => (
  <div key={i} className='w-[15px] h-[15px]'> {/* key moved here */}
    <Image src="/icons/star.png" alt="top rated sisterlocks salon in nairobi" width={15} height={15} className='w-[15px] h-[15px]'/>
  </div>
))}

                </div>
       <p className='text-center mx-auto px-2 text-[10px] sm:text-[12px] md:text-[14px] text-black_1 my-2 w-full '>I cannot thank Methods Sisterlocks Salon enough for the incredible transformation they've brought to my hair. From installation to maintenance, they've provided top-notch service. I feel more confident and beautiful than ever!</p>
    </div>
  </div> 

  <div id="item3" className="carousel-item w-full  grid justify-center">
    <div className='grid w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto md:gap-1'>
    <Image src="https://i.pinimg.com/474x/a8/44/40/a844408449b77bddfac6b9c91f8b54f7.jpg" alt="profile" width={70} height={70} className='mx-auto rounded-[1000px] w-[80px] h-[80px] md:w-[100px] md:h-[100px]'/>
    <p className='mx-auto text-[15px] font-semibold text-black_1 opacity-85'>Esther Mwangi</p>
    <p className='mx-auto font-light text-[13px] md:text-[14px]'>Nurse</p>
      <div className='flex gap-1 mx-auto'>
     {Array.from({ length: 5 }, (_, i) => (
  <div key={i} className='w-[15px] h-[15px]'> {/* key moved here */}
    <Image src="/icons/star.png" alt="top rated sisterlocks salon in nairobi" width={15} height={15} className='w-[15px] h-[15px]'/>
  </div>
))}

                </div>
       <p className='text-center mx-auto px-2 text-[10px] sm:text-[12px] md:text-[14px] text-black_1 my-2 w-full '>I've been a loyal client of Methods Sisterlocks Salon for years, and I am consistently impressed by their expertise in styling and caring for my natural hair. The stylists are knowledgeable, and the atmosphere is welcoming. I wouldn't trust anyone else with my hair.</p>
    </div>
  </div> 

  <div id="item4" className="carousel-item w-full  grid justify-center">
    <div className='grid w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto md:gap-1'>
    <Image src="https://i.pinimg.com/474x/96/f3/0a/96f30a146c00e58042a59d28462c14ae.jpg" alt="profile" width={70} height={70} className='mx-auto rounded-[1000px] w-[80px] h-[80px] md:w-[100px] md:h-[100px]'/>
    <p className='mx-auto text-[15px] font-semibold text-black_1 opacity-85'>Betty Omanga</p>
    <p className='mx-auto font-light text-[13px] md:text-[14px]'>Teacher</p>
      <div className='flex gap-1 mx-auto'>
     {Array.from({ length: 5 }, (_, i) => (
  <div key={i} className='w-[15px] h-[15px]'> {/* key moved here */}
    <Image src="/icons/star.png" alt="top rated sisterlocks salon in nairobi" width={15} height={15} className='w-[15px] h-[15px]'/>
  </div>
))}

                </div>
       <p className='text-center mx-auto px-2 text-[10px] sm:text-[12px] md:text-[14px] text-black_1 my-2 w-full '>Starting my healthy hair journey with Methods Sisterlocks Salon was one of the best decisions I've made. They've helped me embrace my natural hair texture and provided invaluable tips for maintaining its health. I've seen remarkable improvement in the condition of my hair since I started coming here</p>
    </div>
  </div> 

  <div id="item5" className="carousel-item w-full  grid justify-center">
    <div className='grid w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto md:gap-1'>
    <Image src="https://i.pinimg.com/474x/b1/6e/a9/b16ea927fa35599cde012c5d9d31e955.jpg" alt="profile" width={70} height={70} className='mx-auto rounded-[1000px] w-[80px] h-[80px] md:w-[100px] md:h-[100px]'/>
    <p className='mx-auto text-[15px] font-semibold text-black_1 opacity-85'>Grace Nzilani</p>
    <p className='mx-auto font-light text-[13px] md:text-[14px]'>Student</p>
      <div className='flex gap-1 mx-auto'>
               {Array.from({ length: 5 }, (_, i) => (
  <div key={i} className='w-[15px] h-[15px]'> {/* key moved here */}
    <Image src="/icons/star.png" alt="top rated sisterlocks salon in nairobi" width={15} height={15} className='w-[15px] h-[15px]'/>
  </div>
))}

                </div>
       <p className='text-center mx-auto px-2  text-[12px] md:text-[14px] text-black_1 my-2 w-full '>Sisterlocks Salon has completely transformed my hair care routine. Their dedication to promoting healthy hair and celebrating natural beauty is truly inspiring. The results speak for themselves - my hair has never looked better! I'm grateful to have found such a fantastic salon.</p>
    </div>
  </div> 

  

</div> 

  </>
  )
}

export default ReviewSlider;
