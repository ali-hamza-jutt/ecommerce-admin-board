import React from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  InputBase
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const ProductTable = ({ products }) => {
  const styles = {
    container: {
      padding: '16px',
      backgroundColor: '#1e1e2f',
      color: '#fff',
      marginTop: '16px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
    },
    search: {
      display: 'flex',
      alignItems: 'center',
      padding: '8px',
      marginBottom: '16px',
      backgroundColor: '#2e2e3f',
      color: '#fff',
    },
    input: {
      marginLeft: '8px',
      flex: 1,
      color: '#fff',
      '.MuiInputBase-input': {
        color: '#fff',
      },
    },
    table: {
      backgroundColor: '#2e2e3f',
    },
    tableHeader: {
      backgroundColor: '#3e3e4f',
    },
    tableCell: {
      color: '#fff',
      alignItems: 'center',
    },
    productCell: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    productImage: {
      width: 50,
      height: 50,
    },
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <h2>Products</h2>
      </Box>
      <Paper sx={styles.search}>
        <InputBase placeholder="Search here..." startAdornment={<SearchIcon />} sx={styles.input} />
      </Paper>
      <TableContainer component={Paper} sx={styles.table}>
        <Table>
          <TableHead>
            <TableRow sx={styles.tableHeader}>
              <TableCell sx={styles.tableCell}>Product</TableCell>
              <TableCell sx={styles.tableCell}>Product ID</TableCell>
              <TableCell sx={styles.tableCell}>Price</TableCell>
              <TableCell sx={styles.tableCell}>Quantity</TableCell>
              <TableCell sx={styles.tableCell}>Sales</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell sx={styles.tableCell}>
                  <Box sx={styles.productCell}>
                    <img src={product.image} alt={product.name} style={styles.productImage} />
                    <span>{product.name}</span>
                  </Box>
                </TableCell>
                <TableCell sx={styles.tableCell}>{product.id}</TableCell>
                <TableCell sx={styles.tableCell}>${product.price.toFixed(2)}</TableCell>
                <TableCell sx={styles.tableCell}>{product.quantity.toLocaleString()}</TableCell>
                <TableCell sx={styles.tableCell}>{product.sales.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductTable;
