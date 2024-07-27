import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar'
import CategoryTable from './components/CategoryTable';
import CategoryForm from './components/CategoryForm';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard'
const initialCategories = [
  { name: 'Dried food', icon: '🥫', quantity: 1638, sale: 20 },
  { name: 'Wet food', icon: '🥤', quantity: 1638, sale: 20 },
  { name: 'Supplemental food', icon: '🍲', quantity: 1638, sale: 20 }
];

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState('Dashboard');
  const [categories, setCategories] = useState(initialCategories);

  const handleAddCategory = (category) => {
    setCategories([...categories, category]);
    setSelectedComponent('CategoryList'); // Automatically switch to the CategoryList view
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Dashboard':
        return <Dashboard/>;
      case 'CategoryList':
        return <CategoryTable categories={categories} />;
      case 'AddCategory':
        return <CategoryForm onAddCategory={handleAddCategory} />;
      default:
        return <div>Dashboard</div>;
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
