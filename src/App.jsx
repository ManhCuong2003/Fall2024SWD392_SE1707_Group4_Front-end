
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import homePage from './pages/commonPage/Homepage/Homepage'
import Login from './pages/commonPage/Login/Login'
import Register from './pages/commonPage/Register/Register'
import ProductListPage from './pages/commonPage/ProductListPage/ProductListPage'
import ProductDetailPage from './pages/commonPage/ProductDetailPage/ProductDetailPage'
import CustomerDashboardPage from './pages/customer/CustomerDashboardPage/CustomerDashboardPage'


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" Component={homePage}/>
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register}/>
        <Route path="/list-page" Component={ProductListPage}/>
        <Route path="/detail-page" Component={ProductDetailPage}/>
        <Route path="/customer-dashboard-page" Component={CustomerDashboardPage}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
