import React from 'react';

const logos = [
    { name: '18startups', svg: '18' },
    { name: 'Avatron', svg: 'A' },
    { name: 'Campus', svg: 'C' },
    { name: 'Kodeblue', svg: 'K' },
    { name: 'Token', svg: 'T' },
];

function LogoSVG({ letter }) {
    return (
        <div className="flex items-center justify-center w-20 h-20 bg-gray-100 shadow-md rounded-full mx-2">
            <span className="text-2xl font-bold text-gray-800">{letter}</span>
        </div>
    );
}

export default function ScrollingLogos() {
    return (
        <section className="py-12 ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Startups Building Teams from us
                </h2>
                <div className="relative overflow-hidden">
                    <div className="flex animate-scroll">
                        {logos.concat(logos).map((logo, index) => (
                            <div key={index} className="flex-shrink-0">
                                <LogoSVG letter={logo.svg} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

