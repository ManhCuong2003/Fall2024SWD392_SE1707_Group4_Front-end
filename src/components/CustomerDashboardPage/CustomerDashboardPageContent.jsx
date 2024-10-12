import { useState } from 'react';
import { AiFillProfile } from 'react-icons/ai';
import { BiSolidPackage } from 'react-icons/bi';
import { FaBell, FaHeart, FaSignOutAlt } from 'react-icons/fa';
import { PiHandDepositFill } from 'react-icons/pi';
import MyOrdersSub from './DashboardContentComponent/MyOrdersSub';
import Profile from './DashboardContentComponent/Profile';
import FavoriteProducts from './DashboardContentComponent/FavoriteProducts';
import ConsignProfile from './DashboardContentComponent/ConsignProfile';

export default function CustomerDashboardPageContent() {
  const [activeNavItem, setActiveNavItem] = useState(0);
  
  const navItems = [
    { icon: <AiFillProfile />, label: "myProfile", name: "Hồ sơ của tôi" },
    { icon: <FaHeart />, label: "myWishlist", name: "Sản phẩm yêu thích" },
    { icon: <BiSolidPackage />, label: "myOrders", name: "Đơn hàng của tôi" },
    { icon: <PiHandDepositFill />, label: "myConsigment", name: "Đơn ký gửi của tôi" },
    { icon: <FaBell />, label: "notification", name: "Thông báo" },
    { icon: <FaSignOutAlt />, label: "logout", name: "Đăng xuất" }
  ]; 

  return (
    <div className="container_myOrders mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mt-10">
        {/* Vertical Navbar */}
        <nav className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div>
              <h3 className="text-lg font-semibold">truongtuyetngan2407</h3>
              <p className="text-gray-600">truongtuyetngan2407@gmail.com</p>
            </div>
          </div>
          <ul className="py-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  className={`flex items-center text-gray-700 hover:text-blue-500 transition-colors duration-200 ${activeNavItem === index ? "text-blue-500" : "text-gray-700"}`}
                  onClick={() => setActiveNavItem(index)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content Area */}
        <main className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-6">{navItems[activeNavItem].name}</h1>
          {navItems[activeNavItem].label === 'myOrders' && <MyOrdersSub />}
          {navItems[activeNavItem].label === 'myProfile' && <Profile />} 
          {navItems[activeNavItem].label === 'myWishlist' && <FavoriteProducts />}
          {navItems[activeNavItem].label === 'myConsigment' && <ConsignProfile />}
        </main>
      </div>
    </div>
  );
}
