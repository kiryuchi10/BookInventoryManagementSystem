import React, { useState, useEffect } from 'react';
import apiService from '../apiService';

const StockOnHand = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    apiService.viewInventory().then(response => setStocks(response.data));
  }, []);

  return (
    <div>
      <h1>Stock On Hand</h1>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(stock => (
            <tr key={stock.product_id}>
              <td>{stock.product_id}</td>
              <td>{stock.product_name}</td>
              <td>{stock.quantity}</td>
              <td>{stock.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockOnHand;