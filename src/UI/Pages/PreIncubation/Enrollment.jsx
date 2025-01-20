import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export default function Enrollment() {
    const navigate = useNavigate();
    const Handler = () => {
        navigate("/join");
    };
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-500"
                >
                    Enrollment Details
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Card className="bg-gray-900 border-none  text-white shadow-lg  max-w-2xl mx-auto rounded-lg ">
                        <CardHeader>
                            <CardTitle className="text-center text-2xl font-semibold text-white">
                                Transform Your Career Today
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex flex-col items-center text-lg">
                                <p className="text-center">
                                    <strong className="text-blue-400">Duration:</strong> 5 online sessions over 2 weeks
                                </p>
                                <p className="text-center">
                                    <strong className="text-red-400">Format:</strong> Live and recorded sessions with assignments
                                </p>
                                <p className="text-center">
                                    <strong className="text-green-400">Fee:</strong> Competitive pricing with early-bird discounts
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-12 text-center"
                >
                    <Button
                        onClick={Handler}
                        size="lg"
                        className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-lg shadow-lg shadow-pink-500/30 transform transition-transform hover:scale-110"
                    >
                        Enroll Now to Transform Your Career! <GoArrowUpRight className="text-lg"/>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
