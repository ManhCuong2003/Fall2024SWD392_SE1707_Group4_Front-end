import  { useContext, useState } from "react";
import { FaSort, FaTrash } from "react-icons/fa";
import { userContext } from "../../Context/UserContext";


const FavoriteProducts = () => {
  const { favoriteProducts, removeFromFavorites } = useContext(userContext);
  const [sortBy, setSortBy] = useState("price");
  const [filterBy, setFilterBy] = useState("all");

  const handleRemoveProduct = (productId) => {
    removeFromFavorites(productId);
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  const handleFilter = (category) => {
    setFilterBy(category);
  };

  const filteredProducts =
    filterBy === "all"
      ? favoriteProducts
      : favoriteProducts.filter((product) => product.category === filterBy);

  return (
    <div className="container_favoriteProducts mx-auto px-4 py-8">
      <div className="mb-6 flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <span className="text-gray-700">Sort by:</span>
          <button
            onClick={() => handleSort("price")}
            className={`px-3 py-1 rounded ${sortBy === "price" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"} transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            aria-label="Sort by price"
          >
            <FaSort className="inline mr-2" />
            Price
          </button>
          <button
            onClick={() => handleSort("title")}
            className={`px-3 py-1 rounded ${sortBy === "title" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"} transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            aria-label="Sort by title"
          >
            <FaSort className="inline mr-2" />
            Title
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Filter by:</span>
          <select
            onChange={(e) => handleFilter(e.target.value)}
            className="px-3 py-1 rounded bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Filter by category"
          >
            <option value="all">All</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Art">Art</option>
            <option value="Food">Food</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.koi_id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={product.koi_image_url}
              alt={product.koi_name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">{product.koi_name}</h3>
              <p className="text-gray-600 mb-2">{product.koi_description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-indigo-600">{product.koi_price} VNĐ</span>
                <button
                  onClick={() => handleRemoveProduct(product.koi_id)}
                  className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full p-1 transition duration-300 ease-in-out transform hover:scale-110"
                  aria-label={`Remove ${product.koi_name} from favorites`}
                >
                  <FaTrash className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No favorite products found.</p>
      )}
    </div>
  );
};

export default FavoriteProducts;
