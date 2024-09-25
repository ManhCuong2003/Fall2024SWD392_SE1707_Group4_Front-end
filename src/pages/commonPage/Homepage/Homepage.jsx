import Navbar from '../../../layouts/Header/Navbar.jsx'
import Footer from '../../../layouts/Footer/Footer.jsx'
import ContentHomePage from '../../../components/ContentHomePage/ContentHomePage.jsx'
import '../../../scss/Homepage.scss'
function homePage() {
  return (
    <>
      <Navbar/>
      <ContentHomePage/>
      <Footer/>
    </>
  )
}

export default homePage