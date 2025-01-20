import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import emailjs from '@emailjs/browser';
import { ArrowUpRight } from 'lucide-react'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Contact = ({ setIsEmailSuccess }) => {
    const form = useRef();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_zfof658', 'template_a8wnpsa', form.current, 'Lm_Wni6iZVR4wdHdf')
            .then((result) => {
                console.log(result.text);
                toast.success('Thank you for joining the club! We will get back to you soon.');
                setIsEmailSuccess(true);
                navigate('/success');
                form.current.reset();
            }, (error) => {
                toast.error('Failed to submit the form. Please try again.');
                setIsEmailSuccess(false);
                console.log(error.text);
            });
        const url = "https://script.google.com/macros/s/AKfycbxlnWR9c_EqwpBFNI3zodXjLx25iX19rVPI7s0iJmsJxaM1c_EQ4nNlHjnJy8keSNgAug/exec"
        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: (`Name=${form.current.name.value}&Email=${form.current.email.value}&PhoneNo=${form.current.phoneNo.value}&Linkedin=${form.current.linkedin.value}&College=${form.current.college.value}&Passout=${form.current.pass.value}&Domain=${form.current.domain.value}&Proof=${form.current.work.value}&SuperPower=${form.current.superpower.value}&Perspective=${form.current.perspective.value}`)
        }).then(res => res.text()).then(res => console.log(res)).catch(err => console.log(err));
    }

    return (
        <div className="container mx-auto p-4 flex justify-center items-center min-h-screen ">
            <ToastContainer />
            <Card className="w-full sm:w-3/4 md:w-3/5 border-none mt-8 sm:mt-0">
                <CardHeader>
                    <CardTitle className="text-white text-center text-2xl md:text-4xl">Join the Club!</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col space-y-4 justify-center items-center">
                        <form className="w-full" ref={form} onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
                                <div className="flex flex-col space-y-3">
                                    <Label htmlFor="name" className="text-[#727272]">What should we call you</Label>
                                    <Input type="text" name="name" id="name" placeholder="Enter your name" required className="bg-[#1C1C1C] px-2 py-4 border-none text-white" />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <Label htmlFor="email" className="text-[#727272]">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="Enter your email" required className="bg-[#1C1C1C] px-2 py-4 border-none text-white" />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <Label htmlFor="phoneNo" className="text-[#727272]">Phone Number</Label>
                                    <Input type="tel" name="phoneNo" id="phoneNo" placeholder="+91" required className="bg-[#1C1C1C] px-2 py-4 border-none text-white" />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <Label htmlFor="linkedin" className="text-[#727272]">Linkedin Profile</Label>
                                    <Input type="text" name="linkedin" id="linkedin" placeholder="https://www.linkedin.com/" required  className="bg-[#1C1C1C] px-2 py-4 border-none text-white" />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <Label htmlFor="linkedin" className="text-[#727272]">College</Label>
                                    <Input type="college" name="college" id="college" placeholder="Enter your university" required  className="bg-[#1C1C1C] px-2 py-4 border-none text-white" />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <Label htmlFor="linkedin" className="text-[#727272]">Pass out Year</Label>
                                    <Input type="college" name="pass" id="pass" placeholder="Enter your pass out year" required  className="bg-[#1C1C1C] px-2 py-4 border-none text-white" />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <Label htmlFor="linkedin" className="text-[#727272]">What is your domain?</Label>
                                    <Input type="text" name="domain" id="domain" placeholder="Tech Product Marketing or others"  required className="bg-[#1C1C1C] px-2 py-4 border-none text-white" />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <Label htmlFor="linkedin" className="text-[#727272]">Proof of work?</Label>
                                    <Input type="text" name="work" id="work" placeholder="Portfolio or your work link" required  className="bg-[#1C1C1C] px-2 py-4 border-none text-white" />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <Label htmlFor="linkedin" className="text-[#727272]">What’s your personal “superpower” that makes you stand out?</Label>
                                    <textarea type="text" name="superpower" id="superpower" placeholder="Your message" required  className="bg-[#1C1C1C] px-2 py-4 border-none text-white rounded-lg" />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <Label htmlFor="linkedin" className="text-[#727272]">What’s your unique perspective on startups or entrepreneurship?</Label>
                                    <textarea type="text" name="perspective" id="perspective" placeholder="Your message" required  className="bg-[#1C1C1C] px-2 py-4 border-none text-gray-text-white rounded-lg" />
                                </div>
                            </div>
                            <div className="flex justify-center py-4">
                                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 w-full sm:w-auto text-xl">
                                    Join <ArrowUpRight className='w-5 h-5' />
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
