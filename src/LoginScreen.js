import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
    
    return (
        <div className='LoginScreen'>
            <div className="LoginScreen_Background">
                <img
                className="LoginScreen_logo"
                src="https://fontmeme.com/permalink/210301/cebbe7e9d6ab45bf807181b7a497ef96.png"
                alt=""
                />
                <button onClick={() => setSignIn(true)} className="LoginScreen_button">Sign In</button>

                <div className='LoginScreen_gradient'/>
            </div>
            <div className="LoginScreen_body">
                {signIn ? (
                    <SignUpScreen/>
                ) : (
                    <>
                    <h1>Unlimited films, TV programmes and 
                    more.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                    <div className="LoginScreen_input">
                        <form>
                        <input type='email'
                        placeholder=' Email Address'
                        />
                        <button onClick={() => setSignIn(true)} className='LoginScreen_getStarted'>
                            GET STARTED
                        </button>
                        </form>
                    </div>
                </>
                )}
                
            </div>
        </div>
    )
}

export default LoginScreen
