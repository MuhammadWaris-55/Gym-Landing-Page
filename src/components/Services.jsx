import React from 'react'
import Whole from "../assets/Whole.png";
import Zumba from "../assets/Zumba.png";
import Yoga from "../assets/Yoga.png";
import Bodybuilding from "../assets/Bodybuilding.png";
import Aerbcs from "../assets/Aerbcs.png";
import Free from "../assets/Free.png";

const Services = () => {
  return (
    <section className="w-full min-h-screen bg-[#050706] flex items-center mt-[-40px]">
      <div className="w-full px-20 flex items-center justify-between">

        <div className="max-w-[520px] text-white">
          <span className="text-yellow-400 text-sm font-semibold block mb-4">
            Services
          </span>

          <h2 className="text-[42px] font-bold leading-tight mb-5">
            We provide service that <br />
            fits the best for you.
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-7">
            Strive for greatness with the best, around the best and in the best
            fitness environment available in the city.
          </p>

          <button className="bg-white text-black px-7 py-2 rounded-full text-sm hover:bg-gray-200 transition">
            See All
          </button>
        </div>

        <div className="grid grid-cols-3 gap-7">
          <img src={Whole} alt="Whole body fat loss" className="w-[130px]" />
          <img src={Zumba} alt="Zumba" className="w-[120px]" />
          <img src={Yoga} alt="Yoga" className="w-[130px]" />

          <img src={Bodybuilding} alt="Bodybuilding" className="w-[130px]" />
          <img src={Aerbcs} alt="Aerobics" className="w-[100px]" />
          <img src={Free} alt="Free Weights" className="w-[130px]" />
        </div>

      </div>
    </section>
  )
}

export default Services
