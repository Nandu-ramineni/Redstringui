import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Logo from '@/assets/Main1.jpg';
import Logo1 from '@/assets/Logo.jpg'
export default function Advantage() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto space-y-8 ">
            <div className="flex justify-center items-center space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center items-center gap-4"
                >
                    <img src={Logo} alt="RedString x 18Startup" className="w-60 h-auto" /> 
                    <p>X</p>
                    <img src={Logo1} alt="RedString x 18Startup" className="w-16 h-auto rounded-md" />
                </motion.div>
            </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-lg text-gray-300 text-center max-w-5xl mx-auto">
                                Our partnership leverages RedString's expertise in connecting talent with startups and 18Startup's
                                proven methodologies for structured career growth. Together, we offer a comprehensive solution for
                                career success.
                            </p>
                </motion.div>
            </div>
            
        </section>
    )
}

