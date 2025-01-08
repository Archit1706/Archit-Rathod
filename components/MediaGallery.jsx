import React, { useState } from 'react';
import Image from 'next/image';

const ImageGallery = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(null);

    const openImage = (index) => {
        setCurrentIndex(index);
    };

    const closeImage = () => {
        setCurrentIndex(null);
    };

    const goPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <>
            {/* Grid Layout */}
            <div className="grid grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
                        onClick={() => openImage(index)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Carousel */}
            {currentIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-[1000] p-4"
                    onClick={closeImage}
                >
                    <div
                        className="relative max-w-[90%] max-h-[90%] w-full h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute -top-10 right-0 text-white text-4xl cursor-pointer z-10"
                            onClick={closeImage}
                        >
                            &times;
                        </button>

                        <Image
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            width={images[currentIndex].width}
                            height={images[currentIndex].height}
                            className="w-full h-full object-contain rounded-lg"
                        />

                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-4 mb-4">
                            <button
                                className="text-white text-4xl hover:scale-110 transition-transform"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goPrev();
                                }}
                            >
                                &#10094;
                            </button>
                            <button
                                className="text-white text-4xl hover:scale-110 transition-transform"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goNext();
                                }}
                            >
                                &#10095;
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageGallery;