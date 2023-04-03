import "./card-icon.style.js"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import { CartContainer, ItemCount, ShoppingIcon } from "./card-icon.style.js";

const CardIcon = () => {
    const {isCartOpen, setIsCartOpen,cartCount}=useContext(CartContext);
    const toggleIsCartOpen=()=>{
        setIsCartOpen(!isCartOpen)
    }
    
  return (
    <CartContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon className="shopping-icon" />
        <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartContainer>
  )
}

export default CardIcon