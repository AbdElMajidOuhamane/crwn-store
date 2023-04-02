import { useContext } from 'react'
import CheckOutItem from '../../components/checkout-items/checkout-item.component'
import { CartContext } from '../../contexts/cart.context'
import "./checkout.style.scss"



const CheckOut = () => {
    const {cartItem,cartTotal}=useContext(CartContext)
  return (
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItem.map((item)=>(<CheckOutItem key={item.id} item={item}/> ))}
        <span className='total'>Total : ${cartTotal}  </span>
    </div>
  )
}

export default CheckOut