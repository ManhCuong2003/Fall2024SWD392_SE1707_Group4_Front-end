import { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import apiClient from "../../utils/axios";
import { useParams, useNavigate } from "react-router-dom";
import { userContext } from "../Context/UserContext";

export default function ProductDetailContentPage() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { addToCart } = useContext(userContext);
  const navigate = useNavigate();

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

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleBuyNow = () => {
    navigate("/checkout-page");
  };

  const handleBuyAndSend = () => {
    addToCart(product, quantity);
    navigate("/checkout-consign");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container_productDetailContent mx-auto px-4 py-8 pt-20">
      {/* Shopping Cart Icon */}
      <div className="absolute top-5 right-5 flex items-center">
        <FaShoppingCart className="text-2xl" />
      </div>

      <div className="flex flex-wrap -mx-4 mt-10">
        {/* Product Image Gallery */}
        <div className="w-full md:w-1/2 px-4 mb-8">
          <img
            src={product.koi_image_url}
            alt={product.koi_name}
            className="w-3/4 h-auto mx-auto rounded-lg shadow-lg" // Hình ảnh nhỏ lại và căn giữa
          />
        </div>

        {/* Product Information */}
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-3xl font-bold mb-4">{product.koi_name}</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-4">
            ${product.koi_price.toFixed(2)}
          </p>
          <p className="mb-4">{product.koi_description}</p>
          <p className="inline-block mb-4 mr-2 font-semibold">Kho hàng: </p>
          {product.koi_quantity}

          {/* Quantity Selection */}
          <div className="mb-4">
            <label htmlFor="quantity" className="font-semibold mb-2 mr-2">
              Số lượng:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              max={product.koi_quantity}
              value={quantity}
              onChange={handleQuantityChange}
              className="w-20 px-2 py-1 border rounded-md"
            />
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product, quantity)}
            style={{
              backgroundColor: '#1D4ED8',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '600',
              transition: 'background-color 0.3s',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1E40AF'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1D4ED8'}
          >
            <FaShoppingCart className="mr-2" />
            Thêm vào giỏ hàng
          </button>

          {/* Buy Now Button */}
          <button
            onClick={handleBuyNow}
            style={{
              backgroundColor: '#22C55E',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '600',
              transition: 'background-color 0.3s',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16A34A'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22C55E'}
          >
            Mua ngay
          </button>

          {/* Buy and Send Button */}
          <button
            onClick={handleBuyAndSend}
            style={{
              backgroundColor: '#FBBF24',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '600',
              transition: 'background-color 0.3s',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F59E0B'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FBBF24'}
          >
            Mua và ký gửi
          </button>

          {/* Specifications */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Thông số</h2>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-semibold">Giống:</span>{" "}
                {product.koi_species_ID}
              </li>
              <li>
                <span className="font-semibold">Kích thước:</span>{" "}
                {product.koi_size}
              </li>
              <li>
                <span className="font-semibold">Màu sắc:</span>{" "}
                {product.koi_color}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
