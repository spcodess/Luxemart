import React, { useState } from "react";

function ProductCard({ product, onAddToCart, onBuyNow }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="rounded-md bg-gray-50 shadow-lg cursor-pointer">
        <img
          src={product.image}
          className="w-full h-48 object-cover rounded-t-md"
          alt={product.title}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold my-4">{product.title}</h2>
          <p className="text-sm text-zinc-500 border-b-2 pb-4">
            {product.description.substring(0, 70) + "..."}
          </p>
          <div className="flex justify-between mt-4 items-center">
            <p className="text-xl font-semibold">₹{product.price}</p>
            <button
              className="text-purple-700 underline hover:text-purple-900"
              onClick={() => setShowModal(true)}
            >
              View details
            </button>
          </div>
        </div>
      </div>

      {/* Full Details Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              className="absolute top-3 right-3 text-2xl text-purple-700 hover:text-purple-900 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full lg:w-72 h-48 sm:h-64 lg:h-72 object-cover rounded-2xl shadow"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 text-purple-800 pr-8">
                    {product.title}
                  </h2>
                  <p className="mb-4 text-gray-700 text-sm sm:text-base">{product.description}</p>
                  <p className="text-lg sm:text-xl font-semibold text-purple-700 mb-2">
                    ₹{product.price}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {product.category}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
                  <button
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors font-medium flex-1 sm:flex-none"
                    onClick={() => {
                      if (onAddToCart) onAddToCart(product);
                      setShowModal(false);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors font-medium flex-1 sm:flex-none"
                    onClick={() => {
                      if (onBuyNow) onBuyNow(product);
                      setShowModal(false);
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
