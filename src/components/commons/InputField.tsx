import React from 'react'
import { inputFieldProps } from './types'

function InputField({placeholder,onchange}:inputFieldProps) {
  return (
    <div>
          <input 
          placeholder={placeholder}
          onChange={onchange} 
          className='py-2 w-full font-[300] bg-transparent px-2 md:px-3 rounded-[5px] focus:outline-none  border-[1px] border-[#FFD70080] text-[12px]'/>
    </div>
  )
}

export default InputField
