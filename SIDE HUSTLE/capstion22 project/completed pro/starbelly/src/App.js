import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./components/pages/Products";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/pages/About";
import Footerpage from "./components/footerpage/Footerpage";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footerpage />
    </Router>
  );
}

export default App;
