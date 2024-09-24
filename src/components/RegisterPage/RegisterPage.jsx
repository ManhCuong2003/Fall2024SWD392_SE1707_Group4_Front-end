import React, { Component } from 'react';
import Logo from '../../assets/images/Logo.png';
import './style.scss'


export default function Main() {
  return (
    <div className='container'>
      <div className="form">
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


