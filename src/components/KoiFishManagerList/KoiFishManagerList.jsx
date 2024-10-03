import  { useState } from "react";
import { FaSearch, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const KoiFishManagerList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newKoi, setNewKoi] = useState({
    name: "",
    color: "",
    size: "",
    pattern: "",
    health: "",
    feedingSchedule: ""
  });

  const koiInventory = [
    { id: 1, name: "Kohaku", color: "Red and white", size: "Large", pattern: "Scaleless", health: "Excellent", feedingSchedule: "Twice daily" },
    { id: 2, name: "Sanke", color: "Red, white, and black", size: "Medium", pattern: "Scaled", health: "Good", feedingSchedule: "Thrice daily" },
    { id: 3, name: "Showa", color: "Black, red, and white", size: "Large", pattern: "Scaled", health: "Fair", feedingSchedule: "Once daily" },
    { id: 4, name: "Tancho", color: "White with red spot", size: "Small", pattern: "Scaleless", health: "Excellent", feedingSchedule: "Twice daily" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
  };

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
  };

  const handleAddKoi = (e) => {
    e.preventDefault();
    // Implement add koi logic here
    setShowAddModal(false);
    setNewKoi({ name: "", color: "", size: "", pattern: "", health: "", feedingSchedule: "" });
  };

//   const handleEditKoi = (id) => {
//     // Implement edit koi logic here
//   };

//   const handleDeleteKoi = (id) => {
//     // Implement delete koi logic here
//   };

  const filteredKoi = koiInventory.filter((koi) => {
    if (selectedFilter === "all") return true;
    return koi.color.toLowerCase().includes(selectedFilter) ||
           koi.size.toLowerCase().includes(selectedFilter) ||
           koi.pattern.toLowerCase().includes(selectedFilter);
  });

  return (
    <div className="bg-blue-50 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Koi Fish Manager Dashboard</h1>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-blue-700">Koi Inventory</h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <FaPlus className="inline mr-2" /> Add Koi
          </button>
        </div>
        <div className="flex mb-4 space-x-4">
          <button
            onClick={() => handleFilter("all")}
            className={`px-4 py-2 rounded ${selectedFilter === "all" ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
          >
            All
          </button>
          <button
            onClick={() => handleFilter("red")}
            className={`px-4 py-2 rounded ${selectedFilter === "red" ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
          >
            Red
          </button>
          <button
            onClick={() => handleFilter("white")}
            className={`px-4 py-2 rounded ${selectedFilter === "white" ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
          >
            White
          </button>
          <button
            onClick={() => handleFilter("black")}
            className={`px-4 py-2 rounded ${selectedFilter === "black" ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
          >
            Black
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Color</th>
                <th className="px-4 py-2">Size</th>
                <th className="px-4 py-2">Pattern</th>
                <th className="px-4 py-2">Health</th>
                <th className="px-4 py-2">Feeding Schedule</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredKoi.map((koi) => (
                <tr key={koi.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="px-4 py-2">{koi.name}</td>
                  <td className="px-4 py-2">{koi.color}</td>
                  <td className="px-4 py-2">{koi.size}</td>
                  <td className="px-4 py-2">{koi.pattern}</td>
                  <td className="px-4 py-2">{koi.health}</td>
                  <td className="px-4 py-2">{koi.feedingSchedule}</td>
                  <td className="px-4 py-2">
                    <button
                    //   onClick={() => handleEditKoi(koi.id)}
                      className="text-blue-500 hover:text-blue-700 mr-2"
                    >
                      <FaEdit />
                    </button>
                    <button
                    //   onClick={() => handleDeleteKoi(koi.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Search Koi</h2>
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for koi..."
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaSearch />
          </button>
        </form>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Add New Koi</h2>
            <form onSubmit={handleAddKoi} className="space-y-4">
              <input
                type="text"
                value={newKoi.name}
                onChange={(e) => setNewKoi({ ...newKoi, name: e.target.value })}
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={newKoi.color}
                onChange={(e) => setNewKoi({ ...newKoi, color: e.target.value })}
                placeholder="Color"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={newKoi.size}
                onChange={(e) => setNewKoi({ ...newKoi, size: e.target.value })}
                placeholder="Size"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={newKoi.pattern}
                onChange={(e) => setNewKoi({ ...newKoi, pattern: e.target.value })}
                placeholder="Pattern"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={newKoi.health}
                onChange={(e) => setNewKoi({ ...newKoi, health: e.target.value })}
                placeholder="Health"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={newKoi.feedingSchedule}
                onChange={(e) => setNewKoi({ ...newKoi, feedingSchedule: e.target.value })}
                placeholder="Feeding Schedule"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Add Koi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default KoiFishManagerList;
