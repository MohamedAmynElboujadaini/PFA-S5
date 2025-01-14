import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardImg, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Radar, Line } from "react-chartjs-2";
import {
    faFaceAngry,
    faFaceFrown,
    faFaceMeh,
    faFaceSmile,
    faFaceLaugh
} from '@fortawesome/free-regular-svg-icons';

import {
    chartExample1,
    chartExample2,
    chartExample3,
    chartExample4,
} from "variables/charts.js";

const getSentimentIcon = (rating) => {
    const numRating = parseFloat(rating);
    if (numRating <= 1) return <FontAwesomeIcon icon={faFaceAngry} className="text-danger" />;
    if (numRating <= 2) return <FontAwesomeIcon icon={faFaceFrown} className="text-warning" />;
    if (numRating <= 3) return <FontAwesomeIcon icon={faFaceMeh} className="text-info" />;
    if (numRating <= 4) return <FontAwesomeIcon icon={faFaceSmile} className="text-primary" />;
    return <FontAwesomeIcon icon={faFaceLaugh} className="text-success" />;
};
const data = {
    labels: [
        "Color",
        "Customer Support",
        "Delivery",
        "Design",
        "Durability",
        "Functionality",
        "Price",
        "Quality",
        "Usability"
    ],

    datasets: [
        {
            label: "Product 1",
            data: [1, 0.5, 0, 3, 4, 5, 3, 2, 1],
            backgroundColor: "rgba(94, 162, 25, 0.2)",
            borderColor: "rgba(94, 162, 25, 1)",
            borderWidth: 1,
        },
        /*{
            label: "Product 2",
            data: [1, 0.5, 0, 1.5, 0, 5, 1, 1, 1],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
        },*/
    ],
};
const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        r: {
            angleLines: {
                color: "rgba(0, 0, 0, 0.1)",
            },
            grid: {
                color: "rgba(0, 0, 0, 0.1)",
            },
            pointLabels: {
                font: {
                    size: 14,
                },
            },
            ticks: {
                backdropColor: "transparent",
            },
        },
    },
};
const data_2 = {

    labels: [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
    ],

    datasets: [
        {
            label: "Product 1",
            data: [1, 2, 3, 1, 3, 4, 5],
            backgroundColor: "rgba(94, 162, 25, 0.2)",
            borderColor: "rgba(94, 162, 25, 1)",
            borderWidth: 1,
        },
        /*{
            label: "Product 2",
            data: [1, 0.5, 0, 1.5, 0, 5, 1, 1, 1],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
        },*/
    ],
};

const DashboardProductDetails = ({ product }) => {
    // Sample product data if none provided
    const defaultProduct = {
        id: 1,
        title: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation feature. Perfect for music enthusiasts and professionals alike. Comes with 20-hour battery life and premium comfort padding.",
        price: 99.99,
        rating: 4.5,
        reviews: 128,
        imageUrl: "https://via.placeholder.com/600x400",
        salesData: [65, 59, 80, 81, 56, 55],
        ratingDistribution: [6, 12, 25, 35, 50],
        priceHistory: [109.99, 104.99, 99.99, 99.99, 94.99, 99.99]
    };

    const actualProduct = product || defaultProduct;

    // Simple bar chart style
    const barStyle = {
        height: '20px',
        backgroundColor: '#0d6efd',
        marginBottom: '8px',
        transition: 'width 0.3s ease'
    };

    return (
        <div className="content">
            {/* Product Info Section */}
            <Card className="mb-4">
                <Row className="g-0">
                    <Col md={3}>
                        <CardImg
                            src={actualProduct.imageUrl}
                            alt={actualProduct.title}
                            className="img-fluid rounded-start"
                            style={{ objectFit: 'cover', height: '100%' }}
                        />
                    </Col>
                    <Col md={3}>
                        <CardBody>
                            <CardTitle className='font-weight-bold' tag="h2">{actualProduct.title}</CardTitle>
                            <p className="text-muted">{actualProduct.description}</p>
                            <div className="d-flex align-items-center mb-3  justify-content-end">
                                <h3 className='font-weight-bold mb-0 me-3'>${actualProduct.price}</h3>
                            </div>
                            <div className="d-flex align-items-center">
                                <h3 style={{ color: '#666', paddingRight: '8px' }}>
                                    {actualProduct.rating}/5
                                </h3>
                                <h3 style={{ color: '#666', scale: '1.2' }}>
                                    {getSentimentIcon(actualProduct.rating)}
                                </h3>
                                <h3 style={{ color: '#666', paddingLeft: '8px' }}>
                                    ({actualProduct.reviews} reviews)
                                </h3>
                            </div>
                            <Button color="primary" tag={Link} to="/admin/products/edit/1">
                                Edit product
                            </Button>
                        </CardBody>
                    </Col>
                    <Col md={6}>


                        <Radar
                            data={data}
                            options={options}
                        />


                    </Col>
                </Row>
            </Card>


            {/* Statistics Section */}
            <Row>
                {/* Sales Trend */}
                <Col md={4}>
                    <Card className="mb-4">
                        <CardHeader>
                            <CardTitle className='font-weight-bold' tag="h3">Total sales</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div className='font-weight-bold h4' style={{ height: '20px' }}>
                                $500.99
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                {/* sold units */}
                <Col md={4}>
                    <Card className="mb-4">
                        <CardHeader>
                            <CardTitle className='font-weight-bold ' tag="h3">Units sold </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div className='font-weight-bold h4' style={{ height: '20px' }}>
                                45 Units
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                {/* units sold by day */}
                <Col md={4}>
                    <Card className="mb-4">
                        <CardHeader>
                            <CardTitle className='font-weight-bold ' tag="h3">Average units sold by day</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div className='font-weight-bold h4' style={{ height: '20px' }}>
                                3.5 Units
                            </div>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
            {/* Charts Section */}
            <Row>
                {/* Sales Trend */}
                <Col md={4}>
                    <Card className="mb-4">
                        <CardHeader>
                            <CardTitle tag="h5">Price History</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div style={{ height: '200px' }}>
                                <Line
                                    data={chartExample2.data}
                                    options={chartExample2.options}
                                />
                            </div>
                        </CardBody>
                    </Card>

                </Col>

                {/* Rating Distribution */}
                <Col md={4}>
                    <Card className="mb-4">
                        <CardHeader>
                            <CardTitle tag="h5">Sales History</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div style={{ height: '200px' }}>
                                <Line
                                    data={data_2}
                                    options={chartExample2.options}
                                />
                            </div>
                        </CardBody>
                    </Card>

                </Col>

                {/* Price History */}
                <Col md={4}>
                    <Card className="mb-4">
                        <CardHeader>
                            <CardTitle tag="h5">Rating History</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div style={{ height: '200px' }}>
                                <Line
                                    data={data_2}
                                    options={chartExample2.options}
                                />
                            </div>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </div>

    );
};

export default DashboardProductDetails;