import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import FaqsPage from "./pages/FaqsPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SignInPage from "./pages/SignInPage";
import OrderSuccess from "./pages/OrderSuccess";
import OrdersPage from "./pages/OrdersPage";
import AccountPage from "./pages/AccountPage";
import CartSidebar from "./Components/CartSidebar";
import React, { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      // If product already in cart, increase quantity
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartSidebarOpen(true);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div >
    <Router>
      <Navbar cartItems={cartItems} onSearch={handleSearch} onOpenCart={() => setIsCartSidebarOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={handleAddToCart} searchTerm={searchTerm} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
      <CartSidebar 
        isOpen={isCartSidebarOpen}
        onClose={() => setIsCartSidebarOpen(false)}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Footer />
    </Router>
    </div>
  );
}

export default App;