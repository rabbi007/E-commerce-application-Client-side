import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-800 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Copyright */}
        <p className="mb-4 text-xl">&copy; 2025 Click-&-Buy Inc. All rights reserved.</p>

        {/* Footer Navbar Links */}
        <ul className="flex justify-center space-x-5 mb-4">
          <li>
            <a
              href="/"
              className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/products"
              className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              All Products
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <ul className="flex justify-center space-x-10 mb-4 text-3xl">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-300 transition"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 transition"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-300 transition"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>

        {/* Footer Credit */}
        <p className="text-sm">Made with ❤️ by Khandaker Reza-e-Rabbi</p>
      </div>
    </footer>
  );
};

export default Footer;
