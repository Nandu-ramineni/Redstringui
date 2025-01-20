import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const parts = [
    {
        title: "Part A: Prepping Mentally for the Hunt",
        items: ["Patience", "The Mental Model", "Career Value System"],
    },
    {
        title: "Part B: Sharpening the Harpoon",
        items: [
            "Creating a Sharp CV",
            "Making an Impressionable LinkedIn Profile",
            "Writing a Cover Letter",
            "Writing a Cold Email",
            "Tracking Software",
        ],
    },
    {
        title: "Part C: Knowing the Animal",
        items: ["Researching Companies", "Shortlisting Companies"],
    },
    {
        title: "Part D: Hunt Begins",
        items: ["Follow-ups", "Two-Way Interviews", "Understanding the Offers", "Closing on the Best Offer"],
    },
]

export default function ProgramStructure() {
    const [expandedIndex, setExpandedIndex] = useState(null)

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
                >
                    <span className="text-red-600">Program</span> Structure
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-gray-300 mb-8 text-center"
                >
                    This program draws inspiration from the successful Pre-Incubation model by 18Startup and introduces a
                    career-focused approach. Delivered in 5 online sessions, the program is divided into four comprehensive parts:
                </motion.p>
                <div className="space-y-4">
                    {parts.map((part, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-900 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleExpand(index)}
                                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-[#C7C7C7] focus:ring-opacity-50"
                                aria-expanded={expandedIndex === index}
                                aria-controls={`content-${index}`}
                            >
                                <h3 className="text-md md:text-xl font-semibold text-white">{part.title}</h3>
                                {expandedIndex === index ? (
                                    <ChevronUp className="w-6 h-6 text-[#C7C7C7]" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-[#C7C7C7]" />
                                )}
                            </button>
                            <AnimatePresence>
                                {expandedIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        id={`content-${index}`}
                                    >
                                        <ul className="px-6 py-4 space-y-2 text-gray-300">
                                            {part.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-center">
                                                    <span className="w-2 h-2 bg-[#C7C7C7] rounded-full mr-2"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

