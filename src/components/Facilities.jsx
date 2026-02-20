import React from 'react'
import Lockers from "../assets/Lockers.png";
import Freewifi from "../assets/Freewifi.png";
import Drinks from "../assets/Drinks.png";
import Hightech from "../assets/Hightech.png";
import Changing from "../assets/Changing.png";
import Personal from "../assets/personal.png";


const Facilities = () => {
  return (
   <section className="w-full bg-[#050706] py-16 px-6 sm:px-12 lg:px-40">

      <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-12 sm:mb-20">
        <span className="text-white">Our </span>
        <span className="text-yellow-400">facilities</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 place-items-center">

        <img src={Lockers} alt="Lockers" className="w-full max-w-[220px] object-contain"/>

        <img src={Freewifi} alt="Free Wifi" className="w-full max-w-[220px] object-contain"/>

        <img src={Drinks} alt="Drinks" className="w-full max-w-[220px] object-contain"/>

        <img src={Hightech} alt="Hightech Gym" className="w-full max-w-[220px] object-contain"/>

        <img src={Changing} alt="Changing Room" className="w-full max-w-[220px] object-contain"/>

        <img src={Personal} alt="Personal Trainer" className="w-full max-w-[220px] object-contain"/>

      </div>
    </section>
  )
}

export default Facilities
