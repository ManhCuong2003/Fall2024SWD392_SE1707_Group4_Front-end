import React, { useState } from "react";
import { FaTrash, FaPlus, FaMinus, FaCreditCard, FaPaypal } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const CheckoutContentPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Kohaku Koi", price: 150, quantity: 2, image: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
    { id: 2, name: "Showa Koi", price: 200, quantity: 1, image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" },
  ]);
  const [billingInfo, setBillingInfo] = useState({ name: "", address: "", phone: "", email: "" });
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [promoCode, setPromoCode] = useState("");
  const [errors, setErrors] = useState({});

  const shippingCosts = { standard: 10, express: 25 };

  const handleQuantityChange = (id, change) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item));
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!billingInfo.name) newErrors.name = "Name is required";
    if (!billingInfo.address) newErrors.address = "Address is required";
    if (!billingInfo.phone) newErrors.phone = "Phone is required";
    if (!billingInfo.email) newErrors.email = "Email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process the order
      alert("Order placed successfully!");
    }
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = shippingCosts[shippingMethod];
  const total = subtotal + shipping;

  return (
    <div className="container_checkoutPage mx-auto px-4 py-8 pt-20">
      <h1 className="text-3xl font-bold text-center mb-8">Trang thanh toán</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Đơn hàng</h2>
            {cart.map(item => (
              <div key={item.id} className="flex items-center mb-4 pb-4 border-b">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button onClick={() => handleQuantityChange(item.id, -1)} className="text-gray-500 focus:outline-none focus:text-gray-600">
                      <FaMinus />
                    </button>
                    <span className="mx-2 text-gray-700">{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)} className="text-gray-500 focus:outline-none focus:text-gray-600">
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => handleRemoveItem(item.id)} className="ml-4 text-red-500 focus:outline-none">
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Thông tin thanh toán</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Họ tên</label>
              <input
                type="text"
                id="name"
                name="name"
                value={billingInfo.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Địa chỉ</label>
              <input
                type="text"
                id="address"
                name="address"
                value={billingInfo.address}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Số điện thoại</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={billingInfo.phone}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={billingInfo.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <h2 className="text-2xl font-semibold mb-4">Giao hàng</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Phương thức giao hàng</label>
              <div>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    value="standard"
                    checked={shippingMethod === "standard"}
                    onChange={() => setShippingMethod("standard")}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">Vận chuyển tiêu chuẩn ($10)</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="express"
                    checked={shippingMethod === "express"}
                    onChange={() => setShippingMethod("express")}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">Vận chuyển nhanh ($25)</span>
                </label>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Thanh toán</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Phương thức thanh toán</label>
              <div>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    value="credit"
                    checked={paymentMethod === "credit"}
                    onChange={() => setPaymentMethod("credit")}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2 flex items-center"><FaCreditCard className="mr-2" /> Credit Card</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2 flex items-center"><FaPaypal className="mr-2" /> PayPal</span>
                </label>
              </div>
            </div>

            {paymentMethod === "credit" && (
              <div className="mb-4">
                <label htmlFor="card" className="block text-gray-700 font-semibold mb-2">Card Number</label>
                <input
                  type="text"
                  id="card"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="promo" className="block text-gray-700 font-semibold mb-2">Promo Code</label>
              <input
                type="text"
                id="promo"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập promo code"
              />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
              Đặt hàng
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/3 px-4">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
            <h2 className="text-2xl font-semibold mb-4">Tổng đơn hàng</h2>
            <div className="flex justify-between mb-2">
              <span>Đơn hàng</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Phí vận chuyển</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg border-t pt-2">
              <span>Tổng cộng</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContentPage;