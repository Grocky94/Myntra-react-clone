import React, { useEffect, useState } from 'react'
import "./Multiple.css";
import { useNavigate } from 'react-router-dom';

const HomenKitchen = () => {
    const [Products, setProducts] = useState([]);
    const router = useNavigate();

    const sendData = (product) => {
        router(`/singleproduct/${product?.id}`);
        console.log(product, "here from beauty")
    };
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("product")) || [];
        // Filter products for the men's category
        const Products = items.filter(product => product.Productcategory === "Home n Living");
        setProducts(Products);
    }, []);
    return (
        <div id='screen'>
            {Products.map((Prop, index) => (<div className="product-showing-div-slide" key={index}>
                <div className="product-rating-within-product-img">4.1 <i class="fa-solid fa-star"></i> |3.4K </div>
                <div className="product-img">
                    <img
                        src={Prop.Productimage} />
                </div>
                <div className="wishList" onClick={() => sendData(Prop)}> ADD TO CART <i class="fa-regular fa-heart"></i></div>
                <strong>{Prop.Productname}</strong>
                <p>Sometime has to be there</p>
                <strong>₹ {Prop.Productprice}</strong>
            </div>))}
        </div>)
}

export default HomenKitchen
