import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Toaster/>
      {/* <SignUp/> */}
    </div>
  )
}

export default App