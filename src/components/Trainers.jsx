import React from 'react'
import Amir from "../assets/Amir.png";
import Christina from "../assets/Christina.png";
import Sunil from "../assets/Sunil.png";
import Priya from "../assets/Priya.png";
import Santosh from "../assets/Santosh.png";
import Rina from "../assets/Rina.png";

const Trainers = () => {
  return (
     <section className="w-full bg-[#050706] py-16 px-6 md:px-10 lg:px-0">

      <div className="relative flex items-center justify-center mb-12">

        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-wide text-center">
          Meet our <span className="text-yellow-400">Trainers</span>
        </h2>

        <a href="" className="absolute right-0 md:right-20 lg:right-36 text-white text-sm underline hover:text-yellow-400 transition">View All
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-10 items-center">

        <img src={Amir} alt="Amir" className="w-full h-64 object-cover"/>
        <img src={Christina} alt="Christina" className="w-full h-64 object-cover"/>
        <img src={Sunil} alt="Sunil" className="w-full h-64 object-cover"/>
        <img src={Priya} alt="Priya" className="w-full h-64 object-cover"/>
        <img src={Santosh} alt="Santosh" className="w-full h-64 object-cover"/>
        <img src={Rina} alt="Rina" className="w-full h-64 object-cover"/>

      </div>
    </section>
  )
}

export default Trainers
