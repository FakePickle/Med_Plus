import React, { useState } from 'react';
import './Manufacturer.css';
import logo from '../../assets/images/logo.png'
import google from '../../assets/images/google.png'

const Manufacturer = () => {
    const [action, setAction] = useState("Manufacturer Sign Up");

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
                
                    {action === "Manufacturer Sign Up" && (
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


                    {action === "Manufacturer Sign Up" && (
                    <div className='input'>
                        <input type="password" placeholder='Confirm Password'/>
                    </div>
    )}
                </div>
                <div className='start-container'>
                    <div className='start'>START MY FREE TRIAL</div>

                </div>
                <div className='submit-container'>
                    <div className={action === "Manufacturer Sign In" ? "submit gray" : "submit"} onClick={() => { setAction("Manufacturer Sign Up") }}>Sign Up</div>
                    <div className={action === "Manufacturer Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Manufacturer Sign In") }}>Login</div>
                </div>
                <div className="terms-of-service">
                    By Signing up to Medplus, means you agree to our Privacy Policy and Terms of Service
                </div>
            </div>
        </>
    );
};

export default Manufacturer;
