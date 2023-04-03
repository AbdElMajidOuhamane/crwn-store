import React from 'react'
import { useNavigate } from 'react-router-dom'
import './directory-item.style.js'
import { BackGroundImage, Body, DirectoryItemContainer } from './directory-item.style.js'

const DirectoryItem = ({category}) => {

  const {imageUrl,title,route}=category
  const navigate=useNavigate()

  const onHandleNavigate=()=>{
    navigate(route);
  }

  return (
    <DirectoryItemContainer onClick={onHandleNavigate}>
        {/* <img /> */}
        <BackGroundImage
        imageUrl={imageUrl}
         />
        <Body>
          <h2>{title}</h2>
          <p>shop now</p>
        </Body>

      </DirectoryItemContainer>
  )
}

export default DirectoryItem