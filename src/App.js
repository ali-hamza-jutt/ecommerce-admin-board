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


const App = () => {
  const [selectedComponent, setSelectedComponent] = useState('Dashboard');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
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
        return <Dashboard  products={products}
        orders={orders}
        users={users}
        categories={categories}/>;
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
        return <Dashboard  products={products}
        orders={orders}
        users={users}
        categories={categories} />;
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