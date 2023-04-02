import  {createContext, useState,useEffect} from 'react'
import {createUserDocumentFromAuth, onAuthStateChangedListner,signOutAuth} from "../utils/firebase/firebase.utils"

export const UserContext=createContext({
    currentUser:null,
    setCurrntUser:()=>null,

})

export const UserProvider=({children})=>{
    const [currentUser,setCurrntUser]=useState(null)
    const value={currentUser,setCurrntUser}

    // signOutAuth()
    useEffect(()=>{
       const unsubscribe= onAuthStateChangedListner((user)=>{
        if(user){
        createUserDocumentFromAuth(user);            
        }
        setCurrntUser(user);
       })

       return unsubscribe;
    }, [])

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}