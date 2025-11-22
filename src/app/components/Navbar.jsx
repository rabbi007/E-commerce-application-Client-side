// components/Navbar.jsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-orange-800 text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className="cursor-pointer text-white">E-Commerce</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/">
              <span className="cursor-pointer hover:text-blue-400">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <span className="cursor-pointer hover:text-blue-400">Products</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="cursor-pointer hover:text-blue-400">About</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="cursor-pointer hover:text-blue-400">Contact</span>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <span className="cursor-pointer hover:text-blue-400">Login/Register</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
