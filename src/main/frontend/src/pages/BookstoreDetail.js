// BookstoreDetail.js
import React from 'react';
import InventoryDetail from './InventoryDetail'; // Assuming you'll create this component separately

const BookstoreDetail = ({ bookstore }) => {
  return (
    <div>
      <h4>Bookstore Detail</h4>
      <p>Bookstore Name: {bookstore.name}</p>
      <p>Location: {bookstore.location}</p>
      <p>Phone Number: {bookstore.phone}</p>
      <p>Website: <a href={bookstore.website}>{bookstore.website}</a></p>
      <InventoryDetail books={bookstore.books} />
    </div>
  );
};

export default BookstoreDetail;