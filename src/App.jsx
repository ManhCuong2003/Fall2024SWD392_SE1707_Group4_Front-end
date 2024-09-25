
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import homePage from './pages/commonPage/Homepage/Homepage'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" Component={homePage}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
