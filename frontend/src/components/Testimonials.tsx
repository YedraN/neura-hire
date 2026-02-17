import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
    return (
        <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className=""
                >
                    <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
                        {testimonial.avatar ? (
                            <Image
                                src={testimonial.avatar}
                                alt={`${testimonial.name} avatar`}
                                width={50}
                                height={50}
                                className="rounded-full shadow-md"
                            />
                        ) : (
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11a4 4 0 10-8 0 4 4 0 008 0zM12 14v7" />
                                </svg>
                            </div>
                        )}
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-secondary">{testimonial.name}</h3>
                            <p className="text-sm text-foreground-accent">{testimonial.role}</p>
                        </div>
                    </div>
                    <p className="text-foreground-accent text-center lg:text-left">&quot;{testimonial.message}&quot;</p>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
