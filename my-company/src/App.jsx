import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1', marginTop: '20px' }}>
          <p>&copy; 2025 My Company. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
