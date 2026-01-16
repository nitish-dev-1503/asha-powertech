'use client'

import Link from "next/link"

export default function ContactModal({ isOpen, onClose, contactInfo }) {
    if (!isOpen) return null

    return (
        <div
            className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'
            onClick={onClose}
        >
            <div
                className='bg-white rounded-lg shadow-lg max-w-md w-full p-6'
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-2xl font-semibold text-neutral-900'>Contact Us</h2>
                    <button
                        onClick={onClose}
                        className='text-gray-400 hover:text-gray-600 transition-colors cursor-pointer'
                        aria-label='Close'
                    >
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    </button>
                </div>

                {/* Contact Information */}
                <div className='space-y-6'>
                    {/* Address */}
                    <div>
                        <h3 className='text-lg font-medium text-neutral-900 mb-2'>Address</h3>
                        <p className='text-neutral-600 leading-relaxed'>
                            {contactInfo.address}
                        </p>
                    </div>

                    {/* Email */}
                    <div>
                        <h3 className='text-lg font-medium text-neutral-900 mb-2'>Email</h3>
                        <div className='flex items-center justify-between gap-3 '>
                            <Link
                                href={`mailto:${contactInfo.email}`}
                                className='text-red-600 hover:text-red-700 hover:underline transition-colors flex-1'
                            >
                                {contactInfo.email}
                            </Link>
                        </div>
                    </div>

                    {/* Mobile */}
                    <div>
                        <h3 className='text-lg font-medium text-neutral-900 mb-2'>Mobile</h3>
                        <div className='flex items-center justify-between gap-3' >
                            <Link
                                href={`tel:${contactInfo.mobile.replace(/\s/g, '')}`}
                                className='text-red-600 hover:text-red-700 hover:underline transition-colors flex-1'
                            >
                                {contactInfo.mobile}
                            </Link>

                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className='mt-8'>
                    <button
                        onClick={onClose}
                        className=' cursor-pointer w-full px-4 py-2 bg-neutral-100 text-neutral-900 rounded-lg hover:bg-neutral-200 transition-colors font-medium'
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}
