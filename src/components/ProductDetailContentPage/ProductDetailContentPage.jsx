import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { FaRegStar, FaShoppingCart, FaStar } from 'react-icons/fa';

export default function ProductDetailContentPage() {
    const [currentImage, setCurrentImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [cartItems, setCartItems] = useState(0);
    const [selectedColor, setSelectedColor] = useState("Orange");
    const [selectedSize, setSelectedSize] = useState("Medium");
  
    const product = {
      name: "Premium Kohaku Koi Fish",
      price: 299.99,
      description: "A beautiful and rare Kohaku Koi fish with striking red and white patterns.",
      availableQuantity: 10,
      images: [
        "https://images.unsplash.com/photo-1583212292454-1fe6229603b7",
        "https://images.unsplash.com/photo-1583211366430-522ee5d84e7e",
        "https://images.unsplash.com/photo-1583212292454-1fe6229603b7"
      ],
      specifications: {
        size: ["Nhỏ", "Vừa", "Lớn"],
        colors: ["Orange", "White", "Black"],
        breed: "Kohaku"
      },
      reviews: [
        { id: 1, user: "John D.", rating: 5, comment: "Absolutely stunning Koi!" },
        { id: 2, user: "Sarah M.", rating: 4, comment: "Beautiful fish, arrived in perfect condition." }
      ]
    };
  
    const relatedProducts = [
      { id: 1, name: "Showa Koi", price: 249.99, image: "https://images.unsplash.com/photo-1583211366430-522ee5d84e7e" },
      { id: 2, name: "Sanke Koi", price: 279.99, image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7" },
      { id: 3, name: "Butterfly Koi", price: 199.99, image: "https://images.unsplash.com/photo-1583211366430-522ee5d84e7e" }
    ];
  
    const handleAddToCart = () => {
      setCartItems(cartItems + quantity);
    };
  
    const handleQuantityChange = (e) => {
      setQuantity(parseInt(e.target.value));
    };
  
    const handleColorChange = (color) => {
      setSelectedColor(color);
    };
  
    const handleSizeChange = (size) => {
      setSelectedSize(size);
    };
  
    const handleImageNavigation = (direction) => {
      if (direction === "next") {
        setCurrentImage((prev) => (prev + 1) % product.images.length);
      } else {
        setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
      }
    };
  
    const renderStars = (rating) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          stars.push(<FaStar key={i} className="text-yellow-400" />);
        } else {
          stars.push(<FaRegStar key={i} className="text-yellow-400" />);
        }
      }
      return stars;
    };

    return (
     <div className="container_productDetailContent mx-auto px-4 py-8 pt-20">
      <div className="flex flex-wrap -mx-4 mt-50">
        {/* Product Image Gallery */}
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="relative">
            <img
              src={product.images[currentImage]}
              alt={`${product.name} - Image ${currentImage + 1}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              onClick={() => handleImageNavigation("prev")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
              aria-label="Previous image"
            >
              <MdKeyboardArrowLeft size={24} />
            </button>
            <button
              onClick={() => handleImageNavigation("next")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
              aria-label="Next image"
            >
              <MdKeyboardArrowRight size={24} />
            </button>
          </div>
          <div className="flex mt-4 space-x-2 overflow-x-auto">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} - Thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer ${index === currentImage ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-4">{product.description}</p>
          <p className="mb-4">Kho hàng: {product.availableQuantity}</p>

          {/* Color Selection */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Màu sắc:</h3>
            <div className="flex space-x-2">
              {product.specifications.colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${selectedColor === color ? 'ring-2 ring-blue-500' : ''}`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => handleColorChange(color)}
                  aria-label={`Select ${color} color`}
                ></button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Kích cỡ:</h3>
            <div className="flex space-x-2">
              {product.specifications.size.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${selectedSize === size ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="mb-4">
            <label htmlFor="quantity" className="block font-semibold mb-2">Số lượng:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              max={product.availableQuantity}
              value={quantity}
              onChange={handleQuantityChange}
              className="w-20 px-2 py-1 border rounded-md"
            />
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 flex items-center"
          >
            <FaShoppingCart className="mr-2" />
            Thêm vào giỏ hàng
          </button>

          {/* Cart Items Count */}
          <div className="mt-4 text-lg font-semibold">
            Giỏ hàng hiện tại: {cartItems}
          </div>

          {/* Specifications */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Thông số</h2>
            <ul className="list-disc list-inside">
              <li>Giống: {product.specifications.breed}</li>
              <li>Kích thước có sẵn: {product.specifications.size.join(", ")}</li>
              <li>Màu sắc có sẵn: {product.specifications.colors.join(", ")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews and Ratings */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Các đánh giá của khách hàng</h2>
        <div className="space-y-4">
          {product.reviews.map((review) => (
            <div key={review.id} className="border-b pb-4">
              <div className="flex items-center mb-2">
                <span className="font-semibold mr-2">{review.user}</span>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Add Review Form */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Thêm đánh giá</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="rating" className="block mb-2">Xếp hạng:</label>
              <div className="flex">{renderStars(5)}</div>
            </div>
            <div>
              <label htmlFor="comment" className="block mb-2">Bình luận:</label>
              <textarea
                id="comment"
                rows="4"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Viết đánh giá..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Gửi đánh giá
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  }
