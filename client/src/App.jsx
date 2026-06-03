import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signin from './pages/Signin.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" page={<Login/>}/>
        <Route path="/signin" page={<Signin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
