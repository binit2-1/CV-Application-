import React from 'react'
import '../styles/PersonalDetails.css';

const PersonalDetails = () => {
  return (
    <div className="container">
      <form className="form-pd">
        <h1>Personal Details</h1>
        <label className='label-pd'>Full Name</label>
        <input type = "text" placeholder='e.g. John Doe' className='input-pd' />
        <label className='label-pd'>Email</label>
        <input type = "email" placeholder='e.g. john.doe@example.com' className='input-pd' />
        <label className='label-pd'>Phone Number</label>
        <input type = "tel" placeholder='e.g. +1234567890' className='input-pd' />
        <label className='label-pd'>Address</label>
        <input type = "text" placeholder='e.g. 123 Main St, City, Country' className='input-pd' />
        <label className='label-pd'>LinkedIn profile</label>
        <input type = "text" placeholder='e.g. linkedin.com/in/yourprofile' className='input-pd' />
        <label className='label-pd'>GitHub profile</label>
        <input type = "text" placeholder='e.g. github.com/yourprofile' className='input-pd' />
      </form>
    </div>
  )
}

export default PersonalDetails