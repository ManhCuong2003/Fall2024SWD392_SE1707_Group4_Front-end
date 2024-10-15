import React, { useState } from "react";
import {
  FaKiwiBird,
  FaEnvelope,
  FaPhone,
  FaHome,
  FaFish,
} from "react-icons/fa";

const ConsignmentContentPage = () => {
  const [formData, setFormData] = useState({
    consignmentType: "",
    fishName: "",
    fishSize: "",
    fishBreed: "",
    fishColor: "",
    fishMarkings: "",
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    customerAddress: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };
    switch (name) {
      case "consignmentType":
        if (!value)
          newErrors.consignmentType = "Please select a consignment type";
        else delete newErrors.consignmentType;
        break;
      case "fishName":
        if (!value) newErrors.fishName = "Fish name is required";
        else delete newErrors.fishName;
        break;
      case "customerEmail":
        if (!value) newErrors.customerEmail = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value))
          newErrors.customerEmail = "Invalid email format";
        else delete newErrors.customerEmail;
        break;
      case "customerPhone":
        if (!value) newErrors.customerPhone = "Phone number is required";
        else if (!/^\d{10}$/.test(value))
          newErrors.customerPhone = "Invalid phone number format";
        else delete newErrors.customerPhone;
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      if (!formData[key])
        formErrors[key] = `${key
          .replace(/([A-Z])/g, " $1")
          .toLowerCase()} is required`;
    });
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Here you would typically send the data to your backend
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 py-12 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Ký gửi cá Koi
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              <div className="flex-1">
                <label
                  htmlFor="consignmentType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Loại ký gửi
                </label>
                <select
                  id="consignmentType"
                  name="consignmentType"
                  value={formData.consignmentType}
                  onChange={handleChange}
                  className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md ${
                    errors.consignmentType ? "border-red-500" : ""
                  }`}
                  aria-invalid={errors.consignmentType ? "true" : "false"}
                  aria-describedby={
                    errors.consignmentType ? "consignmentType-error" : undefined
                  }
                >
                  <option value="">Chọn ---</option>
                  <option value="sale">Bán hộ</option>
                  <option value="care">Chăm sóc</option>
                </select>
                {errors.consignmentType && (
                  <p
                    className="mt-2 text-sm text-red-600"
                    id="consignmentType-error"
                  >
                    {errors.consignmentType}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label
                  htmlFor="fishName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tên cá
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaFish
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="text"
                    name="fishName"
                    id="fishName"
                    value={formData.fishName}
                    onChange={handleChange}
                    className={`block w-full pl-10 sm:text-sm border-gray-300 rounded-md ${
                      errors.fishName ? "border-red-500" : ""
                    }`}
                    placeholder="Tên cá Koi"
                    aria-invalid={errors.fishName ? "true" : "false"}
                    aria-describedby={
                      errors.fishName ? "fishName-error" : undefined
                    }
                  />
                </div>
                {errors.fishName && (
                  <p className="mt-2 text-sm text-red-600" id="fishName-error">
                    {errors.fishName}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              <div className="flex-1">
                <label
                  htmlFor="fishSize"
                  className="block text-sm font-medium text-gray-700"
                >
                  Kích thước
                </label>
                <input
                  type="text"
                  name="fishSize"
                  id="fishSize"
                  value={formData.fishSize}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Kích thước"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="fishBreed"
                  className="block text-sm font-medium text-gray-700"
                >
                  Giống cá
                </label>
                <input
                  type="text"
                  name="fishBreed"
                  id="fishBreed"
                  value={formData.fishBreed}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Giống"
                />
              </div>
            </div>

            <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              <div className="flex-1">
                <label
                  htmlFor="fishColor"
                  className="block text-sm font-medium text-gray-700"
                >
                  Màu sắc
                </label>
                <input
                  type="text"
                  name="fishColor"
                  id="fishColor"
                  value={formData.fishColor}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Màu sắc"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="fishMarkings"
                  className="block text-sm font-medium text-gray-700"
                >
                  Các dấu hiệu đặc biệt của cá
                </label>
                <input
                  type="text"
                  name="fishMarkings"
                  id="fishMarkings"
                  value={formData.fishMarkings}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Bất kỳ dấu hiệu nào"
                />
              </div>
            </div>

            <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              <div className="flex-1">
                <label
                  htmlFor="customerName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Họ tên khách hàng
                </label>
                <input
                  type="text"
                  name="customerName"
                  id="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Họ tên"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="customerEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="email"
                    name="customerEmail"
                    id="customerEmail"
                    value={formData.customerEmail}
                    onChange={handleChange}
                    className={`block w-full pl-10 sm:text-sm border-gray-300 rounded-md ${
                      errors.customerEmail ? "border-red-500" : ""
                    }`}
                    placeholder="you@example.com"
                    aria-invalid={errors.customerEmail ? "true" : "false"}
                    aria-describedby={
                      errors.customerEmail ? "customerEmail-error" : undefined
                    }
                  />
                </div>
                {errors.customerEmail && (
                  <p
                    className="mt-2 text-sm text-red-600"
                    id="customerEmail-error"
                  >
                    {errors.customerEmail}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              <div className="flex-1">
                <label
                  htmlFor="customerPhone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Số điện thoại
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="tel"
                    name="customerPhone"
                    id="customerPhone"
                    value={formData.customerPhone}
                    onChange={handleChange}
                    className={`block w-full pl-10 sm:text-sm border-gray-300 rounded-md ${
                      errors.customerPhone ? "border-red-500" : ""
                    }`}
                    placeholder="(123) 456-7890"
                    aria-invalid={errors.customerPhone ? "true" : "false"}
                    aria-describedby={
                      errors.customerPhone ? "customerPhone-error" : undefined
                    }
                  />
                </div>
                {errors.customerPhone && (
                  <p
                    className="mt-2 text-sm text-red-600"
                    id="customerPhone-error"
                  >
                    {errors.customerPhone}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label
                  htmlFor="customerAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Địa chỉ
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaHome
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="text"
                    name="customerAddress"
                    id="customerAddress"
                    value={formData.customerAddress}
                    onChange={handleChange}
                    className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="123 Main St, City, State, ZIP"
                  />
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                >
                  Xác nhận ký gửi
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsignmentContentPage;
