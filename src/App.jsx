import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Manager from "./components/Manager";
import Footer from "./components/Footer";

// Dummy pages
const Home = () => <div className="p-6 text-2xl font-bold">Welcome to PassOp 🔐</div>;
const Features = () => <div className="p-6 text-2xl font-bold">Features Page</div>;
const About = () => <div className="p-6 text-2xl font-bold">About Us</div>;
const Contact = () => <div className="p-6 text-2xl font-bold">Contact Us</div>;
const Login = () => <div className="p-6 text-2xl font-bold">Login Page</div>;

function App() {
  return (
    <Router>
      {/* Background (fixed, full height + width) */}
      <div className="fixed inset-0 -z-10 min-h-screen w-full 
                      bg-green-50 
                      bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
                      bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>

      {/* Navbar always visible */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Manager Page */}
      <Manager />
    <div className=" bottom-0 left-0 w-full">
  <Footer />
</div>

    </Router>
  );
}

export default App;
