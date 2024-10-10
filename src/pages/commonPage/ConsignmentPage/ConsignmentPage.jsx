import React from 'react'
import Nav from '../../../layouts/Header/Nav'
import ConsignmentContentPage from '../../../components/ConsignmentContentPage/ConsignmentContentPage'
import Footer from '../../../layouts/Footer/Footer'

function ConsignmentPage() {
  return (
    <div>
        <Nav/>
        <ConsignmentContentPage/>
        <Footer/>
    </div>
  )
}

export default ConsignmentPage