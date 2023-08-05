import React, { useEffect, useState } from 'react'
import "./../singleproduct/Singleprduct.css"
import { useNavigate, useParams } from 'react-router-dom';


const Singleproduct = () => {

    const [userLogged, setUserLogged] = useState(false);
    const [singleItem, setSingleItem] = useState({})
    // console.log(singleItem, "singleItem here")
    const { id } = useParams();
    const router = useNavigate()
    // for getting selected item in page from all product
    useEffect(() => {
        const product = JSON.parse(localStorage.getItem("product"));
        if (id && product.length) {
            const selectedItem = product.find((item) =>
                item.id == id);
            setSingleItem(selectedItem);
        }
    }, [id]);
    // for checking if user has logged in or not 
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("currentuser"));
        if (user) {
            setUserLogged(true)

        }
    }, [])

    const addtocart = () => {
        if (userLogged) {
            const alluser = JSON.parse(localStorage.getItem("user"));
            const user = JSON.parse(localStorage.getItem("currentuser"));

            for (let i = 0; i < alluser.length; i++) {

                if (alluser[i].email == user.email && alluser[i].password == user.password) {
                    if (alluser[i].role == "buyer") {
                        alluser[i].cart.push(singleItem);
                        localStorage.setItem("user", JSON.stringify(alluser))
                        alert("product added succesfull")
                        router("/cart")
                    } else {
                        alert("seller not allowed to add product in cart")
                    }
                }
            }
        } else {
            alert("please login first");
        }
    }
    return (
        <div id="single-product-body">
            <div id="single-product-title">
                <p>Home / Clothing /<b>{singleItem?.Productname}</b> </p>
            </div>
            <div id="product-LNR">
                <div id="inner-left">
                    <div>
                        <img
                            src={singleItem?.Productimage} />
                    </div>
                    {/* <div>
                        <img
                            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2475811/2018/4/20/11524206887970-Roadster-Men-Tshirts-9291524206887825-2.jpg" />
                    </div>
                    <div>
                        <img
                            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2475811/2018/4/20/11524206887935-Roadster-Men-Tshirts-9291524206887825-3.jpg" />
                    </div>
                    <div>
                        <img
                            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2475811/2018/4/20/11524206887922-Roadster-Men-Tshirts-9291524206887825-4.jpg" />
                    </div>
                    <div>
                        <img
                            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2475811/2018/4/20/11524206887911-Roadster-Men-Tshirts-9291524206887825-5.jpg" />
                    </div> */}
                </div>
                <div id="inner-right">
                    {/* <!-- first division --> */}
                    <div>
                        <b>{singleItem?.Productname}</b>
                        <p>Description here</p>
                        <div id="ratings">
                            <div><b>4.1</b>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p>4.3k ratings</p>
                        </div>
                    </div>
                    {/* <!-- second divison --> */}
                    <div>
                        <p><b>₹ {singleItem?.Productprice}</b></p>
                        <p>inclusive of all taxes</p>
                        <span>
                            <p><b>SELECT SIZE</b></p>
                            <p>SIZE CHART </p>
                        </span>
                        <div id="size-show-div">
                            <div><span></span>
                                <p>XS</p>
                            </div>
                            <div>
                                <p>S</p>
                            </div>
                            <div>
                                <p>M</p>
                            </div>
                            <div>
                                <p>L</p>
                            </div>
                            <div>
                                <p>XL</p>
                            </div>
                        </div>
                        <div id="bag-n-wish-div">
                            <div id="red-add-to-bag">
                                <i class="fa-solid fa-bag-shopping"></i>
                                <b onClick={addtocart}>ADD TO CART</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singleproduct
