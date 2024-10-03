
import {motion} from 'framer-motion'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContentHomePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const categories = ["Kohaku", "Showa", "Asagi", "Shusui", "Bekko"];
  const naviagte = useNavigate();
  return (
    
    <main className='pt-20 container_homecontent mx-auto px-4'>
      <section className='text-center py-20'>
        <h1 className='text-4xl md:text-6xl font-bold text-blue-900 mb-6'>
         Chào mừng bạn đến trang web của chúng tôi
        </h1>
        <p className="text-xl text-blue-700 mb-8">
        Nơi chúng tôi cung cấp những dòng sản phẩm cá koi và dịch vụ chắm sóc khách hàng tuyệt vời nhất tại thị trường Việt Nam
        </p>
        <motion.button
          whileHover={{scale: 1.05}}
          whileTap = {{scale: 0.95}}
          className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Explore Our Collection
        </motion.button>
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
                className={`px-6 py-2 rounded-full text-lg capitalize ${
                  activeFilter === category
                    ? "bg-blue-600 text-white"
                    : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                } transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </motion.button>
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3,4,5,6].map((item) => (
              <motion.div
                key={item}
                whileHover={{scale: 1.03}}
                className='bg-white rounded-lg shadow-lg overflow-hidden'
              >
                <img
                  src={`https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`}
                  alt='Koi Fish'
                  className='w-full h-48 object-cover'  
                />
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-blue-900 mb-2'>Beautiful Koi Fish</h3>
                  <p className='text-blue-700 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <motion.button
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                   Chi tiết sản phẩm
                  </motion.button>
                </div>
              </motion.div>
            ))}
        </div>
      </section>
    </main>
  )
}

export default ContentHomePage