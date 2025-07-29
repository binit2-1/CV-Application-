import React from 'react'
import '../styles/InputDetails.css'

const InputDetails = ({
    labelText,
    type,
    placeholder
}) => {
  return (
    <form className='form-pd'>
      <label className='label-pd'>{labelText}</label>
      <input
        type={type}
        className='input-pd'
        placeholder={placeholder}
      />
    </form>
  )
}

export default InputDetails