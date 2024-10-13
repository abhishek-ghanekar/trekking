import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className="text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-cente mb-4 md:mb-0">
    
      <span className="ml-3 text-xl">TrekItYourself</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <Link to='/rentgear'>
      
      <p className="mr-5 hover:text-gray-900">Trek Gear</p>
      </Link>
      <Link to="/trekrecommendations">

      <p className="mr-5 hover:text-gray-900">Trek Recommendations</p>
      </Link>
      <a className="mr-5 hover:text-gray-900">Community</a>
    </nav>
    <Link to='/login'>
    <h1 className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Login
      
    </h1>

    </Link>
    
  </div>
</header>

  )
}

export default Navbar
