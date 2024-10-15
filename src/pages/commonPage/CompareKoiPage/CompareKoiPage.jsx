import React from 'react'
import Nav from '../../../layouts/Header/Nav'
import Footer from "../../../layouts/Footer/Footer.jsx"

import CompareKoiContentPage from '../../../components/CompareKoiContentPage/CompareKoiContentPage'

function CompareKoiPage() {
  return (
    <div>
        <Nav/>
        <CompareKoiContentPage/>
        <Footer/>
    </div>
  )
}

export default CompareKoiPage