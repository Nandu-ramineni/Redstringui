import { motion } from "framer-motion";
import Work from "@/assets/work.png";
import { Video, PlayCircle, FileEdit, Users } from "lucide-react"
export default function HowItWorks() {
    const steps = [
        {
            number: 1,
            title: "Live Sessions",
            icon: <Video className="w-6 h-6 text-blue-400" />,
            description: "Engage with instructors in real-time.",
        },
        {
            number: 2,
            title: "Access Recordings",
            icon: <PlayCircle className="w-6 h-6 text-green-400" />,
            description: "Revisit Cohort I & II insights on-demand.",
        },
        {
            number: 3,
            title: "Hands-On Resources",
            icon: <FileEdit className="w-6 h-6 text-red-600" />,
            description: "Use live templates for resumes, cover letters, and more.",
        },
        {
            number: 4,
            title: "Collaborative Community",
            icon: <Users className="w-6 h-6 text-purple-400" />,
            description: "Share progress and gain feedback from peers.",
        },
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
                >
                    How It <span className="text-red-600">Works</span>
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                    {/* Steps Section */}
                    <div className="space-y-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start"
                            >
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-500 text-white text-lg font-bold mr-6">
                                    {step.number}
                                </div>
                                <div>
                                    <h3 className="text-xl flex gap-2 font-semibold text-white mb-2">
                                        {step.icon}{step.title}
                                    </h3>
                                    <p className="text-gray-300">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex justify-center "
                    >
                        <img
                            src={Work}
                            alt="work"
                            className="w-full max-w-sm rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
