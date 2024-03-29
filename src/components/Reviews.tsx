import React from 'react'
import Card from './commons/Card'
import Image from 'next/image'
import ReviewSlider from './ReviewSlider'
import Title from './commons/Title'

function Reviews() {
  
  return (
    <div className=' w-full py-5 md:py-8 bg-[#fdf6ec]'>
    <Card>
    <div className='grid '>
    <Title title='What Clients Are Saying' />
    {/* Reviews */}
   <ReviewSlider />
    </div>
    </Card>
    </div>
  )
}

export default Reviews
