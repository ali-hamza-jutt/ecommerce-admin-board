// src/components/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="search-container">
                <input type="text" placeholder="Search here..." />
                <button type="button"><i className="fa fa-search"></i></button>
            </div>
            <div className="icons-container">
                <div className="icon"><i className="fa fa-moon"></i></div>
                <div className="icon notification"><i className="fa fa-bell"></i><span className="badge">1</span></div>
                <div className="icon message"><i className="fa fa-comment"></i><span className="badge">1</span></div>
                <div className="icon"><i className="fa fa-expand"></i></div>
                <div className="icon"><i className="fa fa-th"></i></div>
                <div className="profile">
                    <img src="https://via.placeholder.com/40" alt="Profile" />
                    <span>Kristin Watson</span>
                    <span className="role">Admin</span>
                </div>
                <div className="icon"><i className="fa fa-cog"></i></div>
                <button className="login-button" onClick={() => navigate('/admin-login')}>Admin Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
