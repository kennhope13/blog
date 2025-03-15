import { AppBar, Toolbar } from '@mui/material';

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#f5f5f5',
        color: '#333333',
        padding: '10px 0',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;