
import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { ChevronRight, Zap, Users, Video, FileEdit } from "lucide-react"
const ProgramOverview = () => {
    const features = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Expert-led Sessions",
            description: "Gain insights from industry leaders",
        },
        {
            icon: <Video className="w-6 h-6" />,
            title: "Exclusive Recordings",
            description: "Access cohort content anytime",
        },
        {
            icon: <FileEdit className="w-6 h-6" />,
            title: "Live Templates",
            description: "Apply learning with editable resources",
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Community Approach",
            description: "Collaborate and grow with peers",
        },
    ]

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
                >
                    Program <span className="text-red-600">Overview</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-sm md:text-lg text-gray-300 mb-8 text-center max-w-3xl mx-auto"
                >
                    The RedString x 18Startup co-branded program is designed to empower individuals with a step-by-step roadmap to
                    achieve career success. Whether you're starting fresh, transitioning industries, or seeking to elevate your
                    career, this program equips you with the tools and mindset needed to excel.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gray-900 flex flex-col justify-center p-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="text-red-600 mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProgramOverview

