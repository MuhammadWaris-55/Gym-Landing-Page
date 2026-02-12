import React from 'react'
import Lockers from "../assets/Lockers.png";
import Freewifi from "../assets/Freewifi.png";
import Drinks from "../assets/Drinks.png";
import Hightech from "../assets/Hightech.png";
import Changing from "../assets/Changing.png";
import Personal from "../assets/personal.png";


const Facilities = () => {
  return (
   <section className="w-full bg-[#050706] py-16 px-40">

      <h2 className="text-center text-4xl font-semibold mb-20">
        <span className="text-white">Our </span>
        <span className="text-yellow-400">facilities</span>
      </h2>

      <div className="grid grid-cols-3 gap-x-24 gap-y-16 place-items-start">

        <img src={Lockers} alt="Lockers" className="w-full object-contain"/>

        <img src={Freewifi} alt="Free Wifi" className="w-full object-contain"/>

        <img src={Drinks} alt="Drinks" className="w-full object-contain"/>

        <img src={Hightech} alt="Hightech Gym" className="w-full object-contain"/>

        <img src={Changing} alt="Changing Room" className="w-full object-contain"/>

        <img src={Personal} alt="Personal Trainer" className="w-full object-contain"/>

      </div>
    </section>
  )
}

export default Facilities
