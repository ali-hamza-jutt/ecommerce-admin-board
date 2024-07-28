import React, { useState } from 'react';
import { Box, Button, TextField, Paper, Typography, MenuItem, Select } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const OrderForm = ({ onAddOrder, products }) => {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = products.find(p => p.id === productId);
    if (product) {
      const totalBill = product.price * quantity;
      const order = {
        id: uuidv4(),
        product,
        quantity: parseInt(quantity),
        totalBill
      };
      onAddOrder(order);
      setProductId('');
      setQuantity('');
    }
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 2,marginTop:2 }}>
      <Typography variant="h6" gutterBottom>
        Add New Order
      </Typography>
      <form onSubmit={handleSubmit}>
        <Select
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          fullWidth
          margin="normal"
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select Product
          </MenuItem>
          {products.map((product) => (
            <MenuItem key={product.id} value={product.id}>
              {product.name}
            </MenuItem>
          ))}
        </Select>
        <TextField
          label="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          fullWidth
          margin="normal"
          type="number"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Order
        </Button>
      </form>
    </Paper>
  );
};

export default OrderForm;
