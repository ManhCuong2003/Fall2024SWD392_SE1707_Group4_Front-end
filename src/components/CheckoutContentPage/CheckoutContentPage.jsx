import { useContext, useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { userContext } from "../Context/UserContext";
import apiClient from "../../utils/axios";

const CheckoutContentPage = () => {
  const { cartItems } = useContext(userContext);
  const user = JSON.parse(localStorage.getItem("userInfor"));
  const [billingInfo, setBillingInfo] = useState({
    name: user.userfullname || "",
    address: user.address || "",
    phone: user.phone || "",
    email: user.email || "",
  });
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [depositType, setDepositType] = useState("");
  const [depositDuration, setDepositDuration] = useState("");
  const [errors, setErrors] = useState({});
  const [depositAmount, setDepositAmount] = useState(0);

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
    if (depositType && !depositDuration) newErrors.depositDuration = "Deposit duration is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDepositDurationChange = (value) => {
    setDepositDuration(value);
    switch (value) {
      case "1":
        setDepositAmount(2000000);
        break;
      case "3":
        setDepositAmount(2500000);
        break;
      case "6":
        setDepositAmount(5000000);
        break;
      case "9":
        setDepositAmount(11000000);
        break;
      default:
        setDepositAmount(0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const total = cartItems.reduce((acc, item) => acc + item.koi_price * item.quantity, 0);
    const finalTotal = total + depositAmount;

    try {
      const paymentData = {
        cartItems,
        total: finalTotal,
        user: billingInfo,
        depositType,
        depositDuration,
      };

      const response = await apiClient.post("/api/payment/make-payment", paymentData);
      if (response.data.order_url) {
        localStorage.setItem('cart', []);
        window.location.href = response.data.order_url;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container_checkoutPage mx-auto px-4 py-8 pt-20">
      <h1 className="text-3xl font-bold text-center mb-8">Trang thanh toán</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-full px-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Tổng đơn hàng</h2>
            {cartItems.map((item) => (
              <div key={item.koi_id} className="flex items-center mb-4 pb-4 border-b">
                <img
                  src={item.koi_image_url}
                  alt={item.koi_name}
                  className="w-20 h-20 object-fill rounded mr-4"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.koi_name}</h3>
                  <p className="text-gray-600">{item.koi_price} VNĐ</p>
                  <p className="text-gray-600">x {item.quantity}</p>
                </div>
                <span className="font-semibold">{item.koi_price * item.quantity} VNĐ</span>
              </div>
            ))}
            <div className="flex justify-between font-semibold text-lg pt-2">
              <span>Tổng tiền sản phẩm</span>
              <span>{cartItems.reduce((acc, item) => acc + item.koi_price * item.quantity, 0)} VNĐ</span>
            </div>
            <div className="flex justify-between font-semibold text-lg pt-2">
              <span>Số tiền ký gửi</span>
              <span>{depositAmount} VNĐ</span>
            </div>
            <div className="flex justify-between font-semibold text-lg pt-2">
              <span>Tổng cộng</span>
              <span>{cartItems.reduce((acc, item) => acc + item.koi_price * item.quantity, 0) + depositAmount} VNĐ</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Thông tin thanh toán</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Họ tên
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={billingInfo.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : "border-gray-300"}`}
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                Địa chỉ
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={billingInfo.address}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.address ? "border-red-500" : "border-gray-300"}`}
                required
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                Số điện thoại
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={billingInfo.phone}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                required
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={billingInfo.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <h2 className="text-2xl font-semibold mb-4">Hình thức mua hàng</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Ghi lựa chọn</label>
              <select
                value={depositType}
                onChange={(e) => setDepositType(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.depositType ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="">Mua hàng</option>
                <option value="care">Ký gửi để chăm sóc</option>
                <option value="sell">Ký gửi để bán hộ</option>
                <option value="purchase">Mua hàng để ký gửi</option>
              </select>
              {errors.depositType && <p className="text-red-500 text-sm mt-1">{errors.depositType}</p>}
            </div>
            {depositType && (
              <div className="mb-4">
                <label htmlFor="depositDuration" className="block text-gray-700 font-semibold mb-2">
                  Thời gian ký gửi
                </label>
                <select
                  id="depositDuration"
                  value={depositDuration}
                  onChange={(e) => handleDepositDurationChange(e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.depositDuration ? "border-red-500" : "border-gray-300"}`}
                  required
                >
                  <option value="">Chọn thời gian ký gửi</option>
                  <option value="1">1 tháng</option>
                  <option value="3">3 tháng</option>
                  <option value="6">6 tháng</option>
                  <option value="9">9 tháng</option>
                  <option value="12">1 năm</option>
                </select>
                {errors.depositDuration && <p className="text-red-500 text-sm mt-1">{errors.depositDuration}</p>}
              </div>
            )}

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
                  <span className="ml-2 flex items-center">
                    <FaCreditCard className="mr-2" />
                    Zalopay
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Đặt hàng
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContentPage;
