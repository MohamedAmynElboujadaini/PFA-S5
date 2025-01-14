import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardImg, Row, Col,Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFaceAngry,
    faFaceFrown,
    faFaceMeh,
    faFaceSmile,
    faFaceLaugh
} from '@fortawesome/free-regular-svg-icons';

const getSentimentIcon = (rating) => {
    // Convert rating to number between 0 and 5
    const numRating = parseFloat(rating);

    if (numRating <= 1) {
        return <FontAwesomeIcon icon={faFaceAngry} className="text-danger" />;
    } else if (numRating <= 2) {
        return <FontAwesomeIcon icon={faFaceFrown} className="text-warning" />;
    } else if (numRating <= 3) {
        return <FontAwesomeIcon icon={faFaceMeh} className="text-info" />;
    } else if (numRating <= 4) {
        return <FontAwesomeIcon icon={faFaceSmile} className="text-primary" />;
    } else {
        return <FontAwesomeIcon icon={faFaceLaugh} className="text-success" />;
    }
};

const DashboardProductCard = ({ product }) => {
    // Sample product data if none provided
    const defaultProduct = {
        id: 1,
        title: "Wireless Headphones",
        price: 99.99,
        rating: 4.5,
        reviews: 128,
        imageUrl: "https://via.placeholder.com/300x200"
    };

    const actualProduct = product || defaultProduct;

    // Function to render rating faces based on rating value
    const getRatingFace = (rating) => {
        if (rating >= 4.5) return faFaceLaugh;
        if (rating >= 4) return faFaceSmile;
        if (rating >= 3) return faFaceMeh;
        if (rating >= 2) return faFaceFrown;
        return faFaceAngry;
    };

    return (
        <Card className="shadow-sm" style={{ maxWidth: '300px' }}>
            <CardImg
                top
                src={actualProduct.imageUrl}
                alt={actualProduct.title}
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <CardBody>
                <Link
                    to={`/product/${actualProduct.id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <CardTitle className='font-weight-bold' tag="h4">
                        {actualProduct.title}
                    </CardTitle>
                </Link>

                <Row className="align-items-center mt-2">
                    <Col>
                        <h4  className="mb-0 font-weight-bold">
                            ${actualProduct.price.toFixed(2)}
                        </h4>
                    </Col>
                </Row>

                <Row className="align-items-center mt-2">
                    <Col className="d-flex align-items-center">
                        <span style={{ color: '#666', paddingRight: '5px' }}>
                            {actualProduct.rating}/5
                        </span>
                        <span style={{ color: '#666', scale: '1.2' }}>
                            {getSentimentIcon(actualProduct.rating)}
                        </span>
                        <span style={{ color: '#666', paddingLeft: '5px' }}>
                            ({actualProduct.reviews} reviews)
                        </span>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col className="text-center">
                        <Button
                            color="primary"
                            tag={Link}
                            to={`/admin/products/${actualProduct.id}`}
                        >
                            See Details
                        </Button>
                    </Col>
                </Row>
            </CardBody>
        </Card>

    );
};

export default DashboardProductCard;

//here is the dashboard card.