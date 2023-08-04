import React, { useContext, useState } from 'react'
import "./../login/Login.css";
import { MyContext } from "./../AuthContext/MyContext";
const Login = () => {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const { LOGIN } = useContext(MyContext);
    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            const alluser = JSON.parse(localStorage.getItem("user"));
            let flag = false;
            for (let i = 0; i < alluser.length; i++) {
                if (alluser[i].email == userData.email && alluser[i].password == userData.password) {

                    LOGIN(alluser[i]);
                    alert("login successfull");
                    setUserData({ email: "", password: "" })
                    flag = true;
                    break;
                } if (flag == false) {
                    alert("incorrect details");
                }
            }
        } else {
            alert("please fill all areas");
            setUserData({})
        }
    }

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
                            <p>if you haven't create account <b><a href="day-21-myntra-register.html">Register here</a></b></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
