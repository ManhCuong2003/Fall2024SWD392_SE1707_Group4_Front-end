import React, { useState, useEffect, useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import { userContext } from "../Context/UserContext";
import { Link } from "react-router-dom";

const CartContentPage = () => {
  const { cartItems, removeFromcart } = useContext(userContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const calculateTotal = () => {
    const sum = cartItems.reduce(
      (acc, item) => acc + item.koi_price * item.quantity,
      0
    );
    setTotal(sum);
  };

  const handleRemoveItem = (id) => {
    removeFromcart(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8 pt-20">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
          Giỏ hàng của bạn
        </h1>

        {/* Kiểm tra nếu giỏ hàng trống */}
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 text-xl">
            Giỏ hàng của bạn đang trống
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <motion.div
                  key={item.koi_id}
                  className="flex flex-col md:flex-row items-center justify-between bg-blue-50 p-4 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-4 md:mb-0">
                    <img
                      src={item.koi_image_url}
                      alt={item.koi_name}
                      className="w-24 h-24 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h2 className="text-xl font-semibold text-blue-800">
                        {item.koi_name}
                      </h2>
                      <p className="text-gray-600">{item.koi_price} VNĐ</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleRemoveItem(item.koi_id)}
                      className="ml-4 text-red-500 hover:text-red-600 transition duration-200"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <FaTrash size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Hiển thị tổng và nút thanh toán nếu giỏ hàng không rỗng */}
            <div className="mt-8">
              <div className="text-right">
                <p className="text-xl font-semibold mb-5">
                  Tổng cộng: {total} VNĐ
                </p>
                <Link
                  className="bg-blue-600 text-white px-8 py-3  rounded-lg text-xl font-semibold hover:bg-blue-700 transition duration-200"
                  to={"/checkout-page"}
                >
                  Thanh toán
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartContentPage;
