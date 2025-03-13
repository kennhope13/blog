// src/pages/About.jsx

import React from 'react';
import { Box, Typography, Container, Avatar } from '@mui/material';
import logo from '../assets/images/image2.jpg'

const About = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh', paddingTop: '4rem' }}>
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          <Avatar
            alt="Team Logo"
            src={logo} // link ảnh đại diện (hoặc team logo)
            sx={{ width: 150, height: 150, margin: '0 auto', marginBottom: '1rem' }}
          />
          <Typography variant="h3" gutterBottom>
            Tôi là ai?
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            Xin chào!!! Tôi là Phạm Minh Tiên, một lập trình viên lỏ, đã có hơn một năm kinh nghiệm làm việc với Backend.
          </Typography>
        </Box>
        <hr></hr>
        <Box sx={{ marginTop: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Câu chuyện của tôi.
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            Sau khi tôi thi xong tốt nghiệp phổ thông thì đầu óc tôi trống rỗng, không có dự định gì cho bản thân. Khoảng thời gian sau đó tôi và đám bạn toàn tụ tập và chơi game. Mỗi ngày như một tôi đều lướt web và chơi game, bỗng một ngày một ý tưởng hiện lên trong đầu tôi rằng: tại sao lại làm được như thế, tại sao làm hiện ra một trang web mà chỉ cần những dòng lệnh. Sau đó thì..., không còn sau đó nữa. Và đó là quãng đường lập trình viên của tôi. "Nhạt :)))"
          </Typography>
        </Box>
        <hr></hr>
        <Box sx={{ marginTop: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Tôi đã làm được những gì?
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            Giống như các bạn đồng trang lứa, tôi cũng đi học đại học, trường học đối với tôi như là ngôi nhà thứ hai vậy, lên toàn ngủ. Nhưng trộm vía thì sau những kỳ thi thi tôi cũng được điểm ổn. Tôi hiện đang là sinh viên năm thứ tư, và đã đi thực tập. Môi trường làm việc thực tế nó khác hoàn toàn với lúc đi học, rất áp lực. Những ngày chạy deadline không thể ngủ được, nhứng không vì thế mà tôi bỏ cuộc. Không giống như bạn nghĩ, xin vào công việc gì thì làm công việc đó. Tôi xin vào công việc Backend. Nhưng công việc của tôi cũng là Backend nhưng không phải là làm về Backend thuần mà là làm về sử lý hình ảnh. Ối zồi ôi luôn. Nhưng tôi vẫn hoàn thành tốt.
          </Typography>
        </Box>
        <hr></hr>
        <Box sx={{ marginTop: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Một số điểm nổi bật của tôi
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            Tư duy đỉnh cao: Top 6 server Việt Nam với con bài tủ Jinna.
            <p></p>
            Có tố chất lãnh đạo: Call team đỉnh cao.
            <p></p>
            Mức Rank: Chiến thần.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
