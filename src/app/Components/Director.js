import React from 'react'
import Image from 'next/image'

export default function Director() {
  return (
    <div>
       {/* Director Section */}
              <div className="relative px-15 bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8 p-8 md:p-12">
                {/* Left Side - Image */}
                <div className="w-full md:w-1/2">
                  <Image
                    src="/director.jpg"
                    alt="Director Anil Aggarwal"
                    width={540}
                    height={540}
                    className="rounded-xl shadow-md object-cover w-full h-auto"
                    priority
                  />
                </div>
      
                {/* Right Side - Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    Mr. Anil Aggarwal
                  </h3>
                  <p className="text-md text-blue-600 font-medium mb-4">
                    Director, Aggarwal Publicity Marketing Pvt. Ltd.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-3">
                    Mr. Aggarwal is not just a successful businessman—he is a visionary leader whose impact goes beyond the chemical distribution industry. With decades of experience and unwavering dedication, he has guided the company with integrity and innovation.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A true philanthropist, he is also the founder of <strong>Hamara Book Bank</strong>, an NGO dedicated to distributing educational resources to underprivileged children across India. His commitment to both business and society reflects a rare blend of professionalism and compassion.
                  </p>
      
                  <p className="text-lg text-gray-700 font-semibold mt-12 leading-relaxed">
                    “Aggarwal Publicity & Marketing Pvt. Ltd. – Driven by Innovation, Empowered by Compassion”
                  </p>
                </div>
              </div>
    </div>
  )
}
