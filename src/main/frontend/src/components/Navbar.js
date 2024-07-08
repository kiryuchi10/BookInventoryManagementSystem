import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="index-icon">🏠</Link>
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
            <div className="navbar-right">
                <Link to="/shopping-list">🛒 Shopping List</Link>
                <Link to="/purchase-entry">Purchase Entry</Link>
                <Link to="/order-list">Order List</Link> {/* Add this link */}
            </div>
        </nav>
    );
};

export default Navbar;