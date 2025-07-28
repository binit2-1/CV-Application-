import React from 'react'
import '../../styles/CollapseBox.css';

const CollapseBox = ({ title, content }) => {
  return (
    <div className="collapse-box">
      <h2>{title}</h2>
      <div className="collapse-content">
        {content}
      </div>
    </div> 
  )
}

export default CollapseBox