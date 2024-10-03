import  { useState } from 'react'
import { FaBox, FaCheckCircle, FaShippingFast } from 'react-icons/fa';

function ManageCustomerOrder() {
    const [activeTab, setActiveTab] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([
    { id: 1, customerName: "John Doe", status: "pending", items: [{ name: "Product A", quantity: 2, price: 25 }, { name: "Product B", quantity: 1, price: 30 }] },
    { id: 2, customerName: "Jane Smith", status: "canceled", items: [{ name: "Product C", quantity: 1, price: 50 }] },
    { id: 3, customerName: "Alice Johnson", status: "preparing", items: [{ name: "Product D", quantity: 3, price: 15 }, { name: "Product E", quantity: 2, price: 20 }] },
  ]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedOrder(null);
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
  };

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(order => order.id === orderId ? { ...order, status: newStatus } : order));
    setSelectedOrder(prevOrder => ({ ...prevOrder, status: newStatus }));
  };

  const handleRefund = (orderId) => {
    alert(`Refund processed for order ${orderId}`);
  };

  const filteredOrders = activeTab === "all" ? orders : orders.filter(order => order.status === activeTab);

  return (
    <div className="container_cus_order mx-auto p-4">
      <div className="mb-6">
        <div className="flex border-b">
          <button
            className={`py-2 px-4 ${activeTab === "all" ? "border-b-2 border-blue-500" : ""}`}
            onClick={() => handleTabChange("all")}
          >
            All Orders
          </button>
          <button
            className={`py-2 px-4 ${activeTab === "pending" ? "border-b-2 border-blue-500" : ""}`}
            onClick={() => handleTabChange("pending")}
          >
            Pending
          </button>
          <button
            className={`py-2 px-4 ${activeTab === "canceled" ? "border-b-2 border-blue-500" : ""}`}
            onClick={() => handleTabChange("canceled")}
          >
            Canceled
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-4 mb-4 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Order List</h2>
          {filteredOrders.map(order => (
            <div key={order.id} className="bg-white shadow-md rounded-lg p-4 mb-4 transition-all duration-300 hover:shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Order #{order.id}</h3>
                  <p>{order.customerName}</p>
                  <p className="text-sm text-gray-500">Status: {order.status}</p>
                </div>
                <div>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 mr-5"
                    onClick={() => handleViewOrder(order)}
                    aria-label={`View details for order ${order.id}`}
                  >
                    View Order Detail
                  </button>
                  {order.status === "canceled" && (
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded mt-2 hover:bg-green-600 transition-colors duration-300"
                      onClick={() => handleRefund(order.id)}
                      aria-label={`Refund money for order ${order.id}`}
                    >
                      Refund Money
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 pl-0 lg:pl-4">
          <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
          {selectedOrder ? (
            <div className="bg-white shadow-md rounded-lg p-4 transition-all duration-300 hover:shadow-lg">
              <h3 className="font-semibold text-xl mb-2">Order #{selectedOrder.id}</h3>
              <p className="mb-2">Customer: {selectedOrder.customerName}</p>
              <p className="mb-4">Status: {selectedOrder.status}</p>
              <h4 className="font-semibold mb-2">Items:</h4>
              <ul className="mb-4">
                {selectedOrder.items.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.name} x{item.quantity}</span>
                    <span>${item.price * item.quantity}</span>
                  </li>
                ))}
              </ul>
              <p className="font-semibold">Total: ${selectedOrder.items.reduce((sum, item) => sum + item.price * item.quantity, 0)}</p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Change Status:</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors duration-300"
                    onClick={() => handleStatusChange(selectedOrder.id, "preparing")}
                    aria-label="Change status to preparing order"
                  >
                    <FaBox className="mr-2" /> Preparing Order
                  </button>
                  <button
                    className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                    onClick={() => handleStatusChange(selectedOrder.id, "shipping")}
                    aria-label="Change status to shipping"
                  >
                    <FaShippingFast className="mr-2" /> Shipping
                  </button>
                  <button
                    className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
                    onClick={() => handleStatusChange(selectedOrder.id, "completed")}
                    aria-label="Change status to complete delivery"
                  >
                    <FaCheckCircle className="mr-2" /> Complete Delivery
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p>Select an order to view details</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ManageCustomerOrder