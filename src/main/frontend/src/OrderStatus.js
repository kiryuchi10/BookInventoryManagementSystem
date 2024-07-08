import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiService from './apiService';

const OrderStatus = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    apiService.viewOrders().then(response => setOrders(response.data));
  }, []);

  return (
    <div>
      <h1>Order Status</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Order Type</th>
            <th>User ID</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{order.status}</td>
              <td>{order.order_type}</td>
              <td>{order.user_id}</td>
              <td>
                <Link to={`/order-detail/${order.order_id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderStatus;