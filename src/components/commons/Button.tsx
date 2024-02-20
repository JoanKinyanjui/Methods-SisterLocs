import React from 'react'
import { buttonProps } from './types'

function Button({buttonText,onButtonClick}:buttonProps) {
  return (
    <div>
    <button 
    onClick={onButtonClick}
    className=' bg-gradient-to-r from-brown_1  via-[#FFAF00]  to-[#FFAF00] ] my-5 w-full  justify-center items-center py-2  mt-4 rounded-[5px]  flex flex-nowrap text-white'>
        {buttonText}
    </button>
    </div>
  )
}

export default Button
