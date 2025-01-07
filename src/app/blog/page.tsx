import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import fds  from '@/public/fds.jpg'
import fdsi from '@/public/fdsi.jpg'
import efd from '@/public/efd.jpg'


export default function Blog() {
    return (
        <section className="text-[#363b56] body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap mt-16 m-4">
                    <div className="p-4 md:w-1/3 ">
                        <div className="h-full border-2 border-[#363b56] border-opacity-60 rounded-lg overflow-hidden">
                            <Image
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src={fds}
                                alt="blog"
                            />
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                What is Full-Stack Development?
                                </h1>
                                <p className="leading-relaxed mb-3">
                                Full-Stack Development involves creating both the front-end and back-end of web applications, enabling seamless interaction between user interfaces and server functionalities. This approach ensures cohesive performance, efficient data management, and user-friendly experiences.
                                </p>
                                <div className="flex items-center flex-wrap ">
                                    <Link href={"/fds"} className="text-[#363b56] inline-flex items-center md:mb-2 lg:mb-0">
                                        Learn More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx={12} cy={12} r={3} />
                                        </svg>
                                        1.2K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                        </svg>
                                        6
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-[#363b56] border-opacity-60 rounded-lg overflow-hidden">
                            <Image
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src={fdsi}
                                alt="blog"
                            />
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                The Importance of Full-Stack Development
                                </h1>
                                <p className="leading-relaxed mb-3">
                                A Full-Stack Developer has a diverse skill set, enabling them to manage both front-end and back-end tasks. Their versatility allows them to work across the entire development process, adding significant value to any project.
                                </p>
                                <div className="flex items-center flex-wrap">
                                <Link href={"/fdsi"} className="text-[#363b56] inline-flex items-center md:mb-2 lg:mb-0">
                                Learn More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx={12} cy={12} r={3} />
                                        </svg>
                                        1.2K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                        </svg>
                                        6
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-[#363b56] border-opacity-60 rounded-lg overflow-hidden">
                            <Image
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src={efd}
                                alt="blog"
                            />
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                The Journey of 2025 and the Growing Importance of Full-Stack Development
                                </h1>
                                <p className="leading-relaxed mb-3">
                                As we step deeper into 2025, the world of technology continues to evolve at an unprecedented pace. Businesses are adopting digital-first strategies, and software development has become the backbone of modern innovation. .
                                </p>
                                <div className="flex items-center flex-wrap ">
                                    <Link href={"/efd"} className="text-[#363b56] inline-flex items-center md:mb-2 lg:mb-0">
                                    Learn More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx={12} cy={12} r={3} />
                                        </svg>
                                        1.2K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                        </svg>
                                        6
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



