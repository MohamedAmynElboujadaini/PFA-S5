import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import product1jpg from "../assets/images/product-1.jpg";
import ProductCard from "../components/product_card";
const Products = () => (

    <div className="small-container">
    

    <Outlet />
    
    <div className="row row-2">
        <h2>All Products</h2>
        <select>
            <option>Default Sort</option>
            <option>Sort By Price</option>
            <option>Sort By Popularity</option>
            <option>Sort By Rating</option>
            <option>Sort By Sale</option>
        </select>
    </div>
    <div className="row">
    <div className="col-4">
                    <ProductCard productId={1} imageUrl={require("../assets/images/product-1.jpg")} productName="Red Printed T-Shirt" productPrice="50.00" productLink="" rating="4" />
                </div>
                <div className="col-4">
                    <ProductCard productId={2} imageUrl={require("../assets/images/product-1.jpg")} productName="Red Printed T-Shirt" productPrice="50.00" productLink="" rating="4" />
                </div>
                <div className="col-4">
                <ProductCard productId={3} imageUrl={require("../assets/images/product-1.jpg")} productName="Red Printed T-Shirt" productPrice="50.00" productLink="" rating="4" />
                </div>
                <div className="col-4">
                <ProductCard productId={4} imageUrl={require("../assets/images/product-1.jpg")} productName="Red Printed T-Shirt" productPrice="50.00" productLink="" rating="4" />

                </div>
            </div>
            <h2 className="title">Latest Products</h2>
            <div className="row">
                <div className="col-4">
                <ProductCard productId={5} imageUrl={require("../assets/images/product-5.jpg")} productName="Red Printed T-Shirt" productPrice="50.00" productLink="" rating="4" />

                </div>
                <div className="col-4">
                <ProductCard productId={6} imageUrl={require("../assets/images/product-7.jpg")} productName="Red Printed T-Shirt" productPrice="50.00" productLink="" rating="4" />

                </div>
                <div className="col-4">
                <ProductCard imageUrl={require("../assets/images/product-6.jpg")} productName="Red Printed T-Shirt" productPrice="50.00" productLink="" rating="4" />

                </div>
                <div className="col-4">
                <ProductCard imageUrl={require("../assets/images/product-11.jpg")} productName="Red Printed T-Shirt" productPrice="50.00" productLink="" rating="4" />

                </div>
                <div className="col-4">
                <ProductCard imageUrl={require("../assets/images/product-10.jpg")} productName="Red Printed T-Shirt" productPrice="50.00" productLink="" rating="4" />

                </div>
                <div className="col-4">
                <ProductCard imageUrl={require("../assets/images/product-8.jpg")} productName="Red Printed T-Shirt" productPrice="50.00" productLink="" rating="4" />

                </div>
                <div className="col-4">
                <ProductCard imageUrl={require("../assets/images/product-9.jpg")} productName="Red Printed T-Shirt" productPrice="50.00" productLink="" rating="4" />

                </div>
    </div>
    <div className="row">
        <div className="col-4">
            <img src="/images/product-5.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
        </div>
        <div className="col-4">
            <img src="/images/product-6.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
        </div>
        <div className="col-4">
            <img src="/images/product-7.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
        </div>
        <div className="col-4">
            <img src="/images/product-8.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
        </div>
    </div>
    <div className="row">
        <div className="col-4">
            <img src="/images/product-9.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
        </div>
        <div className="col-4">
            <img src="/images/product-10.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
        </div>
        <div className="col-4">
            <img src="/images/product-11.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
        </div>
        <div className="col-4">
            <img src="/images/product-12.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
        </div>
    </div>
    <div className="page-btn">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>&#8594;</span>
    </div>
    </div>
);
export default Products;