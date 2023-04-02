import React from 'react'
import Button from '../button/button.component'
import "./cart-dropdown.style.scss"
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import {useNavigate} from "react-router-dom"


const DropDown = () => {
  const {cartItem}=useContext(CartContext)
  const navigate =useNavigate()
  const goToCheckOutHandler=()=>{
    navigate("/checkout");
  }
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {cartItem.map(item => <CartItem cartItem={item} />)}
        </div>
        
        <Button onClick={goToCheckOutHandler} >go check out</Button>



    </div>
  )
}

export default DropDown