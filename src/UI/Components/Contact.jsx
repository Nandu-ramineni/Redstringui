import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import emailjs from '@emailjs/browser';
import { ArrowUpRight } from 'lucide-react'
import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_zfof658', 'template_a8wnpsa', form.current, 'Lm_Wni6iZVR4wdHdf')
            .then((result) => {
                console.log(result.text);
                toast.success('Thank you for joining the club! We will get back to you soon.');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="container mx-auto p-4 flex justify-center">
            <ToastContainer />
            <Card className="w-full sm:w-3/4 md:w-1/2 border-none">
                <CardHeader>
                    <CardTitle className="text-white text-center text-2xl md:text-4xl">Join the Club!</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col space-y-4 justify-center items-center">
                        <form className="w-full" ref={form} onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
                                <div className="flex flex-col space-y-3">
                                    <Label htmlFor="name" className="text-[#727272]">What should we call you</Label>
                                    <Input type="text" name="name" id="name" placeholder="Enter your name" required className="bg-[#1C1C1C] px-2 py-4 border-none text-gray-400" />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <Label htmlFor="email" className="text-[#727272]">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="Enter your email" required className="bg-[#1C1C1C] px-2 py-4 border-none text-gray-400" />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <Label htmlFor="phoneNo" className="text-[#727272]">Phone Number</Label>
                                    <Input type="tel" name="phoneNo" id="phoneNo" placeholder="+91" required className="bg-[#1C1C1C] px-2 py-4 border-none text-gray-400" />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <Label htmlFor="linkedin" className="text-[#727272]">Linkedin Profile</Label>
                                    <Input type="text" name="linkedin" id="linkedin" placeholder="https://www.linkedin.com/" className="bg-[#1C1C1C] px-2 py-4 border-none text-gray-400" />
                                </div>
                            </div>
                            <div className="flex justify-center py-4">
                                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 w-full sm:w-auto">
                                    Join <ArrowUpRight />
                                </Button>
                            </div>
                        </form>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Contact;
