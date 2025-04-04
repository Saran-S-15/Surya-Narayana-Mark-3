import React from "react";
import Drone1 from "../assets/Drone1.jpeg";
import Drone2 from "../assets/Drone2.jpeg";
import Drone3 from "../assets/Drone3.jpeg";
import Drone4 from "../assets/Drone4.jpeg";
import DroneVideo from "../assets/Drone.mp4";

const Drone = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto text-center">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text mb-4">
        Drone-Based Mini Satellite Deployment
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 px-4 max-w-6xl mx-auto text-justify">
        Drone-Based Mini Satellite Deployment Payload Up to 1kgMini satellites bring a revolution, called Femtosats, Picosats, Nanosats, and CubeSats, with this Frame Series for penetrating the domains of space and communication. The sophistication with which a satellite is deployed into orbit is part of its operational benefits; launching most of the satellites is extremely expensive, but for those that are less than 1kg, these drones may help reduce the costs by launching them either directly into low-earth orbit (LEO) or at high-altitude missions. The drone is outfitted with a special launch triggering mechanism for ascent to the stratosphere or near space, followed by the release of the satellite, which would obtain an orbit using its own propulsion device or just serve as an atmospheric sensor. This methodology provides the following features: a cost-effective means for payloads up to 1kg through reduced desertion of the costliest rocket launches; GPS-assisted accuracy deployment; flexible locations of launch and fast execution; and sustainability by reducing space debris. Pre-launch preparations, high-altitude ascent, controlled satellite deployment, and post-deployment data analysis comprise the entire deployment process. Applications range from scientific research, monitoring the climate, disaster surveillance, military reconnaissance, communication networks, and educational initiatives. Future development activities will include AI for better accuracy, partnering with space agencies, and further improvement in drone technology. Drone-based mini satellite deployment is thus the future by jumping to and making it possible for satellite missions to be accessible, affordable, and efficient.
      </p>

      {/* Image Grid */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* First three images */}
        {[Drone1, Drone2, Drone3].map((image, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <img
              src={image}
              alt={`Drone ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}

        {/* Fourth Image - Same size as Video */}
        <div className="w-full max-w-4xl p-2">
          <img
            src={Drone4}
            alt="Drone 4"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Video Section */}
      <div className="mt-8 px-4">
        <p className="text-lg font-semibold mb-4 text-gray-200">Drone Demonstration Video</p>
        <div className="relative p-4 rounded-lg bg-white/10 backdrop-blur-lg shadow-lg max-w-4xl mx-auto">
          <video controls className="w-full rounded-lg">
            <source src={DroneVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Drone;