"use client";

import Image from "next/image";
import { useEffect } from "react";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  useEffect(() => {
    const letters = document.querySelectorAll(".animate-letter");

    letters.forEach((letter) => {
      letter.style.animationDelay = `${Math.random() * 5}s`;
      letter.style.animationDuration = `${Math.random() * 1 + 5}s`;
    });
  }, []);

  return (
    <section id="home" className="w-full mb-16">
      <div className="flex max-w-6xl mx-auto md:py-60 py-48 px-10 items-center p-5 justify-center  bg-white rounded-xl shadow-xl mb-16 relative bg-gradient-to-r from-[#ead9c9] via-[#fbf8f1] to-[#ead9c9] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-5"
        >
          <Image
            alt="Leaf image"
            src="/assets/images/bismi.png"
            width={100}
            height={100}
          />
        </motion.div>
        <div className="flex items-center mx-auto z-10 relative">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="sm:text-7xl text-6xl dark:text-gray-300 text-gray-800 font-bold tracking-wide leading-tight mt-10 drop-shadow-lg"
            >
              <span className="animate-letter">Z</span>
              <span className="animate-letter">a</span>
              <span className="animate-letter">m</span>
              <span className="animate-letter">e</span>
              <span className="animate-letter">e</span>
              <span className="animate-letter">n</span>
              <br className="sm:hidden block" />
              &nbsp;
              <span className="animate-letter">&</span>
              &nbsp;
              <br className="sm:hidden block" />
              <span className="animate-letter">A</span>
              <span className="animate-letter">f</span>
              <span className="animate-letter">a</span>
              <span className="animate-letter">a</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                alt="Leaf image"
                src="/assets/vectors/leaf-up.png"
                width={200}
                height={200}
                className="hidden sm:block absolute md:left-[450px] left-[400px] bottom-8 -z-10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <Image
                alt="Leaf image"
                src="/assets/vectors/leaf-up.png"
                width={200}
                height={200}
                className="hidden sm:block absolute transform scale-x-[-1] md:right-[450px] right-[400px] bottom-8 -z-10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <Image
                alt="Leaf image"
                src="/assets/vectors/leaf-up.png"
                width={200}
                height={200}
                className="block sm:hidden absolute top-5 left-[250px] -z-10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <Image
                alt="Leaf image"
                src="/assets/vectors/leaf-up.png"
                width={200}
                height={200}
                className="block sm:hidden absolute top-5 right-[250px] -z-10 transform scale-x-[-1]"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-10 tracking-wide text-xl font-medium lg:max-w-md mx-auto max-w-xs"
            >
              Cordially invites you to join in the celebration Of their love and
              commitment
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Link
                href="#date"
                className="w-full flex items-center justify-center mt-10"
              >
                <Image
                  alt="Leaf image"
                  src="/assets/images/save-the-date.png"
                  width={150}
                  height={150}
                  className="drop-shadow-lg transform hover:scale-110 transition duration-500 ease-in-out cursor-pointer"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
