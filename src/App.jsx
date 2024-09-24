
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import home from './pages/commonPage/Homepage/Homepage'
import LoginPage from './components/LoginPage/LoginPage'
import ProductListPage from './components/Customer/ProductListPage/ProductListPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import ChangePassword from './components/Customer/ChangePassword/ChangePassword'
import ProductDetailPage from './components/Customer/ProductDetailPage/ProductDetailPage'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" Component={home}/>
        <Route path="/login" Component={LoginPage}/>
        <Route path="/register" Component={RegisterPage}/>
        <Route path="/change-password" Component={ChangePassword}/>
        <Route path="/listpage" Component={ProductListPage}/>
        <Route path="/detailpage" Component={ProductDetailPage}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
