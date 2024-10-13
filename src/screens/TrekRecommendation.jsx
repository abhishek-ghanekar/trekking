import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Background from '../assets/trek-background.jpeg'
import { CircularProgress } from '@mui/material';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const TrekRecommendation = () => {
  const [treks,setTreks] = useState([])
  const [age,setAge] = useState(null);
  const [runningCap,setRunningCap] = useState(null)
  const [showLoading,setShowLoading] = useState(false);
  const handleAgeChange = (e) => {
    setAge(e.target.value)
  }
  const handleRunningCapChange = (e) => {
    setRunningCap(e.target.value)
  }
  const handleFormSubmit = (e) => {
    setTreks([])
    setShowLoading(true);
    e.preventDefault();
    console.log("form submitted")
    
    axios.post('http://localhost:3000/gettreks', {
      "age" : age,
      "running_capacity" : runningCap
    })
    .then(function (response) {
      setTimeout(() => {

        setShowLoading(false);
        setTreks(response.data)
      }, 2000)
      
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  return (
    <div>
      
      <div className='bg-black'>
    <Navbar/>

      </div>
    <div className='bg-[url("https://images.pexels.com/photos/38326/pexels-photo-38326.jpeg")] bg-cover'>
    {showLoading && 
      <div className="overlay">
    <div className="overlay__wrapper">
        <div className="overlay__spinner">
          <CircularProgress color="inherit"/>
        </div>
    </div>
</div>}
<section className="text-gray-600 body-font ">
  <div className=" px-5 py-24 mx-auto flex">
    <div className="w-1/3 bg-white rounded-lg p-8 flex flex-col  mt-10   shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        Trek Recommendation
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Find Out the ideal trek for you.
      </p>
      <form onSubmit={handleFormSubmit}>

      
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
        Enter Age
        </label>
        <input
          value={age}
          onChange={handleAgeChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Enter Running Capacity
        </label>
        <input
          value={runningCap}
          onChange={handleRunningCapChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Get Recommended Treks
      </button>
     
      </form>
    </div>
    <div className='w-2/3  rounded-lg'>
       <section className="text-gray-600 body-font">
  <div className="container px-5 mx-auto">
    
    <div className="flex flex-wrap -m-4">
    {treks?.map((trek) => {
          return <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              className="h-40 rounded w-full object-cover object-center mb-6"
              src={trek.image}
              alt="content"
            />
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            {trek.name}
            </h2>
            <p className="leading-relaxed text-base">
              {trek.description}
            </p>
            <Link to={`/singletrek/${trek.name}`} state={trek} key={3}  exact={false}>

            <button className="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-md mt-2">
            Read More 
           </button>

            </Link>
            
            
          </div>
        </div>
       })}

    </div>
  </div>
</section>

    </div>

  </div>
</section>

    </div>
    </div>
  )
}

export default TrekRecommendation
