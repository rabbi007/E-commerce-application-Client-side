const Footer = () => {
  return (
    <footer className="bg-orange-800 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Copyright Information */}
        <p className="mb-4 text-xl ">&copy; 2025  Click-&-Buy Inc. All rights reserved.</p>

        {/* Navbar Links */}
        <ul className="flex justify-center space-x-15 mb-4">
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

        {/* Social Media Links */}
        <ul className="flex justify-center space-x-10 mb-4">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Instagram
            </a>
          </li>
        </ul>

        {/* Made By Info */}
        <p className="text-sm">Made with ❤️ by Khandaker Reza-e-Rabbi</p>
      </div>
    </footer>
  );
};

export default Footer;
