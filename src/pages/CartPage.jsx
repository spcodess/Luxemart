import React from "react";
import { useNavigate } from "react-router-dom";

const recommendations = [
  {
    id: 1,
    category: "Electronics",
    title: "Wireless Headphones",
    price: 2999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    description:
      "Experience high-quality sound without the wires. Perfect for music lovers and commuters.",
  },
  {
    id: 2,
    category: "Fashion",
    title: "Classic Sneakers",
    price: 1999,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.cYMZAPJ4iAMPzSaHm63LzgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Timeless design and comfort. These sneakers go with any outfit, any day.",
  },
  {
    id: 3,
    category: "Books",
    title: "The Great Gatsby",
    price: 499,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    description:
      "A classic novel by F. Scott Fitzgerald, exploring themes of wealth, love, and the American Dream.",
  },
  {
    id: 4,
    category: "Home",
    title: "Ceramic Vase",
    price: 799,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",
    description:
      "Elegant ceramic vase to enhance your home décor. Ideal for fresh or dried flowers.",
  },
  {
    id: 5,
    category: "Electronics",
    title: "Smart Watch",
    price: 4999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    description:
      "Track your fitness, notifications, and more with this stylish smart watch.",
  },
  {
    id: 6,
    category: "Fashion",
    title: "Leather Wallet",
    price: 899,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400",
    description:
      "Premium leather wallet with multiple compartments for cards and cash.",
  },
  {
    id: 7,
    category: "Books",
    title: "Atomic Habits",
    price: 599,
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
    description:
      "James Clear's bestselling guide to building good habits and breaking bad ones.",
  },
  {
    id: 8,
    category: "Home",
    title: "Table Lamp",
    price: 1299,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400",
    description:
      "Modern table lamp for your study or bedside. Adjustable brightness.",
  },
  {
    id: 9,
    category: "Electronics",
    title: "Bluetooth Speaker",
    price: 1599,
    image:
      "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/11/TREBLAB-HD77-Black.jpg",
    description:
      "Portable Bluetooth speaker with powerful sound and long battery life.",
  },
  {
    id: 10,
    category: "Fashion",
    title: "Denim Jacket",
    price: 2499,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400",
    description: "Classic denim jacket for a cool and casual look. Unisex fit.",
  },
  {
    id: 11,
    category: "Books",
    title: "Sapiens",
    price: 699,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400",
    description:
      "Yuval Noah Harari's sweeping history of humankind, from ancient times to today.",
  },
  {
    id: 12,
    category: "Home",
    title: "Wall Clock",
    price: 599,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400",
    description:
      "Minimalist wall clock to keep you on time and add style to your room.",
  },
  {
    id: 13,
    category: "Electronics",
    title: "DSLR Camera",
    price: 29999,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400",
    description:
      "Capture stunning photos and videos with this high-resolution DSLR camera.",
  },
  {
    id: 14,
    category: "Fashion",
    title: "Sunglasses",
    price: 799,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
    description: "Stylish sunglasses with UV protection for sunny days.",
  },
  {
    id: 15,
    category: "Books",
    title: "Deep Work",
    price: 499,
    image: "https://images.unsplash.com/photo-1463320898484-cdee8141c787?w=400",
    description:
      "Cal Newport's essential guide to focused success in a distracted world.",
  },
  {
    id: 16,
    category: "Home",
    title: "Cushion Set",
    price: 999,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",
    description:
      "Soft and comfortable cushion set to add color and comfort to your sofa.",
  },
  {
    id: 17,
    category: "Electronics",
    title: "Fitness Tracker",
    price: 1999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    description:
      "Monitor your health and activity with this sleek fitness tracker.",
  },
  {
    id: 18,
    category: "Fashion",
    title: "Analog Watch",
    price: 1499,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400",
    description:
      "Elegant analog watch with a leather strap for a timeless look.",
  },
  {
    id: 19,
    category: "Books",
    title: "The Alchemist",
    price: 399,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    description: "Paulo Coelho's inspiring tale about following your dreams.",
  },
  {
    id: 20,
    category: "Home",
    title: "Floor Rug",
    price: 1799,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",
    description:
      "Soft and durable floor rug to enhance the comfort and style of your living space.",
  },
];

export default function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-purple-50 min-h-screen p-4">
      {/* Banner */}
      <div className="flex items-center space-x-2 p-4 bg-purple-100 shadow mb-4 rounded">
        <span className="font-semibold text-lg text-purple-700">
          Added to cart
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Recommendations */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2 text-purple-800">
            Recommendations for all products:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {recommendations.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded shadow p-4 flex flex-col items-center text-center border border-purple-100 hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-cover mb-2 rounded"
                />
                <h4 className="text-sm font-medium mb-1 text-purple-900">
                  {item.title}
                </h4>
                <div className="text-red-600 text-xs mb-1">
                  {item.discount} • Limited time deal
                </div>
                <div className="mb-2">
                  <span className="font-bold text-lg text-purple-700">
                    ₹{item.price}
                  </span>
                  {/* <span className="line-through text-gray-500 text-sm>
										₹{item.mrp}
									</span> */}
                </div>
                <button
                  onClick={() => {
                    // Add to cart from recommendations
                    const existing = cartItems.find((ci) => ci.id === item.id);
                    if (existing) {
                      setCartItems((prev) =>
                        prev.map((ci) =>
                          ci.id === item.id
                            ? { ...ci, quantity: ci.quantity + 1 }
                            : ci
                        )
                      );
                    } else {
                      setCartItems((prev) => [
                        ...prev,
                        { ...item, quantity: 1 },
                      ]);
                    }
                  }}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition"
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="bg-white shadow rounded p-4 flex-1 max-w-lg border border-purple-100">
          <h2 className="text-xl font-bold mb-4 text-purple-800">Cart Items</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-500 mb-4">Your cart is empty.</p>
          ) : (
            <ul className="divide-y divide-purple-100 mb-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="py-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <div className="font-semibold text-purple-900">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-500">₹{item.price}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="bg-purple-200 text-purple-700 px-2 rounded hover:bg-purple-300"
                      onClick={() =>
                        setCartItems((prev) =>
                          prev
                            .map((ci) =>
                              ci.id === item.id
                                ? { ...ci, quantity: ci.quantity - 1 }
                                : ci
                            )
                            .filter((ci) => ci.quantity > 0)
                        )
                      }
                    >
                      −
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="bg-purple-200 text-purple-700 px-2 rounded hover:bg-purple-300"
                      onClick={() =>
                        setCartItems((prev) =>
                          prev.map((ci) =>
                            ci.id === item.id
                              ? { ...ci, quantity: ci.quantity + 1 }
                              : ci
                          )
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <h2 className="text-xl font-bold mb-2 text-purple-800">
            Cart subtotal: ₹{subtotal.toLocaleString()}
          </h2>
          <button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded mb-2 transition"
            onClick={() => navigate("/checkout")}
            disabled={cartItems.length === 0}
          >
            Proceed to Buy ({cartItems.length} item
            {cartItems.length > 1 ? "s" : ""})
          </button>
          <button className="w-full border border-purple-300 py-2 rounded text-purple-700 hover:bg-purple-50 transition">
            Go to Cart
          </button>
          <div className="mt-4 flex items-center space-x-2">
            <span className="text-purple-700 font-semibold">
              ₹{subtotal.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
