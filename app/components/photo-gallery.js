'use client'
import { useState, useEffect } from 'react'
import ImageViewer from './image-viewer'

export default function PhotoGallery() {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedImage, setSelectedImage] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/api/gallery')
                const data = await response.json()
                setImages(data.images || [])
            } catch (error) {
                console.error('Failed to load gallery images:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchImages()
    }, [])

    const openImage = (image, index) => {
        setSelectedImage(image)
        setCurrentImageIndex(index)
    }

    const goToPrevious = () => {
        const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
        setSelectedImage(images[newIndex])
        setCurrentImageIndex(newIndex)
    }

    const goToNext = () => {
        const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
        setSelectedImage(images[newIndex])
        setCurrentImageIndex(newIndex)
    }

    const closeViewer = () => {
        setSelectedImage(null)
    }

    const selectImage = (index) => {
        openImage(images[index], index)
    }

    if (loading) {
        return (
            <section className='py-16 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-4xl font-bold mb-2'>Gallery</h2>
                    <p className='text-gray-600 mb-12'>Loading gallery...</p>
                </div>
            </section>
        )
    }

    if (images.length === 0) {
        return (
            <section className='py-16 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-4xl font-bold mb-2'>Gallery</h2>
                    <p className='text-gray-600 mb-12'>No images found in gallery</p>
                </div>
            </section>
        )
    }

    return (
        <section id='gallery' className='my-24 py-16 px-4 md:px-16'>
            <div className='mx-auto mt-16'>
                <div className="mx-auto text-center my-8">
                    <li className='list-inside font-semibold my-2 text-red-600 uppercase'>Gallery</li>
                    <h1 className='text-2xl md:text-4xl font-medium'>Our products and projects in action</h1>
                </div>

                {/* Grid Gallery with Multiple Rows */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-max my-8 max-w-5xl mx-auto'>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className='overflow-hidden rounded-2xl cursor-pointer group'
                            onClick={() => openImage(image, index)}
                        >
                            <div className='relative overflow-hidden bg-gray-100 h-80'>
                                <img
                                    src={`/gallery/${image}`}
                                    alt={`Gallery ${index + 1}`}
                                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <ImageViewer
                    isOpen={!!selectedImage}
                    selectedImage={selectedImage}
                    currentImageIndex={currentImageIndex}
                    totalImages={images.length}
                    onClose={closeViewer}
                    onPrevious={goToPrevious}
                    onNext={goToNext}
                    onSelectImage={selectImage}
                    images={images}
                />
            </div>
        </section>
    )
}
