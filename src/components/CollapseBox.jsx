import React from 'react'
import '../styles/CollapseBox.css';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';


const CollapseBox = ({ title, content = "Test-Text"}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-box">
      <div className="collapse-header">
        <h1>{title}</h1>
        <ChevronDownIcon className={`chevron-icon ${isOpen ? 'open' : ''}`} onClick={toggleCollapse} /> 
      </div>
      <div className="collapse-content">
        {isOpen && content}
      </div>
    </div>
  )
}

export default CollapseBox