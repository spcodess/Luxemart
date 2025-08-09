import { Key, ShoppingBag, Star, Truck, Shield, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import ProductGrid from "../Components/ProductGrid";
import Footer from "../Components/Footer";
import products from "../ProductsContent";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, name: "All" },
  { id: 2, name: "Fashion" },
  { id: 3, name: "Home & Kitchen" },
  { id: 4, name: "Sports & Outdoors" },
  { id: 5, name: "Health & Beauty" },
];

function Home({ onAddToCart, searchTerm = "" }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const productsPerPage = 20;

  const handleBuyNow = (product) => {
    if (onAddToCart) {
      onAddToCart(product);
      navigate("/checkout");
    }
  };

  const handleShopNow = () => {
    // Scroll to the products section
    const categoriesSection = document.getElementById('categories-section');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    // Navigate to the About page
    navigate('/about');
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1); // Reset to first page when changing category
  };
  
  // Filter products by search term and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = searchTerm
      ? product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    
    const matchesCategory = selectedCategory === "All" || 
      product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to categories section when page changes
    const categoriesSection = document.getElementById('categories-section');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reset to first page when search term changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div>
      {/* Modern Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 z-10">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container-fluid py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Discover Amazing
              <span className="block text-yellow-300">Products</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto px-4">
              Shop the latest trends in fashion, home & kitchen, sports, and beauty. 
              Quality products delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleShopNow}
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Shop Now
              </button>
              <button 
                onClick={handleLearnMore}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <ShoppingBag className="text-white/20 w-8 h-8" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <Star className="text-yellow-300/30 w-6 h-6" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce">
          <Star className="text-white/20 w-5 h-5" />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div  className="container-fluid">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over ₹500</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure checkout</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Same day processing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div id="categories-section" className="container-fluid py-10 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
          Shop by Category
        </h2>
        <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center">
          {categories.map((category) => {
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Section */}
      <div id="products-section" className="container-fluid pb-12 sm:pb-16">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 gap-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {selectedCategory === "All" ? "Featured Products" : `${selectedCategory} Products`}
          </h2>
          <div className="text-sm sm:text-base text-gray-600">
            Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </div>
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">
              No products found in {selectedCategory} category.
            </div>
            <button
              onClick={() => handleCategoryClick("All")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              View All Products
            </button>
          </div>
        ) : (
          <>
            <ProductGrid products={currentProducts} onAddToCart={onAddToCart} onBuyNow={handleBuyNow} />

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-12 gap-3 sm:gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto justify-center"
                >
                  <ChevronLeft size={18} />
                  <span className="hidden xs:inline">Previous</span>
                  <span className="xs:hidden">Prev</span>
                </button>

                {/* Page Numbers */}
                <div className="flex gap-1 sm:gap-2 flex-wrap justify-center max-w-full overflow-x-auto">
                  {Array.from({ length: Math.min(totalPages, 7) }, (_, index) => {
                    let page;
                    if (totalPages <= 7) {
                      page = index + 1;
                    } else if (currentPage <= 4) {
                      page = index + 1;
                    } else if (currentPage >= totalPages - 3) {
                      page = totalPages - 6 + index;
                    } else {
                      page = currentPage - 3 + index;
                    }
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-2 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base min-w-[32px] sm:min-w-[40px] ${
                          currentPage === page
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto justify-center"
                >
                  <span className="hidden xs:inline">Next</span>
                  <span className="xs:hidden">Next</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
