import React, { useContext, useState } from 'react'
import "../navbar/Navbar.css";
import { useNavigate } from 'react-router-dom';
import { MyContext } from "./../AuthContext/MyContext"
const NavBar = () => {
    const router = useNavigate()
    const { state, LOGOUT } = useContext(MyContext)
    return (
        <div>
            <div id="navBar">
                <div id="leftInnerDiv">
                    <div id="logo" onClick={() => router("/")}>
                        <img src="https://images.indianexpress.com/2021/01/myntra.png"></img>
                    </div>
                    <div id="cat">
                        <div className="catList" onClick={() => router("/men")}>MEN</div>
                        <div className="catList" onClick={() => router("/women")}>WOMEN</div>
                        <div className="catList" onClick={() => router("/kids")}>KIDS</div>
                        <div className="catList" onClick={() => router("/homenkitchen")}>HOME & LIVING</div>
                        <div className="catList" onClick={() => router("/beauty")}>BEAUTY</div>
                        {state?.user?.role == 'seller' ? <div className="catList" onClick={() => router("/addproduct")}>ADD PRODUCT</div> : ""}
                    </div>
                </div>
                <div id="rightInnerDiv">
                    <div id="rightInput">
                        <div><i class="fa-solid fa-magnifying-glass"></i><input
                            placeholder="Search for product, brands and more" /></div>
                    </div>
                    <div id="rightIcon">
                        {state?.user ? <div className="icon" onClick={() => router("/profile")}>
                            <i className="fa-regular fa-user"></i>
                            <p>{state?.user?.name}</p>
                        </div> : ""}
                        <div className="icon">
                            <i className="fa-solid fa-bag-shopping"></i>
                            <p>Bag</p>
                        </div>
                        <div className="icon">
                            {/* <i className="fa-regular fa-heart"></i> */}
                            <p onClick={() => router("/login")}>Login &</p>
                            <p onClick={() => router("/register")}>Register</p>
                        </div>
                        <div className="icon">
                            {/* <i className="fa-regular fa-heart"></i> */}
                            {state?.user ? <p onClick={() => { LOGOUT(); router('/'); }}>Logout</p> : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
