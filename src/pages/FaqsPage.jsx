import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, ShoppingBag, Truck, CreditCard, Shield, RotateCcw, MessageCircle, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FaqsPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleContactSupport = () => {
    // Scroll to top before navigating
    window.scrollTo(0, 0);
    navigate('/contact');
  };

  const handleStartShopping = () => {
    // Scroll to top before navigating
    window.scrollTo(0, 0);
    navigate('/');
  };

  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Placing an order is simple! Browse our products, add items to your cart, review your selection, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase. You'll receive an order confirmation email once your order is successfully placed."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and digital wallets like PayPal, Apple Pay, and Google Pay. All payments are processed securely through our encrypted payment gateway to ensure your financial information is protected."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days, while express shipping (1-2 business days) is available for an additional fee. International shipping may take 7-14 business days depending on your location. You'll receive tracking information once your order ships."
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes! We offer free standard shipping on all orders over ₹500. For orders under ₹500, a small shipping fee applies. Express shipping is available for an additional fee if you need your order faster."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products must be unused, in original packaging, and in the same condition as received. Some items like electronics and personal care products may have different return conditions. Contact our customer service for specific return instructions."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and visiting the 'Order History' section. Our tracking system provides real-time updates on your package's location and estimated delivery date."
    },
    {
      question: "What if I receive a damaged item?",
      answer: "If you receive a damaged item, please contact our customer service within 48 hours of delivery. Include photos of the damage and your order number. We'll arrange for a replacement or refund, and we'll cover the return shipping costs for damaged items."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. You can check shipping availability and costs during checkout by entering your shipping address. Some restrictions may apply to certain products."
    },
    {
      question: "How can I contact customer service?",
      answer: "Our customer service team is available 24/7 to help you. You can reach us via live chat on our website, email at support@specommerce.com, or phone at +1 (555) 123-4567. We typically respond to emails within 2 hours and phone calls are answered immediately."
    },
    {
      question: "Are my personal details secure?",
      answer: "Absolutely! We use industry-standard SSL encryption to protect your personal and financial information. We never store your credit card details on our servers, and all transactions are processed through secure, PCI-compliant payment gateways. Your privacy and security are our top priorities."
    },
    {
      question: "Can I cancel my order?",
      answer: "You can cancel your order within 1 hour of placing it by contacting our customer service. Once an order has been processed and shipped, it cannot be cancelled, but you can return it following our return policy. Please note that expedited orders may ship immediately and cannot be cancelled."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes! We offer beautiful gift wrapping for an additional ₹50 per item. You can select gift wrapping during checkout. Each gift-wrapped item comes with a personalized message card and is packaged in elegant wrapping paper. Perfect for birthdays, anniversaries, and special occasions."
    }
  ];

  const categories = [
    {
      title: "Shopping & Orders",
      icon: ShoppingBag,
      description: "Everything about placing orders and shopping"
    },
    {
      title: "Shipping & Delivery",
      icon: Truck,
      description: "Information about shipping times and tracking"
    },
    {
      title: "Payment & Security",
      icon: CreditCard,
      description: "Payment methods and security measures"
    },
    {
      title: "Returns & Refunds",
      icon: RotateCcw,
      description: "Our return policy and refund process"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <HelpCircle className="w-16 h-16 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-yellow-300">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Find answers to common questions about shopping, shipping, payments, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">
              Find answers organized by topic
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <category.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about shopping with us
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-600" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our customer service team is here to help you 24/7
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm">
                Chat with our support team instantly
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 text-sm">
                Call us at +1 (555) 123-4567
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 text-sm">
                Email us at support@specommerce.com
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleContactSupport}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Support
            </button>
            <button 
              onClick={handleStartShopping}
              className="border-2 border-purple-500 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}