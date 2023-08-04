import React from 'react'
import "./../cart/Cart.css";
const Cart = () => {
    return (
        <div id="cart-body">
            <div id="cart-body-left">
                <div className="cart-item-display">
                    <div className="product-image">
                        <img 
                            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2022/11/21/57eb174b-cbf1-4d1e-906c-dd87fcfb059d1669021381999-HIGHLANDER-Men-Green--White-Slim-Fit-Printed-Casual-Shirt-27-1.jpg" />
                    </div>
                    <div className="product-details">
                        <b>HIGHLANDER</b><i class="fa-solid fa-x"></i>
                        <p>Category:Flashstar Commerce</p>
                        <p><b>₹ 514</b></p>
                        <p><i className="fa-solid fa-circle-arrow-left"></i><b>14 days</b> return available</p>
                    </div>
                </div>
            </div>
            <div id="body-right">
                <div id="price-details">
                    <b>PRICE DETAILS (1 Item)</b>
                    <div className="reciept-index">
                        <p>Total MRP</p>
                        <p>₹ 1,049</p>
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
                        <p><b>₹ 514</b></p>
                    </div>
                    <button id="place-order-btn">PLACE ORDER</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
