import { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { LuEye } from "react-icons/lu";
import apiClient from "../../utils/axios";

function ContentHomePage() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // start loading
        const response = await apiClient.get("/api/products");
        setFilteredProducts(response.data);
      } catch (err) {
        console.log(err);
        setError("Fail to fetch product. Please try again");
      } finally {
        setLoading(false); // End loading
      }
    };
    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const [activeFilter, setActiveFilter] = useState("all");
  const categories = ["Kohaku", "Showa", "Asagi", "Shusui", "Bekko"];
  
  return (
    <main className='pt-20 container_homecontent mx-auto px-4'>
      <section className='text-center py-20'>
        <h1 className='text-4xl md:text-6xl font-bold text-blue-900 mb-6'>
          Chào mừng bạn đến trang web của chúng tôi
        </h1>
        <p className="text-xl text-blue-700 mb-8">
          Nơi chúng tôi cung cấp những dòng sản phẩm cá koi và dịch vụ chắm sóc khách hàng tuyệt vời nhất tại thị trường Việt Nam
        </p>
        <Link to="/product-list">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Explore Our Collection
          </motion.button>
        </Link>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Một số dòng cá Koi nổi bật
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-lg capitalize ${activeFilter === category
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                } transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </motion.button>
          ))}
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
                <p className="text-gray-600 mb-2 truncate hover:text-clip">{product.koi_description}</p>
                <div className="flex justify-between items-center">
                  <Link to={`/detail-page/${product.koi_id}`}>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
                    >
                      <LuEye className="mr-2" />
                      Xem chi tiết
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ContentHomePage;
