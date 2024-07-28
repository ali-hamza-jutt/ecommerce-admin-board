import React, { useState } from 'react';
import { Box, Button, TextField, Paper, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const CategoryForm = ({ onAddCategory }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    onAddCategory({ id, name });
    setName('');
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
        Add New Category
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
        <Button type="submit" variant="contained" sx={styles.button} fullWidth>
          Add Category
        </Button>
      </form>
    </Paper>
  );
};

export default CategoryForm;
