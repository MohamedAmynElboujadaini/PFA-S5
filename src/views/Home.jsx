import React from 'react';
import image1Png from "../assets/images/image1.png";
import ProductCard from 'components/product_card';
import product1jpg from "../assets/images/product-1.jpg";

const Home = () => {
  return (
    <>
        <div className="header">
        <div className="container">
            <div className="row">
            <div className="col-2">
                <h1>Give Your Workout <br /> A New Style!</h1>
                <p>Success isn't always about greatness. It's about consistency. Consistent <br /> hard work gains success. Greatness will come.</p>
                <a href="" className="btn">Explore Now &#8594;</a>
            </div>
            <div className="col-2">
                <img src={image1Png} alt="workout" />
            </div>
            </div>
        </div>
        </div>
        
        <div className="categories">
        <div className="small-container ">
            <div className="row">
                <div className="col-3">
                    <img src={require("../assets/images/category-1.jpg")} />
                </div>
                <div className="col-3">
                    <img src={require("../assets/images/category-2.jpg")} />
                </div>
                <div className="col-3">
                    <img src={require("../assets/images/category-3.jpg")} />
                </div>
            </div>
        </div>
        </div>

        <div className="small-container ">
            <h2 className="title">Featured Products</h2>
            <div className="row">
                <div className="col-4">
                    <ProductCard imageUrl={require("../assets/images/product-1.jpg")} productName="Red Printed T-Shirt" productPrice="50.00" productLink="" rating="4" />
                </div>
                <div className="col-4">
                    <ProductCard imageUrl={require("../assets/images/product-1.jpg")} productName="Red Printed T-Shirt" productPrice="50.00" productLink="" rating="4" />
                </div>
                <div className="col-4">
                <ProductCard imageUrl={require("../assets/images/product-1.jpg")} productName="Red Printed T-Shirt" productPrice="50.00" productLink="" rating="4" />
                </div>
                <div className="col-4">
                <ProductCard imageUrl={require("../assets/images/product-1.jpg")} productName="Red Printed T-Shirt" productPrice="50.00" productLink="" rating="4" />

                </div>
            </div>
            <h2 className="title">Latest Products</h2>
            <div className="row">
                <div className="col-4">
                <ProductCard imageUrl={require("../assets/images/product-5.jpg")} productName="Red Printed T-Shirt" productPrice="50.00" productLink="" rating="4" />

                </div>
                <div className="col-4">
                <ProductCard imageUrl={require("../assets/images/product-7.jpg")} productName="Red Printed T-Shirt" productPrice="50.00" productLink="" rating="4" />

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
        </div>

        {/* Offer */}

        <div className="header  ">
            <div className="small-container ">
                <div className="row">
                    <div className="col-2">
                        <img src={require("../assets/images/exclusive.png")} className="offer-img" />
                    </div>
                    <div className="col-2">
                        <p>Exclusively Available on RedStore</p>
                        <h1>Smart Band 4</h1>
                        <small>The Mi Smart Band 4 fearures a 39.9%larger (than Mi Band 3) AMOLED color full-touch display
                            with adjustable brightness, so everything is clear as can be. <br />
                        </small>
                        <a href="products.html" className="btn">Buy Now &#8594;</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="testimonial">
            <div className="small-container">
                <div className="row">
                    <div className="col-3">
                        <i className="fa fa-quote-left" />
                        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            industry's standard dummy text.</p>
                        <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                        </div>
                        <img src={require("../assets/images/user-1.png")} />
                        <h3>Sean Parker</h3>
                    </div>
                    <div className="col-3">
                        <i className="fa fa-quote-left" />
                        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            industry's standard dummy text.</p>
                        <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                        </div>
                        <img src={require("../assets/images/user-2.png")} />
                        <h3>Mike Smith</h3>
                    </div>
                    <div className="col-3">
                        <i className="fa fa-quote-left" />
                        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            industry's standard dummy text.</p>
                        <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                        </div>
                        <img src={require("../assets/images/user-3.png")} />
                        <h3>Mabel Joe</h3>
                    </div>
                </div>
            </div>
        </div>

        <div className="brands">
          <div className="small-container">
            <div className="row">
              <div className="col-5">
                <img src={require("../assets/images/logo-godrej.png")} />
              </div>
              <div className="col-5">
                <img src={require("../assets/images/logo-oppo.png")} />
              </div>
              <div className="col-5">
                <img src= {require("../assets/images/logo-coca-cola.png")}/>
              </div>
              <div className="col-5">
                <img src= {require("../assets/images/logo-paypal.png")}/>
              </div>
              <div className="col-5">
                <img src=  {require("../assets/images/logo-philips.png")} />
              </div>
            </div>
          </div>
        </div>

        
        <div className="about" id="about">
          <div className="small-container">
            <div className="row">
              <div className="col-2">
                <h1>We offer the best products for you</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="col-2">
                <img src={image1Png} />
              </div>
            </div>
          </div>
        </div>

    </>
  );
}

export default Home;
