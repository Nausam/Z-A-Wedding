import React from "react";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

const SaveDate = () => {
  return (
    <section id="date" className="w-full ">
      <div className="flex max-w-6xl mx-auto justify-between bg-[#eed9c4] rounded-xl shadow-xl">
        <div className="flex mt-20 mb-20 lg:flex-row flex-col lg:justify-between mx-auto items-center justify-center lg:text-left text-center">
          <div className="lg:ml-20 lg:max-w-lg max-w-full">
            <h1 className="md:text-6xl text-5xl md:max-w-full max-w-md font-bold dark:text-gray-300 tracking-wide">
              Save the date
            </h1>
            <h2 className="mt-3 md:text-xl">
              Friday December 8th, 2023 Raa Hulhudhuffaaru.
            </h2>
            <div className="flex gap-5 mx-auto mt-5 flex-wrap items-center md:justify-start justify-center">
              <CountdownTimer />
            </div>
          </div>

          <div className="lg:mb-0 mb-10 p-10">
            <Image
              alt="About image"
              src="/assets/images/wedding-cake.svg"
              width={500}
              height={500}
              className="drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaveDate;
