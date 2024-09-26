import React, { useState } from 'react';
import Logo from '../../../assets/Logo/LogoImg.png'
import './style.scss'
import apiClient from '../../../utils/axios';



function Register() {
  const [fullName, setFullName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')


  const [msg, setMsg] = useState({})




  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!email.trim()) {
      setMsg({
        emailError: 'Please enter your email'
      })
    }
    if (!fullName.trim()) {
      setMsg({
        fullNameError: 'Please enter your full name'
      })
    }
    if (!userName.trim()) {
      setMsg({
        userNameError: 'Please enter your user name'
      })
    }
    if (!confirmPassword.trim()) {
      setMsg({
        confirmPasswordError: 'Please confirm your password correctly'
      })
    }
    if (!password.trim()) {
      setMsg({
        passwordError: 'Please enter your password'
      })
    }
    if (!address.trim()) {
      setMsg({
        addressError: 'Please enter your address'
      })
    }
    if (!phone.trim()) {
      setMsg({
        phoneError: 'Please enter your phone number'
      })
    }
    try {
      const respond = await apiClient.post('/users/register', {
        email, password, phone, address, confirmPassword, userName, fullName
      })

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='containerr'>
      <div className="formm">
        <img src={Logo} />
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="groupform">
            <label>Full name</label>
            <input  type="text" placeholder='Enter your full name' onChange={(e) => setFullName(e.target.value)} />
            {msg && (<p style={{ color: 'red' }}>{msg.fullNameError}</p>)}
            <label>User name</label>
            <input  type="text" placeholder='Enter username' onChange={(e) => setUserName(e.target.value)} />
            {msg && (<p style={{ color: 'red' }}>{msg.userNameError}</p>)}
            <label>Email</label>
            <input  type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
            {msg && (<p style={{ color: 'red' }}>{msg.emailError}</p>)}
            <label>Password</label>
            <input  type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            {msg && (<p style={{ color: 'red' }}>{msg.passwordError}</p>)}
            <label>Confirm password</label>
            <input  type="password" placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
            {msg && (<p style={{ color: 'red' }}>{msg.confirmPasswordError}</p>)}
            <label>Address</label>
            <input  type="text" placeholder='Enter your address' onChange={(e) => setAddress(e.target.value)} />
            {msg && (<p style={{ color: 'red' }}>{msg.addressError}</p>)}
            <label>Phone number</label>
            <input  type="text" placeholder='Enter your phone number' onChange={(e) => setPhone(e.target.value)} />
            {msg && (<p style={{ color: 'red' }}>{msg.phoneError}</p>)}
          </div>
          <button className='signin' style={{ background: '#333333' }}>Sign up</button>
        </form>
        <a href="http://localhost:5174/login"><p>Back to Login</p></a>
      </div>
    </div>
  );
}
export default Register

