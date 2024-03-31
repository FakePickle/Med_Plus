import React, { useState } from 'react';
import './LoginSignup.css';
import logo from '../../assets/images/logo.png'
import google from '../../assets/images/google.png'

const LoginSignup = () => {
    const [action, setAction] = useState("Start Your Free Trial Today!");

    return (
        <>
            <div className="logo-container">
                <img src={logo} alt="" className="logo" />
                <div className='welcome-back'>WELCOME BACK</div>
            </div>
            <div className='container'>
                <div className='header'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
                
                    
                <div className='inputs'>
                <div className='google-input'>
                    <img src={google} alt="Google Logo" className="google-logo" />
                    Sign In With Google
                    </div>
                    <div className='or-use-email'>Or Use Email</div>
                
                    {action === "Start Your Free Trial Today!" && (
                        <>
                        <div className='input'>
                        <input type="text" placeholder='First Name'/>
                        </div>
                        <div className='input'>
                            <input type="text" placeholder='Last Name'/>
                        </div>
                        <div className='input'>
                            <input type="number" placeholder='Age'/>
                        </div>
                        <div className='input'>
                            <input type="tel" placeholder='Phone Number'/>
                        </div>
                        </>
                    )}
                    <div className='input'>
                        <input type="email" placeholder='EMAIL'/>
                    </div>
                    <div className='input'>
                        <input type="password" placeholder='PASSWORD'/>
                    </div>


                    {action === "Start Your Free Trial Today!" && (
                    <div className='input'>
                        <input type="password" placeholder='Confirm Password'/>
                    </div>
    )}
                </div>
                <div className='start-container'>
                    <div className='start'>START MY FREE TRIAL</div>

                </div>
                <div className='submit-container'>
                    <div className={action === "Continue to Your Account." ? "submit gray" : "submit"} onClick={() => { setAction("Start Your Free Trial Today!") }}>Sign Up</div>
                    <div className={action === "Start Your Free Trial Today!" ? "submit gray" : "submit"} onClick={() => { setAction("Continue to Your Account.") }}>Login</div>
                </div>
                <div className="terms-of-service">
                    By Signing up to Medplus, means you agree to our Privacy Policy and Terms of Service
                </div>
            </div>
        </>
    );
};

export default LoginSignup;
