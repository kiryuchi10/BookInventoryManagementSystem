// OrderList.js
import React, { useState } from 'react';
import OrderDetail from './OrderDetail'; // Assuming you'll create this component separately

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Function to add a new order
  const addOrder = () => {
    // Implement logic to add a new order (not detailed here)
    const newOrder = { orderId: 1, userId: 1, status: 'Pending', /* Add other fields as needed */ };
    setOrders([...orders, newOrder]);
  };

  // Function to handle click on order detail button
  const handleOrderDetailClick = (order) => {
    setSelectedOrder(order);
    setShowOrderDetail(true);
  };

  return (
    <div>
      <h2>Order List</h2>
      <button onClick={addOrder}>Add Order</button>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.userId}</td>
              <td>{order.status}</td>
              <td><button onClick={() => handleOrderDetailClick(order)}>View Details</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {showOrderDetail && <OrderDetail order={selectedOrder} onClose={() => setShowOrderDetail(false)} />}
    </div>
  );
};

export default OrderList;