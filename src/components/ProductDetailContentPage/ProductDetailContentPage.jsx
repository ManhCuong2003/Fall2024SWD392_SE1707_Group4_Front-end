
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { FaRegStar, FaShoppingCart, FaStar } from 'react-icons/fa';
import apiClient from '../../utils/axios';
import { useParams } from 'react-router-dom';

export default function ProductDetailContentPage() {
    const [currentImage, setCurrentImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [cartItems, setCartItems] = useState(0);
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);

    const { id } = useParams() 

   useEffect(()=> {
    const fetchProductData = async () => {
      try {
        const response = await apiClient.get(`/api/products/${id}`);
        console.log(response.data);
        
        setProduct(response.data);
        setRelatedProducts(response.data.relatedProducts);
        setFeedbacks(response.data.feedbacks);
      }catch(err){
        console.log('Error fetching product data: ', err);
      }
    };
    fetchProductData()
   }, []);
    
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

    const handleSubmitFeedback = async (e) => {
      e.preventDefault();
      const newFeedback = {
        user: 'Anonymous',
        conmment: e.target.comment.value,
      }

      try{
        const response = await apiClient.post("lam sau", newFeedback);
        setFeedbacks([...feedbacks, response.data]);
      } catch (err){
        console.log('Error submitting reviews:', error);
        
      }
    }

   

    if(!product){
      return <div>Loading...</div>
    }

    return (
     <div className="container_productDetailContent mx-auto px-4 py-8 pt-20">
      <div className="flex flex-wrap -mx-4 mt-50">
        {/* Product Image Gallery */}
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="relative">
            <img
              src={product.koi_image_url}
              alt={product.koi_name} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-3xl font-bold mb-4">{product.koi_name}</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-4">${product.koi_price.toFixed(2)}</p>
          <p className="mb-4">{product.koi_description}</p>
          <p className="inline-block mb-4 mr-2 font-semibold">Kho hàng: </p>{product.koi_quantity}

          {/* Quantity Selection */}
          <div className="mb-4">
            <label htmlFor="quantity" className=" font-semibold mb-2 mr-2">Số lượng:</label>
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
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 flex items-center"
          >
            <FaShoppingCart className="mr-2" />
            Thêm vào giỏ hàng
          </button>

          {/* Specifications */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Thông số</h2>
            <ul className="list-disc list-inside">
              <li><span className='font-semibold'>Giống:</span> {product.koi_species_ID}</li>
              <li><span className='font-semibold'>Kích thước:</span> {product.koi_size}</li>
              <li><span className='font-semibold'>Màu sắc:</span> {product.koi_color}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  }
