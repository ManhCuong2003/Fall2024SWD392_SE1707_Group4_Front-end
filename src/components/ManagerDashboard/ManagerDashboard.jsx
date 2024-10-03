import  { useState, useEffect } from "react";
import { FiDownload, FiShare2, FiFilter, FiRefreshCw } from "react-icons/fi";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ManagerDashboard = () => {
  const [timeFrame, setTimeFrame] = useState("daily");
  const [sortBy, setSortBy] = useState("revenue");
  const [sortOrder, setSortOrder] = useState("desc");

  const dummyData = {
    daily: {
      revenue: [1000, 1200, 900, 1500, 1300, 1100, 1400],
      profits: [300, 400, 200, 600, 500, 300, 550],
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    weekly: {
      revenue: [6000, 7000, 6500, 7500],
      profits: [2000, 2500, 2200, 2800],
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    },
    monthly: {
      revenue: [25000, 28000, 26000, 30000, 27000, 29000],
      profits: [8000, 9500, 8500, 10000, 9000, 9800],
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
  };

  const [data, setData] = useState(dummyData[timeFrame]);

  useEffect(() => {
    setData(dummyData[timeFrame]);
  }, [timeFrame]);

  const lineChartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Revenue",
        data: data.revenue,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Profits",
        data: data.profits,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };

  const pieChartData = {
    labels: ["Revenue", "Profits"],
    datasets: [
      {
        data: [data.revenue.reduce((a, b) => a + b, 0), data.profits.reduce((a, b) => a + b, 0)],
        backgroundColor: ["rgb(75, 192, 192)", "rgb(255, 99, 132)"],
      },
    ],
  };

  const handleExport = (format) => {
    // Implement export functionality
    console.log(`Exporting data in ${format} format`);
  };

  const handleShare = () => {
    // Implement share functionality
    console.log("Sharing report");
  };

  const handleSort = (criterion) => {
    if (criterion === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(criterion);
      setSortOrder("desc");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Manager Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Total Revenue</h2>
            <p className="text-3xl font-bold text-green-600">
              ${data.revenue.reduce((a, b) => a + b, 0).toLocaleString()}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Total Profits</h2>
            <p className="text-3xl font-bold text-blue-600">
              ${data.profits.reduce((a, b) => a + b, 0).toLocaleString()}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Profit Margin</h2>
            <p className="text-3xl font-bold text-purple-600">
              {((data.profits.reduce((a, b) => a + b, 0) / data.revenue.reduce((a, b) => a + b, 0)) * 100).toFixed(2)}%
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Revenue and Profit Overview</h2>
            <div className="flex space-x-4">
              <select
                className="border rounded-md px-3 py-2"
                value={timeFrame}
                onChange={(e) => setTimeFrame(e.target.value)}
                aria-label="Select time frame"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
                onClick={() => handleExport("pdf")}
                aria-label="Export as PDF"
              >
                <FiDownload className="mr-2" /> Export PDF
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center"
                onClick={handleShare}
                aria-label="Share report"
              >
                <FiShare2 className="mr-2" /> Share
              </button>
            </div>
          </div>
          <Line data={lineChartData} options={{ responsive: true }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Revenue Distribution</h2>
            <Pie data={pieChartData} options={{ responsive: true }} />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Performance Indicators</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Revenue Growth</span>
                <span className="text-green-600 font-semibold">+12.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Profit Growth</span>
                <span className="text-green-600 font-semibold">+8.3%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Customer Acquisition Cost</span>
                <span className="text-red-600 font-semibold">$52.30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Customer Lifetime Value</span>
                <span className="text-green-600 font-semibold">$840.50</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Detailed Report</h2>
            <div className="flex items-center space-x-4">
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md flex items-center"
                onClick={() => {}}
                aria-label="Filter data"
              >
                <FiFilter className="mr-2" /> Filter
              </button>
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md flex items-center"
                onClick={() => {}}
                aria-label="Refresh data"
              >
                <FiRefreshCw className="mr-2" /> Refresh
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left font-semibold">Date</th>
                  <th
                    className="p-3 text-left font-semibold cursor-pointer"
                    onClick={() => handleSort("revenue")}
                  >
                    Revenue {sortBy === "revenue" && (sortOrder === "asc" ? "↑" : "↓")}
                  </th>
                  <th
                    className="p-3 text-left font-semibold cursor-pointer"
                    onClick={() => handleSort("profits")}
                  >
                    Profits {sortBy === "profits" && (sortOrder === "asc" ? "↑" : "↓")}
                  </th>
                  <th className="p-3 text-left font-semibold">Profit Margin</th>
                </tr>
              </thead>
              <tbody>
                {data.labels.map((label, index) => (
                  <tr key={label} className="border-b">
                    <td className="p-3">{label}</td>
                    <td className="p-3">${data.revenue[index].toLocaleString()}</td>
                    <td className="p-3">${data.profits[index].toLocaleString()}</td>
                    <td className="p-3">
                      {((data.profits[index] / data.revenue[index]) * 100).toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;