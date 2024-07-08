import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const categories = [
        "Purchase Entry",
        "Sales Entry",
        "Product List",
        "Stock on Hand",
        "Vendor Detail",
        "Customer Detail",
        "Purchase Orders",
        "Sales Orders",
        "Expenses List",
        "Profit Loss"
    ];

    return (
        <div>
            <h2>Dashboard</h2>
            <div className="category-buttons">
                {categories.map((category, index) => (
                    <Link key={index} to={`/category/${category.toLowerCase().replace(/\s/g, '-')}`} className="category-button">
                        {category}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;