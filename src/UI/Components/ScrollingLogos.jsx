import React from 'react';
import Logo from '@/assets/Logo.jpg'
import Logo1 from '@/assets/Avatron.avif'
import Logo2 from '@/assets/campus.avif'
import Logo3 from '@/assets/kodeblue.avif'
import { motion} from "framer-motion"
const logos = [
    { name: '18startup', image: Logo },
    { name: 'Avatron', image: Logo1 },
    { name: 'Campus', image: Logo2 },
    { name: 'Kodeblue', image: Logo3 },
];
export default function ScrollingLogos() {
    return (
        <section className="py-16  overflow-hidden">
            <div className="mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold text-center mb-8">
                    Startups Building  <br />Teams with Us
                </h2>
            </div>
            <div className='py-4 w-1/2 flex  mx-auto'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-16 justify-center m-auto">
                    {logos.map(({ name, image }) => (
                        <motion.div
                        key={name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                            delay: name * 0.1,
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
                        <div key={name} className="flex flex-col gap-4 justify-center items-center">
                            <img src={image} alt={name} className="h-16 w-auto md:h-20 rounded-md" />
                            <p className='text-gray-400'>{name}</p>
                        </div>
                    </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

