import React from 'react'
import AfterImg from "../assets/After.png";
import BeforeImg from "../assets/Before.png";


const Stories = () => {
    return (
     <section className="w-full bg-[#050706] py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">

            <div className="text-center mb-12">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-serif leading-snug">
                    Stories of our <br />
                    <span className="text-yellow-400 font-semibold">
                        Vyayamshala
                    </span> Family
                </h2>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                <div className="relative w-full max-w-md h-[280px] sm:h-[320px]">

                    <img src={AfterImg} alt="After" className="absolute left-0 top-0 w-2/3 rounded-xl shadow-lg"/>

                    <img src={BeforeImg} alt="Before" className="absolute right-0 bottom-0 w-1/2 rounded-xl shadow-lg"/>
                </div>

                <div className="w-full max-w-xl text-center lg:text-left relative">

                    <div className="text-white text-5xl md:text-6xl leading-none mb-4">
                        “
                    </div>

                    <p className="text-white text-base sm:text-lg leading-relaxed mb-6">
                        A complete package to all the fitness freaks out there.
                        Join soon and test yourself. Vyayamshala’s layouts,
                        environment and surroundings play a vital role to
                        motivate and help you go beyond your limitation.
                    </p>

                    <div className="flex justify-center lg:justify-start gap-2 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-lg">★</span>
                        ))}
                    </div>

                    <p className="text-white text-sm">
                        Jhon Doe, <span className="opacity-80">Student</span>
                    </p>

                    <div className="hidden lg:block absolute right-0 bottom-0 text-white text-5xl md:text-6xl">
                        ”
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-8 mt-12">
                <button className="text-white text-4xl opacity-70 hover:opacity-100 transition">
                    ‹
                </button>
                <button className="text-white text-4xl opacity-70 hover:opacity-100 transition">
                    ›
                </button>
            </div>

        </section>
    )
}

export default Stories
