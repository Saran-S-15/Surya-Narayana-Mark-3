import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Briefcase, Linkedin } from "lucide-react";
import kaveen from "../assets/kaveen.png";
import saran from "../assets/saran2.png";
import balaji from "../assets/balaji.png";

const founders = [
  {
    name: "Saran",
    role: "Full Stack Developer",
    image: saran,
    linkedin: "https://www.linkedin.com/in/saran-s-8765b0258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BC5NeUPJjTmaC88LtBXYfxg%3D%3D"
  },
  {
    name: "Balaji",
    role: "Aerospace & Robotics",
    image: balaji,
    linkedin: "https://www.linkedin.com/in/krithick-balaji-ramesh-546245255?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2BYDwziuTQaLRl8jjPWVfg%3D%3D"
  },
  {
    name: "Kaveen",
    role: "Data Scientist",
    image: kaveen,
    linkedin: "https://www.linkedin.com/in/kaveen-kumar-g-8a3044242?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B48jInWSCSsilQEPfkkPaFw%3D%3D"
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-[745px] bg-black text-white px-6 md:px-16 py-12">
      {/* Header Section */}
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          About Us
        </h1>
        <p className="mt-2 text-gray-300 text-lg text-justify">
          N-SKY-ON Aerospace is introducing advancements in mini-satellite <span className="text-purple-400">[Mini Satellite - Femtosats, Picosats, Nanosats, and CubeSats]</span> , missile, and drone technologies into the space industry.
          The company aims at innovative solutions that increase efficacy, reliability, and cost-effectiveness in space exploration and
          defense systems.By integrating state-of-the-art propulsion, navigation, and communication systems, N-SKY-ON Aerospace ensures
          precise satellite deployments, quick out-and-back missile responses, and advanced drone-based surveillance and delivery
          capabilities. The company's research-based approach keeps enhancing, breaking new ground in aerospace engineering and
          spaceflight technology.
        </p>
      </div>

      {/* Icons Section */}
      <div className="flex justify-center gap-10 mt-10 text-purple-400">
        <Globe className="size-10" />
        <Users className="size-10" />
        <Briefcase className="size-10" />
      </div>

      {/* Founders Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            whileHover={{ boxShadow: "0px 10px 20px rgba(168, 85, 247, 0.5)" }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg text-center transition-all duration-300 relative"
          >
            <img
              src={founder.image}
              alt={founder.name}
              className="size-40 object-cover rounded-full mx-auto border-4 border-purple-500 shadow-xl"
            />
            <h2 className="mt-4 text-xl font-bold">{founder.name}</h2>
            <p className="text-purple-400">{founder.role}</p>

            {/* LinkedIn Icon */}
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-purple-500 p-2 rounded-full hover:bg-purple-600 transition"
            >
              <Linkedin className="size-5 text-white" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;