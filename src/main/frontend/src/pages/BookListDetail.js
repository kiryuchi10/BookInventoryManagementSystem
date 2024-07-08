// BookListDetail.js
import React from 'react';
import BookstoreDetail from './BookstoreDetail'; // Assuming you'll create this component separately

const BookListDetail = ({ books }) => {
  return (
    <div>
      <h4>Book List Detail</h4>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Book Name</th>
            <th>Publisher</th>
            <th>Bookstore Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.bookId}>
              <td>{book.bookId}</td>
              <td>{book.bookName}</td>
              <td>{book.publisher}</td>
              <td>{book.bookstoreName}</td>
              <td><button>View Bookstore Detail</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookListDetail;