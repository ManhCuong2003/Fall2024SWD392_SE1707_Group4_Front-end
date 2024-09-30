import Nav from '../../../layouts/Header/Nav.jsx'
import Footer from '../../../layouts/Footer/Footer.jsx'
import ContentHomePage from '../../../components/ContentHomePage/ContentHomePage.jsx'

function homePage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <Nav/>
      <ContentHomePage/>
      <Footer/> 
    </div>
  )
}

export default homePage