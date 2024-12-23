import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import Domains from '../Components/Domains'
import Application from '../Components/Application'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'
import ScrollingLogos from '../Components/ScrollingLogos'

const Homepage = () => {
    return (
        <div className=" bg-black text-white relative">
            <Navbar />
            <Hero />
            {/* <ScrollingLogos /> */}
            <Features />
            <Domains />
            <Application />
            <div id="contact">
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default Homepage