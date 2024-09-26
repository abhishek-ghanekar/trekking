import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HelloTrekker from '../components/HelloTrekker'
const Home = () => {
  return (
    <div>
      <div className="bg-[url('./assets/home-background.svg')] bg-cover">
      <Navbar/>
      <Hero/>

      </div>
      <HelloTrekker/>
    </div>
  )
}

export default Home
