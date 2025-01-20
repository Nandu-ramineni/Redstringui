import React from 'react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate = useNavigate();
    const Handler = () => {
        navigate("/join");
    };
    return (
        <section className="relative pt-24 md:pt-0 md:h-screen flex items-center justify-center overflow-hidden ">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black to-red-600 opacity-20"></div> */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
                    style={{
                        backgroundImage: 'radial-gradient(circle at center, rgba(25,25,25,0.8) 0%, rgba(0,0,0,1) 100%)'
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(40,40,40,0.2) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(40,40,40,0.2) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px',
                        maskImage: 'radial-gradient(circle at center, black 60%, transparent 90%)'
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(60,60,60,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(60,60,60,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '100px 100px',
                        maskImage: 'radial-gradient(circle at center, black 70%, transparent 90%)'
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at center, rgba(220,38,38,0.2) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
                        filter: 'blur(100px)'
                    }}
                />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
            >
                <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-relaxed">
                    Master the Art of Job Hunting with the 
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-relaxed">
                    RedString x 18Startup Program
                </h1>
                </div>
                <p className="mt-4 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-gray-300">
                    Unlock a Proven 4-Step Framework to Secure Your Dream Role. From mindset to offers, we've got you covered in
                    this comprehensive course designed for ambitious professionals.
                </p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-10"
                >
                    <Button
                        size="lg"
                        className="flex m-auto bg-red-600 hover:bg-red-700 text-white px-6 py-4 sm:px-8 sm:py-6 text-lg w-full sm:w-auto"
                        onClick={Handler}
                    >
                        Enroll Now <GoArrowUpRight />
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero