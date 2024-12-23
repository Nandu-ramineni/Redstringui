import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import { BookOpen02Icon, Brain01Icon, Idea01Icon, ThreeDViewIcon, UserGroupIcon } from 'hugeicons-react'

const Features = () => {
    const statsData = [
        { 
            icon: UserGroupIcon, 
            text: "Network & Connect", 
            subtext: "with Industry Leaders" 
        },
        { 
            icon: ThreeDViewIcon, 
            text: "Showcase Talent", 
            subtext: "to Top Founders" 
        },
        { 
            icon: Brain01Icon, 
            text: "Problem Solving", 
            subtext: "Real-World Challenges" 
        },
        { 
            icon: BookOpen02Icon, 
            text: "Case Studies", 
            subtext: "Practical Learning" 
        },
    ]

    const { scrollYProgress } = useScroll();
    const textColor = useTransform(
        scrollYProgress,
        [0, 0.2],
        ["rgb(156, 163, 175)", "rgb(255, 255, 255)"]
    );

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        
        <div className="relative overflow-hidden">
            {/* Background with gradient and grid */}
            <div className="absolute inset-0 z-0">
                {/* Gradient Background */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at center, rgba(220,38,38,0.2) 0%, rgba(0,0,0,1) 70%)'
                    }}
                />
                
                {/* Grid Pattern */}
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
            </div>

            {/* Content */}
            <div className="relative z-10 py-20">
                {/* Main Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="container mx-auto px-4 text-center mb-20"
                >
                    <motion.h1 
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        style={{ color: textColor }}
                    >
                        Network and Showcase yourself
                        <br />
                        to the Top founders
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-400 mb-8"
                    >
                        Be part of an elite club
                    </motion.p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto ">
                        {statsData.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    delay: index * 0.1,
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                className="flex flex-col items-center group pt-8"
                            >
                                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:bg-red-600/20 transition-colors duration-300">
                                    <stat.icon className="w-8 h-8 text-white/80 group-hover:text-red-500 transition-colors duration-300" />
                                </div>
                                <div className="text-lg font-semibold text-white">{stat.text}</div>
                                <div className="text-sm text-gray-400 mt-1">{stat.subtext}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Features