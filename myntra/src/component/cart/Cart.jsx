import React, { useEffect, useState } from 'react'
import "./../cart/Cart.css";
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const [userCart, setUserCart] = useState([])
    console.log(userCart)
    const [finalPrice, setFinalPrice] = useState(0);
    const [showThankYou, setShowThankYou] = useState(false)
    const alluser = JSON.parse(localStorage.getItem("user"));
    const user = JSON.parse(localStorage.getItem("currentuser"));
    const router = useNavigate();

    useEffect(() => {
        if (user?.email) {
            for (let i = 0; i < alluser.length; i++) {
                if (alluser[i].email === user.email && alluser[i].password === user.password) {
                    if (!alluser[i].cart == userCart) {
                        setUserCart(alluser[i].cart || []);
                    }
                    break;
                }
            }
        } else {
            alert('Login before viewing the cart.');
            router('/login');
        }
    }, []);

    useEffect(() => {
        if (userCart.length) {
            var totalPrice = 0;
            for (var i = 0; i < userCart.length; i++) {
                totalPrice += parseInt(userCart[i].Productprice)
                // console.log(userCart ,"-from cart useeffects")
                console.log(totalPrice,"total")
            }
            setFinalPrice(totalPrice)
        }
    }, [userCart])


    const cartDeleting = (index) => {
        const allUser = JSON.parse(localStorage.getItem("user"));
        const user = JSON.parse(localStorage.getItem("currentuser"));
        if (userCart.length) {
            for (let i = 0; i < allUser.length; i++) {
                if (allUser[i].email == user.email && allUser[i].password == user.password) {
                    // const product = allUser[i].slice();
                    allUser[i].cart.splice(index, 1);
                    setUserCart(allUser[i].cart);
                    localStorage.setItem("user", JSON.stringify(allUser))
                    break
                }
            }

        }
    }

    function buyProducts() {
        const user = JSON.parse(localStorage.getItem("currentuser"));
        if (user?.email) {
            const allUsers = JSON.parse(localStorage.getItem("user"));
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
                    allUsers[i].cart = [];

                    localStorage.setItem("user", JSON.stringify(allUsers))
                    break;
                }
            }
            setFinalPrice(0)
            setUserCart([]);
            alert("Product will deliver soon, Thank you for shopping.")
            setShowThankYou(true)
        }
    }
    return (
        <div id="cart-body">
            <div id="cart-body-left">
                {userCart.map((prop, index) => (  // Corrected map function
                    <div className="cart-item-display" key={index}>  {/* Added key attribute */}
                        <div className="product-image">
                            <img
                                src={prop.Productimage}
                                alt="Product"  // Added alt attribute for accessibility
                            />
                        </div>
                        <div className="product-details">
                            <b>{prop.Productname}</b><i className="fa-solid fa-x" onClick={() => cartDeleting(index)}></i>  {/* Corrected class to className */}
                            <p>Category: {prop.Productcategory}</p>
                            <p><b>₹ {prop.Productprice}</b></p>
                            <p><i className="fa-solid fa-circle-arrow-left"></i><b>14 days</b> return available</p>
                        </div>
                    </div>
                ))}
                {showThankYou && <div className="thankyou">Thank you</div>}
            </div>
            <div id="body-right">
                <div id="price-details">
                    <b>PRICE DETAILS (1 Item)</b>
                    <div className="reciept-index">
                        <p>Total MRP</p>
                        <p>₹ {finalPrice}</p>
                    </div>
                    <div className="reciept-index">
                        <p>Coupon Discount</p>
                        <p>Coupon Applied</p>
                    </div>
                    <div className="reciept-index">
                        <p>Convenience Fee <span>Know More</span></p>
                        <p><del>₹ 99</del> <span>Free</span></p>
                    </div>
                </div>
                <div id="total-n-placeThem">
                    <div className="reciept-index">
                        <p><b>Total Amount</b></p>
                        <p><b>₹ {finalPrice}</b></p>
                    </div>
                    <button id="place-order-btn" onClick={buyProducts}>PLACE ORDER</button>
                </div>
            </div>
        </div >

    )
}

export default Cart
