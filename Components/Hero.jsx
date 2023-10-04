"use client";

import Image from "next/image";
import { useEffect } from "react";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="w-full mb-16">
      <div className="flex max-w-6xl mx-auto md:py-60 py-48 px-10 items-center p-5 justify-center  bg-white rounded-xl shadow-xl mb-16 relative bg-gradient-to-r from-[#ead9c9] via-[#fbf8f1] to-[#ead9c9] overflow-hidden">
        <Image
          alt="Leaf image"
          src="/assets/images/bismi.png"
          width={100}
          height={100}
          className="absolute top-5"
        />
        <div className="flex items-center mx-auto z-10 relative">
          <div className="text-center">
            <h1 className="sm:text-7xl text-6xl dark:text-gray-300 text-gray-800 font-bold tracking-wide leading-tight mt-10 drop-shadow-lg">
              Zameen <br className="flex sm:hidden" /> &
              <br className="flex sm:hidden" /> Afaa
            </h1>
            <Image
              alt="Leaf image"
              src="/assets/vectors/leaf-up.png"
              width={200}
              height={200}
              className="hidden sm:block absolute md:left-[450px] left-[400px] bottom-8 -z-10"
            />

            <Image
              alt="Leaf image"
              src="/assets/vectors/leaf-up.png"
              width={200}
              height={200}
              className="hidden sm:block absolute transform scale-x-[-1] md:right-[450px] right-[400px] bottom-8 -z-10"
            />

            <Image
              alt="Leaf image"
              src="/assets/vectors/leaf-up.png"
              width={200}
              height={200}
              className="block sm:hidden absolute top-5 left-[250px] -z-10"
            />

            <Image
              alt="Leaf image"
              src="/assets/vectors/leaf-up.png"
              width={200}
              height={200}
              className="block sm:hidden absolute top-5 right-[250px] -z-10 transform scale-x-[-1]"
            />

            <p className="mt-10 tracking-wide text-xl font-medium lg:max-w-md mx-auto max-w-xs">
              Cordially invites you to join in the celebration Of their love and
              commitment
            </p>

            <button
              id="saveTheDateButton"
              className="mt-10 mb-10  hover:bg-[#EAD9C9] hover:text-[#C3937C]  border-[#C3937C] border-2 hover:border-[#e8cdb4] transition-all duration-300 text-[#C3937C] py-5 px-10 rounded-full text-lg font-bold tracking-wide"
            >
              Save The Date
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
