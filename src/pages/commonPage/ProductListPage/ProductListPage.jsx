import React from 'react'
import './style.scss'

import koi from '../../../assets/images/koi.png'
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Footer from '../../../layouts/Footer/Footer.jsx'
import CustomerSideBar from '../../../layouts/CustomerSideBar/CustomerSideBar.jsx';


const ProductListPage = () => {

    return (
        <div className="product-list-page">

            <h2>CÁC SẢN PHẨM BÁN LẺ CỦA SHOP</h2>
            <div className="product-list">
                <CustomerSideBar />
                <div className="product-content">
                    <input type="search" placeholder='Search item' />
                    <div className="product">
                        <div className="fish-box">
                            <img src={koi} />
                            <h3>Kohaku</h3>
                            <p>Tuổi: 3 tháng</p>
                            <p>Giới tính: đực</p>
                            <p>Màu sắc: trắng, đỏ</p>
                            <h5>Giá: 2 tỷ VNĐ</h5>
                            <div className="interact-shopping">
                                <button>
                                    <FaShoppingCart style={{ fontSize: '24px', color: '#A58361' }} />
                                </button>
                                <button>
                                    <FaHeart style={{ fontSize: '24px', color: '#A58361' }} />
                                </button>
                            </div>
                        </div>
                        


                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductListPage