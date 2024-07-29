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

  const UserTable = ({ users }) => {
    const styles = {
      container: {
        padding: '16px',
        backgroundColor: '#1e1e2f',
        color: '#fff',
        marginTop:'16px'
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
        <h2 sx={styles.header}>Users</h2>
        <TableContainer component={Paper} sx={styles.table}>
          <Table>
            <TableHead>
              <TableRow sx={styles.tableHeader}>
                <TableCell sx={styles.tableCell}>Username</TableCell>
                <TableCell sx={styles.tableCell}>Email</TableCell>
                <TableCell sx={styles.tableCell}>User ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell sx={styles.tableCell}>{user.username}</TableCell>
                  <TableCell sx={styles.tableCell}>{user.email}</TableCell>
                  <TableCell sx={styles.tableCell}>{user.id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };

  export default UserTable;
