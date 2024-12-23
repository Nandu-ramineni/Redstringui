import { Facebook01Icon, InstagramIcon, Linkedin01Icon, NewTwitterIcon } from 'hugeicons-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <main className="p-4">
            <section className="flex flex-col md:flex-row justify-between items-start md:items-end pb-4 mx-4 border-b border-gray-500 gap-6 md:gap-0">
                {/* Social Media Links */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl text-white">Follow us on</h1>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.linkedin.com/company/redstring-invisible-thread/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin01Icon className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                        </a>
                        <a
                            href="https://www.instagram.com/redstring.connect?igsh=a2lxNnV0d282NDJp/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InstagramIcon className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                        </a>
                        <a
                            href="https://www.twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <NewTwitterIcon className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                        </a>
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Facebook01Icon className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Logo */}
                <div className="flex flex-col items-start md:items-center gap-2">
                    <Link to="/" className="flex items-center">
                        <span className="text-red-600 font-semibold text-3xl tracking-wide">Red</span>
                        <span className="text-white font-semibold text-3xl tracking-wide">string</span>
                    </Link>
                </div>

                {/* Contact Us */}
                <div className="text-left md:text-right">
                    <h1 className="text-xl text-white">Contact us</h1>
                    <a
                        href="mailto:support@redstring@gmail.co"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        support@redstring@gmail.co
                    </a>
                </div>
            </section>

            {/* Footer Bottom */}
            <section className="flex flex-col md:flex-row justify-end items-center pt-4 mx-4 gap-4">
                <p className="text-center text-gray-400 md:text-left">
                    © 2024 RedString. All rights reserved.
                </p>
            </section>
        </main>
    )
}

export default Footer
