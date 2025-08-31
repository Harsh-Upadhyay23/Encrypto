import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ use Link

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-slate-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          Pass<span className="text-yellow-300">Op</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><Link to="/" className="hover:text-yellow-300 transition">Home</Link></li>
          <li><Link to="/features" className="hover:text-yellow-300 transition">Features</Link></li>
          <li><Link to="/about" className="hover:text-yellow-300 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link></li>
        </ul>

        {/* Profile / Login */}
        <div className="hidden md:block">
          <Link to="https://github.com/Harsh-Upadhyay23">
            <button className=" bg-white text-purple-800 px-2 py-1 rounded-xl font-semibold hover:bg-yellow-400 transition">
              <img width={25} src="/public/icons/github.svg" alt="" />
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-600 px-6 py-4 space-y-3">
          <Link to="/" className="block hover:text-yellow-300">Home</Link>
          <Link to="/features" className="block hover:text-yellow-300">Features</Link>
          <Link to="/about" className="block hover:text-yellow-300">About</Link>
          <Link to="/contact" className="block hover:text-yellow-300">Contact</Link>
          <Link to="/login">
            <button className="w-full mt-3 bg-yellow-300 text-purple-800 px-4 py-2 rounded-xl font-semibold hover:bg-yellow-400 transition">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
