import React from 'react';
import { motion } from 'framer-motion';
import satellite1 from "../assets/satellite1.jpeg";
import satellite2 from "../assets/satellite2.jpeg";
import satellite3 from "../assets/satellite3.jpeg";
import satellite4 from "../assets/satellite4.jpeg";
import "../styles/spaceBackground.css"  // Import the new background CSS

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-6 text-white bg-black overflow-hidden">
      {/* Space Background Animation */}
      <div className="absolute inset-0 z-0 bg-stars"></div>

      {/* Gradient Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-extrabold text-center bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 text-transparent bg-clip-text z-10"
      >
        Narayana Space and Defense: <br /> Advanced Satellite Data Solutions
      </motion.h1>

      {/* Images Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center items-center gap-6 mt-8 z-10"
      >
        {[satellite1, satellite2, satellite3, satellite4].map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Satellite ${index + 1}`}
            className="w-1/5 min-w-[150px] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        ))}
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-4xl text-center mt-8 z-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl font-bold text-blue-400">About Us</motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-2 text-lg text-gray-300 text-justify">
          Narayana Space and Defense pioneers next-generation satellite telemetry solutions by integrating
          <span className="text-yellow-400 font-semibold"> Software-Defined Radio (SDR)</span>,
          <span className="text-green-400 font-semibold"> edge computing</span>, and
          <span className="text-red-400 font-semibold"> AI-driven analytics</span>. Our mission is to provide
          <span className="text-purple-400 font-semibold"> low-cost</span>, high-efficiency space surveillance,
          environmental monitoring, and defense intelligence through real-time data acquisition and cloud-based processing.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl font-bold text-purple-400 mt-6">Technical Workflow</motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-4 text-lg">
          <span className="text-yellow-400 font-semibold">1️⃣ Satellite Signal Acquisition via SDR 📡</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-gray-300 text-justify">Software-Defined Radio (SDR) enables real-time satellite communication by decoding RF telemetry signals.
          The system captures downlinked satellite transmissions, including GPS coordinates, atmospheric conditions, and RF spectrum analysis.
          Optimized for cost-effective ground stations, reducing dependency on traditional infrastructure.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-4 text-lg">
          <span className="text-green-400 font-semibold">2️⃣ Edge Computing & IoT-Based Sensor Fusion 🌍</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-gray-300 text-justify">Multi-sensor integration collects temperature, humidity, radiation levels, and RF signal strength at high-frequency intervals.
          Edge processing ensures efficient data filtration, compression, and anomaly detection before cloud transmission.
          Autonomous data collection reduces manual intervention, ensuring continuous space-to-ground monitoring.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-4 text-lg">
          <span className="text-red-400 font-semibold">3️⃣ AI-Powered Data Processing & Streamlit Web App 🧠</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-gray-300 text-justify">Collected telemetry is uploaded to Firebase Firestore in structured JSON format for high-speed querying.
          AI-based anomaly detection models perform predictive analytics on space weather fluctuations, radiation anomalies, and communication disruptions.
          The Streamlit Web App enables real-time data visualization, mission analytics, and interactive telemetry dashboards for defense intelligence and aerospace research.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Home;