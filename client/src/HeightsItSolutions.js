import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HeightsItSolutions = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:5000/heightsItSolutions",{email,password})
            console.log(response.data)
            navigate("/heightsItSolutionsHomepage")

        } catch (error) {
            console.log(error)   
        }
    }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='email' type='email' placeholder='email address' value={email} onChange={(e) => setEmail(e.target.value)}  />
        <input name='password'type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}  />
        <button type='submit' className='btn btn-outline-primary' >Sign in</button>
      </form>
    </div>
  )
}

export default HeightsItSolutions

