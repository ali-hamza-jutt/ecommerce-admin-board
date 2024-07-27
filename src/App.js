import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import CategoryTable from './components/CategoryTable';
import CategoryForm from './components/CategoryForm';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import ProductTable from './components/ProductTable';
import ProductForm from './components/ProductForm';

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

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState('Dashboard');
  const [categories, setCategories] = useState(initialCategories);
  const [products, setProducts] = useState(initialProducts);

  const handleAddCategory = (category) => {
    setCategories([...categories, category]);
    setSelectedComponent('CategoryList'); // Automatically switch to the CategoryList view
  };

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
    setSelectedComponent('ProductList'); // Automatically switch to the ProductList view
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
      default:
        return <Dashboard />;
    }
  };

  return (
    <Box display="flex">
      <SideBar setSelectedComponent={setSelectedComponent} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {renderComponent()}
      </Box>
    </Box>
  );
};

export default App;
