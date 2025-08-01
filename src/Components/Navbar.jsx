import { ShoppingCart, User } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ cartItems = [], onSearch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const userButtonRef = useRef(null);

  // Calculate total quantity in cart
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleUser = () => setIsOpen(!isOpen);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(search);
    navigate("/");
  };

  // When search input changes, update state and reset search if cleared
  const handleInputChange = (e) => {
    setSearch(e.target.value);
    if (onSearch && e.target.value === "") {
      onSearch("");
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        userButtonRef.current &&
        !userButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Left: Logo + Links */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <div className="bg-white/20 backdrop-blur-sm w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-bold text-xl">Luxemart</span>
              </div>
            </div>
          </Link>
          <ul className="flex gap-8 items-center">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-300 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-300 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className="hover:text-yellow-300 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-300 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Center: Search Bar */}
        <form className="w-1/3" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search Product"
            className="border-0 rounded-full px-6 py-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-lg text-gray-800 placeholder-gray-500"
            value={search}
            onChange={handleInputChange}
          />
        </form>

        {/* Right: User & Cart */}
        <div className="flex items-center gap-4 relative">
          {/* User Dropdown */}
          <span
            ref={userButtonRef}
            className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300 cursor-pointer"
            onClick={handleUser}
          >
            <User size={20} className="text-white" />
          </span>
          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 top-12 z-10 bg-white text-gray-800 p-4 gap-4 w-40 flex flex-col shadow-xl rounded-xl border border-gray-100"
            >
              <li className="list-none">
                <Link 
                  to="/signin" 
                  className="hover:text-purple-600 transition-colors duration-200 font-medium block"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
              </li>
              <li className="list-none">
                <Link 
                  to="/account" 
                  className="hover:text-purple-600 transition-colors duration-200 font-medium block"
                  onClick={() => setIsOpen(false)}
                >
                  My Account
                </Link>
              </li>
            </div>
          )}
          {/* Cart Icon */}
          <Link
            to="/cart"
            className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300 relative"
          >
            <ShoppingCart className="text-white" size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1 shadow-lg">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
