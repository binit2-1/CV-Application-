import React from 'react'

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