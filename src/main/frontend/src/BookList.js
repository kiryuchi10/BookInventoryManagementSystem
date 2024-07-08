import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/books')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Book Inventory</h1>
            <ul>
                {books.map(book => (
                    <li key={book.bookId}>
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <p>Price: ${book.price}</p>
                        <p>Stock: {book.stock}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;