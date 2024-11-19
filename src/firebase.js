
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDjTnSa9gPurwL8u-mzE42mXT1xv63cRWk",
  authDomain: "netflix-clone-e4d02.firebaseapp.com",
  projectId: "netflix-clone-e4d02",
  storageBucket: "netflix-clone-e4d02.firebasestorage.app",
  messagingSenderId: "98475720724",
  appId: "1:98475720724:web:63a091e9c608ab969b2701",
  measurementId: "G-EP8CC0T5T4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth=getAuth(app);
const db=getFirestore(app);

const signup=async(name,email,pass)=>{
try{
  const res=await createUserWithEmailAndPassword(auth,email,pass);
  const user=res.user;
  await addDoc(collection(db,"user"),{
    uid:user.uid,
    name,
    authProvider:"local",
    email,
  })
  }
catch(error){
  console.log(error);
  alert(error);
  }
}
const login=async(email,pass)=>{
  try {
   await signInWithEmailAndPassword(auth,email,pass)
  } catch (error) {
    console.log(error);
  alert(error);
    
  }
}
const logout=()=>{
  signOut(auth);
}

export {auth,db,login,signup,logout};
