import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Briefcase, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export default function ForWhom() {
    const targetAudience = [
        {
            icon: <GraduationCap className="h-8 w-8 text-blue-400" />,
            title: "Graduates",
            description: "Entering the job market for the first time",
        },
        {
            icon: <Briefcase className="h-8 w-8 text-green-400" />,
            title: "Career Transitioners",
            description: "Professionals looking to switch industries or roles",
        },
        {
            icon: <TrendingUp className="h-8 w-8 text-red-400" />,
            title: "Experienced Professionals",
            description: "Aiming for their next big career move",
        },
    ]

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-12 text-white"
                >
                    For Whom
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {targetAudience.map((audience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="bg-gray-900 text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border-none cursor-pointer">
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-center">{audience.icon}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <h3 className="font-semibold mb-2">{audience.title}</h3>
                                    <p className="text-sm text-gray-300">{audience.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

