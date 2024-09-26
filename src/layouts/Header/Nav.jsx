import  { useState, useEffect } from 'react';
import { Layout, Menu, Button } from 'antd';
import Logo from '../../assets/Logo/LogoImg.png'
import './Navbar.scss';

const { Header} = Layout;

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Xử lý khi cuộn xuống
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <Header className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{ position: 'fixed', width: '100%', zIndex: 3 }}>
      <div className="navbar-content">
        <div className="logo">
          <img src={Logo}/>
          <div className="shopName">
          <h4>KOI FARM SHOP</h4>
        </div>
        </div>

        <div className="desktop-menu">
          <Menu mode="horizontal" theme="dark" style={{ lineHeight: '64px', backgroundColor: 'transparent'}}>
            <Menu.Item key="home">Trang chủ</Menu.Item>
            <Menu.Item key="products">Sản phẩm</Menu.Item>
            <Menu.Item key="news">Tin tức</Menu.Item>
            <Menu.Item key="services">Dịch vụ</Menu.Item>
          </Menu>
        </div>
        <div className="auth-buttons">
          <Button className="auth-btn" type="link">Đăng ký</Button>
          <Button className="auth-btn" type="link">Đăng nhập</Button>
        </div>
      </div>
    </Header>
  );
};

export default Nav;
