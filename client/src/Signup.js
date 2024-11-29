import React, { useState } from 'react'
import { Link } from "react-router-dom"
import amazon_logo_signup from "./images/amazon_logo_dark.png"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./signup.css"
import Footer2 from './Footer2'
function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("please fill in all the fields")
      return
    }
    try {
      const response = await axios.post("http://localhost:5000/signup", { name, email, password })
      console.log("user created successfully",
        response.data)
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='signup_container'>
        <div className='amazon-logo'>
          <img src={amazon_logo_signup} className='signup_logo' alt="amazon-logo" />
        </div>
        <form className='signup_form' onSubmit={handleSubmit} >
          <h1 className='heading-sp'>Create Account</h1>
          <label htmlFor='name' className='signup_label'  >Your name</label>
          <input type='text' className='signup_input' required value={name} onChange={(e) => { setName(e.target.value) }} />
          <label htmlFor='email' className='signup_label'>Email Address</label>
          <input type='email' className='signup_input' required value={email} onChange={(e) => { setEmail(e.target.value) }} />
          <label htmlFor='password' className='signup_label'>password</label>
          <input type='password' className='signup_input' placeholder='At least 6 characters' value={password} required onChange={(e) => { setPassword(e.target.value) }} />
          <p className='password_txt'>passwords must be at least 6 characters</p>
          <button type='submit' className='signup_btn' >Sign In</button>
          <div className='partition'></div>
          <p className='login-txt'>Already have an Account? <span><Link to="/login" className='signIn_link'>Sign in</Link></span></p>
          <p className='signup-txt'>By creating a account or logging in, you agree to Amazon's <span>Condtions of use </span>and <span>Privacy Policy</span> </p>
          <div>{error}</div>
        </form>
      </div>
      <>
        <Footer2 />
      </>
    </>
  )
}

export default Signup
