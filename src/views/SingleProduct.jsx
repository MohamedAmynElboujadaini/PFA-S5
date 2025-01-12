import React from 'react';
import Cart from 'components/cart';
const SingleProduct = () => (
    <div className="small-container single-product">
        <div className="row">
            <div className="col-2">
                <img src={require("../assets/images/gallery-1.jpg")} width="100%" id="ProductImg" alt="Product" />
            </div>
            <div className="col-2">
                <p>Home / T-Shirt</p>
                <h1>Red Printed T-Shirt by SellerName</h1>
                <h4>$50.00</h4>
                {/*<select>
                    <option>Select Size</option>
                    <option>XXL</option>
                    <option>XL</option>
                    <option>L</option>
                    <option>M</option>
                    <option>S</option>
                </select>*/}
                <input type="number" defaultValue="1" />
                <a href="#" className="btn">Add To Cart</a>

                <h3>Product Details <i className="fa fa-indent"></i></h3>
                <br />
                <p>Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.</p>
            </div>
            <Cart/>
        </div>

    </div>
);

export default SingleProduct;

