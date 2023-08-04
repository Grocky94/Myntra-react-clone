import React from 'react'
import "./../register/Register.css"
const Register = () => {
    return (
        <div id='register-screen'>
            <div id="register-logDiv">
                <img id="register-flatOff"
                    src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/9d70554f-0a7d-49f1-a063-4c32800a9bfd1675792560640-offer-banner-400-600x240-code-_-MYNTRA300.jpg" />
                <div id="register-form">
                    <p><b>Register to login</b></p>
                    <div id="register-credent">
                        <input type="text" placeholder="Name" /><br />
                        <input type="email" placeholder="Email Id here" /><br />
                        <input type="password" placeholder="password" /><br />
                        <div id="register-select-div">
                            <select>
                                <option>Role</option>
                                <option>Seller</option>
                                <option>Buyer</option>
                            </select>
                        </div>
                        <button id="register-btn">SignUp</button>
                        <p>if you already have an account <b>Login here </b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
