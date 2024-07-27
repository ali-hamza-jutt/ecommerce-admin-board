import React, { useState } from 'react';
import { Box, Button, TextField, Paper, Typography } from '@mui/material';

const CategoryForm = ({ onAddCategory }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [sale, setSale] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCategory({ name, quantity: parseInt(quantity), sale: parseInt(sale), icon });
    setName('');
    setQuantity('');
    setSale('');
    setIcon('');
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add New Category
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          fullWidth
          margin="normal"
          type="number"
        />
        <TextField
          label="Sale"
          value={sale}
          onChange={(e) => setSale(e.target.value)}
          fullWidth
          margin="normal"
          type="number"
        />
        <TextField
          label="Icon"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Category
        </Button>
      </form>
    </Paper>
  );
};

export default CategoryForm;
