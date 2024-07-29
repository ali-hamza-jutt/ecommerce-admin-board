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
import { WidthFull } from '@mui/icons-material';

const CategoryTable = ({ categories }) => {
  const styles = {
    container: {
      padding: '16px',
      backgroundColor: '#1e1e2f',
      color: '#fff',
      marginTop:'16px',
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
  };

  return (
    <Box sx={styles.container}>
      <h2 sx={styles.header}>Categories</h2>
      <TableContainer component={Paper} sx={styles.table}>
        <Table>
          <TableHead>
            <TableRow sx={styles.tableHeader}>
              <TableCell sx={styles.tableCell}>Category</TableCell>
              <TableCell sx={styles.tableCell}>Category ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell sx={styles.tableCell}>{category.name}</TableCell>
                <TableCell sx={styles.tableCell}>{category.id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CategoryTable;
