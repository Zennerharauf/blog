import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mt-24  w-full bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#090c1bbe]  mb-6 text-center">
          About Me
        </h1>
        <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base md:text-lg">
          Hello! My name is <span className="font-semibold text-[#363b56]">Zennerha Rauf</span>, and I am a passionate and aspiring Full-Stack Developer. My journey in web development began with a deep curiosity about how websites are built and an eagerness to bring creative ideas to life through code.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base md:text-lg">
          I have successfully learned <span className="font-medium text-[#363b56]">HTML</span>, <span className="font-medium text-[#363b56]">CSS</span>, and <span className="font-medium text-[#363b56]">TypeScript</span> and am continuously exploring advanced technologies to enhance my skills. I am currently working with <span className="font-medium text-[#363b56]">Next.js</span> to build dynamic, efficient, and SEO-friendly web applications. One of my ongoing projects is an <span className="font-medium text-[#363b56]">e-commerce store</span> that features a unique design and interactive user experience.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base md:text-lg">
          I prioritize harmonious color combinations, interactivity, and seamless functionality in all my projects. Beyond coding, I start my day with exercise and scrolling through social media to stay inspired and refreshed. I am also preparing for a <span className="font-medium text-[#363b56]">UI/UX Hackathon</span>, which inspires me to sharpen my design and development skills further.
        </p>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
          With a strong passion for web development and a desire to learn and grow, I aspire to create meaningful digital solutions that combine functionality with aesthetics. Let s build something amazing together!
        </p>
      </div>
    </div>
  );
}
