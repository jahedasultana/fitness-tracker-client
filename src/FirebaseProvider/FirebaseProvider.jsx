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
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null);
// social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  console.log(user);
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

  // save user
  const saveUser = async user => {
    const currentUser = {
      email: user?.email,
      role: 'member',
      status: 'Verified',
    }
    const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/user`, currentUser)
    return data
  }

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {


      if (user) {
        setUser(user);
        saveUser(user);
        // get token and store client
        const userInfo = {email: user.email};
        axiosPublic.post('/jwt', userInfo)
        .then(res =>{
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token)
          }
        })
      }
      else{
        // Todo: remove token(if token stored in the client side: local storage, caching, in memory)
        localStorage.removeItem('access-token');
      }

      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [axiosPublic]);

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
