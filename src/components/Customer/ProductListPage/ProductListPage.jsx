import React from 'react'
import './style.scss'

import koi from '../../../assets/images/koi.png'
import { FaShoppingCart } from "react-icons/fa";

const ProductListPage = () => {

  return (
    <div className="product-list-page">
      <h2>CÁC SẢN PHẨM BÁN LẺ CỦA SHOP</h2>
      <div className="product-list">
        <div className="list-content">
          <h4>DANH MỤC</h4>
          <h5>Cá Koi nhật</h5>
          <p>Koi Kohaku</p>
          <h5>Thức ăn cá</h5>
          <h5>Phụ kiện</h5>
          <h5>Dịch vụ khác</h5>
          <p>Cá Koi bán lẻ</p>
          <p>Cá Koi bán theo lô</p>
          <p>Ký gửi cá Koi </p>
        </div>
        <div className="product-content">
            <input type="search"  placeholder='Search item' />
          <div className="product">
            <div className="fish-box">
              <img src={koi} width={134} height={200} />
              <h3>Kohaku</h3>
              <p>Tuổi: 3 tháng</p>
              <p>Giới tính: đực</p>
              <p>Màu sắc: trắng, đỏ</p>
              <h5>Giá: 2 tỷ VNĐ</h5>
              <button>
                <FaShoppingCart style={{fontSize: '24px', color: '#A58361'}}/>
              </button>
            </div>
            <div className="fish-box">
              <img src={koi} width={134} height={200} />
              <h3>Kohaku</h3>
              <p>Tuổi: 3 tháng</p>
              <p>Giới tính: đực</p>
              <p>Màu sắc: trắng, đỏ</p>
              <h5>Giá: 2 tỷ VNĐ</h5>
              <button>
                <FaShoppingCart style={{fontSize: '24px', color: '#A58361'}}/>
              </button>
            </div>
            <div className="fish-box">
              <img src={koi} width={134} height={200} />
              <h3>Kohaku</h3>
              <p>Tuổi: 3 tháng</p>
              <p>Giới tính: đực</p>
              <p>Màu sắc: trắng, đỏ</p>
              <h5>Giá: 2 tỷ VNĐ</h5>
              <button>
                <FaShoppingCart style={{fontSize: '24px', color: '#A58361'}}/>
              </button>
            </div>
            <div className="fish-box">
              <img src={koi} width={134} height={200} />
              <h3>Kohaku</h3>
              <p>Tuổi: 3 tháng</p>
              <p>Giới tính: đực</p>
              <p>Màu sắc: trắng, đỏ</p>
              <h5>Giá: 2 tỷ VNĐ</h5>
              <button>
                <FaShoppingCart style={{fontSize: '24px', color: '#A58361'}}/>
              </button>
            </div>
            <div className="fish-box">
              <img src={koi} width={134} height={200} />
              <h3>Kohaku</h3>
              <p>Tuổi: 3 tháng</p>
              <p>Giới tính: đực</p>
              <p>Màu sắc: trắng, đỏ</p>
              <h5>Giá: 2 tỷ VNĐ</h5>
              <button>
                <FaShoppingCart style={{fontSize: '24px', color: '#A58361'}}/>
              </button>
            </div>
            <div className="fish-box">
              <img src={koi} width={134} height={200} />
              <h3>Kohaku</h3>
              <p>Tuổi: 3 tháng</p>
              <p>Giới tính: đực</p>
              <p>Màu sắc: trắng, đỏ</p>
              <h5>Giá: 2 tỷ VNĐ</h5>
              <button>
                <FaShoppingCart style={{fontSize: '24px', color: '#A58361'}}/>
              </button>
            </div>
            <div className="fish-box">
              <img src={koi} width={134} height={200} />
              <h3>Kohaku</h3>
              <p>Tuổi: 3 tháng</p>
              <p>Giới tính: đực</p>
              <p>Màu sắc: trắng, đỏ</p>
              <h5>Giá: 2 tỷ VNĐ</h5>
              <button>
                <FaShoppingCart style={{fontSize: '24px', color: '#A58361'}}/>
              </button>
            </div>
            <div className="fish-box">
              <img src={koi} width={134} height={200} />
              <h3>Kohaku</h3>
              <p>Tuổi: 3 tháng</p>
              <p>Giới tính: đực</p>
              <p>Màu sắc: trắng, đỏ</p>
              <h5>Giá: 2 tỷ VNĐ</h5>
              <button>
                <FaShoppingCart style={{fontSize: '24px', color: '#A58361'}}/>
              </button>
            </div>
            <div className="fish-box">
              <img src={koi} width={134} height={200} />
              <h3>Kohaku</h3>
              <p>Tuổi: 3 tháng</p>
              <p>Giới tính: đực</p>
              <p>Màu sắc: trắng, đỏ</p>
              <h5>Giá: 2 tỷ VNĐ</h5>
              <button>
                <FaShoppingCart style={{fontSize: '24px', color: '#A58361'}}/>
              </button>
            </div>
            <div className="fish-box">
              <img src={koi} width={134} height={200} />
              <h3>Kohaku</h3>
              <p>Tuổi: 3 tháng</p>
              <p>Giới tính: đực</p>
              <p>Màu sắc: trắng, đỏ</p>
              <h5>Giá: 2 tỷ VNĐ</h5>
              <button>
                <FaShoppingCart style={{fontSize: '24px', color: '#A58361'}}/>
              </button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListPage