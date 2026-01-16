'use client'

export default function ImageViewer({
    isOpen,
    selectedImage,
    currentImageIndex,
    totalImages,
    onClose,
    onPrevious,
    onNext,
    onSelectImage,
    images
}) {
    if (!isOpen || !selectedImage) return null

    return (
        <div
            className='fixed inset-0 bg-black bg-opacity-30 z-50 flex flex-col'
            onClick={onClose}
        >
            {/* Header */}
            <div className='flex items-center justify-between p-4 bg-white text-black border-b border-gray-200'>
                <span className='text-sm font-medium'>
                    {currentImageIndex + 1} / {totalImages}
                </span>
                <button
                    onClick={onClose}
                    className='hover:text-gray-500 transition-colors w-10 h-10 flex items-center justify-center'
                    aria-label='Close image viewer'
                >
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                    </svg>
                </button>
            </div>

            {/* Image Container */}
            <div 
                className='flex-1 flex items-center justify-center px-4 py-8 overflow-auto bg-white'
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={`/gallery/${selectedImage}`}
                    alt='Full screen'
                    className='max-w-full max-h-full object-contain'
                />
            </div>

            {/* Navigation Footer */}
            <div className='flex items-center justify-center gap-6 p-4 bg-white text-black border-t border-gray-200'>
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        onPrevious()
                    }}
                    className='px-3 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg transition-all flex items-center justify-center'
                    aria-label="Previous image"
                >
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                    </svg>
                </button>

                <div className='flex gap-2'>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation()
                                onSelectImage(index)
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${
                                currentImageIndex === index
                                    ? 'bg-black w-6'
                                    : 'bg-gray-400 hover:bg-gray-500'
                            }`}
                            aria-label={`View image ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        onNext()
                    }}
                    className='px-3 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg transition-all flex items-center justify-center'
                    aria-label="Next image"
                >
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                </button>
            </div>
        </div>
    )
}
