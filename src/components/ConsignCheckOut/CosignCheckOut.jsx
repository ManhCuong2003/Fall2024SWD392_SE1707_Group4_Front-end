import { useState } from "react";
import { FaCreditCard, FaPaypal } from "react-icons/fa";

const PaymentSheet = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    depositOption: "",  // Thay đổi trường ngày ký gửi thành option
  });

  const [cart] = useState([
    { id: 1, name: "Kohaku", price: 100, quantity: 2 },
    { id: 2, name: "Sanke", price: 150, quantity: 1 },
  ]);

  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [errors, setErrors] = useState({});
  const shippingCosts = { standard: 10, express: 25 };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.depositOption) newErrors.depositOption = "Deposit option is required";  // Kiểm tra option
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Order placed successfully!");
    }
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = shippingCosts[shippingMethod];
  const total = subtotal + shipping;

  return (
    <div className="container_consgn mx-auto px-4 py-8 pt-20">
      <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center mb-4 pb-4 border-b">
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
                <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : "border-gray-300"}`}
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.address ? "border-red-500" : "border-gray-300"}`}
                required
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
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
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="depositOption" className="block text-gray-700 font-semibold mb-2">Deposit Option</label>
              <select
                id="depositOption"
                name="depositOption"
                value={formData.depositOption}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.depositOption ? "border-red-500" : "border-gray-300"}`}
                required
              >
                <option value="">Select an option</option>
                <option value="3 months">3 Months</option>
                <option value="6 months">6 Months</option>
                <option value="9 months">9 Months</option>
                <option value="1 year">1 Year</option>
              </select>
              {errors.depositOption && <p className="text-red-500 text-sm mt-1">{errors.depositOption}</p>}
            </div>

            <h2 className="text-2xl font-semibold mb-4">Shipping Method</h2>
            <div className="mb-4">
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  value="standard"
                  checked={shippingMethod === "standard"}
                  onChange={() => setShippingMethod("standard")}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Standard Shipping ($10)</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="express"
                  checked={shippingMethod === "express"}
                  onChange={() => setShippingMethod("express")}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Express Shipping ($25)</span>
              </label>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
            <div className="mb-4">
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  value="credit"
                  checked={paymentMethod === "credit"}
                  onChange={() => setPaymentMethod("credit")}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 flex items-center">
                  <FaCreditCard className="mr-2" />
                  Credit Card
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 flex items-center">
                  <FaPaypal className="mr-2" />
                  PayPal
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Place Order
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/3 px-4">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="mb-4">
              <h3 className="font-semibold">Subtotal</h3>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Shipping</h3>
              <p>${shipping}</p>
            </div>
            <div className="mb-4 border-t pt-4">
              <h3 className="font-semibold">Total</h3>
              <p className="text-lg font-bold">${total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSheet;
