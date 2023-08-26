import React, { useContext, useEffect, useState } from 'react'
import "./../login/Login.css";
import { MyContext } from "./../AuthContext/MyContext";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
const Login = () => {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const { state, dispatch } = useContext(MyContext);
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            const response = await axios.post("http://localhost:4000/login", { userData })

            if (response.data.success) {
                dispatch({
                    type: "LOGIN",
                    payload: response.data.user
                })
                localStorage.setItem("token", JSON.stringify(response.data.token))
                setUserData({ email: "", password: "" })
                router("/");
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message)
            }
        } else {
            toast.error("All fields are mandatory")
        }
    }

    useEffect(() => {
        if (state?.user?.name) {
            router('/')
        }
    }, [state])

    return (
        <div id="login-screen">
            <div id="logDiv">
                <img id="flatOff"
                    src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/9d70554f-0a7d-49f1-a063-4c32800a9bfd1675792560640-offer-banner-400-600x240-code-_-MYNTRA300.jpg" />
                <div id="form" onSubmit={handleSubmit}>
                    <p><b>Login</b></p>
                    <form>
                        <div id="credent">
                            <input type="email" placeholder="Email Id here" name="email" value={userData.email} onChange={handleChange} /><br />
                            <input type="password" placeholder="password" name="password" value={userData.password} onChange={handleChange} /><br />
                            <button id="login-btn">Login</button>
                            <p>if you haven't create account <b><NavLink to={"/register"}>Register here</NavLink></b></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
