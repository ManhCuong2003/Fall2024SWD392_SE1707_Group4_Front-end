
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import home from './pages/commonPage/Homepage/Homepage'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" Component={home}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
