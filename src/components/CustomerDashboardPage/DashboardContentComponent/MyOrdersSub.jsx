import { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { MdCancel, MdDoneAll, MdLocalShipping, MdRefresh } from 'react-icons/md';

export default function MyOrdersSub() {
  const [activeTab, setActiveTab] = useState("all");
  const [orders, setOrders] = useState([
    { id: 1, details: "Order 1 details", price: 100, status: "delivery" },
    { id: 2, details: "Order 2 details", price: 150, status: "complete" },
    { id: 3, details: "Order 3 details", price: 200, status: "cancelled" },
    { id: 4, details: "Order 4 details", price: 75, status: "refund" },
  ]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleRating = (orderId, rating) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, rating } : order
    ));
  };

  const filteredOrders = activeTab === "all" ? orders : orders.filter(order => order.status === activeTab);
  return (
    <div>
    <div className="flex space-x-4 mb-6 overflow-x-auto">
      <button
        onClick={() => handleTabChange("all")}
        className={`px-4 py-2 rounded-full ${activeTab === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} transition-colors duration-200`}
      >
        All
      </button>
      <button
        onClick={() => handleTabChange("delivery")}
        className={`px-4 py-2 rounded-full ${activeTab === "delivery" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} transition-colors duration-200 flex items-center`}
      >
        <MdLocalShipping className="mr-2" /> Đơn hàng đang giao
      </button>
      <button
        onClick={() => handleTabChange("complete")}
        className={`px-4 py-2 rounded-full ${activeTab === "complete" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} transition-colors duration-200 flex items-center`}
      >
        <MdDoneAll className="mr-2" /> Đơn hàng đã giao
      </button>
      <button
        onClick={() => handleTabChange("cancelled")}
        className={`px-4 py-2 rounded-full ${activeTab === "cancelled" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} transition-colors duration-200 flex items-center`}
      >
        <MdCancel className="mr-2" /> Hủy đơn hàng
      </button>
      <button
        onClick={() => handleTabChange("refund")}
        className={`px-4 py-2 rounded-full ${activeTab === "refund" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} transition-colors duration-200 flex items-center`}
      >
        <MdRefresh className="mr-2" /> Đơn hàng đã hoàn tiền
      </button>
    </div>
    <div className="space-y-4">
      {filteredOrders.map((order) => (
        <div key={order.id} className="border rounded-lg p-4 flex justify-between items-center hover:shadow-md transition-shadow duration-200">
          <div>
            <p className="font-semibold">Order #{order.id}</p>
            <p className="text-gray-600">{order.details}</p>
            <div className="mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRating(order.id, star)}
                  className={`focus:outline-none ${order.rating && star <= order.rating ? "text-yellow-400" : "text-gray-300"}`}
                  aria-label={`Rate ${star} stars`}
                >
                  <FaStar />
                </button>
              ))}
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-lg">${order.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 capitalize">{order.status}</p>
          </div>
        </div>
      ))}
    </div>
    </div> 
  )
}







/*import React from 'react'

export default function MyOrders() {
    
  return (
   
  )
}
*/