import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        debugger;
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <form className='w-auto m-auto rounded-md ' style={{ margin: "0 auto", width: "400px", padding: "48px 68px", background: "rgba(0, 0, 0, 0.8)" }}>
                <h1 className="text-white m-2">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (<input type='text' placeholder='Enter the full name' className='p-2 m-2 rounded-md text-sm bg-gray-700 w-full' />)}
                <input type='text' placeholder='Email Address' className='p-2 m-2 rounded-md text-sm bg-gray-700 w-full	' />
                <input type='password' placeholder='Password' className='p-2 m-2 rounded-md text-sm bg-gray-700 w-full' />
                <button className='m-2 bg-red-700 p-2 rounded-md text-white text-sm w-full	' >{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='text-white cursor-pointer m-2' onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up" : "Already resigster Sign in"} now.</p>
            </form>
        </div>
    )
}

export default Login