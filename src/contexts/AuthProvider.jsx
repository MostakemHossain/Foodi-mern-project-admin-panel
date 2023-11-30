import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
const auth = getAuth(app);
 
export const AuthContext= createContext();
const googleProvider= new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading, setLoading] = useState(true);

    // create account
    const createUser=(email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password);
    }

    // sign up with gmail Account
    const signUpWithGmail=()=>{
      return signInWithPopup(auth,googleProvider);

    }
    // login using email & password
    const login= (email,password)=>{
      return signInWithEmailAndPassword(auth,email,password);
    }

    // logout
    const logOut=()=>{
      signOut(auth);

    }

    // update profile
    const updateUserProfile=({name,photoURL})=>{
    return  updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photoURL,
      })

    }

    // check signIn user

    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
          setUser(currentUser);
          setLoading(false);
        }
      })
      return ()=>{
        return unsubscribe();
      }
    }),[]

    const authInfo={
        user,
        loading,
        createUser,
        signInWithPopup,
        signUpWithGmail,
        login,
        logOut,
        updateUserProfile,

    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider