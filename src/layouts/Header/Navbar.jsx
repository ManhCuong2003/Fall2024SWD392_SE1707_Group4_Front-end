import { CloseCircleOutlined, MenuOutlined, ShopOutlined } from "@ant-design/icons"
import '../../scss/Navbar.scss'
import { useState } from "react"
function Navbar() {
  const [active, setActive] = useState('navBar');
  //Function to toggle navBar
  const showNav = () =>{
    setActive('navBar activeNavbar')
  }

  //Function to close navBar
  const removeNavbar = () =>{
    setActive('navBar')
  }

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1> <ShopOutlined className="icon"/>KOI FARM SHOP</h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Trang chủ</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Sản phẩm</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Tin tức</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Dịch vụ</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Đăng ký | Đăng nhập</a>
            </li>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
          <CloseCircleOutlined className="icon"/>
          </div>
          
        </div>

        <div onClick={showNav} className="toggleNavbar">
        <MenuOutlined className="icon"/>
        </div>
      </header>
    </section>
  )
}

export default Navbar