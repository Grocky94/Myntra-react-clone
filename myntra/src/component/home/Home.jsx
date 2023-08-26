import React, { useContext, useEffect, useState } from 'react'
import "./../home/Home.css";
import { MyContext } from '../AuthContext/MyContext';
import { toast } from 'react-hot-toast';
const Home = () => {
    const [userData, setUserData] = useState({})
    const { state } = useContext(MyContext)

    useEffect(() => {
        // const currentUser = JSON.parse(localStorage.getItem("token"))
        try {
            if (state?.user) {
                setUserData(state?.user)

            } else {
                setUserData({})
            }
        } catch (error) {
            toast.error({ message: error.response.data.message })
        }
    }, [state])
    return (
        <div id="home-parent">
            <div id="advertising">
                {/* -- for images  --*/}
                <div className="showcase">
                    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/5/25/0c3290bf-763c-45d8-8cc8-19f04887c6921685033723850-Curtain-raiser_DK-banner.jpg" />
                </div>
            </div>
            <br />
            <div className='dot-parent-div'>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    )
}

export default Home
