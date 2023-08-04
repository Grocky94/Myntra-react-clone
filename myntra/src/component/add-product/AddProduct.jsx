import React from 'react'
import "./../add-product/AddProduct.css"
const AddProduct = () => {
    return (
        <div id="add-product-parent">
            <div id="add-product-div">
                {/* <img id="add-product-flatOff"
                    src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/9d70554f-0a7d-49f1-a063-4c32800a9bfd1675792560640-offer-banner-400-600x240-code-_-MYNTRA300.jpg" /> */}
                <div id="add-product-form">
                    <p id="container-heading"><b>ADD PRODUCT</b></p>
                    <div id="add-product-details">
                        <input type="text" placeholder="Product Name" /><br />
                        <input type="text" placeholder="Image" /><br />
                        <input type="number" placeholder="Price" /><br />
                        <div id="add-product-select-div">
                            <select>
                                <option>Category</option>
                                <option>Men</option>
                                <option>Women</option>
                                <option>Kids</option>
                                <option>Home n Living</option>
                                <option>Beauty</option>
                            </select>
                        </div>
                        <button id="add-product-btn">Add</button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddProduct
