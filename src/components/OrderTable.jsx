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
  return (
    <Box p={2}>
      <h2>Orders</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Order ID</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total Bill</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <img src={order.product.image} alt={order.product.name} style={{ width: 50, height: 50, marginRight: 10 }} />
                  {order.product.name}
                </TableCell>
                <TableCell>{order.id}</TableCell>
                <TableCell>${order.product.price.toFixed(2)}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>${order.totalBill.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderTable;
