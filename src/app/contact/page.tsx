import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl mt-28 bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Contact Me
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Have a question or want to work together? Fill out the form below to reach me!
        </p>
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-[#363b56] focus:border-[#363b56]"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-[#363b56] focus:border-[#363b56]"
              placeholder="Your Email"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-[#363b56] focus:border-[#363b56]"
              placeholder="Subject"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}              
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-[#363b56] focus:border-[#363b56]"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#363b56] hover:bg-[#363b56] text-white font-medium py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
