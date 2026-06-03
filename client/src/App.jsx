import { useState } from 'react'
import React from 'react'
import Login from '.pages/Login'
import Signin from '.pages/Signin'


function App() {
  return (
    <div className="app">
      <BrowserRouter>
     <Routes>
       
     <Route path="/login" element={<Login/>}/>
     <Route path="/signin" element={<Signin/>}/>
          
     </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App