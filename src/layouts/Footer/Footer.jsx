
import {  Col, Row } from "antd"
import { useState } from "react";
import logo from "../../assets/Logo/LogoImg.png"
import './Footer.scss'


function Footer() {
const [selectedBranch, setSelectedBranch] = useState('branch1');
const branches = {
  branch1: { name: "KOI FARM SHOP Q9", phone: "(028) 837 088", address: "123, Long Thạnh Mỹ, Quận 9, thành phố Hồ Chí Minh", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62697.51939798056!2d106.78253722034707!3d10.842276464789258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317520b50ce8e283%3A0xefced756805d1398!2zTG9uZyBUaOG6oW5oIE3hu7ksIFF14bqtbiA5LCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1727160523509!5m2!1svi!2s" },
};



  return (
   <section className="mapSection">
      <Row >
        <Col xs={24} md={12}>
            <Row>
            <Col span={7} className="logoImg">
              <img src={logo}></img>
            </Col>
            <Col span={10} className="shopTitle"><h1>KOI FARM SHOP</h1></Col>
            </Row>

            <Col className="shopDescription">
              <p>Trang web của chúng tôi chuyên 
              cung cấp các loại cá Koi đa dạng, 
              đảm bảo chất lượng và sức khỏe. 
              Với dịch vụ tận tâm và tư vấn 
              chuyên nghiệp, chúng tôi cam kết 
              mang đến cho khách hàng những 
              chú cá Koi đẹp nhất cho hồ cá của bạn.
              </p>
            </Col>
            <Row className="contact">
            <Col span="12" >
              <p className="contactTitle">Thông tin liên hệ</p>
              <p className="contactDes">Số điện thoại: +84 123456789</p>
              <p className="contactDes">Email: koifarmshop@gmail.com</p>
              <p className="contactDes">Facebook: KOI FARM SHOP</p>
            </Col>
            <Col span="12">
              <p className="contactTitle">Địa chỉ của chúng tôi</p>
              <p className="contactDes">
                Địa chỉ: Lô E2a-7, Đường D1,Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Hồ Chí Minh
              </p>
            </Col>

          </Row>
        </Col>
        <Col xs={24} md={12} >
          <iframe
          src={branches[selectedBranch].map}
          width="100%" 
          height="450"
          style={{border: 0}}
          allowFullScreen=""
          loading="lazy"
          title="branch-map">
          </iframe>
     
        </Col>
      </Row>

        
    </section>

  )
}

export default Footer