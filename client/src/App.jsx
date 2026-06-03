import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signin from './pages/Signin'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App