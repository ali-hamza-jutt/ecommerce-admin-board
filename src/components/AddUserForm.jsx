import React, { useState } from 'react';
import { Box, Button, TextField, Paper, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const AddUserForm = ({ onAddUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    onAddUser({ id, username, email, password });
    setUsername('');
    setEmail('');
    setPassword('');
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
  };

  return (
    <Paper sx={styles.container}>
      <Typography variant="h6" gutterBottom>
        Add New User
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
          sx={styles.input}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          type="email"
          sx={styles.input}
        />
        <TextField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          type="password"
          sx={styles.input}
        />
        <Button type="submit" variant="contained" sx={styles.button} fullWidth>
          Add User
        </Button>
      </form>
    </Paper>
  );
};

export default AddUserForm;
