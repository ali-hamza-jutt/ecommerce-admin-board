import React, { useState } from 'react';
import { Box, Button, TextField, Paper, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const ProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [sales, setSales] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    onAddProduct({ id, name, price: parseFloat(price), quantity: parseInt(quantity), sales: parseInt(sales), image });
    setName('');
    setPrice('');
    setQuantity('');
    setSales('');
    setImage('');
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
    }
  };

  return (  
    <Paper sx={styles.container}>
      <Typography variant="h6" gutterBottom>
        Add New Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          sx={styles.input}
        />
        <TextField
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
          margin="normal"
          type="number"
          sx={styles.input}
        />
        <TextField
          label="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          fullWidth
          margin="normal"
          type="number"
          sx={styles.input}
        />
        <TextField
          label="Sales"
          value={sales}
          onChange={(e) => setSales(e.target.value)}
          fullWidth
          margin="normal"
          type="number"
          sx={styles.input}
        />
        <TextField
          label="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          fullWidth
          margin="normal"
          sx={styles.input}
        />
        <Button type="submit" variant="contained" sx={styles.button} fullWidth>
          Add Product
        </Button>
      </form>
    </Paper>
  );
};

export default ProductForm;
