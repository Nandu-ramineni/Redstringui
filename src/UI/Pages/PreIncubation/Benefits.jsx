import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Target, Navigation, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function Benefits() {
    const benefits = [
        {
            icon: <Target className="h-8 w-8 text-red-400" />,
            title: "Gain clarity on career goals",
            description: "Define your professional objectives and develop strategies to achieve them.",
        },
        {
            icon: <Award className="h-8 w-8 text-blue-400" />,
            title: "Build standout applications",
            description: "Create job application assets that capture attention and showcase your unique value.",
        },
        {
            icon: <Navigation className="h-8 w-8 text-green-400" />,
            title: "Navigate with confidence",
            description: "Learn to confidently traverse the job market with expert guidance and proven strategies.",
        },
        {
            icon: <Users className="h-8 w-8 text-purple-400" />,
            title: "Join a supportive community",
            description: "Connect with like-minded professionals and build a network that propels your career forward.",
        },
    ]

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 ">
            <div className="absolute inset-0 z-0">
                {/* Gradient Background */}

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
            <div className="relative max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
                >
                    Key Benefits
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="bg-gray-900 text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border-none">
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-center">{benefit.icon}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-gray-300">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

