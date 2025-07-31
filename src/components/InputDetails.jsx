import React from 'react'
import '../styles/InputDetails.css'

const InputDetails = ({
    labelText,
    type,
    placeholder,
    value,
    onChange
}) => {
  return (
    <form className='form-pd'>
      <label className='label-pd'>{labelText}</label>
      <input
        type={type}
        className='input-pd'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </form>
  )
}

export default InputDetails