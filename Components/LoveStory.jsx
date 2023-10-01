import React from "react";
import Image from "next/image";

const LoveStory = () => {
  return (
    <section id="love-story" className="w-full">
      <div className="flex max-w-6xl mx-auto justify-center bg-white rounded-xl shadow-xl mt-16 mb-16 bg-gradient-to-r from-[#ead9c9] via-[#fbf8f1] to-[#ead9c9]">
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
              When Abdullah Zameen and Fathimath Afaa crossed paths,
            </h2>
            <p className="mt-2">
              Little did they know, their destinies were set to dance.
            </p>
          </div>

          <div className="mt-14 relative w-full flex justify-center items-center">
            <Image
              alt="Heart image"
              src="/assets/images/in-heart.png"
              width={250}
              height={250}
              unoptimized
              className="z-10"
            />
            <Image
              alt="Leaf image"
              src="/assets/vectors/leaf-up.png"
              width={100}
              height={100}
              className="absolute md:left-[270px] left-56 bottom-14"
            />

            <Image
              alt="Leaf image"
              src="/assets/vectors/leaf-up-left.png"
              width={100}
              height={100}
              className="absolute md:right-[270px] right-56 bottom-14"
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

          <div className="mt-5 relative w-full flex justify-center items-center">
            <Image
              alt="Heart image"
              src="/assets/images/in-heart.png"
              width={250}
              height={250}
              unoptimized
              className="z-10"
            />
            <Image
              alt="Leaf image"
              src="/assets/vectors/leaf-up.png"
              width={100}
              height={100}
              className="absolute md:left-[270px] left-56 bottom-14"
            />

            <Image
              alt="Leaf image"
              src="/assets/vectors/leaf-up-left.png"
              width={100}
              height={100}
              className="absolute md:right-[270px] right-56 bottom-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
