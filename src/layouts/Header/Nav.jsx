import { useContext, useEffect, useState } from "react";
import { FaFish } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { IoMdMore } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { userContext } from "../../components/Context/UserContext";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useContext(userContext);
  const { user } = useContext(userContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userInfor");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("cart");
    localStorage.removeItem("favorites");
    navigate("/login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container_homecontent mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <FaFish className="text-3xl text-blue-600 mr-2" />
          <span className="text-xl font-bold text-blue-900">KOI FARM SHOP</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to={"/"}
            className="text-blue-900 hover:text-blue-600 transition-colors"
            aria-label="Home"
          >
            Trang chủ
          </Link>
          <Link
            to={"/product-list"}
            className="text-blue-900 hover:text-blue-600 transition-colors"
            aria-label="Product"
          >
            Sản phẩm
          </Link>
          <Link
            to={"/news"}
            className="text-blue-900 hover:text-blue-600 transition-colors"
            aria-label="News"
          >
            Tin tức
          </Link>
          <Link
            to={"/consignment"}
            className="text-blue-900 hover:text-blue-600 transition-colors"
            aria-label="Service"
          >
            Dịch vụ
          </Link>
          <Link
            to={"/compareKoi"}
            className="text-blue-900 hover:text-blue-600 transition-colors"
            aria-label="Compare"
          >
            So sánh Koi
          </Link>
        </div>
        <div className="space-x-4">
          {user ? (
            // User is logged in
            <div className="flex items-center space-x-3">
              <span className="text-blue-900 font-bold">
                Welcome, {user.userfullname}
              </span>
              <Link
                to={"/cart-page"}
                className="relative text-2xl text-blue-900 hover:text-blue-600"
              >
                <IoCart />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2.5 -right-2 inline-block bg-blue-500 text-xs text-white px-2 py-1 rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </Link>
              <Link
                to={"/customer-dashboard"}
                className="text-2xl text-blue-900 hover:text-blue-600"
              >
                <IoMdMore />
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                onClick={handleLogout}
              >
                Đăng xuất
              </motion.button>
            </div>
          ) : (
            // User is not logged in
            <>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={() => navigate("/login")}
              >
                Đăng nhập
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={() => navigate("/register")}
              >
                Đăng ký
              </motion.button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
