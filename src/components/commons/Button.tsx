import React, { useState } from 'react'
import { buttonProps } from './types'
import BookNowModal from './BookNowModal'

function Button() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
    <button 
    onClick={handleClickOpen}
    className=' w-[120px] md:w-[180px] bg-gradient-to-r from-brown_1  via-[#FFAF00]  to-[#FFAF00]  my-5  justify-center items-center md:py-2  mt-4 rounded-[5px]  flex flex-nowrap text-white text-[12px] md:text-[14px] '>
        {/* {buttonText} */}
        <span className="span-mother">
    <span>B</span>
    <span>o</span>
    <span>o</span>
    <span>k</span>
    &nbsp;
    <span>N</span>
    <span>o</span>
    <span>w</span>
  </span>
  <span className="span-mother2">
    <span>B</span>
    <span>o</span>
    <span>o</span>
    <span>k</span>
    &nbsp;
    <span>N</span>
    <span>o</span>
    <span>w</span>
  </span>
    </button>
    <BookNowModal  handleClose={handleClose} open={open}/>
    </div>
  )
}

export default Button
