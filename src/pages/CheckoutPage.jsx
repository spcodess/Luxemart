import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, User, Phone, Landmark, Home, Building2, FileText, Hash, Info } from "lucide-react";

const paymentMethods = [
  { id: "cod", label: "Cash on Delivery" },
  { id: "card", label: "Credit/Debit Card" },
  { id: "upi", label: "UPI/Netbanking" },
];

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

export default function CheckoutPage({ cartItems }) {
  const [address, setAddress] = useState({
    country: "India",
    name: "",
    mobile: "",
    pincode: "",
    flat: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    default: false,
    instructions: ""
  });
  const [payment, setPayment] = useState("cod");
  const [placingOrder, setPlacingOrder] = useState(false);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setPlacingOrder(true);
    setTimeout(() => {
      setPlacingOrder(false);
      // Build order object and persist to localStorage
      const orderId = Date.now();
      const newOrder = {
        orderId,
        createdAt: new Date().toISOString(),
        address,
        paymentMethod: paymentMethods.find((m) => m.id === payment).label,
        orderTotal: subtotal,
        items: cartItems,
      };
      try {
        const prev = JSON.parse(localStorage.getItem("orders") || "[]");
        prev.push(newOrder);
        localStorage.setItem("orders", JSON.stringify(prev));
      } catch {}

      navigate("/order-success", {
        state: {
          ...newOrder,
        },
      });
    }, 1500);
  };

  // Basic validation
  const isAddressValid =
    address.name &&
    address.mobile.length === 10 &&
    address.pincode.length === 6 &&
    address.flat &&
    address.area &&
    address.city &&
    address.state;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 py-3 sm:py-6 lg:py-8">
      <div className="container-fluid">
        <div className="w-full flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
        {/* Order Summary Sidebar - Shows first on mobile */}
        <div className="w-full lg:w-96 bg-white/80 rounded-xl sm:rounded-2xl shadow-xl border border-purple-100 p-4 sm:p-6 h-fit order-1 lg:order-2">
          <h3 className="text-lg sm:text-xl font-bold text-purple-700 mb-4 flex items-center gap-2"><FileText className="text-purple-500" size={18} sm:size={20}/> Order Summary</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="mb-2 divide-y divide-purple-100">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center gap-3 py-3">
                  <div className="flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 truncate">{item.title}</div>
                    <div className="text-xs text-gray-500">Qty: {item.quantity}</div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="font-semibold text-purple-700">₹{item.price * item.quantity}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-between font-bold text-purple-700 text-lg mt-4 border-t pt-4">
            <span>Total:</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
        </div>
        
        {/* Address & Payment Card - Shows second on mobile */}
        <div className="flex-1 bg-white/90 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border border-purple-100 p-4 sm:p-6 lg:p-8 backdrop-blur-md order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-purple-700 mb-6 sm:mb-8 text-center tracking-tight">Checkout</h2>
          <form onSubmit={handlePlaceOrder}>
            <div className="mb-8 sm:mb-10">
              <h3 className="font-semibold text-lg sm:text-xl mb-4 flex items-center gap-2"><MapPin className="text-purple-500" size={20} sm:size={22}/> Delivery Address</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="col-span-1 sm:col-span-2">
                  <label className="block mb-1 font-medium text-sm sm:text-base">Country/Region</label>
                  <select name="country" className="w-full border rounded px-3 sm:px-4 py-2 text-sm sm:text-base" value={address.country} onChange={handleChange}>
                    <option value="India">India</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-sm sm:text-base">Full name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 sm:top-3 text-gray-400" size={16} sm:size={18}/>
                    <input name="name" className="w-full border rounded pl-9 sm:pl-10 pr-2 py-2 text-sm sm:text-base" value={address.name} onChange={handleChange} required placeholder="First and Last name" />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-sm sm:text-base">Mobile number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 sm:top-3 text-gray-400" size={16} sm:size={18}/>
                    <input name="mobile" className="w-full border rounded pl-9 sm:pl-10 pr-2 py-2 text-sm sm:text-base" value={address.mobile} onChange={handleChange} required maxLength={10} minLength={10} pattern="[0-9]{10}" placeholder="10 digit mobile" />
                  </div>
                  <span className="text-xs text-gray-500">May be used to assist delivery</span>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-sm sm:text-base">Pincode</label>
                  <div className="relative">
                    <Hash className="absolute left-3 top-2.5 sm:top-3 text-gray-400" size={16} sm:size={18}/>
                    <input name="pincode" className="w-full border rounded pl-9 sm:pl-10 pr-2 py-2 text-sm sm:text-base" value={address.pincode} onChange={handleChange} required maxLength={6} minLength={6} pattern="[0-9]{6}" placeholder="6 digits [0-9] PIN code" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-1 font-medium text-sm sm:text-base">Flat, House no., Building, Company, Apartment</label>
                  <div className="relative">
                    <Home className="absolute left-3 top-2.5 sm:top-3 text-gray-400" size={16} sm:size={18}/>
                    <input name="flat" className="w-full border rounded pl-9 sm:pl-10 pr-2 py-2 text-sm sm:text-base" value={address.flat} onChange={handleChange} required />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-1 font-medium text-sm sm:text-base">Area, Street, Sector, Village</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-2.5 sm:top-3 text-gray-400" size={16} sm:size={18}/>
                    <input name="area" className="w-full border rounded pl-9 sm:pl-10 pr-2 py-2 text-sm sm:text-base" value={address.area} onChange={handleChange} required />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-sm sm:text-base">Landmark</label>
                  <div className="relative">
                    <Landmark className="absolute left-3 top-2.5 sm:top-3 text-gray-400" size={16} sm:size={18}/>
                    <input name="landmark" className="w-full border rounded pl-9 sm:pl-10 pr-2 py-2 text-sm sm:text-base" value={address.landmark} onChange={handleChange} placeholder="E.g. near apollo hospital" />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-sm sm:text-base">Town/City</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-2.5 sm:top-3 text-gray-400" size={16} sm:size={18}/>
                    <input name="city" className="w-full border rounded pl-9 sm:pl-10 pr-2 py-2 text-sm sm:text-base" value={address.city} onChange={handleChange} required />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-sm sm:text-base">State</label>
                  <select name="state" className="w-full border rounded px-3 sm:px-4 py-2 text-sm sm:text-base" value={address.state} onChange={handleChange} required>
                    <option value="">Choose a state</option>
                    {states.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-2 mt-2 sm:col-span-2">
                  <input type="checkbox" name="default" checked={address.default} onChange={handleChange} className="w-4 h-4" />
                  <label className="text-xs sm:text-sm">Make this my default address</label>
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-1 font-medium text-sm sm:text-base">Delivery instructions (optional)</label>
                  <div className="relative">
                    <Info className="absolute left-3 top-2.5 sm:top-3 text-gray-400" size={16} sm:size={18}/>
                    <input name="instructions" className="w-full border rounded pl-9 sm:pl-10 pr-2 py-2 text-sm sm:text-base" value={address.instructions} onChange={handleChange} placeholder="Add preferences, notes, access codes and more" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6 sm:mb-8">
              <label className="block mb-3 sm:mb-4 font-semibold text-base sm:text-lg">Payment Method</label>
              <div className="flex flex-col gap-2 sm:gap-3">
                {paymentMethods.map((method) => (
                  <label key={method.id} className="flex items-center gap-3 p-2 sm:p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={payment === method.id}
                      onChange={() => setPayment(method.id)}
                      className="w-4 h-4 text-purple-600"
                    />
                    <span className="text-sm sm:text-base font-medium">{method.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white py-3 sm:py-4 rounded-lg shadow-md text-base sm:text-lg font-semibold transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={placingOrder || !isAddressValid || cartItems.length === 0}
            >
              {placingOrder ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
} 