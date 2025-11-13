import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import BlogDetailPage from './pages/BlogDetailPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogDetailPage />} />
    </Routes>
  );
}

export default App;
