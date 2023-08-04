import React, { useEffect, useState } from 'react'
import "./../register/Register.css"

const Register = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "", role: "" })
    // console.log(userData)
    const handlechange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }


    const handleSelector = (event) => {
        setUserData({ ...userData, ["role"]: event.target.value })
    }
        const handleSubmit = (event) => {
            event.preventDefault()
            if (userData.name && userData.email && userData.password) {
                const alluser = JSON.parse(localStorage.getItem("user")) || []
                let obj = { name: userData.name, email: userData.email, password: userData.password, role: userData.role }
                alluser.push(obj);
                localStorage.setItem("user", JSON.stringify(alluser));
                alert("registration sucessfull")
                setUserData({ name: "", email: "", password: "", role: "" });

            } else {
                alert("please fill all details")
                setUserData({})
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
                            <div id="register-select-div">
                                <select value={userData.role} onChange={handleSelector}>
                                    <option >Role</option>
                                    <option value="seller">Seller</option>
                                    <option value="buyer">Buyer</option>
                                </select>
                            </div>
                            <button id="register-btn">SignUp</button>
                            <p>if you already have an account <b>Login here </b></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
