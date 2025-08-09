import React from "react";
import { CheckCircle, Truck, Home } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};
  const {
    address = {},
    paymentMethod = "",
    orderTotal = 0,
    orderId = Math.floor(100000 + Math.random() * 900000),
  } = state;

  return (
    <div className="min-h-screen bg-white">
      <div className="container-fluid py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-gray-900">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <h1 className="text-3xl font-extrabold">Thank you for your order!</h1>
          </div>
          <p className="text-gray-600 mb-6">Your order has been placed successfully. A confirmation email will be sent to you shortly.</p>

          <div className="grid gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="text-sm text-gray-600">Order ID</div>
              <div className="text-lg font-semibold">#{orderId}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-1">
                <Truck className="w-5 h-5 text-yellow-500" />
                <div className="text-sm text-gray-600">Delivery Address</div>
              </div>
              {address && address.flat ? (
                <div className="text-gray-900">
                  <div>{address.name}</div>
                  <div>{address.flat}, {address.area}</div>
                  <div>{address.city}, {address.state} - {address.pincode}</div>
                  <div>Mobile: {address.mobile}</div>
                </div>
              ) : (
                <div className="text-gray-600">Address details will be shared via email.</div>
              )}
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-600">Payment Method</div>
                <div className="font-semibold">{paymentMethod || "—"}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Order Total</div>
                <div className="font-extrabold text-xl">₹{Number(orderTotal || 0).toLocaleString()}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate("/")}
              className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-md flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Continue Shopping
            </button>
            <Link
              to="/orders"
              className="flex-1 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-black transition text-center shadow-md"
            >
              View Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}