import { useState } from 'react'
import Home from './screens/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './screens/Login'
import RentGear from './screens/RentGear'

function App() {

  return (
    <>
      {/* <Home/> */}
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/rentgear' element={<RentGear/>}/>
         </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App
