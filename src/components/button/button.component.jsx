import React from 'react'
import "./button.style.scss"

const BUTTON_TYPES={
    google:"google-sign-in",
    inverted:"inverted"
}

const Button = ({children,buttonType,...otheProps}) => {
  return (
    <button className={`button-container ${BUTTON_TYPES[buttonType]}`} {...otheProps}>
        {children}
    </button>
  )
}

export default Button