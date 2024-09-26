import React from 'react'
import "./style.scss"

function CustomerSideBar() {
    return (
        <div className="list-content">
            <h4>DANH MỤC</h4>
            <div className="koi-categories">
                <h5>Cá Koi nhật</h5>
                <p><a href='#'>Koi Kohaku</a></p>
                <p><a href='#'>Koi Kohaku</a></p>
                <p><a href='#'>Koi Kohaku</a></p>
                <p><a href='#'>Koi Kohaku</a></p>
                <p><a href='#'>Koi Kohaku</a></p>
                <p><a href='#'>Koi Kohaku</a></p>
                <p><a href='#'>Koi Kohaku</a></p>
            </div>
            <div className="koi-food">
                <h5>Thức ăn cá</h5>
                <p><a href='#'>Cám Onkoi</a></p>
                <p><a href='#'>Cám JDP</a></p>
            </div>
            <div className="koi-accessories">
                <h5>Phụ kiện</h5>
                <p><a href='#'>Bể cá</a></p>
                <p><a href='#'>Đồ trang trí</a></p>
            </div>
            <div className="koi-service">
            <h5>Dịch vụ khác</h5>
            <p><a href='#'>Cá Koi bán lẻ</a></p>
            <p><a href='#'>Cá Koi bán theo lô</a></p>
            <p><a href='#'>Ký gửi cá Koi </a></p>
            </div>
        </div>
    )
}

export default CustomerSideBar
