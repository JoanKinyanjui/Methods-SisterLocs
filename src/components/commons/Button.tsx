import React from 'react'
import { buttonProps } from './types'

function Button({buttonText,onButtonClick}:buttonProps) {
  return (
    <div>
    <button 
    onClick={onButtonClick}
    className=' w-[120px] md:w-[180px] bg-gradient-to-r from-brown_1  via-[#FFAF00]  to-[#FFAF00] ] my-5  justify-center items-center py-2  mt-4 rounded-[5px]  flex flex-nowrap text-white text-[10px] md:text-[12px]'>
        {buttonText}
    </button>
    </div>
  )
}

export default Button
