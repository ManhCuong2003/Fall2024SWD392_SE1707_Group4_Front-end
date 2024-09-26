import React, { useState } from 'react';
import './style.scss';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Logo from '../../../assets/Logo/LogoImg.png'
import apiClient from '../../../utils/axios';

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')



  const handleSubmit = async (event) => {
    event.preventDefault() 
    if(!email.trim() || !password.trim()){
      setMsg('Email or Password missing, Please try again')
    }
    try {
      const respond = await apiClient.post('/users/login', {
        email, password
      })

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='container'>
      <div className="form">
        <img src={Logo} />
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="groupform">
            <label >Email</label>
            <input  name='email' type="email" placeholder='Enter your email' style={{ marginBottom: '5%' }} onChange={(e) => setEmail(e.target.value)} />

            <label >Password</label>
            <input  name='password' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            {msg && (<p style={{color: 'red'}}>{msg}</p>)}
          </div>
        
        <a href="#" className='forgot'><p>Forgot Password?</p></a>
        <button className='signin' style={{ background: '#333333' }}>Sign in</button>
        </form>
        <p>Or Continue With</p>
        <button className='fb'><FaFacebook size={20} /></button>
        <button className='gg'><FaGoogle size={20} /></button>
        <p style={{ marginTop: '70px' }}>Don't have an account yet? <a href="#"><span style={{ color: '#dff9fb' }}>Sign up for free</span></a></p>
      </div>
    </div>
  )
}

export default Login