import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from "../utils/validation"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [formErrrors, setFormErrrors] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    const handleButtonClick = (event) => {
        const message = checkValidData(email.current.value, password.current.value);
        setFormErrrors(message);
        if (message) return message;
        if (!isSignInForm) {
            // sing up login
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setFormErrrors(errorCode + "_" + errorMessage);
                });
        } else {
            // sing in login
        }
    }
    return (
        <div>
            <Header />
            <form onSubmit={(e) => e.preventDefault()} className='w-auto m-auto rounded-md ' style={{ margin: "0 auto", width: "400px", padding: "48px 68px", background: "rgba(0, 0, 0, 0.8)" }}>
                <h1 className="text-white m-2">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (<input type='text' ref={fullName} placeholder='Enter the full name' className='p-2 m-2 rounded-md text-sm bg-gray-700 w-full' />)}
                <input ref={email} type='text' placeholder='Email Address' className='p-2 m-2 rounded-md text-sm bg-gray-700 w-full	' />
                <input ref={password} type='password' placeholder='Password' className='p-2 m-2 rounded-md text-sm bg-gray-700 w-full' />
                <p className='text-red-500'>{formErrrors}</p>
                <button onClick={handleButtonClick} className='m-2 bg-red-700 p-2 rounded-md text-white text-sm w-full	' >{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='text-white cursor-pointer m-2' onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up" : "Already resigster Sign in"} now.</p>
            </form>
        </div>
    )
}

export default Login