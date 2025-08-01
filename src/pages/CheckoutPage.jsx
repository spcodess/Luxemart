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
      alert(
        `Order placed successfully!\n\nDelivery to: ${address.flat}, ${address.area}, ${address.city}, ${address.state}, ${address.pincode}\nPayment: ${paymentMethods.find(m => m.id === payment).label}`
      );
      navigate("/");
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 py-12 px-2 flex flex-col items-center">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
        {/* Address & Payment Card */}
        <div className="flex-1 bg-white/90 rounded-2xl shadow-2xl border border-purple-100 p-8 backdrop-blur-md">
          <h2 className="text-3xl font-extrabold text-purple-700 mb-8 text-center tracking-tight">Checkout</h2>
          <form onSubmit={handlePlaceOrder}>
            <div className="mb-10">
              <h3 className="font-semibold text-xl mb-4 flex items-center gap-2"><MapPin className="text-purple-500" size={22}/> Delivery Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block mb-1 font-medium">Country/Region</label>
                  <select name="country" className="w-full border rounded px-4 py-2" value={address.country} onChange={handleChange}>
                    <option value="India">India</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium">Full name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={18}/>
                    <input name="name" className="w-full border rounded pl-10 pr-2 py-2" value={address.name} onChange={handleChange} required placeholder="First and Last name" />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 font-medium">Mobile number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-gray-400" size={18}/>
                    <input name="mobile" className="w-full border rounded pl-10 pr-2 py-2" value={address.mobile} onChange={handleChange} required maxLength={10} minLength={10} pattern="[0-9]{10}" placeholder="10 digit mobile" />
                  </div>
                  <span className="text-xs text-gray-500">May be used to assist delivery</span>
                </div>
                <div>
                  <label className="block mb-1 font-medium">Pincode</label>
                  <div className="relative">
                    <Hash className="absolute left-3 top-3 text-gray-400" size={18}/>
                    <input name="pincode" className="w-full border rounded pl-10 pr-2 py-2" value={address.pincode} onChange={handleChange} required maxLength={6} minLength={6} pattern="[0-9]{6}" placeholder="6 digits [0-9] PIN code" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1 font-medium">Flat, House no., Building, Company, Apartment</label>
                  <div className="relative">
                    <Home className="absolute left-3 top-3 text-gray-400" size={18}/>
                    <input name="flat" className="w-full border rounded pl-10 pr-2 py-2" value={address.flat} onChange={handleChange} required />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1 font-medium">Area, Street, Sector, Village</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 text-gray-400" size={18}/>
                    <input name="area" className="w-full border rounded pl-10 pr-2 py-2" value={address.area} onChange={handleChange} required />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 font-medium">Landmark</label>
                  <div className="relative">
                    <Landmark className="absolute left-3 top-3 text-gray-400" size={18}/>
                    <input name="landmark" className="w-full border rounded pl-10 pr-2 py-2" value={address.landmark} onChange={handleChange} placeholder="E.g. near apollo hospital" />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 font-medium">Town/City</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 text-gray-400" size={18}/>
                    <input name="city" className="w-full border rounded pl-10 pr-2 py-2" value={address.city} onChange={handleChange} required />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 font-medium">State</label>
                  <select name="state" className="w-full border rounded px-4 py-2" value={address.state} onChange={handleChange} required>
                    <option value="">Choose a state</option>
                    {states.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <input type="checkbox" name="default" checked={address.default} onChange={handleChange} />
                  <label className="text-sm">Make this my default address</label>
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1 font-medium">Delivery instructions (optional)</label>
                  <div className="relative">
                    <Info className="absolute left-3 top-3 text-gray-400" size={18}/>
                    <input name="instructions" className="w-full border rounded pl-10 pr-2 py-2" value={address.instructions} onChange={handleChange} placeholder="Add preferences, notes, access codes and more" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <label className="block mb-2 font-semibold text-lg">Payment Method</label>
              <div className="flex flex-col gap-2">
                {paymentMethods.map((method) => (
                  <label key={method.id} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={payment === method.id}
                      onChange={() => setPayment(method.id)}
                    />
                    {method.label}
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white py-3 rounded-lg shadow-md text-lg font-semibold transition duration-200"
              disabled={placingOrder || !isAddressValid || cartItems.length === 0}
            >
              {placingOrder ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </div>
        {/* Order Summary Sidebar */}
        <div className="w-full md:w-96 bg-white/80 rounded-2xl shadow-xl border border-purple-100 p-6 h-fit mt-8 md:mt-0">
          <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2"><FileText className="text-purple-500" size={20}/> Order Summary</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="mb-2 divide-y divide-purple-100">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center py-2">
                  <span className="text-sm font-medium">{item.title} <span className="text-xs text-gray-400">x{item.quantity}</span></span>
                  <span className="font-semibold">₹{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-between font-bold text-purple-700 text-lg mt-4 border-t pt-4">
            <span>Total:</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 