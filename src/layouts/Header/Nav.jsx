

import { useEffect, useState } from 'react'
import { FaFish } from 'react-icons/fa';
import {motion} from "framer-motion"

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
        >
            <div className="container_homecontent mx-auto px-4 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <FaFish className="text-3xl text-blue-600 mr-2"/>
                <span className="text-xl font-bold text-blue-900">KOI FARM SHOP</span>
              </div>
              <div className = "hidden md:flex space-x-6">
                <a href="#" className="text-blue-900 hover:text-blue-600 transition-colors" aria-label="Home">Trang chủ</a>
                <a href="#" className="text-blue-900 hover:text-blue-600 transition-colors" aria-label="Product">Sản phẩm</a>
                <a href="#" className="text-blue-900 hover:text-blue-600 transition-colors" aria-label="News">Tin tức</a>
                <a href="#" className="text-blue-900 hover:text-blue-600 transition-colors" aria-label="Service">Dịch vụ</a>
              </div>
              <div className="space-x-4">
                <motion.button
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Đăng nhập
                </motion.button>
                <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Đăng ký
            </motion.button>
              </div>
            </div>
        </nav>
  )
}

