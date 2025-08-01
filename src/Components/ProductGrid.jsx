import React from "react";
import ProductCard from "./ProductCard";

function ProductGrid({ products, onAddToCart, onBuyNow }) {
  if (!products.length) {
    return (
      <div className="text-center text-gray-500 py-12 text-lg">
        No products found.
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onBuyNow={onBuyNow}
        />
      ))}
    </div>
  );
}

export default ProductGrid;