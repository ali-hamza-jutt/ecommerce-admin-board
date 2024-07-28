import React from 'react';
import { Line, Bar, Radar, Doughnut } from 'react-chartjs-2';
import ProductTable from './ProductTable';
import OrderTable from './OrderTable';
import UserTable from './UserTable';
import CategoryTable from './CategoryTable';
import 'chart.js/auto';
import '../styles/Dashboard.css';

const Dashboard = ({ products, orders, users, categories }) => {
    const salesData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Total Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const incomeData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Total Income',
                data: [28, 48, 40, 19, 86, 27, 90],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
            },
        ],
    };

    const ordersData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Orders Paid',
                data: [18, 48, 77, 9, 100, 27, 40],
                backgroundColor: 'rgba(153,102,255,0.2)',
                borderColor: 'rgba(153,102,255,1)',
                borderWidth: 1,
            },
        ],
    };

    const visitorsData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Total Visitors',
                data: [48, 32, 47, 25, 60, 45, 50],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
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
        <div className="dashboard-container" >
            <div className="card">
                <h3>Total Sales Trend</h3>
                <p>34,945</p>
                <Line data={salesData} options={options} />
            </div>
            <div className="card table-card" style={{ backgroundColor: '#1e1e2f', border: '2px solid #ffffff' }}
            >
                <ProductTable products={products} />
            </div>
            <div className="card">
                <h3>Total Income</h3>
                <p>$37,802</p>
                <Bar data={incomeData} options={options} />
            </div>
            <div className="card table-card" style={{ backgroundColor: '#1e1e2f', border: '2px solid #ffffff' }}
            >
                <CategoryTable categories={categories} />
            </div>
            <div className="card">
                <h3>Orders Paid</h3>
                <p>34,945</p>
                <Radar data={ordersData} options={options} />
            </div>
            <div className="card table-card" style={{ backgroundColor: '#1e1e2f', border: '2px solid #ffffff' }}
            >
                <OrderTable orders={orders} />
            </div>
            <div className="card">
                <h3>Total Visitors</h3>
                <p>34,945</p>
                <Doughnut data={visitorsData} options={options} />
            </div>
          

            <div className="card table-card" style={{ backgroundColor: '#1e1e2f', border: '2px solid #ffffff' }}
            >
                <UserTable users={users} />
            </div>

        </div>
    );
};

export default Dashboard;
