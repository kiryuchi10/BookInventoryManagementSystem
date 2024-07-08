// src/components/TestCommunication.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TestCommunication() {
    const [backendData, setBackendData] = useState(null);

    useEffect(() => {
        // Define a function to fetch data from backend
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/books');
                setBackendData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the function to fetch data
        fetchData();
    }, []);

    return (
        <div>
            <h1>Test Communication Between Frontend and Backend</h1>
            {backendData ? (
                <div>
                    <h2>Books Received from Backend:</h2>
                    <ul>
                        {backendData.map(book => (
                            <li key={book.bookId}>
                                <h3>{book.title}</h3>
                                <p>Author: {book.author}</p>
                                <p>Price: ${book.price}</p>
                                <p>Stock: {book.stock}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default TestCommunication;