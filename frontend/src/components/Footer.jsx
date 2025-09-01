import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-600 border-t border-gray-300 py-4 mt-10 text-white">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 text-sm text-white">
        <p>© {new Date().getFullYear()} PassOp 🔐. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-blue-600  text-white">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600  text-white">Terms</a>
          <a href="#" className="hover:text-blue-600 text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
