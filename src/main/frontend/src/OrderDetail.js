import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiService from './apiService';

const OrderDetail = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    apiService.viewOrderDetails(orderId).then(response => {
      setOrder(response.data.order);
      setBookList(response.data.books);
    });
  }, [orderId]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Order Details</h1>
      <p>Order ID: {order.order_id}</p>
      <p>User ID: {order.user_id}</p>
      <p>Book Store: {order.book_store_name}</p>
      <p>Address: {order.book_store_address}</p>
      <p>Phone: {order.book_store_phone}</p>
      <p>Website: {order.book_store_website}</p>

      <h2>Book List</h2>
      <table>
        <thead>
          <tr>
            <th>Book Code</th>
            <th>Book Name</th>
            <th>Price</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map(book => (
            <tr key={book.book_code}>
              <td>{book.book_code}</td>
              <td>{book.book_name}</td>
              <td>{book.price}</td>
              <td>{book.publisher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetail;