import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListSubheader,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  Category as CategoryIcon,
  ExpandLess,
  ExpandMore,
  Assignment as AssignmentIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import useScreenSize from '../hooks/useScreenSize.js';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Sidebar = ({ isOpen, toggleSidebar, setSelectedComponent }) => {
  const { isMobile } = useScreenSize();
  const [open, setOpen] = React.useState({
    ecommerce: false,
    category: true,
    attributes: false,
    order: false,
    user: false,
    roles: false,
  });

  const handleClick = (item) => {
    setOpen((prevOpen) => ({ ...prevOpen, [item]: !prevOpen[item] }));
  };

  const styles = {
    drawer: {
      width: 240,
      flexShrink: 0,
      transition: 'transform 0.3s ease-in-out',
      transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
      '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
        backgroundColor: '#1e1e2f',
        color: '#fff',
      },
    },
    mobileHeader: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#1e1e2f',
      color: '#fff',
      fontFamily: 'Playwrite PL',
      cursor: 'default',
    },
    listItem: {
      '&:hover': {
        backgroundColor: '#2e2e3f',
      },
    },
    nestedListItem: {
      paddingLeft: '30px',
      '&:hover': {
        backgroundColor: '#3e3e4f',
      },
    },
    selected: {
      backgroundColor: '#e68a00 !important',
      color: '#fff',
      '& .MuiListItemIcon-root': {
        color: '#fff',
      },
    },
    listIcon: {
      color: '#e68a00',
    },
  };

  return (
    <Drawer variant={isMobile ? "temporary" : "permanent"} sx={styles.drawer} open={isOpen} onClose={toggleSidebar}>
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" sx={styles.logo}>
            {isMobile ? (
              <div style={styles.mobileHeader}>
                <h1 style={{ color: '#fff', fontFamily: 'Playwrite PL', cursor: 'default' }}>.Asos</h1>
                <MenuRoundedIcon onClick={toggleSidebar} />
              </div>
            ) : (
              <h1 style={{ color: '#fff', fontFamily: 'Playwrite PL', cursor: 'default' }}>.Asos</h1>
            )}
          </ListSubheader>
        }
      >
        <ListItem button onClick={() => setSelectedComponent('Dashboard')} sx={styles.listItem}>
          <ListItemIcon sx={styles.listIcon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => handleClick('ecommerce')} sx={styles.listItem}>
          <ListItemIcon sx={styles.listIcon}>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Ecommerce" />
          {open.ecommerce ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.ecommerce} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={styles.nestedListItem} onClick={() => setSelectedComponent('ProductList')}>
              <ListItemText primary="Product List" />
            </ListItem>
            <ListItem button sx={styles.nestedListItem} onClick={() => setSelectedComponent('AddProduct')}>
              <ListItemText primary="Add Product" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick('category')} sx={styles.listItem}>
          <ListItemIcon sx={styles.listIcon}>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Category" />
          {open.category ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.category} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={styles.nestedListItem} onClick={() => setSelectedComponent('CategoryList')}>
              <ListItemText primary="Category List" />
            </ListItem>
            <ListItem button sx={styles.nestedListItem} onClick={() => setSelectedComponent('AddCategory')}>
              <ListItemText primary="Add Category" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick('order')} sx={styles.listItem}>
          <ListItemIcon sx={styles.listIcon}>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
          {open.order ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.order} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={styles.nestedListItem} onClick={() => setSelectedComponent('OrderList')}>
              <ListItemText primary="Order List" />
            </ListItem>
            <ListItem button sx={styles.nestedListItem} onClick={() => setSelectedComponent('AddOrder')}>
              <ListItemText primary="Add Order" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick('user')} sx={styles.listItem}>
          <ListItemIcon sx={styles.listIcon}>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
          {open.user ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.user} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={styles.nestedListItem} onClick={() => setSelectedComponent('UserTable')}>
              <ListItemText primary="User List" />
            </ListItem>
            <ListItem button sx={styles.nestedListItem} onClick={() => setSelectedComponent('AddUser')}>
              <ListItemText primary="Add User" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
