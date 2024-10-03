import  { useState } from "react";
import { FaChartLine, FaUsers, FaFish, FaMoneyBillWave, FaShoppingCart } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StaffDashboard = () => {
  const [revenue, setRevenue] = useState(50000);
  const [customers, setCustomers] = useState(500);
  const [koiStock, setKoiStock] = useState(1000);
  const [averageOrderValue, setAverageOrderValue] = useState(100);
  const [totalOrders, setTotalOrders] = useState(200);

  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [30000, 35000, 40000, 45000, 50000, 55000],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const customerFlowData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Customer Flow",
        data: [300, 350, 400, 450, 500, 550],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Koi Farm Shop Performance",
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-6 md:p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-blue-800">Koi Farm Shop Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-blue-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-blue-800 flex items-center">
                <FaMoneyBillWave className="mr-2" /> Revenue
              </h2>
              <p className="text-2xl font-bold text-blue-900">${revenue.toLocaleString()}</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-green-800 flex items-center">
                <FaUsers className="mr-2" /> Customers
              </h2>
              <p className="text-2xl font-bold text-green-900">{customers.toLocaleString()}</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-yellow-800 flex items-center">
                <FaFish className="mr-2" /> Koi Stock
              </h2>
              <p className="text-2xl font-bold text-yellow-900">{koiStock.toLocaleString()}</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-purple-800 flex items-center">
                <FaChartLine className="mr-2" /> Avg. Order Value
              </h2>
              <p className="text-2xl font-bold text-purple-900">${averageOrderValue.toLocaleString()}</p>
            </div>
            <div className="bg-red-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-red-800 flex items-center">
                <FaShoppingCart className="mr-2" /> Total Orders
              </h2>
              <p className="text-2xl font-bold text-red-900">{totalOrders.toLocaleString()}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Revenue Trend</h2>
              <Line options={chartOptions} data={revenueData} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Customer Flow</h2>
              <Line options={chartOptions} data={customerFlowData} />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Update Shop Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label htmlFor="revenue" className="block text-sm font-medium text-gray-700">Revenue</label>
                <input
                  type="number"
                  id="revenue"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="customers" className="block text-sm font-medium text-gray-700">Customers</label>
                <input
                  type="number"
                  id="customers"
                  value={customers}
                  onChange={(e) => setCustomers(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="koiStock" className="block text-sm font-medium text-gray-700">Koi Stock</label>
                <input
                  type="number"
                  id="koiStock"
                  value={koiStock}
                  onChange={(e) => setKoiStock(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="averageOrderValue" className="block text-sm font-medium text-gray-700">Avg. Order Value</label>
                <input
                  type="number"
                  id="averageOrderValue"
                  value={averageOrderValue}
                  onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="totalOrders" className="block text-sm font-medium text-gray-700">Total Orders</label>
                <input
                  type="number"
                  id="totalOrders"
                  value={totalOrders}
                  onChange={(e) => setTotalOrders(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* <div className="mt-8 text-center">
            <img
            src="https://images.unsplash.com/photo-1601255596267-47b3ebb1bac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Koi farm shop"
            className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
        </div> */}
    </div>
  );
};

export default StaffDashboard;
