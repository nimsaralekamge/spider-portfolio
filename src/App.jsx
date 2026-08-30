function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-miles-red/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-gwen-teal/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* NAVBAR (Fixed z-index to 50) */}
      <nav className="w-full p-6 md:px-12 flex justify-between items-center border-b border-white/10 z-50 bg-spider-black/80 backdrop-blur-md fixed top-0">
        <div className="font-action text-3xl md:text-4xl tracking-wide glitch-text cursor-pointer select-none">
          NIMSARA<span className="text-miles-red">LEKAMGE</span>
        </div>
        
        <div className="hidden md:flex gap-8 font-sans font-bold uppercase tracking-widest text-sm text-gray-300">
          <a href="#work" className="hover:text-gwen-teal transition-colors">Projects</a>
          <a href="#skills" className="hover:text-gwen-teal transition-colors">Arsenal</a>
          <a href="#contact" className="hover:text-gwen-teal transition-colors">Contact</a>
        </div>
      </nav>

      <main className="w-full mt-24 z-10">
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-gwen-teal font-sans font-bold uppercase tracking-[0.4em] mb-4 text-xs md:text-sm">
            Full-Stack Software Engineer
          </h2>
          
          <h1 className="font-action text-6xl md:text-9xl text-white glitch-text tracking-wider uppercase leading-none mb-6">
            Building The <br /> 
            <span className="text-miles-red">Multiverse</span>
          </h1>
          
          <p className="font-sans text-gray-400 max-w-2xl mx-auto mb-10 text-base md:text-xl font-medium leading-relaxed">
            I architect high-performance applications and dynamic web experiences. Bridging the gap between heavy-hitting backend logic and comic-book level UI.
          </p>
          
          <div className="flex gap-6">
            <a href="#work" className="comic-button bg-spider-black text-white font-action text-xl md:text-2xl px-8 py-3 uppercase tracking-wider cursor-pointer text-center">
              View My Work
            </a>
            <button className="comic-button bg-white text-spider-black border-spider-black font-action text-xl md:text-2xl px-8 py-3 uppercase tracking-wider cursor-pointer hover:bg-gray-200">
              Download CV
            </button>
          </div>
        </section>

        {/* ARSENAL SECTION */}
        <section id="skills" className="w-full py-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-action text-5xl md:text-7xl text-white glitch-text tracking-wider uppercase mb-16 text-center">
              My <span className="text-gwen-teal">Arsenal</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Frontend Card */}
              <div className="comic-button bg-spider-black p-8 group hover:-rotate-2 transition-transform duration-200 cursor-default">
                <h3 className="font-action text-4xl text-miles-red group-hover:glitch-text tracking-wider mb-4">Frontend</h3>
                <ul className="font-sans text-gray-300 font-bold space-y-2 text-lg">
                  <li>React & Vite</li>
                  <li>Tailwind CSS</li>
                  <li>JavaScript (ES6+)</li>
                  <li>HTML5 & CSS3</li>
                </ul>
              </div>

              {/* Backend Card */}
              <div className="comic-button bg-spider-black p-8 group hover:rotate-2 transition-transform duration-200 cursor-default translate-y-0 md:translate-y-8">
                <h3 className="font-action text-4xl text-gwen-teal group-hover:glitch-text tracking-wider mb-4">Backend</h3>
                <ul className="font-sans text-gray-300 font-bold space-y-2 text-lg">
                  <li>Java & Spring Boot</li>
                  <li>C# & .NET</li>
                  <li>Node.js</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>

              {/* Database Card */}
              <div className="comic-button bg-spider-black p-8 group hover:-rotate-1 transition-transform duration-200 cursor-default">
                <h3 className="font-action text-4xl text-gwen-pink group-hover:glitch-text tracking-wider mb-4">Database</h3>
                <ul className="font-sans text-gray-300 font-bold space-y-2 text-lg">
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>Database Design</li>
                  <li>Entity Framework</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="work" className="w-full py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-action text-5xl md:text-7xl text-white glitch-text tracking-wider uppercase mb-20 text-center">
              Featured <span className="text-gwen-pink">Missions</span>
            </h2>

            {/* Project 1: TechTitans */}
            <div className="flex flex-col md:flex-row gap-10 items-center mb-32">
              <div className="w-full md:w-1/2 comic-button bg-spider-black aspect-video flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-miles-red/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                {/* Replace this span with an actual <img src="..." /> later */}
                <span className="font-action text-3xl text-gray-600 tracking-widest z-0">TravelMania GUI</span>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="font-action text-4xl md:text-5xl text-white tracking-wider">TravelMania</h3>
                <p className="font-sans text-gray-400 text-lg leading-relaxed font-medium">
                  A high-throughput enterprise application engineered to process and manage massive data sets. Built with a robust backend architecture to ensure maximum uptime and zero bottlenecks.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1 border-2 border-miles-red text-miles-red font-bold text-sm uppercase">Java</span>
                  <span className="px-4 py-1 border-2 border-miles-red text-miles-red font-bold text-sm uppercase">Spring Boot</span>
                  <span className="px-4 py-1 border-2 border-miles-red text-miles-red font-bold text-sm uppercase">PostgreSQL</span>
                </div>
                <div className="pt-4">
                  <button className="comic-button bg-white text-spider-black border-spider-black font-action text-xl px-6 py-2 uppercase tracking-wider hover:bg-gray-200">
                    View Code
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2: GameZone (Reversed Layout) */}
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="w-full md:w-1/2 comic-button bg-spider-black aspect-video flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gwen-teal/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                {/* Replace this span with an actual <img src="..." /> later */}
                <span className="font-action text-3xl text-gray-600 tracking-widest z-0">GAMEZONE GUI</span>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="font-action text-4xl md:text-5xl text-white tracking-wider">GameZone</h3>
                <p className="font-sans text-gray-400 text-lg leading-relaxed font-medium">
                  A dynamic e-commerce foundation featuring a seamless frontend user experience and secure backend transaction handling. Optimized for speed and scalability.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1 border-2 border-gwen-teal text-gwen-teal font-bold text-sm uppercase">React</span>
                  <span className="px-4 py-1 border-2 border-gwen-teal text-gwen-teal font-bold text-sm uppercase">C# .NET</span>
                  <span className="px-4 py-1 border-2 border-gwen-teal text-gwen-teal font-bold text-sm uppercase">MySQL</span>
                </div>
                <div className="pt-4">
                  <button className="comic-button bg-white text-spider-black border-spider-black font-action text-xl px-6 py-2 uppercase tracking-wider hover:bg-gray-200">
                    View Code
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="w-full py-32 px-6 md:px-12 border-t border-white/10 relative z-10 bg-spider-black/50">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-action text-5xl md:text-7xl text-white glitch-text tracking-wider uppercase">
              Send a <span className="text-miles-red">Transmission</span>
            </h2>
            <p className="font-sans text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              I'm always open to discussing high-impact software engineering roles, tech collaborations, or opportunities in the global tech ecosystem. Drop a line and let's build something incredible.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <a href="mailto:your.email@example.com" className="comic-button bg-miles-red text-white border-miles-red font-action text-xl md:text-2xl px-8 py-3 uppercase tracking-wider cursor-pointer">
                Email Me
              </a>
              <a href="https://github.com/YOURGITHUB" target="_blank" rel="noreferrer" className="comic-button bg-spider-black text-white border-white font-action text-xl md:text-2xl px-8 py-3 uppercase tracking-wider hover:text-gwen-teal cursor-pointer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/YOURLINKEDIN" target="_blank" rel="noreferrer" className="comic-button bg-spider-black text-white border-white font-action text-xl md:text-2xl px-8 py-3 uppercase tracking-wider hover:text-gwen-teal cursor-pointer">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full py-8 text-center border-t border-white/10 font-sans text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest bg-spider-black z-10 relative">
        <p>Architected & Built by <span className="text-white">Nimsara Lekamge</span> © {new Date().getFullYear()}</p>
      </footer>

    </div>
  )
}

export default App