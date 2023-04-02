import { createContext,useEffect,useState } from "react";

const addCardItem =(cartItem,productAdd)=>{


const existCartItem = cartItem.find((cartItem)=>cartItem.id===productAdd.id)

if(existCartItem){
    return cartItem.map((cartItem)=>cartItem.id===productAdd.id ?
    {...cartItem,quantity:cartItem.quantity+1} :cartItem
    )
    
}


    return [...cartItem,{...productAdd,quantity:1}]
}


const removeCartItem=(cartItem,cartItemToRemove)=>{
    
    //find the card item to remove
    const existCartItem = cartItem.find((cartItem)=>cartItem.id === cartItemToRemove.id)
    //check if quantity ===1
    if(existCartItem.quantity === 1){
        return cartItem.filter((cartItem)=>cartItem.id !== cartItemToRemove.id)
        
    }



    return cartItem.map((cartItem)=>cartItem.id===cartItemToRemove.id ?
    {...cartItem, quantity:cartItem.quantity-1} : cartItem
    )


}



    const clearCartItem =(cartItem,cartItemToClear)=>{
         return cartItem.filter((cartItem)=>cartItem.id !== cartItemToClear.id)
    }


export const CartContext=createContext({
isCartOpen:false,
setIsCardOpen:()=>{},
cartItem:[],
addItemToCard:()=>{},
removeItemFromCart:()=>{},
clearItemFromCart:()=>{},
carCount:0,
cartTotal:0
})

export const CartProvider=({children})=>{

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItem,setCartItem]=useState([]);
    const [cartCount,setCartCount]=useState(0)
    const[cartTotal,setCartTotal]=useState(0)


    useEffect(() => {
    const newCartCount=cartItem.reduce((total,cartItem)=>total+cartItem.quantity,0)  
    setCartCount(newCartCount)
     
    }, [cartItem])
    

     useEffect(() => {
    const newCartTotal=cartItem.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0)  
    setCartTotal(newCartTotal)
     
    }, [cartItem])
    




    const addItemToCard =(productAdd)=>{
        setCartItem(addCardItem(cartItem,productAdd))
    }

    const removeItemToCart =(cartItemToRemove)=>{
        setCartItem(removeCartItem(cartItem,cartItemToRemove))
    }
    const clearItemFromCart =(cartItemToClear)=>{
        setCartItem(clearCartItem(cartItem,cartItemToClear))
    }

    const value={isCartOpen,setIsCartOpen,addItemToCard,cartItem,cartCount,removeItemToCart,clearItemFromCart,cartTotal}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}