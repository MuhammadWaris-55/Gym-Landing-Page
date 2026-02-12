import React from 'react'
import AfterImg from "../assets/After.png";
import BeforeImg from "../assets/Before.png";


const Stories = () => {
    return (
        <section className="w-full bg-[#050706] py-16 px-16 relative overflow-hidden">

            <div className="text-center mb-16">
                <h2 className="text-white text-3xl font-serif">
                    Stories of our <br />
                    <span className="text-yellow-400 font-semibold">
                        Vyayamshala
                    </span>
                    Family
                </h2>
            </div>

            <div className="max-w-7xl mx-auto flex items-center justify-between relative">

                <div className="relative w-[420px] h-[300px] ml-24">

                    <img src={AfterImg} alt="After" className="absolute left-0 top-0 w-[240px] rounded-xl z-10" />

                    <img src={BeforeImg} alt="Before" className="absolute left-[200px] top-[90px] w-[180px] rounded-xl z-20" />
                </div>

                <div className="w-[550px] relative">

                    <div className="text-white text-7xl leading-none mb-4">“</div>

                    <p className="text-white text-xl leading-relaxed mb-6">
                        A complete package to all the fitness freaks out <br /> there.
                        Join soon and test yourself. Vyayamshala’s <br /> layouts,
                        environment and it’s surrounding itself <br /> plays vital
                        role to motivate and go beyond your <br /> limitation.
                    </p>

                    <div className="flex gap-2 mb-3">
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="text-yellow-400 text-lg">★</span>
                    </div>
                    <p className="text-white text-sm">
                        Jhon Doe, <span className="opacity-80">Student</span>
                    </p>

                    <div className="absolute right-20 bottom-0 text-white text-7xl leading-none">
                        ”
                    </div>
                </div>

                <div className="absolute right-20 top-[-65px] -translate-y-1/2 flex gap-6">
                    <button className="text-white text-6xl opacity-70 hover:opacity-100">
                        ‹
                    </button>
                    <button className="text-white text-6xl opacity-70 hover:opacity-100">
                        ›
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Stories
