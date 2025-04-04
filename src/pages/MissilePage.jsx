import React from "react";
import srv from "../assets/srv.mp4";

const MissilePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* 🔹 Content Section */}
      <div className="max-w-3xl text-center mb-8">
        <h1 className="text-3xl font-bold text-purple-600">Mini Liquid Engine</h1>
        <p className="text-lg text-gray-700 mt-4 text-justify mx-auto">
          The Mini Liquid Engine is designed as a compact propulsion system for
          high efficiency and reliability in small-scale aerospace applications.
          Lightweight but rugged in performance, it uses a liquid propellant
          combination to achieve controlled thrust, stable flight, and precision
          maneuvering.
        </p>
        <p className="text-lg text-gray-700 mt-4 text-justify mx-auto">
          Ideal for mini satellites, drones, and experimental space vehicles,
          this propulsion system is characterized by scalable thrust settings
          while optimizing energy efficiency. Advanced cooling and ignition
          principles are incorporated for improved performance and engine life.
        </p>
        <p className="text-lg text-gray-700 mt-4 text-justify mx-auto">
          Innovative and flexible, the Mini Liquid Engine represents progress in
          developing cost-efficient and versatile propulsion solutions for
          contemporary aerospace requirements.
        </p>
      </div>

      {/* 🔹 Video Section */}
      <div className="w-full max-w-6xl neumorphism">
        <video
          src={srv}
          className="w-full h-auto rounded-xl shadow-lg"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default MissilePage;