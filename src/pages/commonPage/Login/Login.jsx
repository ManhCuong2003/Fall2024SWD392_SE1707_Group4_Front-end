import React, { useState } from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../../assets/Logo/LogoImg.png'
import apiClient from '../../../utils/axios'
import { checkEmailFormat } from '../../../utils/validation'
import './style.scss'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!email.trim() || !password.trim()) {
      setError('Email or Password missing, Please try again')
      return
    }
    const validEmail = checkEmailFormat(email.trim())
    if (validEmail) {
      setError('')
      try {
        const response = await apiClient.post('/api/auth/login', {
          email,
          password
        })
        const {access_token, refresh_token, role} = response.data;
          localStorage.setItem('access_token', access_token);
          localStorage.setItem('refresh_token', refresh_token);
          if(role === 'customer') navigate('/');
         else if(role === 'staff') navigate('/staff');
         else if(role=== 'manager') navigate('/manager');

      } catch (error) {
        setError(error.response.data.error.message)
      }
    } else {
      setError('Wrong email format')
    }
  }

  return (
    <div className='container'>
      <div className='form'>
        <img src={Logo} />
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='groupform'>
            <label>Email</label>
            <input
              name='email'
              type='text'
              placeholder='Enter your email'
              style={{ marginBottom: '5%' }}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>

          <Link to='#' className='forgot'>
            <p>Forgot Password?</p>
          </Link>
          <button
            className='signin'
            type='submit'
            style={{ background: '#333333' }}
          >
            Sign in
          </button>
        </form>
        <p>Or Continue With</p>
        <button className='fb'>
          <FaFacebook size={20} style={{marginLeft:"48px"}}/>
        </button>
        <button className='gg'>
          <FaGoogle size={20} style={{marginLeft:"48px"}}/>
        </button>
        <p style={{ marginTop: '70px' }}>
          Don't have an account yet?{' '}
          <Link to='/register'>
            <span style={{ color: '#7df87f' }}>Sign up for free</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
