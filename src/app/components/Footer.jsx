const Footer = () => {
  return (
    <footer className="bg-orange-800 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="mb-4">&copy; 2025 E-Commerce Inc. All rights reserved.</p>
        
        <ul className="flex justify-center space-x-6 mb-4">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Instagram
            </a>
          </li>
        </ul>

        <p className="text-sm">Made with ❤️ by Khandaker Reza-e-Rabbi</p>
      </div>
    </footer>
  );
};

export default Footer;
