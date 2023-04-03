import React from 'react'
import { BaseButton, googleSignInButton, InvertedButton }from"./button.style.js"

export const BUTTON_TYPES={
    base:'base',
    google:"google-sign-in",
    inverted:"inverted"
}
const getButton=(buttonType=BUTTON_TYPES.base)=>(
  {
  [BUTTON_TYPES.base]:BaseButton,
  [BUTTON_TYPES.google]:googleSignInButton,
  [BUTTON_TYPES.inverted]:InvertedButton,
  
}[buttonType]
)

const Button = ({children,buttonType,...otheProps}) => {
  const CustomButton=getButton(buttonType);
  return (
    <CustomButton {...otheProps}>
        {children}
    </CustomButton>
  )
}

export default Button