import { Line, Bar } from "react-chartjs-2";
import { Card, CardHeader, CardBody, Row, Col, Container, CardTitle, CardImg } from "reactstrap";
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
const LineChart = (props) => (
    <Card className="card-chart">
        <CardHeader>
            <h5 className="card-category">Customer Sentiment</h5>
        </CardHeader>
        <CardBody>
            <div className="chart-area">
                <Line
                    data={data_2}
                    options={options}
                />
            </div>

        </CardBody>
    </Card>
);
export default LineChart;