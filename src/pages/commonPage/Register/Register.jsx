import React, { Component } from 'react';
import Logo from '../../../assets/Logo/LogoImg.png'
import './style.scss'


function Register() {
  return (
    <div className='containerr'>
      <div className="formm">
        <img src={Logo} />
        <h2>Create Account</h2>
        <div className="groupform">
          <label htmlFor="">Full name</label>
          <input type="text" placeholder='Enter your full name' />
          <label htmlFor="">User name</label>
          <input type="text" placeholder='Enter username' />
          <label htmlFor="">Email</label>
          <input type="text" placeholder='Enter your email' />
          <label htmlFor="">Password</label>
          <input type="password" placeholder='Password' />
          <label htmlFor="">Confirm password</label>
          <input type="password" placeholder='Confirm Password' />
          <label htmlFor="">Address</label>
          <input type="text" placeholder='Enter your address' />
          <label htmlFor="">Phone number</label>
          <input type="text" placeholder='Enter your phone number' />
        </div>
        <button className='signin' style={{ background: '#333333' }}>Sign up</button>
      </div>
    </div>
  );
}
export default Register

