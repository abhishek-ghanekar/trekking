import React from 'react'
import Shopping1 from "../assets/shopping-1.svg"
import Shopping2 from "../assets/shopping-2.svg"
import Shopping3 from "../assets/shopping-3.svg"
const RentGear = () => {
  return (
    <div className='bg-[#6b879c]'>
      <section className="text-white body-font">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-wrap w-full  justify-center">
      <div className="w-full  flex justify-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-fonttext-white">
           Rent Gear
        </h1>
      </div>
    </div>
    <div className="flex flex-wrap ">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img
            className="h-64 rounded w-full object-contain object-center mb-6"
            src={Shopping1}
            alt="content"
          />
          
          <h2 className="text-lg text-gray-900 font-medium title-font ">
            Chichen Itza
          </h2>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
            Quechua
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font ">
            Rs. 120.00 per day
          </h2>
         
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img
            className="h-64 rounded w-full object-contain object-center mb-6"
            src={Shopping2}
            alt="content"
          />
         
          <h2 className="text-lg text-gray-900 font-medium title-font ">
          Decathlon trek poles
          2024
          </h2>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
             Decathlon
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font ">
            Rs. 60.00 per day
          </h2>
          
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img
            className="h-64 rounded w-full object-contain object-center mb-6"
            src={Shopping3}
            alt="content"
          />
          
          <h2 className="text-lg text-gray-900 font-medium title-font ">
             Black 75L Rucksack
          </h2>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
            Hiker’s way
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font ">
            Rs. 70.00 per day
          </h2>
        </div>
      </div>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default RentGear
