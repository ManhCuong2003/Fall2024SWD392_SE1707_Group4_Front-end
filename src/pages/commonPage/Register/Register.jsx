import React, { useState } from 'react'
import Logo from '../../../assets/Logo/LogoImg.png'
import './style.scss'
import apiClient from '../../../utils/axios'
import { checkEmailFormat, checkPhoneFormat } from '../../../utils/validation'
import { Link } from 'react-router-dom'

function Register() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState({})
  const [msg, setMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const validateForm = () => {
    let isValid = true
    //validate email
    const errors = {}
    if (!email.trim()) {
      isValid = false
      errors.emailError = 'Please enter your email'
    } else if (!checkEmailFormat(email)) {
      isValid = false
      errors.emailFormatError = 'example@gmail.com'
    }

    //validate fullname
    if (!fullname.trim()) {
      isValid = false
      errors.fullNameError = 'Please enter your full name'
    }
    //validate password
    if (!password.trim()) {
      isValid = false
      errors.passwordError = 'Please enter your password '
    } else if (password.length < 8) {
      isValid = false
      errors.passwordError = 'Password should have 8 or more characters '
    }
    //validate confirm password
    if (!confirmPassword.trim()) {
      isValid = false
      errors.confirmPasswordError = 'Please enter your password again'
    } else if (confirmPassword !== password) {
      isValid = false
      errors.confirmPasswordError = 'Confirm password should match password'
    }

    if (!address.trim()) {
      isValid = false
      errors.addressError = 'Please enter your address'
    }

    if (!phone.trim()) {
      isValid = false
      errors.phoneError = 'Please enter your phone number'
    } else if (!checkPhoneFormat(phone)) {
      isValid = false
      errors.phoneError = 'Phone contain 10 digit'
    }
    setError(errors)
    return isValid
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (validateForm()) {
      setError({})
      setErrorMsg('')
      setMsg('')
      try {
        const response = await apiClient.post('/api/auth/register', {
          email,
          password,
          fullname,
          address,
          phone
        })
        if (response.status === 201) {
          setMsg('Register successfull. Please go to login')
        }
      } catch (error) {
        setErrorMsg(error.response.data.error.message)
      }
    }
  }
  return (
    <div className='containerr'>
      <div className='formm'>
        <img src={Logo} />
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className='groupform'>
            <label>Email</label>
            <input
              type='email'
              placeholder='Enter your email'
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.emailError && (
              <p style={{ color: 'red' }}>{error.emailError}</p>
            )}

            <label>Password</label>
            <input
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.passwordError && (
              <p style={{ color: 'red' }}>{error.passwordError}</p>
            )}
            <label>Confirm password</label>
            <input
              type='password'
              placeholder='Confirm Password'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error.confirmPasswordError && (
              <p style={{ color: 'red' }}>{error.confirmPasswordError}</p>
            )}
            <label>Full name</label>
            <input
              type='text'
              placeholder='Enter your full name'
              onChange={(e) => setFullname(e.target.value)}
            />
            {error.fullNameError && (
              <p style={{ color: 'red' }}>{error.fullNameError}</p>
            )}

            <label>Address</label>
            <input
              type='text'
              placeholder='Enter your address'
              onChange={(e) => setAddress(e.target.value)}
            />
            {error.addressError && (
              <p style={{ color: 'red' }}>{error.addressError}</p>
            )}

            <label>Phone number</label>
            <input
              type='text'
              placeholder='Enter your phone number'
              onChange={(e) => setPhone(e.target.value)}
            />
            {error.phoneError && (
              <p style={{ color: 'red' }}>{error.phoneError}</p>
            )}
          </div>
          {msg && <p style={{ color: 'green' }}>{msg}</p>}
          {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
          <button className='signin' style={{ background: '#333333' }}>
            Sign up
          </button>
        </form>
        <Link to='/login'>
          <p>Back to Login</p>
        </Link>
      </div>
    </div>
  )
}
export default Register
