import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { createAuthWithEmailAndPassword,createUserDocumentFromAuth, signInWithGooglePopup,signAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import Button,{BUTTON_TYPES} from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import "./sign-in-form.style.scss"




const defaultFormFields={
    email:"",
    password:"",
}

const SignIn = () => {
    const [formField,setFormField]=useState(defaultFormFields)

    const {email,password}=formField;
   


    const resetFormFields=()=>{
        setFormField(defaultFormFields)
    }

    // console.log(formField)

     const signInWithGoogle= async ()=>{
     await signInWithGooglePopup(); 
       
       
    }
  
    const handleSubmit =async(e)=>{
        e.preventDefault();
        try {
            const {user} =await signAuthWithEmailAndPassword(email,password)
            // setCurrntUser(user)
            resetFormFields()

        } catch (error) {
            
            switch(error.code){

                case "auth/wrong-password":
                    alert("incorrect password");
                    break;
                case "auth/user-not-found":
                    alert(" The email doesn't exist")
                    break;
                default:
                    console.log(error);
            }
            

           
        }


    }
    const handleChange =(e)=>{
        const {name,value}=e.target;
        setFormField({...formField,[name]:value})


    }
   
  return (
    <div className='sign-up-container'>
        <h2>Already have an account </h2>
        <span>Sign up with your email and password </span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Email"
             type="email" required
              onChange={handleChange}
               name="email"
                value={email}/>
         
            <FormInput label="Password"
             type="password"
              required
               onChange={handleChange}
                name="password"
                 value={password} />
                 <div className='buttons-container' >
            <Button type='submit'>Sign UP</Button>
            <Button type='button' buttonType={BUTTON_TYPES.google} onClick={signInWithGoogle}>Sign Google</Button>
            </div>
        </form>
    </div>
  )
}

export default SignIn