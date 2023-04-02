import { Fragment,useContext} from "react"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import {LogoContainer, NavigationContainer, NavLink, NavLinks} from "./navigation.style.js"
import { UserContext } from "../../contexts/user.context"
import {signOutAuth} from "../../utils/firebase/firebase.utils"
import CardIcon from "../../components/card-icon/card-icon.component"
import DropDown from "../../components/dorp-down-card/cart-dropdwon.component"
import { CartContext } from "../../contexts/cart.context"


const Navigation =()=>{
  const { currentUser }=useContext(UserContext)
  const {isCartOpen} =useContext(CartContext)
  
  // console.log(currentUser)
  return(
    <Fragment>
      <NavigationContainer>
        <LogoContainer  to="/">
            <CrwnLogo className="logo" />
        </LogoContainer>
            <NavLinks>
                <NavLink to="/shop">Shop</NavLink>
                {
                  currentUser ?(
                    <NavLink as='span' onClick={signOutAuth}>SIGNOUT</NavLink> )
                    :(<NavLink className="nav-link" to="/auth">Sign In</NavLink>
                    
                  )
                }
               <CardIcon />


            </NavLinks>
            {isCartOpen && <DropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation