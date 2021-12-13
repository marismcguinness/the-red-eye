import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Products from './pages/Products';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Sancreek&display=swap" rel="stylesheet" />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Products' element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
