import React from 'react'
import "./product-card.style.scss"
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import Button,{BUTTON_TYPES} from '../button/button.component'

const ProductCard = ({product}) => {

  const addProductToCart=()=>{addItemToCard(product)}

  const {addItemToCard}=useContext(CartContext)
    const {name,price,imageUrl}=product;
  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType={BUTTON_TYPES.inverted} onClick={addProductToCart} >Add To The Card</Button>
    </div>
  )
}

export default ProductCard