
import Navbar from "../../../layouts/Header/Nav.jsx"
import Footer from "../../../layouts/Footer/Footer.jsx"
import PaymentSheet from "../../../components/ConsignCheckOut/CosignCheckOut.jsx"


export default function ConsignCheckOut() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <Navbar/>
        <PaymentSheet/>
        <Footer/>
    </div>
  )
}