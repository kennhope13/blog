import React from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import banner from '../assets/images/image.jpg';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // nhỏ hơn 600px

  return (
    <Box
      sx={{
        minHeight: '80vh',
        padding: isMobile ? '30px 10px' : '50px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
      }}
    >
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        sx={{
          mb: 3,
          color: '#333',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Phạm Minh Tiên
      </Typography>

      <Box
        component="img"
        src={banner}
        alt="My Thoughts"
        sx={{
          width: isMobile ? '80%' : '300px',
          height: 'auto',
          borderRadius: '10px',
          mb: 3,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      />

      <Typography
        variant={isMobile ? 'body1' : 'h6'}
        sx={{
          mb: 2,
          textAlign: 'center',
          color: '#666',
          maxWidth: '500px',
        }}
      >
        Xin chào!!! Tôi là một lập trình viên, yêu thích phát triển phần mềm và công nghệ.
      </Typography>

      <Button
        variant="outlined"
        sx={{
          color: '#333',
          borderColor: '#333',
          '&:hover': {
            backgroundColor: '#f0f0f0',
            borderColor: '#000',
          },
          padding: '10px 20px',
          fontSize: isMobile ? '14px' : '16px',
        }}
      >
        Xem tất cả bài viết
      </Button>
    </Box>
  );
};

export default Home;
