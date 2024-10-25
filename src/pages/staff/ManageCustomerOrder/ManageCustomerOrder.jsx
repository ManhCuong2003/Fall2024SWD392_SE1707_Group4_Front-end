import { useEffect, useState } from "react";
import { FaBox, FaCheckCircle, FaShippingFast } from "react-icons/fa";
import apiClient from "../../../utils/axios";
import formatCurrencyVND from "../../../utils/format";

function ManageCustomerOrder() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);

  const [disabledStatuses, setDisabledStatuses] = useState({});

  // get all orders
  useEffect(() => {
    const fetchOrder = async () => {
      const response = await apiClient.get("/api/orders");
      console.log(response.data);
      setOrders(response.data)
    };
    fetchOrder();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedOrder(null);
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
  };

  const handleStatusChange = async (orderId, newStatus, newStatusId) => {
    try {
      // Gửi yêu cầu PUT để cập nhật trạng thái đơn hàng
      const response = await apiClient.put(`/api/orders/${orderId}/status`, {
          newStatusId
      });

      if (response.status === 200) {
          // Cập nhật trạng thái đơn hàng trong state nếu API thành công
          setOrders(
              orders.map((order) =>
                  order.id === orderId ? { ...order, status: newStatus } : order
              )
          );
          setDisabledStatuses((prevState) => ({
            ...prevState,
            [orderId]: [...(prevState[orderId] || []), newStatus],
          }));
          // setSelectedOrder((prevOrder) => ({ ...prevOrder, status: newStatus }));
          setSelectedOrder(null);
          setActiveTab(newStatus);
          // Cập nhật các trạng thái không khả dụng cho nút bấm
          setDisabledStatuses((prevState) => ({
              ...prevState,
              [orderId]: [...(prevState[orderId] || []), newStatus],
          }));

          // Đặt lại đơn hàng đang được chọn và chuyển sang tab trạng thái mới
          setSelectedOrder(null);
          setActiveTab(newStatus);
      } else {
          console.error("Failed to update order status.");
      }
  } catch (error) {
      console.error("Error updating order status:", error);
  }
  };

  const filteredOrders =
    activeTab === "all"
      ? orders
      : orders.filter((order) => order.status === activeTab);

  return (
    <div className="container_cus_order mx-auto p-4">
      <div className="mb-6">
        <div className="flex border-b">
          <button
            className={`py-2 px-4 ${
              activeTab === "all" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => handleTabChange("all")}
          >
            Tất cả đơn hàng
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "đang xử lý" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => handleTabChange("đang xử lý")}
          >
            Đang xử lý
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "đang chuẩn bị" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => handleTabChange("đang chuẩn bị")}
          >
            Đang chuẩn bị
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "đang giao" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => handleTabChange("đang giao")}
          >
            Đang giao hàng
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "hoàn thành" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => handleTabChange("hoàn thành")}
          >
            Hoàn thành đơn hàng
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-4 mb-4 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Danh sách đơn hàng</h2>
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white shadow-md rounded-lg p-4 mb-4 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Đơn hàng #{order.id}</h3>
                  <p>{order.customerName}</p>
                  <p className="text-sm text-gray-500">
                    Trạng thái: {order.status}
                  </p>
                </div>
                <div>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 mr-5"
                    onClick={() => handleViewOrder(order)}
                    aria-label={`View details for order ${order.id}`}
                  >
                    Xem chi tiết đơn hàng
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 pl-0 lg:pl-4">
          <h2 className="text-2xl font-semibold mb-4">Chi tiết đơn hàng</h2>
          {selectedOrder ? (
            <div className="bg-white shadow-md rounded-lg p-4 transition-all duration-300 hover:shadow-lg">
              <h3 className="font-semibold text-xl mb-2">
                Đơn hàng #{selectedOrder.id}
              </h3>
              <p className="mb-2">Khách hàng: {selectedOrder.customerName}</p>
              <p className="mb-4">Trạng thái: {selectedOrder.status}</p>
              <h4 className="font-semibold mb-2">Mặt hàng:</h4>
              <ul className="mb-4">
                {selectedOrder.items.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>
                      {item.koi_name} x{item.quantity}
                    </span>
                    <span>{formatCurrencyVND(item.price * item.quantity)}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between">
                <h4 className="font-semibold mb-2 "> Tổng đơn hàng:</h4>
                <h4>
                  {formatCurrencyVND(selectedOrder.items.reduce(
                    (sum, item) => sum + item.price * item.quantity + 1000,
                    0
                  ))}
                </h4>
              </div>
              {selectedOrder.status !== "hoàn thành" && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Thay đổi trạng thái:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedOrder.status === "đang xử lý" && (
                      <button
                        className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors duration-300"
                        onClick={() =>
                          handleStatusChange(selectedOrder.id, "đang chuẩn bị", 3)
                        }
                        aria-label="Change status to preparing order"
                        disabled={disabledStatuses[selectedOrder.id]?.includes(
                          "đang chuẩn bị"
                        )}
                      >
                        <FaBox className="mr-2" /> Đang chuẩn bị
                      </button>
                    )}
                    {selectedOrder.status === "đang chuẩn bị" && (
                      <button
                        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                        onClick={() =>
                          handleStatusChange(selectedOrder.id, "đang giao", 2)
                        }
                        aria-label="Change status to shipping"
                        disabled={disabledStatuses[selectedOrder.id]?.includes(
                          "đang giao"
                        )}
                      >
                        <FaShippingFast className="mr-2" /> Đang giao
                      </button>
                    )}
                    {selectedOrder.status === "đang giao" && (
                      <button
                        className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
                        onClick={() =>
                          handleStatusChange(selectedOrder.id, "hoàn thành", 1)
                        }
                        aria-label="Change status to complete delivery"
                        disabled={disabledStatuses[selectedOrder.id]?.includes(
                          "Hoàn thành"
                        )}
                      >
                        <FaCheckCircle className="mr-2" /> Hoàn thành
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p>Chọn đơn hàng để xem chi tiết</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManageCustomerOrder;
