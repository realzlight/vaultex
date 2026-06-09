import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signin from './pages/Signin.jsx'
import Home from './pages/Home.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
