import React from 'react'
import stoppingImg from "../assets/Stopping.png";

const Stopping = () => {
  return (
    <section className="w-full">
      
      <div className="py-8">
        <h2 className="text-center text-white text-3xl font-semibold">
          What's <span className="text-yellow-400">Stopping</span> you?
        </h2>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 w-full bg-white">
        
        <div className="h-[280px] sm:h-[350px] lg:h-[450px] w-full lg:w-11/12">
          <img src={stoppingImg} alt="Stopping" className="w-full h-full object-cover"/>
        </div>

        <div className="bg-white flex items-center justify-center lg:justify-start w-full px-6 py-10 sm:px-10 lg:px-0">
          
          <div className="w-full max-w-sm lg:ml-20">
            
            <h3 className="text-2xl font-semibold text-black mb-3 leading-tight">
              Become a part of our family
            </h3>

            <p className="text-gray-600 mb-8">
              Leave your details and we will get back to you!
            </p>

            <div className="flex flex-col gap-5 w-full text-black">
              
              <input type="text" placeholder="Full name" className="px-6 py-3 rounded-full border border-gray-400 bg-transparent focus:outline-none"/>

              <input type="tel" placeholder="Phone number" className="px-6 py-3 rounded-full border border-gray-400 bg-transparent focus:outline-none"/>

              <button className="bg-yellow-400 text-black font-medium py-2 px-6 rounded-full w-[130px] hover:bg-yellow-500 transition">
                Join Now
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Stopping