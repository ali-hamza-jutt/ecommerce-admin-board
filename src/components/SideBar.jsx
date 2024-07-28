import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListSubheader
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  Category as CategoryIcon,
  ExpandLess,
  ExpandMore,
  Label as LabelIcon,
  Assignment as AssignmentIcon,
  Person as PersonIcon,
  People as PeopleIcon
} from '@mui/icons-material';

const Sidebar = ({ setSelectedComponent }) => {
  const [open, setOpen] = React.useState({
    ecommerce: false,
    category: true,
    attributes: false,
    order: false,
    user: false,
    roles: false
  });

  const handleClick = (item) => {
    setOpen((prevOpen) => ({ ...prevOpen, [item]: !prevOpen[item] }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box'
        }
      }}
    >
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <img src="logo.png" alt="Remos" style={{ width: 50, height: 50 }} />
          </ListSubheader>
        }
      >
        <ListItem button onClick={() => setSelectedComponent('Dashboard')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => handleClick('ecommerce')}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Ecommerce" />
          {open.ecommerce ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.ecommerce} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} onClick={() => setSelectedComponent('ProductList')}>
              <ListItemText primary="Product List" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => setSelectedComponent('AddProduct')}>
              <ListItemText primary="Add Product" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick('category')}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Category" />
          {open.category ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.category} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} onClick={() => setSelectedComponent('CategoryList')}>
              <ListItemText primary="Category List" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => setSelectedComponent('AddCategory')}>
              <ListItemText primary="Add Category" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick('attributes')}>
          <ListItemIcon>
            <LabelIcon />
          </ListItemIcon>
          <ListItemText primary="Attributes" />
          {open.attributes ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.attributes} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Attribute List" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Add Attribute" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick('order')}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
          {open.order ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.order} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Order List" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Add Order" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick('user')}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
          {open.user ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.user} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}  onClick={() => setSelectedComponent('UserTable')}>
              <ListItemText primary="User List" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}  onClick={() => setSelectedComponent('AddUser')}>
              <ListItemText primary="Add User" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick('roles')}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Roles" />
          {open.roles ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.roles} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Role List" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Add Role" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
