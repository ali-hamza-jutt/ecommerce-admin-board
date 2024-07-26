// src/Dashboard.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import '../styles/Dashboard.css'

const Dashboard = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Total Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
            },
            {
                label: 'Total Income',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: true,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
            },
            {
                label: 'Orders Paid',
                data: [18, 48, 77, 9, 100, 27, 40],
                fill: true,
                backgroundColor: 'rgba(153,102,255,0.2)',
                borderColor: 'rgba(153,102,255,1)',
            },
            {
                label: 'Total Visitor',
                data: [48, 32, 47, 25, 60, 45, 50],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className="dashboard-container">
            <div className="card">
                <h3>Total Sales</h3>
                <p>34,945</p>
                <Line data={data} options={options} />
            </div>
            <div className="card">
                <h3>Total Income</h3>
                <p>$37,802</p>
                <Line data={data} options={options} />
            </div>
            <div className="card">
                <h3>Orders Paid</h3>
                <p>34,945</p>
                <Line data={data} options={options} />
            </div>
            <div className="card">
                <h3>Total Visitor</h3>
                <p>34,945</p>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default Dashboard;
