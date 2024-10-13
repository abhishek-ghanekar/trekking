import { useState } from 'react'
import Home from './screens/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './screens/Login'
import RentGear from './screens/RentGear'
import TrekRecommendation from './screens/TrekRecommendation'
import SingleTrek from './screens/SingleTrek'

function App() {

  return (
    <>
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/rentgear' element={<RentGear/>}/>
           <Route path='/trekrecommendations' element={<TrekRecommendation/>}/>
           <Route path='/singleTrek/:name' element={<SingleTrek/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
