import { useState } from 'react'
import { FaListAlt } from 'react-icons/fa'
import { FaBoxesStacked } from 'react-icons/fa6'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import StaffDashboard from '../../../components/StaffDashboard/StaffDashboard'
import ManageCustomerOrder from '../ManageCustomerOrder/ManageCustomerOrder'

function StaffManagePage() {
    const [activeNavItem, setActiveNavItem] = useState(0)

    const navItems = [
        {icon: <MdOutlineDashboardCustomize />, label: "dashboard", name: "Bảng điều khiển"},
        {icon: <FaListAlt />, label: "customerOrder", name: "Quản lý đơn hàng"},
        {icon: <FaListAlt />, label: "customerConsignmentOrder", name: "Quản lý đơn ký gửi"},
        {icon: <FaBoxesStacked />, label: "inventory", name: "Quản lý hàng tồn kho"},
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
                       className= {`flex items-center hover:text-blue-500 transition-colors duration-200 ${activeNavItem === index ? "text-blue-600 font-semibold" : "text-gray-700"}`}
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
              {navItems[activeNavItem].label === 'dashboard' && (<StaffDashboard/>)}
              {navItems[activeNavItem].label === 'customerOrder' && (<ManageCustomerOrder/>)}

              
        </main>

        </div>
    </div>
  )
}

export default StaffManagePage