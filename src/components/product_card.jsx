import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import product1jpg from "../assets/images/product-1.jpg";
import { Link } from "react-router-dom";
function ProductCard({ imageUrl, productName, productPrice, productLink, rating }) {
  return (
    <Link to="/red-store/products/1">
    <Card className="product-card">
      <a href={productLink}>
        <CardImg top src={imageUrl} alt={productName} className="product-image" />
      </a>
      <CardBody>
        <CardTitle tag="h5">{productName}</CardTitle>
        <div className="rating">
          {Array.from({ length: 5 }).map((_, index) => (
            <i
              key={index}
              className={`fa ${index < rating ? "fa-star" : "fa-star-o"}`}
            ></i>
          ))}
        </div>
        <CardText className="product-price">${productPrice}</CardText>
      </CardBody>
    </Card>
    </Link>
  );
}

export default ProductCard;
