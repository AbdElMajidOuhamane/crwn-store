import { getRedirectResult } from 'firebase/auth'
import React, { useEffect } from 'react'
import SignIn from '../../components/sign-in-form/sign-in-form.component'
import SignUp from '../../components/sign-up-form/sugn-up-form.component'
import { auth,createUserDocumentFromAuth, signInWithGooglePopup,signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils'
import './auth.style.scss'

const Authentication = () => {

    
   

  return (
    <div className='authentication-container'>
        <SignIn />
        <SignUp />
    </div>
  )
}

export default Authentication