import React from 'react';
import { Award, CheckCircle, Wrench, Headphones, Target, Eye } from 'lucide-react';

const services = [
    {
        title: "Proven Expertise",
        description: "Years of experience in supplying and supporting generator systems across multiple industries.",
        icon: Award
    },
    {
        title: "Quality You Can Rely On",
        description: "Only genuine, high-performance generators that meet industry standards.",
        icon: CheckCircle
    },
    {
        title: "End-to-End Support",
        description: "From consultation and installation to maintenance and spare parts.",
        icon: Wrench
    },
    {
        title: "24/7 Customer Support",
        description: "Dedicated technical support and emergency assistance whenever you need it.",
        icon: Headphones
    }
];

export default function AboutUsNew() {
    return (
        <main id='about' className=' my-24 py-16 px-4 md:px-16'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mt-12 font-medium">
                <div className='flex flex-col gap-32 justify-between items-start'>
                    <div>
                        <div className="my-8">
                            <li className='list-inside font-semibold my-2  text-red-600 uppercase'>About Us</li>
                            <h1 className='text-2xl md:text-4xl font-medium'>Powering the Future with Reliability</h1>
                        </div>
                        <div className="">
                            <p className="font-medium text-lg">
                                <b>Asha Powertech</b> is a newly launched power solutions company committed to delivering reliable, efficient, and high-performance generator systems for residential, commercial, and industrial needs.
                                <br /><br />
                                Though new in establishment, our team brings strong technical expertise and industry knowledge to ensure every customer receives the right power solution. We believe in building long-term relationships by offering honest guidance, quality products, and dependable after-sales support.
                                <br /><br />
                                At Asha Powertech, we don't just sell generators—we provide complete power solutions designed to keep your life and business running without interruptions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 my-12">
                                <div className="bg-neutral-100 hover:bg-neutral-200 rounded-lg p-6 min-h-70 w-fit max-w-xl">
                                    <div className='flex flex-col gap-3 mb-4'>
                                        <div className='bg-red-600 w-fit p-2 rounded-lg'>
                                            <Target className='w-6 h-6 text-white stroke-1' />
                                        </div>
                                        <h2 className="text-xl font-semibold text-red-600">Our Mission</h2>
                                    </div>
                                    <p>To deliver dependable power solutions backed by professional service and customer-first approach.</p>
                                </div>
                                <div className="bg-neutral-100 hover:bg-neutral-200 rounded-lg p-6 min-h-70 w-fit max-w-xl ">
                                    <div className='flex flex-col gap-3 mb-4'>
                                        <div className='bg-red-600 w-fit p-2 rounded-lg'>
                                            <Eye className='w-6 h-6 text-white stroke-1' />
                                        </div>
                                        <h2 className="text-xl font-semibold text-red-600">Our Vision</h2>
                                    </div>
                                    <p>To become a trusted name in the power solutions industry by consistently delivering quality, reliability, and innovation.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="my-8">
                            <li className='list-inside font-semibold my-2 text-red-600 uppercase'>Services</li>
                            <h1 className='text-2xl md:text-4xl font-medium'>Why choose us</h1>
                        </div>
                        <div className="">
                            <p className="font-medium text-lg">
                                We don't just sell generators—we deliver complete solutions, powering your needs with reliability & expertise
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                                {services.map((service, index) => {
                                    const IconComponent = service.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="bg-neutral-100 hover:bg-neutral-200 rounded-lg p-6 min-h-80 "
                                        >
                                            <div className='mb-4'>
                                                <div className='bg-red-600 w-fit p-2 rounded-lg'>
                                                    <IconComponent className='w-6 h-6 text-white stroke-1' />
                                                </div>
                                                <h3 className="text-lg font-semibold text-red-600 mt-3 mb-2">{service.title}</h3>
                                            </div>
                                            <p className='flex-1'>{service.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-start justify-center'>
                    <img
                        src="/pexels-pixabay.jpg"
                        alt="Power solutions"
                        className="sticky top-20 aspect-square w-full object-cover rounded-2xl m-4"
                    />
                </div>
            </div>
        </main>
    );
}