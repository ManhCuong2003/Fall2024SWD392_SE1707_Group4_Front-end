import ProductDetailContentPage from "../../../components/ProductDetailContentPage/ProductDetailContentPage.jsx";
import Navbar from "../../../layouts/Header/Nav.jsx"
import Footer from "../../../layouts/Footer/Footer.jsx"

const ProductDetailPage = () => {
    return (
   <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
    <Navbar/>
    <ProductDetailContentPage/>
    <Footer/>
   </div>
  )}
export default ProductDetailPage