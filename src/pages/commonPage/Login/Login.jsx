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
        if (response.status === 200) {
          localStorage.setItem('access_token', response.data.access_token)
          localStorage.setItem('refresh_token', response.data.refresh_token)
          navigate('/')
        }
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
          <FaFacebook size={20} />
        </button>
        <button className='gg'>
          <FaGoogle size={20} />
        </button>
        <p style={{ marginTop: '70px' }}>
          Don't have an account yet?{' '}
          <Link to='/register'>
            <span style={{ color: '#b8e994' }}>Sign up for free</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
