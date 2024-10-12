import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FaFilter, FaTicketAlt, FaComments, FaShoppingCart, FaExclamationTriangle } from "react-icons/fa";

const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4500 },
  { name: "May", sales: 6000 },
  { name: "Jun", sales: 5500 },
];

const SalesReportPage = () => {
  const [activeSection, setActiveSection] = useState("sales");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("This is a sample error message. Please try again.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 p-8 font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <header className="bg-blue-600 text-white p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Sales Report & Customer Care</h1>
          <nav>
            <button
              onClick={() => setActiveSection("sales")}
              className={`mr-4 px-4 py-2 rounded-full ${activeSection === "sales" ? "bg-white text-blue-600" : ""}`}
            >
              Sales Report
            </button>
            <button
              onClick={() => setActiveSection("care")}
              className={`px-4 py-2 rounded-full ${activeSection === "care" ? "bg-white text-blue-600" : ""}`}
            >
              Customer Care
            </button>
          </nav>
        </header>

        <main className="p-6">
          {activeSection === "sales" ? (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Sales History</h2>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="flex space-x-4 mb-8">
                <div className="flex-1 bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Filter Options</h3>
                  <div className="flex items-center space-x-2">
                    <FaFilter className="text-blue-600" />
                    <select className="form-select block w-full mt-1">
                      <option>Product Categories</option>
                      <option>Customer Segments</option>
                      <option>Geographic Regions</option>
                    </select>
                  </div>
                </div>
                <div className="flex-1 bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Date Range</h3>
                  <div className="flex space-x-2">
                    <input type="date" className="form-input block w-full mt-1" />
                    <input type="date" className="form-input block w-full mt-1" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Customer Care</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Create Ticket</h3>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-input block w-full mt-1 mb-2"
                      required
                    />
                    <textarea
                      placeholder="Describe your issue"
                      className="form-textarea block w-full mt-1 mb-2"
                      rows="3"
                      required
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                    >
                      Submit Ticket
                    </button>
                  </form>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Order Status</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <FaShoppingCart className="text-blue-600" />
                    <input
                      type="text"
                      placeholder="Enter Order ID"
                      className="form-input block w-full"
                    />
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
            <div className="flex items-center">
              <FaExclamationTriangle className="mr-2" />
              <p>{error}</p>
            </div>
          </div>
        )}

        <footer className="bg-gray-100 p-6 mt-8">
          <div className="flex justify-between items-center">
            <p>&copy; 2023 Koi Fish Sales Report. All rights reserved.</p>
            <div className="flex space-x-4">
              <FaTicketAlt className="text-blue-600" />
              <FaComments className="text-blue-600" />
            </div>
          </div>
        </footer>
      </div>
      <div
        className="fixed bottom-0 right-0 w-64 h-64 pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          borderTopLeftRadius: "100%"
        }}
      ></div>
    </div>
  );
};

export default SalesReportPage;