'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='bg-neutral-900 text-white mt-16'>
            <div className=' mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-8'>
                    {/* Company Info */}
                    <div>
                        <Image
                            src='/APT-typo-light.png'
                            alt='Asha Power Tech Typography'
                            width={200}
                            height={50}
                            className='object-contain mb-4'
                        />
                        <p className='text-neutral-400 mb-4'>
                            Reliable power and lighting solutions for industrial and commercial applications.
                        </p>
                        {/* <hr className='border-t border-neutral-700 my-4'></hr> */}
                        <p className='text-neutral-400 mb-4 '>
                            C4 1st Floor, Harmu Housing Colony <br />
                            Near Patel Chowk <br />
                            Ranchi, Jharkhand - 834001
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className='text-lg font-medium mb-4'>Quick Links</h4>
                        <ul className='space-y-2'>
                            <li>
                                <Link href='/' className='text-neutral-400 hover:text-red-600 transition-colors'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href='/products' className='text-neutral-400 hover:text-red-600 transition-colors'>
                                    Products
                                </Link>
                            </li>
                            <li>
                                <a href='/#gallery' className='text-neutral-400 hover:text-red-600 transition-colors'>
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href='/#about' className='text-neutral-400 hover:text-red-600 transition-colors'>
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className='text-lg font-medium mb-4'>Products</h4>
                        <ul className='space-y-2'>
                            <li>
                                <Link
                                    href='/products/diesel-generator-sets'
                                    className='text-neutral-400 hover:text-red-600 transition-colors'
                                >
                                    Diesel Generators
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/products/mobile-lighting-towers'
                                    className='text-neutral-400 hover:text-red-600 transition-colors'
                                >
                                    Lighting Towers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className='text-lg font-medium mb-4'>Contact</h4>
                        <ul className='space-y-2 text-neutral-400'>

                            <li>
                                <a
                                    href='mailto:contact@ashapowertech.com'
                                    className='hover:text-red-600 transition-colors'
                                >
                                    ashapowertech2@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href='tel:+1234567890'
                                    className='hover:text-red-600 transition-colors'
                                >
                                    +91 8889460740
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className='border-t border-neutral-700 pt-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <p className='text-neutral-400 text-sm'>
                            &copy; {currentYear} Asha Power Tech. All rights reserved.
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    )
}
