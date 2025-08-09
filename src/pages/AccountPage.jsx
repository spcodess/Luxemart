import React from "react";
import { useNavigate } from "react-router-dom";

export default function AccountPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-purple-700 text-center">
          My Account
        </h2>
        <div className="mb-4">
          <p className="text-lg font-semibold text-purple-900">Welcome, User!</p>
          <p className="text-gray-600 mt-2">
            Here you can view and manage your account details, orders, and preferences.
          </p>
        </div>
        <div className="mt-6">
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition mb-2">
            Edit Profile
          </button>
          <button onClick={() => navigate('/orders')} className="w-full border border-purple-300 py-2 rounded text-purple-700 hover:bg-purple-50 transition">
            View Orders
          </button>
        </div>
      </div>
    </div>
  );
}