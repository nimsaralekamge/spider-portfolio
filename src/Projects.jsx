import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="w-full min-h-screen bg-[#0a0a0a] text-white py-20 px-6 flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-16 tracking-widest uppercase">
        Featured Missions
      </h2>

      <div className="max-w-6xl w-full flex flex-col gap-32 mt-10">

        {/* ========================================= */}
        {/* PROJECT 1: GAMEZONE                       */}
        {/* ========================================= */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <h3 className="text-6xl font-bold mb-6 tracking-wide drop-shadow-md">
              GameZone
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
              A dynamic e-commerce foundation featuring a seamless frontend user experience and secure backend transaction handling. Optimized for speed and scalability.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <span className="border-2 border-cyan-500 text-cyan-400 px-4 py-2 text-sm font-bold tracking-widest uppercase">React</span>
              <span className="border-2 border-cyan-500 text-cyan-400 px-4 py-2 text-sm font-bold tracking-widest uppercase">C# .NET</span>
              <span className="border-2 border-cyan-500 text-cyan-400 px-4 py-2 text-sm font-bold tracking-widest uppercase">MySQL</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="bg-white text-black border-2 border-white px-8 py-3 font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors">
                View Code
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[500px] aspect-[16/9] border-2 border-white bg-transparent overflow-hidden flex items-center justify-center">
              <img
                src="/gamezone-preview.jpg"
                alt="GameZone UI"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* PROJECT 2: ENTERPRISE WEB APPLICATION     */}
        {/* ========================================= */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[500px] aspect-[16/9] border-2 border-white bg-transparent overflow-hidden flex items-center justify-center">
              <img
                src="/travelmania-preview.jpg"
                alt="Enterprise UI"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-start lg:pl-8">
            <h3 className="text-6xl font-bold mb-6 tracking-wide drop-shadow-md">
              Enterprise Web App
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
              A high-throughput enterprise application engineered to process and manage massive data sets. Built with a robust backend architecture to ensure maximum uptime and zero bottlenecks.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <span className="border-2 border-red-500 text-red-500 px-4 py-2 text-sm font-bold tracking-widest uppercase">Java</span>
              <span className="border-2 border-red-500 text-red-500 px-4 py-2 text-sm font-bold tracking-widest uppercase">Spring Boot</span>
              <span className="border-2 border-red-500 text-red-500 px-4 py-2 text-sm font-bold tracking-widest uppercase">PostgreSQL</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="bg-white text-black border-2 border-white px-8 py-3 font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors">
                View Code
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}