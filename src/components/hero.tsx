import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <section className="text-gray-600 body-font">
        {/* Hero section */}
            <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
                <div className="mt-20 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold  text-[#090c1bbe]">
                        Full-Stack Development:
                        <br className="hidden lg:inline-block" />
                        An Overview
                    </h1>
                    {/* Description paragraph */}
                    <p className="mt-8 mb-8 leading-relaxed">
                        In the fast-evolving field of software development, Full-Stack Development has become a vital skill set. A Full-Stack Developer is a versatile professional proficient in both front-end (client-side) and back-end (server-side) development. This dual expertise allows them to build and manage all layers of a web application, from the user interface to the server and database. Let’s dive into the details of what full-stack development entails, its importance, and how to become one.
                    </p>
                    <div className="flex justify-center">
                        <Link href={"/blog"} className="ml-4 inline-flex text-dark dark:text-light bg-white border-0 py-2 px-6 focus:outline-none  hover:bg-gray-300 rounded text-lg">Learn More</Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                {/* image */}
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="https://media.istockphoto.com/id/1593529081/vector/full-stack-developer-programmer-who-can-work-with-software-and-hardware-part-of-the-service.jpg?s=1024x1024&w=is&k=20&c=tediStv7Xm16heS-Oq39YXQKnOfVhjJE58Frf1o3i_A="
                    />
                </div>
            </div>
        </section>
    )
}
