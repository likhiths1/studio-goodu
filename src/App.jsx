import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
