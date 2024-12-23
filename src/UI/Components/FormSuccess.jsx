import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUpRight, CheckCircleIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
const FormSuccess = () => {
    return (
        <div className="container mx-auto p-4 flex justify-center items-center min-h-screen ">
            <Card className="w-full sm:w-3/4 md:w-3/5 lg:w-1/2 border-none  text-white">
                <CardHeader>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <CheckCircleIcon className="w-24 h-24 mx-auto text-green-500" />
                    </motion.div>
                    <CardTitle className="text-center text-3xl md:text-4xl mt-4">Welcome!</CardTitle>
                </CardHeader>
                <CardContent>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <p className="text-center text-xl mb-6">
                            Thank you for joining our club! We're excited to have you on board.
                        </p>
                        <p className="text-center text-lg mb-8">
                            We'll review your application and get back to you soon. In the meantime, you can join our waiting list for exclusive updates.
                        </p>
                        <div className="flex justify-center">
                            <a href="https://chat.whatsapp.com/JEdDvuzLVWF8g8eeV3cSbm" target='_blank'>
                                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-xl">
                                    Join Waiting List <ArrowUpRight className='w-5 h-5 ml-2' />
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </CardContent>
            </Card>
        </div>
    )
}

export default FormSuccess