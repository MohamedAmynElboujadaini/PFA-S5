import React, { useState } from 'react';
import Cookies from 'js-cookie';

const SingleProduct = () => {
  // State to hold the quantity input
  const [quantity, setQuantity] = useState(1);

  // Handle quantity change
  const handleQuantityChange = (event) => {
    const newQuantity = Math.max(1, parseInt(event.target.value)); // Ensure quantity is at least 1
    setQuantity(newQuantity);
  };

  // Function to handle the "Add to Cart" action
  const addToCart = (event) => {
    // Extract product details from data attributes
    const productElement = event.target.closest('.single-product');
    const product = {
      id: productElement.getAttribute('data-id'),
      name: productElement.getAttribute('data-name'),
      price: parseFloat(productElement.getAttribute('data-price')),
      image: productElement.getAttribute('data-image'),
    };

    // Get the existing cart from cookies
    let cart = Cookies.get('cart');
    cart = cart ? JSON.parse(cart) : []; // If no cart, initialize as an empty array

    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      // Update quantity if the product already exists in the cart
      existingProduct.quantity += quantity;
    } else {
      // Add new product to the cart
      cart.push({ ...product, quantity });
    }

    // Save updated cart back to cookies
    Cookies.set('cart', JSON.stringify(cart), { expires: 7 });

    // Optionally, alert the user or update UI
    alert(`Added ${quantity} ${product.name} to the cart!`);
  };

  return (
    <div
      className="small-container single-product"
      data-id="1"
      data-name="Red Printed T-Shirt by SellerName"
      data-price="50.00"
      data-image={require("../assets/images/gallery-1.jpg")}
    >
      <div className="row">
        <div className="col-2">
          <img
            src={require("../assets/images/gallery-1.jpg")}
            width="100%"
            id="ProductImg"
            alt="Product"
          />
        </div>
        <div className="col-2">
          <p>Home / T-Shirt</p>
          <h1>Red Printed T-Shirt by SellerName</h1>
          <h4>$50.00</h4>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
          <button className="btn" onClick={addToCart}>
            Add To Cart
          </button>

          <h3>Product Details <i className="fa fa-indent"></i></h3>
          <br />
          <p>
            Give your summer wardrobe a style upgrade with the HRX Men's Active
            T-Shirt. Team it with a pair of shorts for your morning workout or a
            denims for an evening out with the guys.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;