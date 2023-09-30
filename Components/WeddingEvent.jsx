import React from "react";
import Image from "next/image";

const WeddingEvent = () => {
  return (
    <section id="wedding" className="w-full ">
      <div className="flex max-w-6xl mx-auto justify-center bg-[#eed9c4] rounded-xl shadow-xl ">
        <div className="flex mt-10 mb-16 flex-col  mx-auto items-center justify-center text-center">
          <div className="max-w-full mx-auto mt-16 ">
            <h1 className="md:text-6xl text-5xl md:max-w-full max-w-md font-bold dark:text-gray-300 tracking-wide">
              Wedding Event
            </h1>
            <h2 className="mt-3 md:text-xl">Main ceremony - Wedding party</h2>
            <div className="flex gap-5 mx-auto mt-5 flex-wrap items-center md:justify-start justify-center"></div>
          </div>

          <div className="border-2 border-white rounded-xl p-5 w-full mt-5 relative">
            <Image
              alt="Leaf image"
              src="/assets/vectors/leaf-corner.png"
              width={100}
              height={100}
              className="absolute transform rotate-90 scale-y-[-1] md:right-[337px] right-[253px] bottom-[91.5px]"
            />

            <Image
              alt="Leaf image"
              src="/assets/vectors/leaf-corner.png"
              width={100}
              height={100}
              className="absolute transform rotate-180  md:left-[339px] left-[255px] top-[89px]"
            />

            <div className="w-full">
              <h2 className="text-2xl font-semibold">Main Ceremony</h2>
              <p>16:00h - 17:00h</p>
            </div>

            <div className="w-full mt-5">
              <p>Hulhudhuffaaru Court</p>
              <h2 className="">Raa Hulhudhuffaaru</h2>
            </div>
          </div>

          <div className="border-2 border-white rounded-xl p-5 w-full mt-10 relative">
            <Image
              alt="Leaf image"
              src="/assets/vectors/leaf-corner.png"
              width={100}
              height={100}
              className="absolute md:right-[339px] right-[255px] bottom-[89px]"
            />

            <Image
              alt="Leaf image"
              src="/assets/vectors/leaf-corner.png"
              width={100}
              height={100}
              className="absolute transform rotate-180 md:left-[339px] left-[255px] top-[89px]"
            />
            <div className="w-full">
              <h2 className="text-2xl font-semibold">Wedding Party</h2>
              <p>16:00h - 17:00h</p>
            </div>

            <div className="w-full mt-5">
              <p>Hulhudhuffaaru Thundi</p>
              <h2 className="">Raa Hulhudhuffaaru</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingEvent;
