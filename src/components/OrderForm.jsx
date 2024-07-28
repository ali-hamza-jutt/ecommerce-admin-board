import React, { useState } from 'react';
import { Box, Button, TextField, Paper, Typography, Select, MenuItem } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const OrderForm = ({ products, onAddOrder }) => {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = products.find((product) => product.id === productId);
    if (product) {
      const id = uuidv4();
      const totalBill = product.price * parseInt(quantity);
      const order = {
        id,
        product,
        quantity: parseInt(quantity),
        totalBill,
      };
      onAddOrder(order);
      setProductId('');
      setQuantity('');
    }
  };

  const styles = {
    container: {
      padding: '16px',
      marginBottom: '16px',
      backgroundColor: '#1e1e2f',
      color: '#fff',
    },
    button: {
      backgroundColor: '#e68a00',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#d17a00',
      },
    },
    input: {
      marginBottom: '16px',
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#fff',
        },
        '&:hover fieldset': {
          borderColor: '#fff',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#fff',
        },
      },
      '& .MuiInputLabel-root': {
        color: '#fff',
      },
      '& .MuiInputBase-input': {
        color: '#fff',
      },
    },
    select: {
      marginBottom: '16px',
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#fff',
        },
        '&:hover fieldset': {
          borderColor: '#fff',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#fff',
        },
      },
      '& .MuiInputLabel-root': {
        color: '#fff',
      },
      '& .MuiInputBase-input': {
        color: '#fff',
      },
      '& .MuiSvgIcon-root': {
        color: '#fff',
      },
    },
  };

  return (
    <Paper sx={styles.container}>
      <Typography variant="h6" gutterBottom>
        Add New Order
      </Typography>
      <form onSubmit={handleSubmit}>
        <Select
          label="Product"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          fullWidth
          margin="normal"
          sx={styles.select}
        >
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
          sx={styles.input}
        />
        <Button type="submit" variant="contained" sx={styles.button} fullWidth>
          Add Order
        </Button>
      </form>
    </Paper>
  );
};

export default OrderForm;
