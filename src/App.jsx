
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import homePage from './pages/commonPage/Homepage/Homepage'
import Login from './pages/commonPage/Login/Login'
import Register from './pages/commonPage/Register/Register'
import ProductListPage from './pages/commonPage/ProductListPage/ProductListPage'
import ProductDetailPage from './pages/commonPage/ProductDetailPage/ProductDetailPage'
import CustomerDashboardPage from './pages/customer/CustomerDashboardPage/CustomerDashboardPage'
import CartPage from './pages/commonPage/CartPage/CartPage'
import CheckoutPage from './pages/commonPage/CheckoutPage/CheckoutPage'
import HomePageCustomer from './components/HomePageCustomer/HomePageCustomer'
import StaffDashboard from './components/StaffDashboard/StaffDashboard'
import KoiFishManagerList from './components/KoiFishManagerList/KoiFishManagerList'
import ManagerDashboard from './components/ManagerDashboard/ManagerDashboard' 
import NotAuthorized from './authencation/NotAuthorized'
import RoleBasedRoute from './authencation/RoleBasedRoute'

import StaffManagePage from './pages/staff/StaffManagePage/StaffManagePage'

import NewsPage from './pages/commonPage/NewsPage/NewsPage'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="*" Component={NotAuthorized}/>

        {/* GUEST */}
        <Route path="/" Component={homePage}/>
        <Route path="/list-page" Component={ProductListPage}/>
        <Route path="/detail-page" Component={ProductDetailPage}/>
        <Route path="/news" Component={NewsPage}/>

        {/* ERROR PAGES */}
        <Route path="/not-authorized" Component={NotAuthorized}/>
        <Route path="/register" Component={Register}/>

        {/* AUTHORIZE PAGES */}
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register}/>

        {/* CUSTOMER PAGES */}
          <Route path="/customer-dashboard-page" element={<RoleBasedRoute element={<CustomerDashboardPage/>} requiredRole={['customer']} />} />
          <Route path="/cart-page" element={<RoleBasedRoute element={<CartPage/>} requiredRole={['customer']}/>} />
          <Route path="/checkout-page" element={<RoleBasedRoute element={<CheckoutPage/>} requiredRole={['customer']}/>}/>

        
        
        {/* STAFF DASHBOARD */}
          {/* <Route path='/staff-dashboard' element={<RoleBasedRoute element={<StaffDashboard/>} requiredRole={['staff']}/>} /> */}
   
        
        {/* MANAGER PAGES */}
          <Route path='/koi-list' element={<RoleBasedRoute element={<KoiFishManagerList/>} requiredRole={['manager']}/>}/>
          <Route path='/manager-dashboard' element={<RoleBasedRoute element={<ManagerDashboard/>} requiredRole={['manager']}/>} />

        
        
          <Route path='/staff-dashboard' Component={StaffDashboard}/>
          <Route path='/staff-manage-page' Component={StaffManagePage}/>

        <Route path="/home-page" Component={HomePageCustomer}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
