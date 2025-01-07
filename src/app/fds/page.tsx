import React from 'react'

export default function Fds() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <h2 className="sm:text-3xl mt-20 text-2xl text-[#090c1bbe] font-medium title-font md:w-2/5">
                    What is Full-Stack Development?
                </h2>
                <p className="leading-relaxed mt-6">
                    Full-Stack Development refers to the process of developing both the front-end and back-end of a web application. These two sides are essential components:
                    <div className="leading-relaxed mt-1 mb-1 text-xl text-[#363b56]"> Front-End Development (Client-Side):</div>
                   
                    This involves creating the user interface (UI) and user experience (UX). It focuses on what users see and interact with directly, such as web pages, buttons, forms, and layouts.

                    Technologies used: HTML, CSS, JavaScript, React.js, Angular, Vue.js, Bootstrap, etc.
                    <div className="leading-relaxed mt-1 mb-1 text-xl text-[#363b56]">Back-End Development (Server-Side):</div>
                    
                    This involves building the server, database, and application logic. It focuses on handling user requests, managing data, and ensuring the application works smoothly behind the scenes.

                    Technologies used: Node.js, Python, Ruby, PHP, Java, MongoDB, MySQL, etc.

                </p>
            </div>
        </section>
    )
}


