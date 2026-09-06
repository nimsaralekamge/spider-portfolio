import React from 'react';
import { User, Mail, Terminal, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="w-full min-h-screen bg-[#0a0a0a] text-white py-20 px-6 flex flex-col items-center justify-center">
      
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold tracking-widest uppercase mb-4 drop-shadow-md">
          Initiate Contact
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Ready to collaborate on your next digital experience? Drop a transmission below.
        </p>
      </div>

      <form className="w-full max-w-2xl bg-[#111] p-10 border border-gray-800 rounded-sm relative group">
        {/* Ambient Background Glow Effect */}
        <div className="absolute inset-0 bg-yellow-600/5 blur-3xl -z-10 group-hover:bg-yellow-600/10 transition-colors duration-700 pointer-events-none"></div>

        <div className="flex flex-col gap-10">
          
          {/* Name Input with User Icon */}
          <div className="flex flex-col relative group/input">
            <label htmlFor="name" className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-2 flex items-center gap-2">
              <User size={14} className="text-gray-500 group-focus-within/input:text-yellow-500 transition-colors duration-500" />
              Identification
            </label>
            <input 
              type="text" 
              id="name"
              className="w-full bg-transparent border-b-2 border-gray-800 text-white px-0 py-3 focus:outline-none focus:border-yellow-500 transition-colors duration-500 placeholder-gray-700"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input with Mail Icon */}
          <div className="flex flex-col relative group/input">
            <label htmlFor="email" className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-2 flex items-center gap-2">
              <Mail size={14} className="text-gray-500 group-focus-within/input:text-yellow-500 transition-colors duration-500" />
              Comms Link
            </label>
            <input 
              type="email" 
              id="email"
              className="w-full bg-transparent border-b-2 border-gray-800 text-white px-0 py-3 focus:outline-none focus:border-yellow-500 transition-colors duration-500 placeholder-gray-700"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Area with Terminal Icon */}
          <div className="flex flex-col relative group/input">
            <label htmlFor="message" className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-2 flex items-center gap-2">
              <Terminal size={14} className="text-gray-500 group-focus-within/input:text-yellow-500 transition-colors duration-500" />
              Transmission Details
            </label>
            <textarea 
              id="message"
              rows="4"
              className="w-full bg-transparent border-b-2 border-gray-800 text-white px-0 py-3 focus:outline-none focus:border-yellow-500 transition-colors duration-500 placeholder-gray-700 resize-none"
              placeholder="What are we building?"
            ></textarea>
          </div>

          {/* Submit Button with Send Icon */}
          <button 
            type="submit" 
            className="mt-4 flex items-center justify-center gap-3 w-full py-4 border-2 border-white text-white font-bold tracking-widest uppercase hover:bg-yellow-500 hover:border-yellow-500 hover:text-black hover:shadow-[0_0_30px_rgba(202,138,4,0.3)] transition-all duration-500 group/btn"
          >
            <span>Send Transmission</span>
            <Send size={18} className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
          </button>

        </div>
      </form>

    </section>
  );
}