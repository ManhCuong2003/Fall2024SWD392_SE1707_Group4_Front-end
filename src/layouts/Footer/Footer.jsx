import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
        <div className="container_homecontent mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Thông tin liên hệ</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" /> Nguyễn Xiển, Long Thạnh Mỹ, Quận 9, Hồ Chí Minh 
                </p>
                <p className="flex items-center">
                  <FaPhone className="mr-2" /> (555) 123-4567
                </p>
                <p className="flex items-center">
                  <FaEnvelope className="mr-2" /> koifarmshop@gmail.com
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Tìm kiếm địa điểm</h3>
              <div className="h-48 bg-gray-300 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62696.03099253398!2d106.77909187037409!3d10.849375961082414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317520b50ce8e283%3A0xefced756805d1398!2zTG9uZyBUaOG6oW5oIE3hu7ksIFF14bqtbiA5LCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1727680410852!5m2!1svi!2s" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 KOIFARMSHOP. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
