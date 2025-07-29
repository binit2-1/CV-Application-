import React, { useRef, useState } from 'react';
import '../styles/CollapseBox.css';
import { ChevronDownIcon } from '@heroicons/react/16/solid';


const CollapseBox = ({ title, content = "Test-Text"}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    if (!isOpen) {
      setHeight(contentRef.current.scrollHeight);
      setIsOpen(true);
    } else {
      setHeight(contentRef.current.scrollHeight); 
      setTimeout(() => {
        setHeight(0);
        setIsOpen(false);
      }, 10);
    }
  };

  return (
    <div className="collapse-box">
      <div className="collapse-header">
        <h1>{title}</h1>
        <ChevronDownIcon className={`chevron-icon ${isOpen ? 'open' : ''}`} onClick={toggleCollapse} /> 
      </div>
      <div
        className={`collapse-content${isOpen ? ' open' : ''}`}
        style={{ maxHeight: `${isOpen ? height : 0}px` }}
        ref={contentRef}
      >
        {content}
      </div>
    </div>
  )
}

export default CollapseBox