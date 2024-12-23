import { Card, CardContent } from '@/components/ui/card'
import { Loading03Icon } from 'hugeicons-react'
import React from 'react'

const Application = () => {
    const steps = [
        {
            number: "1",
            title: "Profile Evaluation",
            description: "Our admissions team reaches out to shortlisted applicants post profile evaluation.",
        },
        {
            number: "2",
            title: "Discovery Call",
            description: "⁠Participate in a 20-minute virtual case discussion to demonstrate your skills and attitude.",
        },
        {
            number: "3",
            title: "Final Selection",
            description: "Shortlisted applicants will be personally invited to join our Talent Club.",
        }
    ]

    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                {/* Gradient Background */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at center, rgba(220,38,38,0.2) 0%, rgba(0,0,0,1) 70%)'
                    }}
                />
                
            </div>

            <section className="w-full bg-black  py-16 px-4  z-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Application Process
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        We are handpicking only 30 individuals through a 5-tier interview process.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 ">
                    {steps.map((step, index) => (
                        <Card
                            key={index}
                            className="relative overflow-hidden bg-opacity-10   border-2 border-[#2d2d2d] "
                        >
                            <CardContent className="p-6 py-20 text-center space-y-4">
                                <div className="relative top-14 left-0 w-full h-full flex items-center justify-center opacity-50 text-slate-600">
                                    <span><Loading03Icon className='w-48 h-48 absolute right-14 -top-20 opacity-30 animate-slow-spin tracking-wider text-[28px]'/></span>
                                    <span className="text-[90px] font-bold absolute mt-4">{step.number}</span>
                                </div>
                                <h3 className="text-2xl font-semibold relative z-10 text-gray-200">{step.title}</h3>
                                <p className="text-gray-400 relative z-10">
                                    {step.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        </div>
    )
}

export default Application