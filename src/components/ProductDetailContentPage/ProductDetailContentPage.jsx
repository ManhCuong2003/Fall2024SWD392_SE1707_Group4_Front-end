import { useContext, useEffect, useState } from "react";
import { FaHeart, FaShoppingCart, FaUserMd } from "react-icons/fa";
import apiClient from "../../utils/axios";
import { useParams, useNavigate } from "react-router-dom";
import { userContext } from "../Context/UserContext";
import { BsCartCheckFill } from "react-icons/bs";

export default function ProductDetailContentPage() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { addToCart, cartItems, addToFavorites } = useContext(userContext);
  const navigate = useNavigate();
  const itemInCart = cartItems.find((item) => item.koi_id == id);
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await apiClient.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.log("Error fetching product data: ", err);
      }
    };
    fetchProductData();
  }, [id]);

  const handleBuyNow = () => {
    navigate("/checkout-page");
  };

  const handleBuyAndSend = () => {
    addToCart(product, quantity);
    navigate("/checkout-consign");
  };

  const handleAddToFavorites = () => {
    addToFavorites(product);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container_productDetailContent mx-auto px-4 py-8 pt-20">
      <div className="absolute top-5 right-5 flex items-center">
        <FaShoppingCart className="text-2xl" />
      </div>

      <div className="flex flex-wrap -mx-4 mt-10">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <img
            src={product.koi_image_url}
            alt={product.koi_name}
            className="w-3/4 h-auto mx-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-3xl font-bold mb-4">{product.koi_name}</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-4">
            {product.koi_price} VNĐ
          </p>
          <p className="mb-4">{product.koi_description}</p>
          <p className="inline-block mb-4 mr-2 font-semibold">Kho hàng: </p>
          {product.koi_quantity}

          <div className="flex">
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white px-2 py-4 mb-2 mr-2 font-bold flex items-center rounded-lg disabled:opacity-50"
              disabled={itemInCart?.quantity >= product.koi_quantity}
              onClick={() => addToCart(product, quantity)}
            >
              <FaShoppingCart className="mr-2" />
              Thêm vào giỏ hàng
            </button>

            <button
              className="bg-amber-500 hover:bg-amber-600 text-white px-2 py-4 mb-2 mr-2 font-bold flex items-center rounded-lg"
              onClick={handleBuyNow}
            >
              <BsCartCheckFill className="mr-2" />
              Mua ngay
            </button>

            <button
              className="bg-lime-600 hover:bg-lime-700 text-white px-2 py-4 mb-2 mr-2 font-bold flex items-center rounded-lg"
              onClick={handleBuyAndSend}
            >
              <FaUserMd className="mr-2 " />
              Mua và ký gửi
            </button>

            <button
              className="bg-red-600 hover:bg-red-700 text-white px-2 py-4 mb-2 mr-2 font-bold flex items-center rounded-lg"
              onClick={handleAddToFavorites}
            >
              <FaHeart className="mr-2 " />
              Thêm vào yêu thích
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Thông số</h2>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-semibold">Giống:</span>{" "}
                {product.Species_Name}
              </li>
              <li>
                <span className="font-semibold">Kích thước:</span>{" "}
                {product.koi_size}
              </li>
              <li>
                <span className="font-semibold">Màu sắc:</span>{" "}
                {product.koi_color}
              </li>
              <li>
                <span className="font-semibold">Tuổi:</span> {product.koi_age}
              </li>
              <li>
                <span className="font-semibold">Giới tính:</span>{" "}
                {product.koi_gender === 1 ? "Cái" : "Đực"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
