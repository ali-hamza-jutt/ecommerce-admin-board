import React from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

const OrderTable = ({ orders }) => {
  const styles = {
    container: {
      padding: '16px',
      backgroundColor: '#1e1e2f',
      color: '#fff',
      marginTop: '16px'
    },
    header: {
      marginBottom: '16px',
    },
    table: {
      backgroundColor: '#2e2e3f',
    },
    tableHeader: {
      backgroundColor: '#3e3e4f',
    },
    tableCell: {
      color: '#fff',
    },
    imageCell: {
      display: 'flex',
      alignItems: 'center',
    },
    image: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    text: {
      display: 'flex',
      alignItems: 'center',
    },
  };

  return (
    <Box sx={styles.container}>
      <h2 sx={styles.header}>Orders</h2>
      <TableContainer component={Paper} sx={styles.table}>
        <Table>
          <TableHead>
            <TableRow sx={styles.tableHeader}>
              <TableCell sx={styles.tableCell}>Product</TableCell>
              <TableCell sx={styles.tableCell}>Order ID</TableCell>
              <TableCell sx={styles.tableCell}>Price</TableCell>
              <TableCell sx={styles.tableCell}>Quantity</TableCell>
              <TableCell sx={styles.tableCell}>Total Bill</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell sx={styles.tableCell}>
                  <Box sx={styles.imageCell}>
                    <img src={order.product.image} alt={order.product.name} style={styles.image} />
                    <span style={styles.text}>{order.product.name}</span>
                  </Box>
                </TableCell>
                <TableCell sx={styles.tableCell}>{order.id}</TableCell>
                <TableCell sx={styles.tableCell}>${order.product.price.toFixed(2)}</TableCell>
                <TableCell sx={styles.tableCell}>{order.quantity}</TableCell>
                <TableCell sx={styles.tableCell}>${order.totalBill.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderTable;
