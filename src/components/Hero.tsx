
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-retro-cyan/30"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        {/* Enhanced Pixel Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-40 h-40 bg-gradient-to-r from-retro-purple to-retro-pink rounded-lg border-4 border-retro-cyan animate-pixel-float shadow-lg shadow-retro-cyan/50">
              <div className="w-full h-full bg-gradient-to-br from-retro-lime/30 to-retro-yellow/20 rounded-lg flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-retro-yellow to-retro-orange rounded-sm border-2 border-black shadow-inner"></div>
              </div>
            </div>
            {/* Glowing effect */}
            <div className="absolute inset-0 w-40 h-40 bg-gradient-to-r from-retro-purple/20 to-retro-pink/20 rounded-lg blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced Game-style Text */}
        <div className="space-y-6">
          <h1 className="font-pixel text-4xl md:text-7xl text-retro-lime animate-pulse drop-shadow-lg">
            GAME DEV
          </h1>
          <h2 className="font-pixel text-xl md:text-3xl text-retro-cyan drop-shadow-md">
            FULL STACK DEVELOPER
          </h2>
          <div className="font-retro text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-retro-purple/30">
            Welcome to my digital realm! I craft immersive web experiences, 
            mobile applications, games, and AI-powered solutions. Ready to explore my quest?
          </div>
        </div>

        {/* Single Action Button */}
        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="retro-button text-lg px-8 py-4 hover:scale-110 transition-all duration-200"
          >
            VIEW PROJECTS
          </button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-2 border-2 border-retro-cyan rounded-full bg-black/50 backdrop-blur-sm">
            <ChevronDown className="text-retro-cyan" size={32} />
          </div>
        </div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `linear-gradient(45deg, ${
                ['#65F463', '#06B6D4', '#EC4899', '#6B46C1', '#F97316'][Math.floor(Math.random() * 5)]
              }, ${
                ['#FDE047', '#65F463', '#06B6D4', '#EC4899'][Math.floor(Math.random() * 4)]
              })`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              boxShadow: '0 0 10px currentColor'
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
