import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import CategoryTable from './components/CategoryTable';
import CategoryForm from './components/CategoryForm';
import Sidebar from './components/SideBar';
import Dashboard from './components/Dashboard';
import ProductTable from './components/ProductTable';
import ProductForm from './components/ProductForm';
import AddUserForm from './components/AddUserForm';
import UserTable from './components/UserTable';
import OrderTable from './components/OrderTable';
import OrderForm from './components/OrderForm';

const initialCategories = [
  { name: 'Dried food', icon: '🥫', quantity: 1638, sale: 20 },
  { name: 'Wet food', icon: '🥤', quantity: 1638, sale: 20 },
  { name: 'Supplemental food', icon: '🍲', quantity: 1638, sale: 20 }
];

const initialProducts = [
  { id: '1', name: 'Product 1', price: 10, quantity: 100, sales: 50, image: 'https://via.placeholder.com/50' },
  { id: '2', name: 'Product 2', price: 20, quantity: 200, sales: 100, image: 'https://via.placeholder.com/50' },
  { id: '3', name: 'Product 3', price: 30, quantity: 300, sales: 150, image: 'https://via.placeholder.com/50' },
];

const initialUsers = [
  { id: '1', name: 'Ali Hamza', phone: '+923086117654', email: 'xyz@gmail.com', sales: 50, image: 'https://via.placeholder.com/50' },
];

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState('Dashboard');
  const [categories, setCategories] = useState(initialCategories);
  const [products, setProducts] = useState(initialProducts);
  const [users, setUsers] = useState(initialUsers);
  const [orders, setOrders] = useState([]);

  const handleAddCategory = (category) => {
    setCategories([...categories, category]);
    setSelectedComponent('CategoryList');
  };

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
    setSelectedComponent('ProductList');
  };

  const handleAddUser = (user) => {
    setUsers([...users, user]);
    setSelectedComponent('UserTable');
  };

  const handleAddOrder = (order) => {
    setOrders([...orders, order]);
    setSelectedComponent('OrderList');
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'CategoryList':
        return <CategoryTable categories={categories} />;
      case 'AddCategory':
        return <CategoryForm onAddCategory={handleAddCategory} />;
      case 'ProductList':
        return <ProductTable products={products} />;
      case 'AddProduct':
        return <ProductForm onAddProduct={handleAddProduct} />;
      case 'AddUser':
        return <AddUserForm onAddUser={handleAddUser} />;
      case 'UserTable':
        return <UserTable users={users} />;
      case 'OrderList':
        return <OrderTable orders={orders} />;
      case 'AddOrder':
        return <OrderForm onAddOrder={handleAddOrder} products={products} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Box display="flex">
      <Sidebar setSelectedComponent={setSelectedComponent} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Navbar />
        {renderComponent()}
      </Box>
    </Box>
  );
};

export default App;
