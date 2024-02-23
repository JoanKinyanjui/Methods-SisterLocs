import { reviewData } from '@/data/reviews'
import Image from 'next/image'
import React from 'react';
import styles from '../styles/globals.module.css'

function ReviewSlider() {
  return (
<>
  <div className="carousel w-full  ">
    
  <div id="item1" className="carousel-item w-full  grid justify-center">
    <div className='grid w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto md:gap-1'>
    <Image src="https://i.pinimg.com/474x/3e/75/ea/3e75ea1eced5809aa745d0ce8c6ca7c9.jpg" alt="profile" width={70} height={70} className='mx-auto rounded-[1000px] w-[80px] h-[80px] md:w-[100px] md:h-[100px]'/>
    <p className='mx-auto text-[15px] font-semibold text-black_1'>Jonas Kamau</p>
    <p className='mx-auto font-light text-[12px] md:text-[13px]'>proffession</p>
      <div className='flex gap-1 mx-auto'>
                {Array.from({ length: 5 }, (_, i) => (
                    <Image key={i} src="/icons/star.png" alt="star" width={15} height={15} />
                  ))}
                </div>
       <p className='text-center mx-auto px-2 text-[10px] sm:text-[12px] md:text-[14px] text-black_1 my-2 w-full '>I had a wonderful experience at Sisterlocks Salon. The staff were friendly and professional, and my hair looks amazing! I highly recommend their services to anyone looking for quality natural hair care.</p>
    </div>
  </div> 
  

  <div id="item2" className="carousel-item w-full  grid justify-center">
    <div className='grid w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto md:gap-1'>
    <Image src="https://i.pinimg.com/474x/3e/75/ea/3e75ea1eced5809aa745d0ce8c6ca7c9.jpg" alt="profile" width={70} height={70} className='mx-auto rounded-[1000px] w-[80px] h-[80px] md:w-[100px] md:h-[100px]'/>
    <p className='mx-auto text-[15px] font-semibold text-black_1'>Jonas Kamau</p>
    <p className='mx-auto font-light text-[12px] md:text-[13px]'>proffession</p>
      <div className='flex gap-1 mx-auto'>
                {Array.from({ length: 5 }, (_, i) => (
                    <Image key={i} src="/icons/star.png" alt="star" width={15} height={15} />
                  ))}
                </div>
       <p className='text-center mx-auto px-2 text-[10px] sm:text-[12px] md:text-[14px] text-black_1 my-2 w-full '>I cannot thank Sisterlocks Salon enough for the incredible transformation they've brought to my hair. From installation to maintenance, they've provided top-notch service. I feel more confident and beautiful than ever!</p>
    </div>
  </div> 

  <div id="item3" className="carousel-item w-full  grid justify-center">
    <div className='grid w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto md:gap-1'>
    <Image src="https://i.pinimg.com/474x/3e/75/ea/3e75ea1eced5809aa745d0ce8c6ca7c9.jpg" alt="profile" width={70} height={70} className='mx-auto rounded-[1000px] w-[80px] h-[80px] md:w-[100px] md:h-[100px]'/>
    <p className='mx-auto text-[15px] font-semibold text-black_1'>Jonas Kamau</p>
    <p className='mx-auto font-light text-[12px] md:text-[13px]'>proffession</p>
      <div className='flex gap-1 mx-auto'>
                {Array.from({ length: 5 }, (_, i) => (
                    <Image key={i} src="/icons/star.png" alt="star" width={15} height={15} />
                  ))}
                </div>
       <p className='text-center mx-auto px-2 text-[10px] sm:text-[12px] md:text-[14px] text-black_1 my-2 w-full '>I've been a loyal client of Sisterlocks Salon for years, and I am consistently impressed by their expertise in styling and caring for my natural hair. The stylists are knowledgeable, and the atmosphere is welcoming. I wouldn't trust anyone else with my hair.</p>
    </div>
  </div> 

  <div id="item3" className="carousel-item w-full  grid justify-center">
    <div className='grid w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto md:gap-1'>
    <Image src="https://i.pinimg.com/474x/3e/75/ea/3e75ea1eced5809aa745d0ce8c6ca7c9.jpg" alt="profile" width={70} height={70} className='mx-auto rounded-[1000px] w-[80px] h-[80px] md:w-[100px] md:h-[100px]'/>
    <p className='mx-auto text-[15px] font-semibold text-black_1'>Jonas Kamau</p>
    <p className='mx-auto font-light text-[12px] md:text-[13px]'>proffession</p>
      <div className='flex gap-1 mx-auto'>
                {Array.from({ length: 5 }, (_, i) => (
                    <Image key={i} src="/icons/star.png" alt="star" width={15} height={15} />
                  ))}
                </div>
       <p className='text-center mx-auto px-2 text-[10px] sm:text-[12px] md:text-[14px] text-black_1 my-2 w-full '>Starting my healthy hair journey with Sisterlocks Salon was one of the best decisions I've made. They've helped me embrace my natural hair texture and provided invaluable tips for maintaining its health. I've seen remarkable improvement in the condition of my hair since I started coming here</p>
    </div>
  </div> 

  <div id="item5" className="carousel-item w-full  grid justify-center">
    <div className='grid w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto md:gap-1'>
    <Image src="https://i.pinimg.com/474x/3e/75/ea/3e75ea1eced5809aa745d0ce8c6ca7c9.jpg" alt="profile" width={70} height={70} className='mx-auto rounded-[1000px] w-[80px] h-[80px] md:w-[100px] md:h-[100px]'/>
    <p className='mx-auto text-[15px] font-semibold text-black_1'>Jonas Kamau</p>
    <p className='mx-auto font-light text-[12px] md:text-[13px]'>proffession</p>
      <div className='flex gap-1 mx-auto'>
                {Array.from({ length: 5 }, (_, i) => (
                    <Image key={i} src="/icons/star.png" alt="star" width={15} height={15} />
                  ))}
                </div>
       <p className='text-center mx-auto px-2 text-[10px] sm:text-[12px] md:text-[14px] text-black_1 my-2 w-full '>Sisterlocks Salon has completely transformed my hair care routine. Their dedication to promoting healthy hair and celebrating natural beauty is truly inspiring. The results speak for themselves - my hair has never looked better! I'm grateful to have found such a fantastic salon.</p>
    </div>
  </div> 

  

</div> 

  </>
  )
}

export default ReviewSlider;
