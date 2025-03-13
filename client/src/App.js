import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import About from './pages/About';


function App() {
  return (
    <Router>
      {/* Navbar nằm trên cùng */}
      <Navbar />

      {/* Header nằm ngay sau Navbar, hoặc bạn có thể bỏ luôn dùng Navbar thay thế */}
      <Header />

      {/* Nội dung trang */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Các route khác có thể thêm ở đây */}
      </Routes>
      

      {/* Footer cuối trang */}
      <Footer />
    </Router>
  );
}

export default App;
