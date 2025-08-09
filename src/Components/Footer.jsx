import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg">
      {/* Newsletter Section */}
      <div className="container-fluid py-4 sm:py-5">
        <div className="flex justify-between items-center py-6 sm:py-8 flex-col lg:flex-row gap-6">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Subscribe to our Newsletter
            </h2>
            <p className="text-white/90 text-base sm:text-lg">
              Get the latest updates and exclusive offers!
            </p>
          </div>
          <form className="lg:w-1/3 w-full max-w-md relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg border-0 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-gray-800 placeholder-gray-500 text-sm sm:text-base pr-20 sm:pr-24"
            />
            <button
              type="submit"
              className="bg-white text-purple-600 py-2 sm:py-3 px-3 sm:px-6 rounded-full absolute right-1 sm:right-2 top-0.5 sm:top-1 font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-black/20 backdrop-blur-sm py-8 sm:py-12">
        <div className="container-fluid">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="bg-white/20 backdrop-blur-sm w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-base sm:text-lg">L</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Luxemart</h3>
              </div>
              <p className="text-white/90 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Your one-stop destination for quality products. We bring you the latest trends 
                in fashion, home & kitchen, sports, and beauty with exceptional service.
              </p>
              <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                <a href="#" className="bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300">
                  <Linkedin size={18} sm:size={20} className="text-white" />
                </a>
                <a href="#" className="bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300">
                  <Twitter size={18} sm:size={20} className="text-white" />
                </a>
                <a href="#" className="bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300">
                  <Instagram size={18} sm:size={20} className="text-white" />
                </a>
                <a href="#" className="bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300">
                  <Facebook size={18} sm:size={20} className="text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link to="/" className="text-white/90 hover:text-yellow-300 transition-colors duration-200 text-sm sm:text-base">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/90 hover:text-yellow-300 transition-colors duration-200 text-sm sm:text-base">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="text-white/90 hover:text-yellow-300 transition-colors duration-200 text-sm sm:text-base">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/90 hover:text-yellow-300 transition-colors duration-200 text-sm sm:text-base">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Categories</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link to="/" className="text-white/90 hover:text-yellow-300 transition-colors duration-200 text-sm sm:text-base">
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white/90 hover:text-yellow-300 transition-colors duration-200 text-sm sm:text-base">
                    Home & Kitchen
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white/90 hover:text-yellow-300 transition-colors duration-200 text-sm sm:text-base">
                    Sports & Outdoors
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white/90 hover:text-yellow-300 transition-colors duration-200 text-sm sm:text-base">
                    Health & Beauty
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Us</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 justify-center sm:justify-start">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-300 mt-1 flex-shrink-0" />
                  <p className="text-white/90 text-sm sm:text-base text-left">
                    123 Commerce Street, Business District, City - 12345
                  </p>
                </div>
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-300 flex-shrink-0" />
                  <p className="text-white/90 text-sm sm:text-base">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-300 flex-shrink-0" />
                  <p className="text-white/90 text-sm sm:text-base">info@luxemart.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black/30 backdrop-blur-sm py-4 sm:py-6">
        <div className="container-fluid text-center">
          <p className="text-white/90 text-sm sm:text-base">
            © 2025 Luxemart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
