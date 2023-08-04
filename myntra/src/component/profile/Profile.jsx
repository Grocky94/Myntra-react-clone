import React from "react";
import "./../profile/Profile.css";
const Profile = () => {
    return (
        <div>
        <div id="Profile-screen">
            <div id="profile-heading">
                <p><b>Account</b></p>
                <p>Rocky Joseph Gomes</p>
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
                        <div className="profile-detail-index"><span>Name</span><span><input type="text"/></span></div>
                        <div className="profile-detail-index"><span>Password</span><span><input/></span></div>
                        <button id="profile-edit-btn">Edit</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Profile;