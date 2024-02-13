// Navigation.js
import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
