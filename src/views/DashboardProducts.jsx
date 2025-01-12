/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import "assets/css/global.css";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Container, CardTitle, CardImg } from "reactstrap";
import { Link } from "react-router-dom";


import DashboardProductCard from "components/dashboard_product_card.jsx";
import DashboardProductCard2 from "components/dashboard_product_card_2.jsx";




import {
    chartExample1,
    chartExample2,
    chartExample3,
    chartExample4,
} from "variables/charts.js";
import { Line, Bar } from "react-chartjs-2";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);


function DashboardProducts() {


    return (
        <>
            <div className="content">
                
                    <Row >
                        {/* Product Card */}
                        <Col md="12" className="mb-4">
                            <DashboardProductCard2/>
                            <DashboardProductCard2/>
                            <DashboardProductCard2/>
                        </Col>
                    </Row>
                
            </div>

        </>
    );
}

export default DashboardProducts;











