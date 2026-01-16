'use client'

import React from 'react'
import Link from 'next/link'

export default function Products() {
    const products = [
        {
            id: 'diesel-generator-sets',
            name: 'Diesel Generator Sets',
            description: 'Reliable power generation for industrial and commercial applications',
            image: '/DGS.png',
        },
        {
            id: 'mobile-lighting-towers',
            name: 'Mobile Lighting Towers',
            description: 'Portable lighting solutions for construction and event sites',
            image: '/MLT.png',
        },
    ]

    return (
        <main id='products' className='my-40 py-24 px-4 md:px-16 bg-neutral-100 min-h-screen'>
            <div className=''>
                <div className="my-8">
                    <li className='list-inside font-semibold my-2  text-red-600 uppercase'>Products</li>
                    <h1 className='text-2xl md:text-4xl font-medium'>Explore our range of power and lighting solutions</h1>
                </div>
                <div className=" my-8">
                    <p className="font-medium text-lg">
                        We offer a comprehensive range of diesel generator sets designed for efficiency, durability, and reliable performance.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 font-medium'>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className='relative group overflow-hidden rounded-2xl'>
                            <img src={product.image} className='object-cover w-full rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300' />

                            <div className=' absolute bottom-0 left-0 right-0 top-0 p-4 lg:p-6 bg-linear-to-tr from-black/70 to-black/0 flex flex-col justify-end rounded-lg text-white  '>
                                <h2 className='text-xl sm:text-2xl font-semibold mb-2'>{product.name}</h2>
                                <p className=' mb-6 '>{product.description}</p>
                                <Link
                                    href={`/products/${product.id}`}
                                    className='w-fit py-2 px-4 bg-red-600 text-white text-center rounded-lg hover:bg-red-700 transition-colors  flex items-center justify-center'
                                >View Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}