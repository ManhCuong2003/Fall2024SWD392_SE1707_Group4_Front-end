import React from 'react'
import Navbar from "../../../layouts/Header/Nav.jsx"
import Footer from "../../../layouts/Footer/Footer.jsx"
import CartContentPage from '../../../components/CartContentPage/CartContentPage.jsx'

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <Navbar/>
        <CartContentPage />
        <Footer/>
    </div>
  )
}
