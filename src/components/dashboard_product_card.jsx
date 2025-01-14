import React from 'react';

import {
    chartExample1,
    chartExample2,
    chartExample3,
    chartExample4,
} from "variables/charts.js";
import { Line, Bar } from "react-chartjs-2";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";

import { Card, CardHeader, CardBody, Row, Col, Container, CardTitle, CardImg } from "reactstrap";
import { Link } from "react-router-dom";


// Register chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

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
        "Usability",
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
            data: [1, 2, 3,1,3, 4, 5],
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
const DashboardProductCard = () => (
    <Container className="dashboard-product-card" style={{ height: "auto" }}>
        <Container>
        <Row>
            {/* Left Section: Product Details */}
            <Col md="4" className='side_border'>
                <CardImg
                    src={require("assets/images/product-1.jpg")}
                    alt="Product Image"
                    className="product-image"
                    style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                    }}
                />
                <CardBody>
                    <CardTitle tag="h4">Red Gucci t-shirt</CardTitle>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                        lacinia odio vitae vestibulum.
                    </p>
                    <h6 className="text-muted">Price: €3,500</h6>
                </CardBody>
                <Link to="/admin/products/edit/1"><button className="btn btn-primary">Edit Product</button></Link>
            </Col>

            {/* Right Section: Charts */}


            {/* Chart 1 */}
            <Col md="4"  className='side_border' style={{height: "100%"}}>
                <Row style={{height: "100%"}}>
                    <Card className="card-chart" style={{height: "100%"}}>
                        <CardHeader>
                            <h5 className="card-category">
                                Product Review
                            </h5>
                            <CardTitle tag="h3">
                                <i className="fa fa-grin-stars text-success"></i> {/* very Positive */}
                                <i className="fa fa-smile text-success"></i> {/* Positive */}
                                <i className="fa fa-meh text-warning"></i>   {/* Neutral */}
                                <i className="fa fa-frown text-danger"></i>  {/* Negative */}
                                <i className="fa fa-angry text-danger"></i>  {/*Very Negative */}
                            </CardTitle>

                        </CardHeader>
                        <CardBody>
                            <div className="chart-area">
                                <Line
                                    data={data_2}
                                    options={chartExample2.options}
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Row>
                <Row>
                    <Card className="card-chart" style={{height: "100%"}}>
                        <CardHeader>
                            <h5 className="card-category">
                                Total Sold
                            </h5>
                            <CardTitle tag="h3">
                                50 Units
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div className="chart-area">
                                <Line
                                    data={chartExample2.data}
                                    options={chartExample2.options}
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Row>

            </Col>



            {/* Chart 3 */}
            <Col md="4" className='side_border'>
                <Card className="card-chart">
                    <CardHeader>
                        <h5 className="card-category">Customer Sentiment</h5>
                    </CardHeader>
                    <CardBody>
                        <div className="chart-area">
                            <Radar
                                data={data}
                                options={options}
                            />
                        </div>

                    </CardBody>
                </Card>
            </Col>
        </Row>
        </Container>

    </Container>
);

export default DashboardProductCard;

