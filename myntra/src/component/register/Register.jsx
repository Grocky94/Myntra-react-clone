import React, { useState } from 'react'
import "./../register/Register.css"
import axios from "axios"
import { toast } from 'react-hot-toast'
import { NavLink, useNavigate } from 'react-router-dom'

const Register = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "", confirmPassword: "", role: "" })
    // console.log(userData)

    const router = useNavigate()

    const handlechange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }


    const handleSelector = (event) => {
        setUserData({ ...userData, "role": event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (userData.name && userData.email && userData.password) {
            const response = await axios.post("http://localhost:4000/register", { userData });
            if (userData.password === userData.confirmPassword) {
                if (response.data.success) {
                    setUserData({ name: "", email: "", password: "", confirmPassword: "", role: "Buyer" })
                    router('/login')
                    toast.success(response.data.message)
                } else {
                    toast.error(response.data.message)
                }
            } else {
                toast.error("Password and Confirm Password not Matched.")
            }
        } else {
            toast.error("All fields are mandtory.")
        }
    }
    return (
        <div id='register-screen'>
            <div id="register-logDiv">
                <img id="register-flatOff"
                    src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/9d70554f-0a7d-49f1-a063-4c32800a9bfd1675792560640-offer-banner-400-600x240-code-_-MYNTRA300.jpg" />
                <div id="register-form">
                    <p><b>Register to login</b></p>
                    <form onSubmit={handleSubmit}>
                        <div id="register-credent">
                            <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handlechange} /><br />
                            <input type="email" name="email" placeholder="Email Id here" value={userData.email} onChange={handlechange} /><br />
                            <input type="password" name="password" placeholder="password" value={userData.password} onChange={handlechange} /><br />
                            <input type="password" name="confirmPassword" placeholder="confirmPassword" value={userData.confirmPassword} onChange={handlechange} /><br />
                            <div id="register-select-div">
                                <select value={userData.role} onChange={handleSelector}>
                                    <option >Role</option>
                                    <option value="Seller">Seller</option>
                                    <option value="Buyer">Buyer</option>
                                </select>
                            </div>
                            <button id="register-btn">SignUp</button>
                            <p>if you already have an account <b><NavLink to={"/login"} id="backToLogin">Login here</NavLink></b></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
