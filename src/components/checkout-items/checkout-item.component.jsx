import React from 'react'
import "./checkout-item.style.scss"
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const CheckOutItem = ({item}) => {
  const {name,imageUrl,price,quantity}=item;

  const{clearItemFromCart,addItemToCard,removeItemToCart}=useContext(CartContext)


  const clearItemHandler=()=>{
    clearItemFromCart(item)
  }
  const addItemHandler=()=>{
    addItemToCard(item)
  }


  const removeItemHandler=()=>{
    removeItemToCart(item)
  }
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`}/>
      </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
          <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
          <span className='value'>{quantity}</span>
             <div className='arrow' onClick={addItemHandler}>&#10095;</div>
          </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={clearItemHandler} >&#10005;</div>
    </div>
  )
}

export default CheckOutItem