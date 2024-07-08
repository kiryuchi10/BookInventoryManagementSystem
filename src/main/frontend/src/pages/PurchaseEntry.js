import React, { useState } from 'react';
import apiService from '../apiService';

const PurchaseEntry = () => {
    const [purchaseEntry, setPurchaseEntry] = useState({
        userId: '',
        orderNumber: '',
        purchaseDate: '',
        bookId: '',
        quantity: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setPurchaseEntry({ ...purchaseEntry, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        const { userId, orderNumber, purchaseDate, bookId, quantity } = purchaseEntry;
        if (!userId || !orderNumber || !purchaseDate || !bookId || !quantity) {
            setError('Please fill in all fields');
            return;
        }

        // Add purchase entry via API
        apiService.addPurchaseEntry(purchaseEntry)
            .then(() => {
                setSuccess('Purchase entry submitted successfully');
                setError('');
                setPurchaseEntry({
                    userId: '',
                    orderNumber: '',
                    purchaseDate: '',
                    bookId: '',
                    quantity: ''
                });
            })
            .catch(() => {
                setError('Failed to submit purchase entry');
                setSuccess('');
            });
    };

    return (
        <div>
            <h2>Purchase Entry</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User ID:</label>
                    <input
                        name="userId"
                        value={purchaseEntry.userId}
                        onChange={handleChange}
                        placeholder="User ID"
                    />
                </div>
                <div>
                    <label>Order Number:</label>
                    <input
                        name="orderNumber"
                        value={purchaseEntry.orderNumber}
                        onChange={handleChange}
                        placeholder="Order Number"
                    />
                </div>
                <div>
                    <label>Purchase Date:</label>
                    <input
                        type="date"
                        name="purchaseDate"
                        value={purchaseEntry.purchaseDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Book ID:</label>
                    <input
                        name="bookId"
                        value={purchaseEntry.bookId}
                        onChange={handleChange}
                        placeholder="Book ID"
                    />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input
                        type="number"
                        name="quantity"
                        value={purchaseEntry.quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                    />
                </div>
                <button type="submit">Submit Order</button>
            </form>
        </div>
    );
};

export default PurchaseEntry;