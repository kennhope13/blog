import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import banner from '../assets/images/image.jpg';

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '80vh', // Chiều cao tối thiểu là 80% chiều cao màn hình
        padding: '50px 20px', // Thêm khoảng cách phía trên và dưới
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, color: '#333' }}>
        Phạm Minh Tiên
      </Typography>
      
      <Box
        component="img"
        src={banner}
        alt="My Thoughts"
        sx={{
          width: '300px',
          height: 'auto',
          borderRadius: '10px',
          mb: 3,
        }}
      />

      <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
        Xin chào!!! Tôi là một lập trình viên 
      </Typography>

      

      <Button variant="outlined" sx={{ color: '#333', borderColor: '#333' }}>
        All Posts
      </Button>
    </Box>
  );
};

export default Home;
