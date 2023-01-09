// Import the functions you need from the SDKs you need
// @ts-nocheck

import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyActbvWvQ9TQdBT51adIm-TCpxg0gZ5S7Q",
    authDomain: "todo-list---rtk.firebaseapp.com",
    databaseURL: "https://todo-list---rtk-default-rtdb.firebaseio.com",
    projectId: "todo-list---rtk",
    storageBucket: "todo-list---rtk.appspot.com",
    messagingSenderId: "576225310458",
    appId: "1:576225310458:web:3f3bf9e452b36787a0fb43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();


// sign up func
interface ISignUp {
    email: string,
    password: string,
}

export const signUp = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log(userCredential)
        const user = userCredential.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            email: user.email,
        });
        return true
    } catch (error) {
        return {error: error.message}
    }
};

// sign in func

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        return true
    } catch (error) {
        return {error: error.message}
    }
};




