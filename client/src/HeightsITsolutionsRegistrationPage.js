import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HeightsITsolutionsRegistrationPage = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:5000/heightsItSolutions/registration", { name, email, password })
            console.log(response.data)
            navigate("/heightsitsolutions")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='name' required placeholder='name' value={name} onChange={(e) => { setName(e.target.value) }} />
                <input type='email' placeholder='email' required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type='password' required placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button type='submit'>create </button>
            </form>



        </div>
    )
}

export default HeightsITsolutionsRegistrationPage
