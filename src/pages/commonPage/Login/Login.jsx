import React from 'react';
import './style.scss';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Logo from '../../../assets/Logo/LogoImg.png'
 
 function Login() {
   return (
    <div className='container'>
    <div className="form">
      <img src={Logo} />
      <h2>Login</h2>
      <p className='emaill'>Email</p>
      <input type="text" placeholder='Enter your email'/>
      <p className='pass'>Password</p>
      <input type="password" placeholder='Password' />
      <a href="#"><p>Forgot Password?</p></a>
      <button className='signin' style={{background:'#333333'}}>Sign in</button>
      <p>Or Continue With</p>
      <button className='fb'><FaFacebook size={20}/></button>
      <button className='gg'><FaGoogle size={20}/></button>
      <p style={{marginTop: '70px'}}>Don't have an account yet? <a href="#"><span style={{color:'orange'}}>Sign up for free</span></a></p>
    </div>
  </div>
   )
 }
 
 export default Login