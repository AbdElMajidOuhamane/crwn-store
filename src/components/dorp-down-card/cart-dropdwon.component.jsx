import React from 'react'
import Button from '../button/button.component'
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.style.js"
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
    <CartDropdownContainer>
        <CartItems>
          {cartItem.length ?
          (cartItem.map(item => <CartItem cartItem={item} />)):
          (<EmptyMessage>YOUR CART IS EMPTY</EmptyMessage>)
          }
        </CartItems>
        
        <Button onClick={goToCheckOutHandler} >go check out</Button>



    </CartDropdownContainer>
  )
}

export default DropDown