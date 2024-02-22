import React from 'react'
import Card from './commons/Card'
import { reviewData } from '@/data/reviews'
import Image from 'next/image'
import ReviewSlider from './ReviewSlider'
import Title from './commons/Title'

function Reviews() {
  
  return (
    <div className=' w-full py-5 bg-[#fdf6ec]'>
    <Card>
    <div className='grid '>
    <Title title='What Clients Are Saying' />
    {/* Reviews */}
    <div className='w-[100%] sm:w-[80%] md:w-[60%] xl:w-[50%] flex mx-auto '>
   <ReviewSlider />
    </div>
    </div>
    </Card>
    </div>
  )
}

export default Reviews
