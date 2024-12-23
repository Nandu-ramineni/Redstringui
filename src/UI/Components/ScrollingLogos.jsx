import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion'
import Logo from '@/assets/Logo.jpg'
import Logo1 from '@/assets/Avatron.avif'
import Logo2 from '@/assets/campus.avif'
import Logo3 from '@/assets/kodeblue.avif'

const logos = [
    { name: '18startup', image: Logo },
    { name: 'Avatron', image: Logo1 },
    { name: 'Campus', image: Logo2 },
    { name: 'Kodeblue', image: Logo3 },
];
export default function ScrollingLogos() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            const scrollWidth = scrollContainer.scrollWidth;
            const animationDuration = scrollWidth * 0.01; // Adjust speed as needed

            scrollContainer.style.setProperty('--scroll-width', `${scrollWidth}px`);
            scrollContainer.style.setProperty('--animation-duration', `${animationDuration}s`);
        }
    }, []);

    return (
        <section className="py-16  overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2 
                    className="text-4xl font-bold text-center mb-12 text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Startups Building Teams with Us
                </motion.h2>
                <div 
                    ref={scrollRef}
                    className="relative w-full overflow-hidden"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                    }}
                >
                    <div className="flex animate-scroll">
                        {[...logos, ...logos].map((logo, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 w-48 h-48 mx-8  rounded-md shadow-lg overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="p-6 h-full flex items-center justify-center rounded-md ">
                                    <img
                                        src={logo.image}
                                        alt={`${logo.name} logo`}
                                        width={150}
                                        height={150}
                                        className="w-auto max-h-16 rounded-md object-contain"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

