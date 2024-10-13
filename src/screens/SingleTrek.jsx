import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
const SingleTrek = () => {
    const [trekData,setTrekData] = useState({})
    const [treks,setTreks] = useState([])
    const location = useLocation();
    console.log(location)
    const data = location.state;
    const findSimilar = (dat) => {
        axios.post('http://localhost:3000/similartreks', dat)
          .then(function (response) {
           
            console.log(response.data);
            setTreks(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    useEffect(() => {
      setTrekData(data)
      findSimilar(data)
    },[location])
  return (
    <div>
        <div className='bg-black'>
          <Navbar/>
          
        </div>
        <div className='px-12'>
        <h1 className='text-3xl font-bold'>{trekData.name}</h1>
        <img src={trekData.image} className='w-[400px] '/>
        <p>{trekData.description}</p>
        <h1 className='text-3xl font-bold'>Similar Treks</h1>
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
            
            <Link to={`/singletrek/${trek.name}`} state={trek} key={1}  exact={false}>

            <button className="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-md mt-2">
            Read More 
           </button>

            </Link>
            
          </div>
        </div>
       })}

    </div>
        </div>
        
    </div>
  )
}

export default SingleTrek
