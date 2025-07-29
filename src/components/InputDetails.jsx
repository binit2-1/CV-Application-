import React from 'react'

const InputDetails = (
    labelName,
    labelText,
    type,
    placeholder,
    inputName
) => {
  return (
    <form>
      <label className={labelName}>{labelText}</label>
      <input
        type={type}
        className={inputName}
        placeholder={placeholder}
      />
    </form>
  )
}

export default InputDetails