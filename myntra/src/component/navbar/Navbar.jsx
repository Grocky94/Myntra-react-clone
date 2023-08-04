import React, { useState } from 'react'
import "../navbar/Navbar.css";
const NavBar = () => {
  
    return (
        <div>
            <div id="navBar">
                <div id="leftInnerDiv">
                    <div id="logo">
                        <img src="https://images.indianexpress.com/2021/01/myntra.png"></img>
                    </div>
                    <div id="cat">
                        <div className="catList">MEN</div>
                        <div className="catList">WOMEN</div>
                        <div className="catList">KIDS</div>
                        <div className="catList">HOME & LIVING</div>
                        <div className="catList">BEAUTY</div>
                        <div className="catList">ADD PRODUCT</div>
                    </div>
                </div>
                <div id="rightInnerDiv">
                    <div id="rightInput">
                        <div><i class="fa-solid fa-magnifying-glass"></i><input
                            placeholder="Search for product, brands and more" /></div>
                    </div>
                    <div id="rightIcon">
                        <div className="icon">
                            <i className="fa-regular fa-user"></i>
                            <p>Profile</p>
                        </div>
                        <div className="icon">
                            <i className="fa-solid fa-bag-shopping"></i>
                            <p>Bag</p>
                        </div>
                        <div className="icon">
                            {/* <i className="fa-regular fa-heart"></i> */}
                            <p>Login &</p>
                            <p>Register</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
