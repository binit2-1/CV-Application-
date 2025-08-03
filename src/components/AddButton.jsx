import React from 'react'
import '../styles/AddButton.css';


const AddButton = ({ 
    onClick, 
    buttonText }) => {
  return (
    <div>
      <button className="add-btn-icon" type="button" onClick={onClick} title="Add">
        <svg className="add-icon-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        {buttonText}
      </button>
    </div>
  )
}

export default AddButton
