// InventoryDetail.js
import React from 'react';

const InventoryDetail = ({ books }) => {
  return (
    <div>
      <h4>Inventory Detail</h4>
      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Stock Number</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.bookId}>
              <td>{book.bookName}</td>
              <td>{book.stockNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryDetail;