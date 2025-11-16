import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.jsx';
import ContactUs from './pages/ContactUs.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Blog from './pages/Blog.jsx';
import Services from './pages/Services.jsx';
import BlogDetailPage from './pages/BlogDetailPage.jsx';
import PortfolioDetailPage from './pages/PortfolioDetailPage.jsx';

function ScrollToTop() {
  const { pathname, search, hash } = useLocation();
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (hash) return; // let native anchor scrolling handle hash links
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, search, hash]);
  return null;
}

function BlogsRedirect() {
  const { id } = useParams();
  return <Navigate to={id ? `/blog/${id}` : '/blog'} replace />;
}

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/blog/:id" element={<BlogDetailPage/>} />
          <Route path="/portfolio/:id" element={<PortfolioDetailPage/>} />
          {/* Legacy aliases */}
          <Route path="/blogs" element={<BlogsRedirect />} />
          <Route path="/blogs/:id" element={<BlogsRedirect />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);