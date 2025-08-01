import React, { useState } from "react";
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, Share2, Eye } from "lucide-react";

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data
  const product = {
    id: 1,
    title: "Premium Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.5,
    reviews: 128,
    description: "High-quality cotton t-shirt with a comfortable fit and stylish design. Perfect for everyday wear and casual occasions.",
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple colors",
      "Sustainably sourced materials"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy", "Gray"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400"
    ]
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.title} to cart!`);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to buy ${product.title}!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Header */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-white mb-2">Product Details</h1>
        <p className="text-white/90">Discover amazing products with exceptional quality</p>
      </div>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-white/20 rounded-xl overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square bg-white/20 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${product.title} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Title and Rating */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{product.title}</h2>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-white/30'}`}
                      />
                    ))}
                  </div>
                  <span className="text-white/90">({product.reviews} reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-white">₹{product.price}</span>
                <span className="text-xl text-white/70 line-through">₹{product.originalPrice}</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                <p className="text-white/90 leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-white/90">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Select Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                        selectedSize === size
                          ? 'border-yellow-400 bg-yellow-400 text-gray-900'
                          : 'border-white/30 text-white hover:border-white/50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                  >
                    -
                  </button>
                  <span className="text-white font-semibold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-white text-purple-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                      isWishlisted
                        ? 'border-red-500 bg-red-500 text-white'
                        : 'border-white/30 text-white hover:border-white/50'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>
                
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Buy Now
                </button>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/20">
                <div className="flex items-center text-white/90">
                  <Truck className="w-5 h-5 mr-2 text-yellow-400" />
                  <span className="text-sm">Free Shipping</span>
                </div>
                <div className="flex items-center text-white/90">
                  <Shield className="w-5 h-5 mr-2 text-yellow-400" />
                  <span className="text-sm">Secure Payment</span>
                </div>
                <div className="flex items-center text-white/90">
                  <RotateCcw className="w-5 h-5 mr-2 text-yellow-400" />
                  <span className="text-sm">Easy Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="aspect-square bg-white/20 rounded-lg mb-4"></div>
                <h3 className="text-white font-semibold mb-2">Related Product {item}</h3>
                <p className="text-white/70 text-sm mb-2">₹24.99</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-white/70 text-sm ml-2">(45)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}