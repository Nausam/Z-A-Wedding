"use client";

import Image from "next/image";
import { useEffect } from "react";

import { motion } from "framer-motion";

const Hero = () => {
  useEffect(() => {
    const openCalendar = () => {
      const eventName = "Zameen & Afaa's Wedding";
      const eventDate = "2023-12-08";
      const eventLocation = "Raa Hulhudhuffaaru";

      const webcalUrl = `webcal://www.example.com/events/${encodeURIComponent(
        eventName
      )}/${eventDate}/${encodeURIComponent(eventLocation)}`;

      window.open(webcalUrl, "_blank");
    };

    const button = document.getElementById("saveTheDateButton");
    button.addEventListener("click", openCalendar);

    return () => {
      button.removeEventListener("click", openCalendar);
    };
  }, []);

  return (
    <section id="home" className="w-full mb-16 mt-16">
      <div className="flex max-w-6xl mx-auto py-36 px-10 items-center p-5 justify-center  bg-white rounded-xl shadow-xl mt-16 mb-16 relative bg-gradient-to-r from-[#ead9c9] via-[#fbf8f1] to-[#ead9c9]">
        <div className="flex items-center mx-auto z-10 relative">
          <div className=" text-center">
            <h1 className="sm:text-7xl text-6xl dark:text-gray-300 text-gray-800 font-bold tracking-wide leading-tight mt-10">
              Zameen <br className="flex sm:hidden" /> &
              <br className="flex sm:hidden" /> Afaa
            </h1>
            <Image
              alt="Leaf image"
              src="/assets/vectors/leaf-up.png"
              width={200}
              height={200}
              className="hidden sm:block absolute md:left-[400px] left-[400px] bottom-8"
            />

            <Image
              alt="Leaf image"
              src="/assets/vectors/leaf-up.png"
              width={200}
              height={200}
              className="hidden sm:block absolute transform scale-x-[-1] md:right-[400px] right-[400px] bottom-8"
            />

            <Image
              alt="Leaf image"
              src="/assets/vectors/leaf-up.png"
              width={200}
              height={200}
              className="block sm:hidden absolute top-0 left-44 -z-10"
            />

            <Image
              alt="Leaf image"
              src="/assets/vectors/leaf-up.png"
              width={200}
              height={200}
              className="block sm:hidden absolute top-0 right-44 -z-10 transform scale-x-[-1]"
            />

            <p className="text-gray-600 mt-5 max-w-full tracking-wide text-xl font-bold">
              Friday December 8th, 2023 <br />
              Raa Hulhudhuffaaru.
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
