import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import About from './Pages/Aboutall/About_all';
import Header from '../src/components/Headers/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/course" element={<Course />} />
        <Route path="/services" element={<Services />} /> */}
      </Routes>
    </>
  );
}

export default App;
