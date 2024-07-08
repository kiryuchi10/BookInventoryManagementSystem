import axios from 'axios';

const API_BASE_URL = 'http://your-api-endpoint.com/api';

const apiService = {
  // Book Management
  addBook: (book) => axios.post(`${API_BASE_URL}/books`, book),
  editBook: (id, book) => axios.put(`${API_BASE_URL}/books/${id}`, book),
  deleteBook: (id) => axios.delete(`${API_BASE_URL}/books/${id}`),
  viewBooks: () => axios.get(`${API_BASE_URL}/books`),

  // Order Management
  addOrder: (order) => axios.post(`${API_BASE_URL}/orders`, order),
  editOrder: (id, order) => axios.put(`${API_BASE_URL}/orders/${id}`, order),
  deleteOrder: (id) => axios.delete(`${API_BASE_URL}/orders/${id}`),
  viewOrders: () => axios.get(`${API_BASE_URL}/orders`),

  // Inventory Management
  stockIn: (inventory) => axios.post(`${API_BASE_URL}/inventory/stock-in`, inventory),
  stockOut: (inventory) => axios.post(`${API_BASE_URL}/inventory/stock-out`, inventory),
  viewInventory: () => axios.get(`${API_BASE_URL}/inventory`),
  updateInventory: (id, inventory) => axios.put(`${API_BASE_URL}/inventory/${id}`, inventory),

  // User Management
  addUser: (user) => axios.post(`${API_BASE_URL}/users`, user),
  editUser: (id, user) => axios.put(`${API_BASE_URL}/users/${id}`, user),
  deleteUser: (id) => axios.delete(`${API_BASE_URL}/users/${id}`),
  viewUsers: () => axios.get(`${API_BASE_URL}/users`),

  // Branch Management
  addBranch: (branch) => axios.post(`${API_BASE_URL}/branches`, branch),
  editBranch: (id, branch) => axios.put(`${API_BASE_URL}/branches/${id}`, branch),
  deleteBranch: (id) => axios.delete(`${API_BASE_URL}/branches/${id}`),
  viewBranches: () => axios.get(`${API_BASE_URL}/branches`),

  // Purchase Entry
  addPurchaseEntry: (purchaseEntry) => axios.post(`${API_BASE_URL}/purchase-entry`, purchaseEntry)
};

export default apiService;