// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import Dashboard from './pages/Dashboard';
// import Category from './pages/Category';
// import ShoppingList from './pages/ShoppingList';
// import PurchaseEntry from './pages/PurchaseEntry';
// import OrderStatus from './OrderStatus';
// import OrderDetail from './OrderDetail';
// import StockOnHand from './pages/StockOnHand'; // Ensure the path is correct
// import VendorDetail from './pages/VendorDetail'; // Ensure VendorDetail has an export
// import ProfitLoss from './pages/ProfitLoss'; // Ensure ProfitLoss has an export
// import OrderList from './pages/OrderList'; // Import OrderList page component
// import SalesEntry from './pages/SalesEntry';
// import ProductList from './pages/ProductList';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/category/:categoryName" element={<Category />} />
//         <Route path="/shopping-list" element={<ShoppingList />} />
//         <Route path="/purchase-entry" element={<PurchaseEntry />} />
//         <Route path="/category/purchase-entry" element={<PurchaseEntry />} />
//         <Route path="/order-status" element={<OrderStatus />} />
//         <Route path="/order-detail/:orderId" element={<OrderDetail />} />
//         <Route path="/stock-on-hand" element={<StockOnHand />} />
//         <Route path="/vendor-detail" element={<VendorDetail />} />
//         <Route path="/profit-loss" element={<ProfitLoss />} />
//         <Route path="/order-list" element={<OrderList />} /> {/* Route to OrderList component */}
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/category/purchase-entry" element={<PurchaseEntry />} />
//         <Route path="/category/sales-entry" element={<SalesEntry />} />
//         <Route path="/category/product-list" element={<ProductList />} />
//         <Route path="/category/stock-on-hand" element={<StockOnHand />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
/*import logo from './logo.svg';

import './App.css';
import {useEffect, useState} from "react";
import React from "react";
function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/showMe")
        .then((res) => {
          return res.json();
        })
        .then(function (result) {
            setData(result);
      })
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <ul>
              {data.map((v,idx)=><li key={`${idx}-${v}`}>{v}</li>)}
          </ul>
      </header>
    </div>
  );
}
export default App;*/
import React from 'react';



import BookList from './BookList';

const App = () => {
    return (
        <div>
            <h1>Book Inventory Management</h1>
            <BookList />
        </div>
    );
};
export default App;
