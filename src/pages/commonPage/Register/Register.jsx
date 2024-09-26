import React, { Component } from 'react';
import Logo from '../../../assets/Logo/LogoImg.png'
import './style.scss'


 function Register() {
  return (
    <div className='container'>
      <div className="formm">
        <img src={Logo}/>
        <h2>Create Account</h2>
        <p className='emaill'>Full name</p>
        <input type="text" placeholder='Enter your full name'/>
        <p className='emaill'>User name</p>
        <input type="text" placeholder='Enter username'/>
        <p className='emaill'>Email</p>
        <input type="text" placeholder='Enter your email'/>
        <p className='pass'>Password</p>
        <input type="password" placeholder='Password' />
        <p className='pass'>Enter password again</p>
        <input type="password" placeholder='Confirm Password' />
        <p className='emaill'>Address</p>
        <input type="text" placeholder='Enter your address'/>
        <p className='emaill'>Phone number</p>
        <input type="text" placeholder='Enter your phone number'/>
        <button className='signin' style={{background:'#333333'}}>Sign up</button>
      </div>
    </div>
  );
}
export default Register

