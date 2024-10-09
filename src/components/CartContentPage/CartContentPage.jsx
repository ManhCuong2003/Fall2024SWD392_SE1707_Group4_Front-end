import React, { useState, useEffect } from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

const CartContentPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Kohaku Koi",
      price: 299.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1012&q=80",
    },
    {
      id: 2,
      name: "Showa Koi",
      price: 349.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ]);
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const calculateTotal = () => {
    const sum = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(discountApplied ? sum * 0.9 : sum);
  };

  const handleQuantityChange = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleApplyDiscount = () => {
    if (discountCode.toLowerCase() === "koi10") {
      setDiscountApplied(true);
      calculateTotal();
    } else {
      alert("Invalid discount code");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8 pt-20">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
          Giỏ hàng của bạn
        </h1>
        <div className="space-y-6">
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between bg-blue-50 p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4 md:mb-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold text-blue-800">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-200"
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  <FaMinus />
                </button>
                <span className="mx-4 text-xl font-semibold">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-200"
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  <FaPlus />
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="ml-4 text-red-500 hover:text-red-600 transition duration-200"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
          <p ><span className="inline-block mb-4 font-semibold">Điểm giảm giá đã tích lũy:</span> 100 điểm</p>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600 transition duration-200"
            >
              Áp dụng
            </button>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold mb-2">
              Total: ${total.toFixed(2)}
            </p>
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-xl font-semibold hover:bg-blue-700 transition duration-200"
              onClick={() => alert("Proceeding to checkout")}
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContentPage;