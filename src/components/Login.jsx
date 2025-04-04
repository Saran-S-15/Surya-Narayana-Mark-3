import React from "react";
import { Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StarAnimation from "./common/StarAnimation";
import Input from "./common/Input";

const Login = () => {
    return (
        <div className="flex flex-col md:flex-row h-[745px] w-full bg-black text-white">
            <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-16 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-md mt-30 md:mt-0"
                >
                    <h2 className="text-3xl font-bold text-purple-500 text-center">
                        Welcome Back! 🚀
                    </h2>
                    <p className="text-gray-400 text-center mt-2">
                        Enter your details to access the stars ✨
                    </p>

                    <motion.form
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-8 space-y-6"
                    >
                        <div className="relative">
                            <Input type="email" placeholder="Email" Icon={Mail} />
                        </div>

                        <div className="relative">
                            <Input type="password" placeholder="Password" Icon={Lock} />
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all duration-300 py-3 text-lg font-semibold rounded-lg"
                        >
                            Login
                        </motion.button>
                    </motion.form>

                    <p className="text-center text-gray-400 mt-6">
                        New here?{" "}
                        <Link to={"/signup"} className="text-purple-400 hover:text-pink-400">
                            Create an account
                        </Link>
                    </p>
                </motion.div>
            </div>

            <StarAnimation />

        </div>
    );
};

export default Login;