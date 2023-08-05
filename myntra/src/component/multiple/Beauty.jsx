import React, { useEffect, useState } from 'react';
import './Multiple.css';
import { useNavigate } from 'react-router-dom';

const Beauty = () => {
    const [Products, setProducts] = useState([]);
    const [checkProduct, setCheckProduct] = useState(true); // Added checkProduct state

    const router = useNavigate();

    const sendData = (product) => {
        router(`/singleproduct/${product?.id}`);
     
    };
   

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('product')) || [];
        // Filter products for the Beauty category
        const beautyProducts = items.filter(product => product.Productcategory === 'Beauty');
        setProducts(beautyProducts);
    }, []);

    // Set checkProduct based on Products length
    useEffect(() => {
        setCheckProduct(Products.length > 0);
    }, [Products]);

    return (
        <div> {/* Wrapped the content in a div */}
            {checkProduct && (
                <div id='screen'>
                    {Products.map((Prop) => (
                        <div className='product-showing-div-slide' key={Prop.id}>
                            <div className='product-rating-within-product-img'>
                                4.1 <i className='fa-solid fa-star'></i> |3.4K
                            </div>
                            <div className='product-img'>
                                <img src={Prop.Productimage} alt='Product' /> {/* Added alt attribute */}
                            </div>
                            <div className='wishList' onClick={() => sendData(Prop)}>
                                ADD TO CART <i className='fa-regular fa-heart'></i>
                            </div>
                            <strong>{Prop.Productname}</strong>
                            <p>Sometime has to be there</p>
                            <strong> ₹{Prop.Productprice}</strong>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Beauty;
