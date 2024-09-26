import React from 'react'
import Rock1 from '../assets/rock-1.svg';
import Rock2 from '../assets/rock-2.svg'
const HelloTrekker = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex justify-center gap-3 px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <div className='flex'>
         <img
        className="object-cover object-center rounded  "
        alt="hero"
        src={Rock1}
      />
       
      </div>
      
    </div>
    <div className="md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
         Get ready for your ultimate adventure 
      </h1>
      <p className="mb-8 leading-relaxed">
        Welcome to TrekitYourself, the ultimate platform for DIY trekkers! Whether you're a seasoned adventurer or just starting out, we are here to make your trekking experiences seamless, enjoyable, and safe.
      </p>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Features
      </h1>
      <ul>
        <li>Peer-to-Peer Gear Rentals</li>
        <li>Comprehensive Itineraries and Checklists</li>
        <li>Health Tracking and Fitness Plans</li>
        <li>Personalized Trek Recommendations</li>
        <li>Community Engagement</li>
      </ul>

    </div>
  </div>
</section>

  
  )
}

export default HelloTrekker
