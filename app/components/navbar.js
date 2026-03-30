'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ContactModal from './contact-modal'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    const navLinks = [
        { label: 'About', href: '/#about' },
        { label: 'Products', href: '/#products' },
        { label: 'Gallery', href: '/#gallery' },
    ]

    const handleSmoothScroll = (e, href) => {
        e.preventDefault()
        const id = href.replace('/#', '')
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const contactInfo = {
        address: 'C4 1st Floor, Harmu Housing Colony, Near Patel Chowk, Ranchi, Jharkhand - 834001',
        email: 'ashapowertech2@gmail.com',
        mobile: '+91 88894 60740',
    }

    return (
        <>
            <nav className='sticky top-0 z-40 backdrop-blur-md'>
                <div className='mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-center h-20'>
                        {/* Logo */}
                        <Link href='/' className='flex items-center'>
                            <Image
                                src='/APT-typo-dark.png'
                                alt='Asha Power Tech Logo'
                                width={200}
                                height={60}
                                className='object-contain'
                            />
                        </Link>

                        {/* Navigation Links Desktop */}
                        <div className='hidden md:flex gap-8 items-center'>
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className='text-neutral-700 hover:text-red-600 transition-colors font-medium cursor-pointer'
                                >
                                    {link.label}
                                </a>
                            ))}

                            {/* Contact Button */}
                            <button
                                onClick={() => setIsContactModalOpen(true)}
                                className='px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium whitespace-nowrap cursor-pointer'
                            >
                                Contact Us
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
                            aria-label='Toggle menu'
                        >
                            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='fixed inset-0 top-20 bg-black/20 backdrop-blur-sm z-30 md:hidden'>
                    <div className='bg-white '>
                        <div className='px-4 py-4 space-y-2 font-medium'>
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => {
                                        handleSmoothScroll(e, link.href)
                                        setIsMenuOpen(false)
                                    }}
                                    className='block px-4 py-2 text-neutral-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors font-medium cursor-pointer'
                                >
                                    {link.label}
                                </a>
                            ))}
                            {/* Contact Button Mobile */}
                            <button
                                onClick={() => setIsContactModalOpen(true)}
                                className='block px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-center w-full'
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Contact Modal */}
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                contactInfo={contactInfo}
            />
        </>
    )
}
