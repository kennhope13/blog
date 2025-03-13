import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      position="static"
      sx={{
        background: '#f0f0f0', // màu nền gradient
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        paddingX: 2,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* LOGO */}
        <Typography
          variant="h4"
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
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button sx={navBtn}>🏠</Button>
          </Link>
          
          <Link to="/blog" style={{ textDecoration: 'none' }}>
            <Button sx={navBtn}></Button>
          </Link>
        
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Button sx={navBtn}>👤</Button>
          </Link>
        
          <Link to="/resources" style={{ textDecoration: 'none' }}>
            <Button sx={navBtn}></Button>
          </Link>
        
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button sx={navBtn}></Button>
          </Link>
        </Box>
        )}

        {/* MOBILE MENU */}
        {isMobile && (
          <IconButton size="large" edge="end" color="inherit">
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

const navBtn = {
  color: '#000', // ✅ màu đen
  fontSize: '30px',
  marginLeft: '1rem',
  '&:hover': {
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'scale(1.05)',
    transition: 'all 0.3s ease',
  },
};

export default Navbar;
