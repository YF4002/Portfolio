"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

const VolunteerSection = () => {
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setLightboxSrc(null);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);
    const topsail = [
        'Supported conservation initiatives by building protective fencing, clearing wildlife trails, and restoring habitats for endangered species.',
        'Collaborated with park staff and volunteers to ensure safety, punctuality, and team efficiency.',
    ];

    const habitat = [
        'Contributed to construction of homes for underserved families, applying project management and teamwork skills in a fast-paced, collaborative environment.',
        'Worked alongside mentors to gain insight into effective planning, safety, and quality practices.',
    ];

    const topsailImages = ['/TSHP1.jpeg', '/TSHP2.jpeg', '/TSHP3.jpeg', '/TSHP4.jpeg', '/TSHP5.jpeg'];
    const habitatImages = ['/HFH1.jpeg', '/HFH2.jpeg', '/HFH3.jpeg'];

    return (
        <>
        <section className="pt-2 pb-6 px-6 bg-white dark:bg-gray-900 flex-1 flex flex-col justify-start w-full">
            <div className="w-full space-y-5">
                <header>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center md:text-left">Volunteer & Achievements</h3>
                    <div className="mt-2 h-px bg-gray-200 dark:bg-gray-700 w-full" />
                </header>

                <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-md font-medium text-gray-900 dark:text-white">Student Volunteer — Topsail Hill Preserve State Park</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Mar 2025 • Destin, Florida</p>
                            </div>
                        </div>

                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                            {topsail.map((item, idx) => (
                                <li key={idx} className="py-1">{item}</li>
                            ))}
                        </ul>

                        <div className="mt-3 grid grid-cols-3 gap-2">
                            {topsailImages.map((src) => (
                                <button
                                    key={src}
                                    onClick={() => setLightboxSrc(src)}
                                    className="relative w-full h-24 rounded-md overflow-hidden border p-0"
                                    aria-label={`Open image ${src}`}
                                >
                                    <Image src={src} alt="Topsail" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-md font-medium text-gray-900 dark:text-white">Student Volunteer — Habitat for Humanity South Carolina</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Mar 2024 • Johns Island, South Carolina</p>
                            </div>
                        </div>

                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                            {habitat.map((item, idx) => (
                                <li key={idx} className="py-1">{item}</li>
                            ))}
                        </ul>

                        <div className="mt-3 grid grid-cols-3 gap-2">
                            {habitatImages.map((src) => (
                                <button
                                    key={src}
                                    onClick={() => setLightboxSrc(src)}
                                    className="relative w-full h-24 rounded-md overflow-hidden border p-0"
                                    aria-label={`Open image ${src}`}
                                >
                                    <Image src={src} alt="Habitat for Humanity" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {lightboxSrc && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
                onClick={() => setLightboxSrc(null)}
                role="dialog"
                aria-modal="true"
            >
                <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                    <button
                        className="absolute top-2 right-2 text-white bg-black bg-opacity-40 rounded-full p-1"
                        onClick={() => setLightboxSrc(null)}
                        aria-label="Close image"
                    >
                        ✕
                    </button>
                    <img src={lightboxSrc as string} alt="Enlarged" className="w-full h-auto max-h-[90vh] object-contain rounded" />
                </div>
            </div>
        )}
        </>
    );
};

export default VolunteerSection;

// Lightbox overlay (rendered at bottom of file so it's easy to locate)
