import React, { useState, useEffect } from 'react';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-yellow-500/30 selection:text-yellow-200 overflow-x-hidden relative cursor-none">
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 25s linear infinite; }
        
        /* 100% SAFE PURE CSS LOAD ANIMATIONS */
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }

        .film-grain {
          pointer-events: none;
          position: fixed;
          inset: 0;
          z-index: 50;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* CINEMATIC FILM GRAIN */}
      <div className="film-grain"></div>

      {/* CUSTOM INVERTED CURSOR */}
      <div 
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 border border-yellow-500 rounded-full z-[100] transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-transform duration-75 ease-out flex items-center justify-center"
        style={{ left: mousePos.x, top: mousePos.y }}
      >
        <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
      </div>

      {/* INTERACTIVE SPOTLIGHT */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(202,138,4,0.08), transparent 40%)`
        }}
      />

      {/* GLASS NAVBAR */}
      <nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#020202]/50 backdrop-blur-3xl transition-all animate-fade-up">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-xs font-black tracking-[0.4em] uppercase text-white">
            Nimsara<span className="text-yellow-500">Lekamge</span>
          </h1>
          <div className="hidden md:flex gap-10 text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">
            <a href="#services" className="hover:text-yellow-500 hover:tracking-[0.4em] transition-all duration-300 cursor-none">Services</a>
            <a href="#systems" className="hover:text-yellow-500 hover:tracking-[0.4em] transition-all duration-300 cursor-none">Systems</a>
            <a href="#contact" className="hover:text-yellow-500 hover:tracking-[0.4em] transition-all duration-300 cursor-none">Contact</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20">
        
        {/* SEAMLESS SPLIT-PANE HERO */}
        <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 gap-16 relative">
          
          {/* LEFT: SHARP TYPOGRAPHY */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-20 pt-10">
            
            <div className="animate-fade-up delay-100 group relative overflow-hidden inline-flex items-center gap-3 px-5 py-2 border border-white/10 bg-[#0a0a0a] text-[10px] font-mono font-bold text-gray-400 mb-8 tracking-[0.3em] uppercase cursor-none">
              <div className="absolute inset-0 w-full h-full bg-yellow-500/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              
              {/* FIXED ALIGNED INDICATOR */}
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full bg-yellow-500 opacity-80"></span>
                <span className="relative inline-flex h-1.5 w-1.5 bg-yellow-500"></span>
              </span>
              
              Software Developer
            </div>

            {/* HERO TITLE */}
            <h2 className="animate-fade-up delay-200 text-6xl md:text-[6rem] lg:text-[7.5rem] font-black tracking-tighter mb-4 leading-[0.9] uppercase relative cursor-none select-none group">
              <span className="block text-white mb-2 transition-transform duration-700 group-hover:-translate-y-1">HI, I'M</span>
              <span className="block text-transparent [-webkit-text-stroke:2px_#ca8a04] group-hover:text-yellow-500 group-hover:[-webkit-text-stroke:2px_transparent] transition-all duration-700 group-hover:translate-y-1">
                NIMSARA
              </span>
            </h2>
            
            {/* FULL STACK SUBTITLE */}
            <h3 className="animate-fade-up delay-300 text-xl md:text-2xl lg:text-3xl font-bold tracking-[0.3em] text-gray-400 uppercase mb-8 relative cursor-none select-none">
              Full Stack Developer
            </h3>

            <p className="animate-fade-up delay-400 text-gray-400 max-w-md mb-8 text-lg leading-relaxed font-light">
              I build fast, reliable websites and mobile apps that look great and work perfectly. From custom designs to powerful backends, I bring your ideas to life.
            </p>

            {/* TERMINAL DATA INJECT */}
            <div className="animate-fade-up delay-500 flex gap-4 items-center text-[9px] font-mono tracking-widest text-gray-600 mb-12 uppercase">
               <span>[LOC: LK]</span>
               <span className="w-4 border-b border-gray-600 hidden sm:block"></span>
               <span className="text-yellow-500/80">[TARGET: Global]</span>
               <span className="w-4 border-b border-gray-600 hidden sm:block"></span>
               <span>[STATUS: Available]</span>
            </div>

            {/* KINETIC BUTTON */}
            <div className="animate-fade-up delay-600 flex gap-8 cursor-none">
              <a href="#contact" className="relative group overflow-hidden border border-white/20 bg-transparent px-10 py-4 cursor-none flex items-center justify-center">
                <div className="absolute inset-0 w-full h-full bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)]"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <span className="w-2 h-2 bg-yellow-500 group-hover:bg-black transition-colors duration-500"></span>
                  <span className="font-mono text-xs font-black tracking-[0.4em] text-white group-hover:text-black transition-colors duration-500 uppercase">
                    Start a Project
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT: SEAMLESS PORTRAIT INTEGRATION */}
          <div className="animate-fade-up delay-400 w-full lg:w-1/2 flex justify-center lg:justify-end z-10 absolute lg:relative top-0 right-0 opacity-40 lg:opacity-100 pointer-events-none lg:pointer-events-auto">
            <div className="relative group w-full max-w-[28rem] aspect-[4/5] cursor-none">
               <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent z-10"></div>
               <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#020202] lg:hidden z-10"></div>
               
               <img src="/profile-photo.jpg" alt="Nimsara Lekamge" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-1000 ease-out opacity-90 group-hover:opacity-100" />
            </div>
          </div>

        </section>

        {/* INFINITE ARSENAL MARQUEE */}
        <div className="w-full overflow-hidden border-y border-white/5 bg-[#050505] py-4 flex whitespace-nowrap mt-10 mb-20 relative select-none z-10">
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#020202] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#020202] to-transparent z-10"></div>
          
          <div className="animate-marquee flex gap-16 min-w-[200%] items-center">
            {[...Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                <span className="text-2xl font-black text-white/10 uppercase tracking-widest hover:text-yellow-500/50 transition-colors">Websites</span>
                <span className="text-yellow-500/20 text-xl">/</span>
                <span className="text-2xl font-black text-white/10 uppercase tracking-widest hover:text-yellow-500/50 transition-colors">Mobile Apps</span>
                <span className="text-yellow-500/20 text-xl">/</span>
                <span className="text-2xl font-black text-white/10 uppercase tracking-widest hover:text-yellow-500/50 transition-colors">E-Commerce</span>
                <span className="text-yellow-500/20 text-xl">/</span>
                <span className="text-2xl font-black text-white/10 uppercase tracking-widest hover:text-yellow-500/50 transition-colors">UI/UX Design</span>
                <span className="text-yellow-500/20 text-xl">/</span>
                <span className="text-2xl font-black text-white/10 uppercase tracking-widest hover:text-yellow-500/50 transition-colors">Custom Software</span>
                <span className="text-yellow-500/20 text-xl">/</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CLIENT-FRIENDLY SERVICES SECTION */}
        <section id="services" className="py-20 max-w-7xl mx-auto px-6 mb-16 z-10 relative">
          <div className="flex gap-4 items-center text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-12">
            <span className="w-8 border-b border-gray-600"></span>
            <span>What I Do</span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-16">
            My <span className="text-yellow-500">Services</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Web Development */}
            <div className="group border border-white/5 bg-[#050505] p-10 hover:border-yellow-500/30 hover:shadow-[0_0_40px_rgba(202,138,4,0.1)] transition-all duration-500 cursor-none relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <h4 className="text-2xl font-black uppercase tracking-wide text-white mb-4">Web Development</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light mb-0">
                Building fast, responsive, and beautiful websites. From engaging landing pages to full-scale web applications, I bring your digital ideas to life.
              </p>
            </div>

            {/* Mobile Apps */}
            <div className="group border border-white/5 bg-[#050505] p-10 hover:border-yellow-500/30 hover:shadow-[0_0_40px_rgba(202,138,4,0.1)] transition-all duration-500 cursor-none relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <h4 className="text-2xl font-black uppercase tracking-wide text-white mb-4">Mobile Apps</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light mb-0">
                Designing and developing smooth, easy-to-use mobile applications. I build custom apps that perform perfectly on both iOS and Android devices.
              </p>
            </div>

            {/* UI/UX Design */}
            <div className="group border border-white/5 bg-[#050505] p-10 hover:border-yellow-500/30 hover:shadow-[0_0_40px_rgba(202,138,4,0.1)] transition-all duration-500 cursor-none relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <h4 className="text-2xl font-black uppercase tracking-wide text-white mb-4">UI/UX Design</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light mb-0">
                Crafting clean, modern, and engaging user interfaces. I make sure your product not only looks premium but is incredibly simple for customers to navigate.
              </p>
            </div>

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="systems" className="py-10 max-w-6xl mx-auto px-6 mb-32 z-10 relative">
          <div className="space-y-40">
            
            {/* Custom Business Software */}
            <div className="flex flex-col md:flex-row gap-0 items-stretch group relative cursor-none">
              <div className="w-full md:w-3/5 aspect-video overflow-hidden border border-white/5 bg-[#050505] relative z-20 transform transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] md:group-hover:-translate-x-12">
                <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-700 z-10 mix-blend-overlay"></div>
                <img src="/travelmania-preview.jpg" alt="Enterprise ERP" className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100" />
              </div>
              <div className="w-full md:w-2/5 p-10 md:p-16 border border-white/5 bg-[#080808] relative z-10 transform transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] md:-translate-x-16 md:group-hover:translate-x-4 flex flex-col justify-center">
                <h4 className="text-4xl lg:text-5xl font-black tracking-tighter text-white mb-6">Business Management</h4>
                <p className="text-gray-400 text-base leading-relaxed font-light mb-0">
                  A custom software solution built to handle daily business operations, team collaboration, and data management smoothly.
                </p>
              </div>
            </div>

            {/* E-Commerce */}
            <div className="flex flex-col md:flex-row-reverse gap-0 items-stretch group relative cursor-none">
              <div className="w-full md:w-3/5 aspect-video overflow-hidden border border-white/5 bg-[#050505] relative z-20 transform transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] md:group-hover:translate-x-12">
                <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-700 z-10 mix-blend-overlay"></div>
                <img src="/gamezone-preview.jpg" alt="GameZone" className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100" />
              </div>
              <div className="w-full md:w-2/5 p-10 md:p-16 border border-white/5 bg-[#080808] relative z-10 transform transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] md:translate-x-16 md:group-hover:-translate-x-4 flex flex-col justify-center text-left md:text-right">
                <h4 className="text-4xl lg:text-5xl font-black tracking-tighter text-white mb-6">E-Commerce Store</h4>
                <p className="text-gray-400 text-base leading-relaxed font-light mb-0">
                  An engaging online shop designed for a seamless customer experience, from easily browsing products to secure checkout.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* TRANSMISSION / CONTACT SECTION */}
        <section id="contact" className="pt-20 pb-32 w-full border-t border-white/5 relative z-10 bg-[#020202]">
          <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
            
            <div className="space-y-6 cursor-none">
              <div className="flex gap-4 items-center text-[10px] font-mono tracking-widest text-gray-500 uppercase">
                <span className="w-8 border-b border-gray-600"></span>
                <span>Get In Touch</span>
              </div>
              <h3 className="text-6xl md:text-[6rem] font-black uppercase tracking-tighter text-white leading-[0.9]">
                Let's <br/>
                <span className="text-yellow-500">Connect</span>
              </h3>
            </div>
            
            <div className="flex flex-col gap-6 w-full lg:w-1/3">
              <a href="mailto:nimsaralekamge@gmail.com" className="group flex justify-between items-center gap-12 border-b border-white/10 pb-4 hover:border-yellow-500 transition-colors duration-500 cursor-none">
                <span className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400 group-hover:text-white transition-colors duration-500">Email</span>
                <span className="text-xs font-mono text-gray-600 group-hover:text-yellow-500 transition-colors duration-500">COMMS</span>
              </a>
              <a href="https://github.com/nimsaralekamge" target="_blank" rel="noreferrer" className="group flex justify-between items-center gap-12 border-b border-white/10 pb-4 hover:border-yellow-500 transition-colors duration-500 cursor-none">
                <span className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400 group-hover:text-white transition-colors duration-500">GitHub</span>
                <span className="text-xs font-mono text-gray-600 group-hover:text-yellow-500 transition-colors duration-500">SOURCE</span>
              </a>
              <a href="https://linkedin.com/in/nimsara-lekamge-9b1740329" target="_blank" rel="noreferrer" className="group flex justify-between items-center gap-12 border-b border-white/10 pb-4 hover:border-yellow-500 transition-colors duration-500 cursor-none">
                <span className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400 group-hover:text-white transition-colors duration-500">LinkedIn</span>
                <span className="text-xs font-mono text-gray-600 group-hover:text-yellow-500 transition-colors duration-500">NETWORK</span>
              </a>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}