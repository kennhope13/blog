import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        color: '#333333',
        textAlign: 'center',
        p: 2,
        mt: 5
      }}
    >
      <Typography variant="body2">
        © Phạm Minh Tiên
      </Typography>
    </Box>
  );
};

export default Footer;
