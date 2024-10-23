import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.config';  // Ensure you import your Firebase configuration
import { signOut } from 'firebase/auth';
import { toast } from "react-toastify";
import MenuIcon from '@mui/icons-material/Menu';

function NavbarComponent() {
  const [user] = useAuthState(auth);  // Get the authenticated user, if exists
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control the Drawer

  const onLogout = () => {
    signOut(auth).then(() => {
      toast.success("Logged out successfully.");
      navigate("/", { replace: true });
    });
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleItemClick = (callback) => {
    callback(); // Call the passed callback
    setDrawerOpen(false); // Close the drawer
  };

  const menuItems = (
    <List>
      {user ? (
        <>
          <ListItem button component={Link} to="/offers" onClick={() => handleItemClick(() => {})}>
            <ListItemText primary="Offers" />
          </ListItem>
          <ListItem button component={Link} to="/ayuda" onClick={() => handleItemClick(() => {})}>
            <ListItemText primary="Ayuda" />
          </ListItem>
          <ListItem button component={Link} to="/user/profile" onClick={() => handleItemClick(() => {})}>
            <ListItemText primary="User" />
          </ListItem>
          <ListItem button onClick={() => handleItemClick(onLogout)}>
            <ListItemText primary="Logout" />
          </ListItem>
        </>
      ) : (
        <>
          <ListItem button component={Link} to="/login" onClick={() => handleItemClick(() => {})}>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button component={Link} to="/sign-up" onClick={() => handleItemClick(() => {})}>
            <ListItemText primary="Register" />
          </ListItem>
        </>
      )}
    </List>
  );

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white' }}>
            MyddApp
          </Typography>
          <div style={{ flexGrow: 1 }} />

          {/* Hamburger Menu Icon */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' } }} // Show on mobile
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {menuItems}
      </Drawer>
    </AppBar>
  );
}

export default NavbarComponent;
