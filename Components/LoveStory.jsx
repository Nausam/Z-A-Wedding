import React from "react";
import Image from "next/image";

const LoveStory = () => {
  return (
    <section id="love-story" className="w-full">
      <div className="flex max-w-6xl mx-auto justify-center bg-white rounded-xl shadow-xl mt-16 mb-16">
        <div className="flex mt-20 mb-36 flex-col  mx-auto items-center justify-center text-center">
          <div className="max-w-xl mx-auto">
            <h1 className="md:text-6xl text-5xl md:max-w-full max-w-md font-bold dark:text-gray-300 tracking-wide">
              Our Love Story
            </h1>
            <h2 className="mt-3 md:text-xl">
              The Story of our love and the Wedding
            </h2>
            <div className="flex gap-5 mx-auto mt-5 flex-wrap items-center md:justify-start justify-center"></div>
          </div>

          <div className="flex flex-col mt-5 max-w-xs">
            <h2 className="text-xl font-medium">
              When Abdullah Zameen & Fathimath Afaa met
            </h2>
            <p className="mt-2">That day changed everything</p>
          </div>

          <div className="mt-20">
            <Image
              alt="Hugging image"
              src="/assets/images/in-heart.png"
              width={250}
              height={250}
            />
          </div>

          <div className="flex justify-between gap-8 mt-12 mb-5 ml-32">
            <div className="p-2 rounded-full bg-[#eed9c4] bg-opacity-40">
              <Image
                alt="About image"
                src="/assets/icons/heart.svg"
                width={30}
                height={30}
              />
            </div>
            <div className="flex flex-col items-start">
              <p>First Met</p>
              <p>October 2018</p>
            </div>
          </div>

          <div className="border border-[#eed9c4] h-[80px]"></div>

          <div className="flex justify-between gap-8 mt-5 mb-5 mr-32">
            <div className="flex flex-col items-start">
              <p>First Date</p>
              <p>October 2018</p>
            </div>

            <div className="p-2 rounded-full bg-[#eed9c4] bg-opacity-40">
              <Image
                alt="About image"
                src="/assets/icons/heart.svg"
                width={30}
                height={30}
              />
            </div>
          </div>

          <div className="border border-[#eed9c4] h-[80px]"></div>

          <div className="flex justify-between gap-8 mt-5 mb-5 ml-32">
            <div className="p-2 rounded-full bg-[#eed9c4] bg-opacity-40">
              <Image
                alt="About image"
                src="/assets/icons/heart.svg"
                width={30}
                height={30}
              />
            </div>
            <div className="flex flex-col items-start">
              <p>Love began</p>
              <p>October 2018</p>
            </div>
          </div>

          <div className="border border-[#eed9c4] h-[80px]"></div>

          <div className="flex justify-between gap-8 mt-5 mb-5 mr-32">
            <div className="flex flex-col items-start">
              <p>Together since</p>
              <p>October 2018</p>
            </div>

            <div className="p-2 rounded-full bg-[#eed9c4] bg-opacity-40">
              <Image
                alt="About image"
                src="/assets/icons/heart.svg"
                width={30}
                height={30}
              />
            </div>
          </div>

          <div className="border border-[#eed9c4] h-[80px]"></div>

          <div className="flex justify-between gap-8 mt-5 mb-5 ml-32">
            <div className="p-2 rounded-full bg-[#eed9c4] bg-opacity-40">
              <Image
                alt="About image"
                src="/assets/icons/heart.svg"
                width={30}
                height={30}
              />
            </div>
            <div className="flex flex-col items-start">
              <p>He proposed</p>
              <p>October 2018</p>
            </div>
          </div>

          <div className="mt-5">
            <Image
              alt="Hugging image"
              src="/assets/images/in-heart.png"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
