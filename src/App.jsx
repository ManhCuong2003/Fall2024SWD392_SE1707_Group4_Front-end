
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import homePage from './pages/commonPage/Homepage/Homepage'
import Login from './pages/commonPage/Login/Login'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        {/* <Route path="/" Component={homePage}/> */}
        <Route path="/login" Component={Login}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
