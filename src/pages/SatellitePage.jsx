import React from "react";
import { motion } from "framer-motion";
import satellite from "../assets/satellite.mp4";
import college from "../assets/college.png";
import Satellitebg from "../assets/satellitebg.jpeg";
import mark2 from "../assets/mark2.mp4";

const SatellitePage = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen text-white px-6 md:px-16 py-12"
      style={{
        backgroundImage: `url(${Satellitebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Ensures the background remains fixed on scroll
      }}
    >
      {/* Black Tint Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text mb-6"
        >
          Surya Narayana Mark-1: A Mini Satellite Prototype! <span className="text-white">🛰️</span>
        </motion.h1>

        {/* Animated Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="max-w-6xl text-lg md:text-xl text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
        >
          <p>
            Introducing <span className="text-yellow-400 font-semibold">Surya Narayana Mark-1</span> — a working prototype demo model! This Mini-Satellite is built using a toothbrush stand and Recycled Electronics, proving that Ingenuity beats Budget Constraints. 🚀
          </p>
          <p>
            Inspired by <span className="text-blue-400 font-semibold">Kalam-Sat</span>, the World’s Lightest Satellite built by a boy from Tamil Nadu and launched by NASA, this project is a testament to Affordable Space Technology.
          </p>
          <p>Space is a near-perfect vacuum with no AIR or MOISTURE.</p>
          <p>This Satellite measures Temperature in space using Thermal Radiation. 🌡️</p>
          <p className="text-green-400 font-semibold">Small steps lead to Affordable Space Tech! 🛰️</p>
          <p className="text-red-700 font-semibold">Presented in DRDO-DEHRADUN in IEEE Conference 2025 March 6th & 7th.</p>
        </motion.div>

        {/* Animated Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 w-full max-w-6xl"
        >
          {/* Video Section with Glassmorphism */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-lg p-4 rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg">
              <video className="w-full rounded-lg" controls>
                <source src={satellite} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="mt-4 text-center text-gray-300 text-lg">
              This video demonstrates how we built the satellite using low-budget components, proving that innovation doesn’t require high costs. 🚀
            </p>
          </div>

          {/* Image Section without Glassmorphism */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <img src={college} alt="College" className="w-full rounded-lg" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-transparent bg-clip-text mt-16 mb-6"
        >
          Surya Narayana Mark-2: Advancing Military Operations <span className="text-white">🚀</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="max-w-6xl text-lg md:text-xl text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
        >
          <p><span className="text-yellow-400 font-semibold">Mark-2</span> is currently under development and is designed to support military operations with advanced radar systems and satellite communication technologies.</p>
          <p>This satellite is designed for advanced radar...</p>
          <p>This satellite will provide crucial real-time intelligence for national defense purposes, including reconnaissance, surveillance, and tactical communication.</p>
          <p>Supporting peacekeeping operations...</p>
        </motion.div>
        {/* Mark-2 Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 w-full max-w-6xl"
        >
          <div className="flex flex-col items-center">
            <div className="w-full max-w-lg p-4 rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg">
              <video className="w-full rounded-lg" controls>
                <source src={mark2} type="video/mp4" />
              </video>
            </div>
            <p className="mt-4 text-center text-gray-300 text-lg">This video showcases the technological advancements of Mark-2 in military applications. 🛰️</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SatellitePage;
