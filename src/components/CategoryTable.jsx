import React from 'react';
import {
  Box,
  Button,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  MenuItem,
  Select
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

const CategoryTable = ({ categories }) => {
  return (
    <Box p={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <h2>Categories</h2>
      </Box>
      <Paper sx={{ display: 'flex', alignItems: 'center', p: 1, mb: 2 }}>
        <Select defaultValue={10} variant="outlined" sx={{ mr: 2 }}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
        <InputBase placeholder="Search here..." startAdornment={<SearchIcon />} sx={{ ml: 1, flex: 1 }} />
      </Paper>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Icon</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Sale</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.name}>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.icon}</TableCell>
                <TableCell>{category.quantity.toLocaleString()}</TableCell>
                <TableCell>{category.sale}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CategoryTable;