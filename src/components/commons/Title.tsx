import React from 'react'
  type TitleProps = {
    title: string;
  }
function Title({title}:TitleProps) {
  return (
    <div className='text-[20px] md:text-[30px] text-black_1 mx-auto capitalize font-semibold py-5 font-[System]'>
      {title}
    </div>
  )
}

export default Title
