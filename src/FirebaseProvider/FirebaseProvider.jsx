import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import auth from "../firebase/firebase.config";
  import axios from "axios";
  
  export const AuthContext = createContext(null);
  // social auth provider
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  
  const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    // console.log(user);
    // create user
    const createUser = (email, password) => {
      setLoading(false);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    // sign in user
    const signInUser = (email, password) => {
      setLoading(false);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    // google login
    const googleLogin = () => {
      setLoading(false);
      return signInWithPopup(auth, googleProvider);
    };
    // github login
    const githubLogin = () => {
      setLoading(false);
      return signInWithPopup(auth, githubProvider);
    };
  
    // logout
    const logout = () => {
      setUser(null);
      return signOut(auth);
    };
  
    // observer
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        const userEmail = user?.email || user?.email;
        const loggedUser = {email: userEmail};
        if (user) {
         
         
          axios.post('https://food-server-rho.vercel.app/jwt', loggedUser,{
           withCredentials: true
          })
          .then(res =>{
            console.log("token" , res.data);
          })
        }
        else{
          axios.post('https://food-server-rho.vercel.app/logout', loggedUser,{
            withCredentials: true
           })
           .then(res =>{
            console.log("token logout" , res.data);
          })
        }
  
        setLoading(false);
      });
      return () => {
        unSubscribe();
      };
    }, []);
  
    const allValues = {
      createUser,
      signInUser,
      googleLogin,
      githubLogin,
      logout,
      user,
      setUser,
      loading,
    };
    return (
      <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
    );
  };
  
  export default FirebaseProvider;
  