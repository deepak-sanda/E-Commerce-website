import React from 'react'
import amazon_logo_login from "./images/amazon_logo_dark.png"
import { Link } from "react-router-dom"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import "./Login.css"
import Footer2 from './Footer2'


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("please fill in all the fields")
      return
    }
    try {
      const response = await axios.post("http://localhost:5000/login", { email, password })
      console.log(response.data)
      localStorage.setItem("token", response.data.token)

      navigate("/")

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='login_container'>
        <div className='amazon_logo_login'>
          <img src={amazon_logo_login} className='login_logo' alt="amazon-logo" />
        </div>
        <form className='login_form' onSubmit={handleSubmit}>
          <h1 >Sign in</h1>
          <label htmlFor='email' className='login_label'  >Email address</label>
          <input type='email' className='login_input' required value={email} onChange={(e) => { setEmail(e.target.value) }} />
          <label htmlFor='password' className='login_label'>Password</label>
          <input type='password' className='login_input' required value={password} onChange={(e) => { setPassword(e.target.value) }} />
          <button type='submit' className='signIn_btn'>Sign in</button>
          <p className='form_text'>By creating a account or logging in, you agree to Amazon's <span>Condtions of use </span>and <span>Privacy Policy</span> </p>
          <div>{error}</div>
        </form>
        <div className='new_to_amazon'>
          <div className='small_partition'></div>
          <p className='txt'>New to Amazon?</p>
          <div className='small_partition'></div>
        </div>
        
        <Link to="/signup" className='btn_2_link'>Create your Amazon account</Link>
      </div>
      <>
        <Footer2 />
      </>
    </>
  )
}

export default Login
