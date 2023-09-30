"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { motion } from "framer-motion";
import ThemeButton from "./ThemeButton";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 backdrop-blur-md w-full z-30 rounded-lg"
    >
      <div className="lg:max-w-6xl mx-auto max-2xl py-2 px-4 lg:px-0 shadow-lg">
        <div className="flex items-center justify-between rounded-xl p-3 ">
          {/* <div className="hidden md:block font-bold text-2xl tracking-wider transition duration-300 ease-in-out">
            <h1>Invitation</h1>
          </div> */}

          <div className="flex gap-8 items-center tracking-wider mx-auto">
            <Link
              className="text-gray-500 hover:text-[#d9b99b] dark:hover:text-purple-400 dark:text-gray-300 text-lg font-semibold hover:scale-110 transition duration-300 ease-in-out"
              href="#date"
            >
              Date
            </Link>

            <Link
              className="text-gray-500 hover:text-[#d9b99b] dark:hover:text-purple-400 dark:text-gray-300 text-lg font-semibold  hover:scale-110 transition duration-300 ease-in-out"
              href="#love-story"
            >
              Love Story
            </Link>

            <Link
              className="text-gray-500 hover:text-[#d9b99b] dark:hover:text-purple-400 dark:text-gray-300 text-lg font-semibold  hover:scale-110 transition duration-300 ease-in-out"
              href="#wedding"
            >
              Wedding
            </Link>
          </div>
          <div className="flex items-center gap-x-3"></div>
          {/* <ThemeButton /> */}
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
