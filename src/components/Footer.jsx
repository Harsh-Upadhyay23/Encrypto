import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-300 py-4 mt-10">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} PassOp 🔐. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600">Terms</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
