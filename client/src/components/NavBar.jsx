import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // mobile view
  const [drawerOpen, setDrawerOpen] = useState(false); // toggle mobile drawer

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: '🏠 Home', path: '/' },
    { text: '📝 Blog', path: '/blog' },
    { text: '👤 About', path: '/about' },
    { text: '📚 Resources', path: '/resources' },
    { text: '👉 Contact', path: '/contact' },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} component={Link} to={item.path}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: '#f0f0f0',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          paddingX: 2,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* LOGO */}
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              color: '#333333',
              cursor: 'pointer',
              letterSpacing: 1,
            }}
          >
            NEIT
          </Typography>

          {/* DESKTOP MENU */}
          {!isMobile && (
            <Box>
              {menuItems.map((item, index) => (
                <Link to={item.path} key={index} style={{ textDecoration: 'none' }}>
                  <Button sx={navBtn}>{item.text}</Button>
                </Link>
              ))}
            </Box>
          )}

          {/* MOBILE MENU ICON */}
          {isMobile && (
            <>
              <IconButton size="large" edge="end" color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* DRAWER COMPONENT */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
};

const navBtn = {
  color: '#000',
  fontSize: '15px',
  marginLeft: '1rem',
  '&:hover': {
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'scale(1.05)',
    transition: 'all 0.3s ease',
  },
};

export default Navbar;
