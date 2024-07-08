import React, { useState, useEffect } from 'react';

const TestComponent = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/books');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div>
      <h2>Books from Backend</h2>
      <ul>
        {books.map(book => (
          <li key={book.bookId}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestComponent