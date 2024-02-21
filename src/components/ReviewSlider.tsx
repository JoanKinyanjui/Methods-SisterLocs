import { reviewData } from '@/data/reviews'
import Image from 'next/image'
import React from 'react';
import styles from '../styles/globals.module.css'

function ReviewSlider() {
  return (
    <div className="carousel w-full  ">
  {reviewData.map((review, index) => (
      <div id={review.slideNo} className="carousel-item relative w-full h-[50vh]   " key={index}>
      <div className='bg-white w-[80%] sm:w-[80%] md:w-[60%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-5'>
          <div>
            <Image src="https://i.pinimg.com/474x/3e/75/ea/3e75ea1eced5809aa745d0ce8c6ca7c9.jpg" alt="profile" width={70} height={70} className='mx-auto rounded-[100px] w-[70px] h-[70px]'/>
            <div className='grid justify-center py-2'>
                <p className='mx-auto text-[15px] font-semibold text-black_1'>{review.name}</p>
                <p className='mx-auto font-light text-[12px] md:text-[13px]'>{review.proffession}</p>
                <div className='flex gap-1'>
                {Array.from({ length: review.rating }, (_, i) => (
                    <Image key={i} src="/icons/star.png" alt="star" width={15} height={15} />
                  ))}
                </div>
            </div>
          </div>
          <div><p className='text-center mx-auto px-2 text-[12px] md:text-[14px] text-black_1'>{review.review}</p></div>
     </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2 items-center">
        <a href={review.before} className={`"text-black_1 font-[700] flex justify-center items-center w-[35px] h-[35px] md:w-[48px] md:h-[48px] rounded-full bg-gradient-to-r from-brown_1  via-[#FFAF00]  to-[#FFAF00] ${styles.TextGradient}`}>❮</a> 
        <a href={review.after} className={`"text-black_1 font-[700] flex justify-center items-center w-[35px] h-[35px] md:w-[48px] md:h-[48px] rounded-full bg-gradient-to-r from-brown_1  via-[#FFAF00]  to-[#FFAF00] ${styles.TextGradient}`}>❯</a>
      </div>
    </div> 
  ))}
  </div>
  )
}

export default ReviewSlider
