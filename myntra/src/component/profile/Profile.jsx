import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./../AuthContext/MyContext"
import "./../profile/Profile.css";
const Profile = () => {

    const { LOGIN } = useContext(MyContext);
    // console.log(Login)
    const [userData, setUserData] = useState();
    const [previousData, setPreviousData] = useState();


    const router = useNavigate();
    // console.log(userData)
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentuser"));
        if (!currentUser) {
            alert("please login first")
            router("/login")
        }
        const allUser = JSON.parse(localStorage.getItem("user"));
        if (currentUser && allUser) {
            for (let i = 0; i < allUser.length; i++) {
                if (allUser[i].email == currentUser.email && allUser[i].password == currentUser.password) {
                    setUserData(allUser[i]);
                }
            }
        }
    }, [])

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem("currentuser"));
        const allUser = JSON.parse(localStorage.getItem("user"));
        for (let i = 0; i < allUser.length; i++) {
            if (allUser[i].email == currentUser.email && allUser[i].password == currentUser.password) {
                if (currentUser) {
                    allUser[i].name = userData.name;
                    allUser[i].password = userData.password;
                    allUser[i].role = userData.role;
                    currentUser.name = userData.name;
                    currentUser.password = userData.password;
                    setPreviousData(allUser[i])
                }
            }
        }
        LOGIN(currentUser);
        localStorage.setItem("currentuser", JSON.stringify(currentUser));
        localStorage.setItem("user", JSON.stringify(allUser));
        setUserData({ name: "", password: "" });
        alert("profile Updated")
    }
    return (
        <div>
            <div id="Profile-screen">
                <div id="profile-heading">
                    <p><b>Account</b></p>
                    <p>{previousData?.name}</p>
                </div>
                <div id="profile-details-parent-div">
                    <div id="profile-left-side">
                        {/* -- first conpartment  -- */}
                        <div>
                            <h5>Overview</h5>
                        </div>
                        {/* -- second comparment  -- */}
                        <div>
                            <h5>ORDERS</h5>
                            <p>Order & Returns</p>
                        </div>
                        {/* -- third compartment  -- */}
                        <div>
                            <h5>CREDITS</h5>
                            <p>Coupons</p>
                            <p>Myntra Credit</p>
                            <p>MynCash</p>
                        </div>
                        {/* -- fourth compartment  -- */}
                        <div>
                            <h5>ACCOUNT</h5>
                            <p>Profile</p>
                            <p>Saved Cards</p>
                            <p>Saved VPA</p>
                            <p>Addresses</p>
                            <p>Myntra Insider</p>
                        </div>
                        {/* -- fifth compartment  -- */}
                        <div>
                            <h5>LEGAL</h5>
                            <p>Terms of Use</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div id="profile-right-side">
                        <div>
                            <h3>Profile Details</h3>
                        </div>
                        <div>
                            <form onSubmit={handleOnSubmit}>
                                <div className="profile-detail-index"><span>Name</span><span><input type="text" onChange={handleChange} name="name" value={userData?.name} /></span></div>
                                <div className="profile-detail-index"><span>Password</span><span><input onChange={handleChange} name="password" value={userData?.password} /></span></div>
                                <button id="profile-edit-btn">Edit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;