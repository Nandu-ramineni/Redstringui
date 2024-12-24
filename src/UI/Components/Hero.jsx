import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative min-h-[100vh] flex justify-center items-center m-auto">
            {/* Scoped Background Layers */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Gradient Background */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
                    style={{
                        backgroundImage: 'radial-gradient(circle at center, rgba(25,25,25,0.8) 0%, rgba(0,0,0,1) 100%)'
                    }}
                />
                {/* Enhanced Grid Pattern */}
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
                {/* Larger Grid Overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(60,60,60,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(60,60,60,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '100px 100px',
                        maskImage: 'radial-gradient(circle at center, black 70%, transparent 90%)'
                    }}
                />
                {/* Centered Gradient Glow */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at center, rgba(220,38,38,0.2) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
                        filter: 'blur(100px)'
                    }}
                />
            </div>

            {/* Hero Content */}
            <main className="container mx-auto px-4 pt-24 sm:pt-32 pb-16 sm:pb-32 text-center relative overflow-hidden z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 tracking-tight">
                    India&apos;s Elite
                    <br />
                    Startup Talent Club
                </h1>
                <div className="max-w-2xl mx-auto mb-12">
                    <p className="text-lg sm:text-xl text-gray-400">
                        Building the Community of
                        <br />
                        <span className="text-white font-semibold">Disruptive Talent</span> 
                    </p>
                </div>
                <Link to="/join">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 sm:px-8 sm:py-6 text-lg w-full sm:w-auto">
                    Join the club
                </Button>
                </Link>
            </main>
        </div>
    )
}

export default Hero;
