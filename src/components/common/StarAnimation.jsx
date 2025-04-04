import React from "react";
import { motion } from "framer-motion";

const StarAnimation = () => {
    return (
        <div className="hidden md:block md:w-1/2 relative overflow-hidden">
            {/* Deep Space Background with a Nebula Glow */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0  opacity-80"></div>
                {/* Central Cosmic Object (Planet) */}
                <div className="absolute w-full h-full flex items-center justify-center">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-80 h-80 lg:w-96 lg:h-96"
                    >
                        {/* Rotating Star Trails */}
                        {[...Array(3)].map((_, index) => (
                            <motion.div
                                key={index}
                                animate={{ rotate: 360 }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 5 + index * 2,
                                    ease: "linear",
                                }}
                                className="absolute w-full h-full"
                            >
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-[3px] h-[3px] bg-white rounded-full shadow-lg"
                                        animate={{ scale: [1, 1.4, 1] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 1.5,
                                            delay: i * 0.2,
                                            ease: "easeInOut",
                                        }}
                                        style={{
                                            top: `${Math.sin((i / 8) * Math.PI * 2) * (40 + index * 5) + 50}%`,
                                            left: `${Math.cos((i / 8) * Math.PI * 2) * (40 + index * 5) + 50}%`,
                                        }}
                                    ></motion.div>
                                ))}
                            </motion.div>
                        ))}

                        {/* Glowing Planet with a Nebula Aura */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.85, 1] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            className="absolute w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl"
                        ></motion.div>

                        {/* Aura Effect (Nebula Glow) */}
                        <div className="absolute w-40 h-40 lg:w-48 lg:h-48 bg-purple-500 opacity-20 blur-[50px] rounded-full"></div>
                        <div className="absolute w-52 h-52 lg:w-60 lg:h-60 bg-pink-500 opacity-15 blur-[70px] rounded-full"></div>
                    </motion.div>
                </div>

                {/* Floating & Twinkling Stars */}
                <div className="absolute w-full h-full">
                    {[...Array(80)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white rounded-full"
                            style={{
                                width: `${Math.random() * 2.5 + 1}px`,
                                height: `${Math.random() * 2.5 + 1}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                opacity: Math.random() * 0.8 + 0.2,
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 3,
                            }}
                        ></motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StarAnimation;