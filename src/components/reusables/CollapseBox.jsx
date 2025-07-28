import React from 'react'
import '../../styles/CollapseBox.css';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

const CollapseBox = ({ title, content }) => {
  return (
    <div className="collapse-box">
      <div className="collapse-header">
        <h1>{title}</h1>
        <ChevronDownIcon className="chevron-icon" />
      </div>
      <div className="collapse-content">
        {content}
      </div>
    </div>
  )
}

export default CollapseBox