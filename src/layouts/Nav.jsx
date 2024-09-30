

import React, { useEffect, useState } from 'react'
import { FaFish } from 'react-icons/fa';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActiveFilter] = useState("all");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
        >
            <div className="container_nav mx-auto px-4 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <FaFish className="text-3xl text-blue-600 mr-2"/>
                <span className="text-xl font-bold text-blue-900">KOI FARM SHOP</span>
              </div>
              <div className = "hidden md:flex space-x-6">
                <a href="#" className="text-blue-900 hover:text-blue-600 transition-colors"></a>
              </div>
            </div>
        </nav>
        
    </div>
  )
}

