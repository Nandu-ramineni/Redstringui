import React from 'react'
import { motion } from "framer-motion"

const Domains = () => {
    const domains = [
        {
            title: "Technology",
            description: "Empowering tech enthusiasts, developers, and innovators to make impactful tech for startups.",
            image: "https://img.freepik.com/premium-photo/tech-hologram-futuristic-overlay-tablet-with-statistics-investment-team-planning-finance-hologram-analytics-information-technology-with-employee-group-working-collaboration_590464-144881.jpg?w=360"
        },
        {
            title: "Marketing",
            description: "Connecting creative strategists, data-driven marketers, and growth hackers with startups eager to make an impact.",
            image: "https://img.freepik.com/free-photo/smiling-caucasian-woman-startup-office-doing-business-presentation-big-tv-screen-with-charts-front-team-confident-employee-presenting-growing-sales-statistics-late-night-meeting_482257-43087.jpg?t=st=1734936510~exp=1734940110~hmac=e3a1f7fc62b24644384f51e06146eac8f29c3ab312ca8991fb170349cd57242d&w=1060"
        },
        {
            title: "Product",
            description: "Bringing together product managers, designers, and UX/UI experts to build game-changing products that startups need to succeed.",
            image: "https://img.freepik.com/free-photo/medium-shot-people-talking-office_23-2149345220.jpg?t=st=1734938726~exp=1734942326~hmac=268fbc62bc965637a0264a7ec7b3b8a19df9d85c4f5026c6a90016079fd8d1fd&w=1060"
        }
    ]

    return (
        <div className="relative  text-white overflow-hidden py-12">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Gradient Background */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
                    style={{
                        backgroundImage: 'radial-gradient(circle at center, rgba(25,25,25,0.8) 0%, rgba(0,0,0,1) 100%)'
                    }}
                />
                {/* Enhanced Grid Pattern */}
                
                {/* Larger Grid Overlay */}
                
                {/* Centered Gradient Glow */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at center, rgba(220,38,38,0.2) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
                        filter: 'blur(100px)'
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Our Domains of <span className='text-red-600'>Focus</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {domains.map((domain, index) => (
                        <motion.div
                            key={domain.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="group relative overflow-hidden rounded-xl"
                        >
                            {/* Card Background with Grid */}
                            <div className="absolute inset-0 bg-red-900/20 rounded-xl">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: `linear-gradient(to right, rgba(40,40,40,0.1) 1px, transparent 1px),
                                          linear-gradient(to bottom, rgba(40,40,40,0.1) 1px, transparent 1px)`,
                                        backgroundSize: '20px 20px'
                                    }}
                                />
                            </div>

                            {/* Glowing Border */}
                            <div className="absolute inset-0 rounded-3xl border border-red-500/20" />

                            {/* Image Container */}
                            <div className="aspect-[4/5] relative">
                                <img
                                    src={domain.image}
                                    alt={domain.title}
                                    className="w-full h-full object-cover object-center opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                                />
                                {/* Image Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/80 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="mb-2">
                                    <h3 className="text-xl  font-bold mb-2 text-white group-hover:text-red-600 transition-colors duration-300">
                                        {domain.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-sm ">
                                        {domain.description}
                                    </p>
                                </div>

                                {/* Bottom Grid Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-red-600/50 via-red-600/20 to-transparent" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Domains
