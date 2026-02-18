import React from 'react'
import HeroImage from "../assets/Hero.jpg";

const Hero = () => {
  return (
    //Responsive For Mobile
     <section className="w-full bg-[#050706] text-white px-20 py-20 flex flex-col md:flex-row items-center justify-between">
      
      <div className="w-1/2 flex flex-col gap-6">
        <h1 className="text-5xl font-bold leading-snug">
          Join The World <br /> Of Fitness.
        </h1>
        <p className="text-gray-300 text-lg">
          Our aim is to bring more people into fitness so that <br /> every individual, family, society and whole nation.
        </p>

        <div className="flex items-center gap-6 mt-4">
          <button className="bg-yellow-400 text-[#050706] font-semibold px-6 py-3 rounded-full hover:brightness-110 transition">
            Join Now
          </button>
          <button className="flex items-center gap-2 text-white font-semibold hover:underline">
            <span className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </span>
            Watch video
          </button>
        </div>

        <div className="flex gap-12 mt-12 text-center">
          <div>
            <p className="text-2xl font-bold text-yellow-400">7</p>
            <p className="text-gray-400 mt-1">Years <br /> Experience</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-yellow-400">25k+</p>
            <p className="text-gray-400 mt-1">Happy <br /> customers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-yellow-400">95</p>
            <p className="text-gray-400 mt-1">Gym <br /> Trainers</p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end h-[30rem]">
        <img
          src={HeroImage}
          alt="Hero"
          className="w-full max-w-lg object-cover rounded-md shadow-xl "
        />
      </div>
    </section>
  )
}

export default Hero
