import React from 'react'
import Hero from './Hero'
import ProgramOverview from './ProgramOverview'
import ProgramStructure from './ProgramStructure'
import Benefits from './Benefits'
import HowItWorks from './HowItWorks'
import ForWhom from './ForWhom'
import Advantage from './Advantage'
import Enrollment from './Enrollment'
import Footer from '@/UI/Components/Footer'

const Incubation = () => {
    return (
        <main className='min-h-screen'>
            <Hero />
            <ProgramOverview />
            <ProgramStructure />
            <Benefits />
            <HowItWorks />
            <ForWhom />
            <Advantage />
            <Enrollment />
            <Footer />
        </main>
    )
}

export default Incubation