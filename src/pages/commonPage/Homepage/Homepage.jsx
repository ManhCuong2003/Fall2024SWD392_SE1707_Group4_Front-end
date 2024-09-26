import Nav from '../../../layouts/Header/Nav.jsx'
import Footer from '../../../layouts/Footer/Footer.jsx'
import ContentHomePage from '../../../components/ContentHomePage/ContentHomePage.jsx'
import './Homepage.scss'
function homePage() {

  return (
    <>
      <Nav/>
      <ContentHomePage/>
      <Footer/>
    </>
  )
}

export default homePage