import React from 'react'
import Navbar from "../../../layouts/Header/Nav.jsx"
import Footer from "../../../layouts/Footer/Footer.jsx"
import CheckoutContentPage from '../../../components/CheckoutContentPage/CheckoutContentPage.jsx'

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <Navbar/>
        <CheckoutContentPage />
        <Footer/>
    </div>
  )
}
