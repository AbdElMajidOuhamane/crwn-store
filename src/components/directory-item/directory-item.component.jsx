import React from 'react'
import './directory-item.style.scss'

const DirectoryItem = ({category}) => {
  return (
    <div className="directory-item-container">
        {/* <img /> */}
        <div className="background-image" style={{
          backgroundImage:`url(${category.imageUrl})`
        }} />
        <div className="body">
          <h2>{category.title}</h2>
          <p>shop now</p>
        </div>

      </div>
  )
}

export default DirectoryItem