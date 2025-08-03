import React from 'react'
import '../styles/AddButton.css';

const AddButton = ({
    buttonText
}) => {
  return (
    <div>
        <button className="button" type="button">
            <span className="button__text">{buttonText}</span>
            <span className="button__icon">
                <svg className="svg" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" x2="12" y1="5" y2="19"></line>
                    <line x1="5" x2="19" y1="12" y2="12"></line>
                </svg>
            </span>
        </button>
    </div>
  )
}

export default AddButton
