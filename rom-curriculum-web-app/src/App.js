import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Curriculums from './pages/Curriculums';
import Admin from './pages/Admin'; // can hide this until later
import './custom.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/curriculums" element={<Curriculums />} />
        <Route path="/admin" element={<Admin />} /> {/* Add protection later */}
      </Routes>
    </>
  );
}

export default App;