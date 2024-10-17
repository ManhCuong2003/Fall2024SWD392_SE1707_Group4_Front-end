import { useState, useEffect } from "react";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { LuEye } from "react-icons/lu";
import apiClient from "../../utils/axios";
import { Link } from "react-router-dom";

const ProductListPageContent = () => {
  const [allProducts, setAllProducts] = useState([]); // Tất cả sản phẩm
  const [filteredProducts, setFilteredProducts] = useState([]); // Sản phẩm đã lọc
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000000]); // Giá tối thiểu và tối đa
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // start loading
        const response = await apiClient.get("/api/products");
        setAllProducts(response.data); // Lưu tất cả sản phẩm
        setFilteredProducts(response.data); // Khởi tạo sản phẩm hiển thị
      } catch (err) {
        console.log(err);
        setError("Fail to fetch product. Please try again");
      } finally {
        setLoading(false); //End loading
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filterAndSortProducts = () => {
      let result = [...allProducts];

      if (searchTerm) {
        result = result.filter((product) =>
          product.koi_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (selectedSize) {
        result = result.filter((product) => product.koi_size === selectedSize);
      }

     

      // Lọc theo giá
      result = result.filter(
        (product) =>
          product.koi_price >= priceRange[0] && product.koi_price <= priceRange[1]
      );

      if (sortOption === "price-asc") {
        result.sort((a, b) => a.koi_price - b.koi_price);
      } else if (sortOption === "price-desc") {
        result.sort((a, b) => b.koi_price - a.koi_price);
      }

      setFilteredProducts(result);
      setCurrentPage(1);
    };
    filterAndSortProducts();
  }, [searchTerm, selectedSize, selectedBreed, priceRange, sortOption, allProducts]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredProducts.length / productsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container_productListPage mx-auto px-4 py-8 pt-20 bg-gradient-to-b from-blue-50 to-blue-100">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
        Koi Fish Shop
      </h1>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <div className="flex space-x-4">
            <select
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSizeChange}
              value={selectedSize}
            >
              <option value="">Tất cả kích thước</option>
              <option value="Nhỏ">Nhỏ</option>
              <option value="Trung">Trung bình</option>
              <option value="Lớn">Lớn</option>
            </select>
            <select
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSearchChange}
              value={searchTerm}
            >
              <option value="">Tất cả các giống</option>
              <option value="Kohaku">Kohaku</option>
              <option value="Sanke">Sanke</option>
              <option value="Showa">Showa</option>
              <option value="Utsuri">Utsuri</option>
              <option value="Bekko">Bekko</option>
              <option value="Asagi">Asagi</option>
              <option value="Shusui">Shusui</option>
              <option value="Tancho">Tancho</option>
            </select>
            
            <select
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSortChange}
              value={sortOption}
            >
              <option value="">Sắp xếp</option>
              <option value="price-asc">Giá: thấp đến cao</option>
              <option value="price-desc">Giá: cao đến thấp</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {currentProducts.map((product) => (
          <motion.div
            key={product.id}
            className="w-full h-84 rounded-lg shadow-md overflow-hidden bg-white"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-fit">
              <img
                src={product.koi_image_url}
                alt={product.koi_name}
                className="w-full h-56 object-contain transform rotate-90"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.koi_name}</h2>
              <p className="text-gray-600 mb-2 truncate hover:text-clip">
                {product.koi_description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">
                  {product.koi_price} VNĐ
                </span>
                <Link to={`/detail-page/${product.koi_id}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
                    <LuEye className="mr-2" />
                    Xem chi tiết
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <nav className="inline-flex rounded-md shadow">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Trước</span>
            <FiChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`px-3 py-2 border border-gray-300 bg-white text-sm font-medium ${
                currentPage === number
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={
              currentPage ===
              Math.ceil(filteredProducts.length / productsPerPage)
            }
            className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Sau</span>
            <FiChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default ProductListPageContent;
