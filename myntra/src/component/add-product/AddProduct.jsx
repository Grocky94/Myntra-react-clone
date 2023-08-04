import React, { useContext, useState } from 'react'
import "./../add-product/AddProduct.css"
import { MyContext } from '../AuthContext/MyContext';
import { v4 as uuidv4 } from 'uuid';
const AddProduct = () => {
    const { ADDPRODUCT } = useContext(MyContext);
    const [product, setProduct] = useState({ Productname: "", Productimage: "", Productprice: "", Productcategory: "" });
    const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }
    const handleSelector = (event) => {
        setProduct({ ...product, ["Productcategory"]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        if (product.Productname && product.Productimage && product.Productprice && product.Productcategory) {
            const items = JSON.parse(localStorage.getItem("product")) || [];
            const randomId = uuidv4();
            product["id"] = randomId;
            let obj = { ...product }
            items.push(obj);
            ADDPRODUCT(items);
            alert("product added successfully")
            setProduct({ Productname: "", Productimage: "", Productprice: "", Productcategory: "" })
        } else {
            alert("please fill all areas")
        }

    }
    return (
        <div id="add-product-parent">
            <div id="add-product-div">
                {/* <img id="add-product-flatOff"
                    src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/9d70554f-0a7d-49f1-a063-4c32800a9bfd1675792560640-offer-banner-400-600x240-code-_-MYNTRA300.jpg" /> */}
                <div id="add-product-form">
                    <p id="container-heading"><b>ADD PRODUCT</b></p>
                    <form onSubmit={handleSubmit}>
                        <div id="add-product-details">
                            <input type="text" placeholder="Product Name" name='Productname' value={product.Productname} onChange={handleChange} /><br />
                            <input type="text" placeholder="Image" name="Productimage" value={product.Productimage} onChange={handleChange} /><br />
                            <input type="number" placeholder="Price" name="Productprice" value={product.Productprice} onChange={handleChange} /><br />
                            <div id="add-product-select-div">
                                <select value={product.Productcategory} onChange={handleSelector}>
                                    <option>Category</option>
                                    <option value="Men">Men</option>
                                    <option value="Women">Women</option>
                                    <option value="Kids">Kids</option>
                                    <option value="Home n Living">Home n Living</option>
                                    <option value="Beauty">Beauty</option>
                                </select>
                            </div>
                            <button id="add-product-btn">Add</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default AddProduct
