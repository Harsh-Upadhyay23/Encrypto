import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // your navbar component
import Manager from "./components/Manager";

// Dummy pages
const Home = () => <div className="p-6 text-2xl font-bold">Welcome to PassOp 🔐</div>;
const Features = () => <div className="p-6 text-2xl font-bold">Features Page</div>;
const About = () => <div className="p-6 text-2xl font-bold">About Us</div>;
const Contact = () => <div className="p-6 text-2xl font-bold">Contact Us</div>;
const Login = () => <div className="p-6 text-2xl font-bold">Login Page</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Manager/>
    </Router>
  );
}

export default App;
