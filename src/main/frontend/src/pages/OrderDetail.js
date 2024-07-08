// OrderDetail.js
import React from 'react';
import BookListDetail from './BookListDetail'; // Assuming you'll create this component separately

const OrderDetail = ({ order, onClose }) => {
  return (
    <div>
      <h3>Order Detail</h3>
      <p>Order ID: {order.orderId}</p>
      <p>User ID: {order.userId}</p>
      <BookListDetail books={order.books} />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default OrderDetail;