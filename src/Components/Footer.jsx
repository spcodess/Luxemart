import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center py-8 flex-col md:flex-row">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe to our Newsletter
            </h2>
            <p className="text-white/90 text-lg">
              Get the latest updates and exclusive offers!
            </p>
          </div>
          <form className="md:w-1/3 w-full relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-full shadow-lg border-0 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-gray-800 placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-white text-purple-600 py-3 px-6 rounded-full absolute right-2 top-1 font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-black/20 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <h3 className="text-2xl font-bold">Luxemart</h3>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                Your one-stop destination for quality products. We bring you the latest trends 
                in fashion, home & kitchen, sports, and beauty with exceptional service.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300">
                  <Linkedin size={20} className="text-white" />
                </a>
                <a href="#" className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300">
                  <Twitter size={20} className="text-white" />
                </a>
                <a href="#" className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300">
                  <Instagram size={20} className="text-white" />
                </a>
                <a href="#" className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300">
                  <Facebook size={20} className="text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-white/90 hover:text-yellow-300 transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/90 hover:text-yellow-300 transition-colors duration-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="text-white/90 hover:text-yellow-300 transition-colors duration-200">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/90 hover:text-yellow-300 transition-colors duration-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Categories</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-white/90 hover:text-yellow-300 transition-colors duration-200">
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white/90 hover:text-yellow-300 transition-colors duration-200">
                    Home & Kitchen
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white/90 hover:text-yellow-300 transition-colors duration-200">
                    Sports & Outdoors
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white/90 hover:text-yellow-300 transition-colors duration-200">
                    Health & Beauty
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                  <p className="text-white/90">
                    123 Commerce Street, Business District, City - 12345
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                  <p className="text-white/90">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                  <p className="text-white/90">info@luxemart.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black/30 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/90">
            © 2025 Luxemart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
