import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { createAuthWithEmailAndPassword,createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import "./sign-up-form.style.scss"




const defaultFormFields={
    displayName:"",
    email:"",
    password:"",
    confirmPassword:""
}

const SignUp = () => {
    const [formField,setFormField]=useState(defaultFormFields)

    const {displayName,email,password,confirmPassword}=formField;


    const resetFormFields=()=>{
        setFormField(defaultFormFields)
    }

    const handleSubmit =async(e)=>{
        e.preventDefault();
        if(password!==confirmPassword){
            alert("password do not match")
            return;
        }
        try {
            const {user}=await createAuthWithEmailAndPassword(email,password);
            
            await createUserDocumentFromAuth(user,{displayName});
            resetFormFields()

        } catch (error) {
            if(error.code === "auth/email-already-in-use"){
                alert("this email already used");
            }else{
                 console.log("user creation ",error)
            }


           
        }


    }
    const handleChange =(e)=>{
        const {name,value}=e.target;
        setFormField({...formField,[name]:value})


    }
   
  return (
    <div className='sign-up-container'>
        <h2>Don't Have An Account ?</h2>
        <span>Sign up with your email and password </span>
        <form onSubmit={handleSubmit}>
       
            <FormInput label="Display Name"
             type="text" required
              onChange={handleChange}
               name="displayName"
                value={displayName} />
      
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
         
            <FormInput label="Confirm Password "
             type="password" required
              onChange={handleChange}
               name="confirmPassword"
               value={confirmPassword} />
            <Button type='submit'>Sign UP</Button>
        </form>
    </div>
  )
}

export default SignUp