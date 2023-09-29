"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="w-full mt-64 mb-16">
      <div className="flex max-w-6xl mx-auto py-8 px-10 items-center p-5 bg-white rounded-xl shadow-xl mt-16 mb-16">
        <div className="flex items-center mx-auto">
          <div className=" text-center">
            <h1 className="sm:text-7xl text-6xl dark:text-gray-300 text-gray-800 font-bold tracking-wide leading-tight">
              Zameen <br className="flex sm:hidden" /> &
              <br className="flex sm:hidden" /> Afaa
            </h1>
            <p className="text-gray-500 mt-5 max-w-full tracking-wide text-xl font-bold">
              Friday December 8th, 2023 <br />
              Raa Hulhudhuffaaru.
            </p>

            <button className="mt-10 mb-28  hover:bg-[#eed9c4] hover:text-white dark:hover:text-white dark:hover:bg-transparent border-[#eed9c4] border-2 hover:border-[#e4d5b7] transition-all duration-300 text-[#d9b99b] py-5 px-10 rounded-full text-lg font-bold tracking-wide">
              Save The Date
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
