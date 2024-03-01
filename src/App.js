import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
