import React from 'react'
import Whole from "../assets/Whole.png";
import Zumba from "../assets/Zumba.png";
import Yoga from "../assets/Yoga.png";
import Bodybuilding from "../assets/Bodybuilding.png";
import Aerbcs from "../assets/Aerbcs.png";
import Free from "../assets/Free.png";

const Services = () => {
  return (
    <section className="w-full min-h-screen bg-[#050706] flex items-center">
      <div className="w-full px-6 sm:px-10 md:px-20 py-16 flex flex-col items-center justify-between gap-12 md:flex-row md:gap-10">

        <div className="max-w-full md:max-w-[520px] text-white text-center md:text-left">
          <span className="text-yellow-400 text-sm font-semibold block mb-4">
            Services
          </span>

          <h2 className="text-3xl sm:text-[42px] font-bold leading-tight mb-5">
            We provide service that fits the best for you.
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-7">
            Strive for greatness with the best, around the best and in the best
            fitness environment available in the city.
          </p>

          <button className="bg-white text-black px-7 py-2 rounded-full text-sm hover:bg-gray-200 transition">
            See All
          </button>
        </div>

        <div className="grid grid-cols-3 gap-5 sm:gap-7 place-items-center">
          <img src={Whole} alt="Whole body fat loss" className="w-[90px] sm:w-[110px] md:w-[130px]" />
          <img src={Zumba} alt="Zumba" className="w-[85px] sm:w-[100px] md:w-[120px]" />
          <img src={Yoga} alt="Yoga" className="w-[90px] sm:w-[110px] md:w-[130px]" />
          <img src={Bodybuilding} alt="Bodybuilding" className="w-[90px] sm:w-[110px] md:w-[130px]" />
          <img src={Aerbcs} alt="Aerobics" className="w-[75px] sm:w-[85px] md:w-[100px]" />
          <img src={Free} alt="Free Weights" className="w-[90px] sm:w-[110px] md:w-[130px]" />
        </div>

      </div>
    </section>
  )
}

export default Services;