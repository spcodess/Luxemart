import React, { useEffect, useState } from "react";
import { Package, IndianRupee, Calendar, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("orders") || "[]");
      setOrders(Array.isArray(saved) ? saved.reverse() : []);
    } catch {
      setOrders([]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container-fluid py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
            <Package className="w-7 h-7 text-purple-600" />
            Your Orders
          </h1>

          {orders.length === 0 ? (
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
              <p className="text-gray-600 mb-4">You have no orders yet.</p>
              <Link to="/" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.orderId} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                    <div className="text-sm text-gray-600">Order ID: <span className="font-semibold text-gray-900">#{order.orderId}</span></div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {new Date(order.createdAt).toLocaleString()}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                      <div className="text-xs text-gray-500 mb-1">Deliver to</div>
                      <div className="text-gray-900">
                        {order.address?.name}
                        <div className="text-sm text-gray-700">{order.address?.flat}, {order.address?.area}</div>
                        <div className="text-sm text-gray-700">{order.address?.city}, {order.address?.state} - {order.address?.pincode}</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                      <div className="text-xs text-gray-500 mb-1">Payment</div>
                      <div className="text-gray-900 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-purple-600" />
                        {order.paymentMethod}
                      </div>
                      <div className="mt-2 text-gray-900 flex items-center gap-2">
                        <IndianRupee className="w-4 h-4 text-green-600" />
                        <span className="font-extrabold text-lg">₹{Number(order.orderTotal || 0).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {Array.isArray(order.items) && order.items.length > 0 && (
                    <div className="mt-4 overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="text-gray-500">
                            <th className="py-2">Item</th>
                            <th className="py-2">Qty</th>
                            <th className="py-2">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.items.map((it) => (
                            <tr key={`${order.orderId}-${it.id}`} className="border-t">
                              <td className="py-2 pr-2">
                                <div className="flex items-center gap-3">
                                  {it.image && <img src={it.image} alt={it.title} className="w-10 h-10 rounded object-cover border" />}
                                  <span className="text-gray-900">{it.title}</span>
                                </div>
                              </td>
                              <td className="py-2">{it.quantity}</td>
                              <td className="py-2">₹{Number(it.price * it.quantity).toLocaleString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}