import React from 'react'
import './App.css'
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import ProfilePage from '../src/pages/ProfilePage'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        Navbar
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={<ProfilePage />}/>
      </Routes>
      <div>
        Footer
      </div>
      </BrowserRouter>
     
    </div>
  )
}

export default App
