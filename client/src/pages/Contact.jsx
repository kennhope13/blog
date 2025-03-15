import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Button
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  Smartphone as SmartphoneIcon,
  LocationOn as LocationOnIcon,
  Chat as ChatIcon,
  Language as LanguageIcon,
  Send as SendIcon
} from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ở đây bạn có thể xử lý gửi email hoặc gọi API
    console.log('Dữ liệu form:', formData);

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh', paddingTop: '4rem' }}>
      <Container maxWidth="md">
        <Divider sx={{ marginY: '2rem' }} />

        {/* CONTACT SECTION */}
        <Box sx={{ marginTop: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Liên hệ với top 6 server Viet Nam
          </Typography>

          {/* FORM LIÊN HỆ */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              marginBottom: '2rem'
            }}
          >
            <TextField
              label="Tên của bạn"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Email của bạn"
              variant="outlined"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Tin nhắn"
              variant="outlined"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={4}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SendIcon />}
            >
              Gửi Tin Nhắn
            </Button>
          </Box>

          {/* DANH SÁCH THÔNG TIN LIÊN HỆ */}
          <List>
            <ListItem>
              <ListItemIcon>
                <EmailIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="pmtiena8tqtpy@gmail.com" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <PhoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="+0355331720" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <SmartphoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="+0355331720" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <LocationOnIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="TP. HCM" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ChatIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <a
                    href="https://www.facebook.com/minh.tien.249770"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Facebook: Phạm Minh Tiên
                  </a>
                }
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <LanguageIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <a
                    href="https://www.phamminhtien.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    www.phamminhtien.dev
                  </a>
                }
              />
            </ListItem>
          </List>

          <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SendIcon />}
              href="mailto:phamminhtien.dev@gmail.com"
            >
              Gửi Email
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
 