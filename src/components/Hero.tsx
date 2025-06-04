
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
        {/* Pixel Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 bg-gradient-to-r from-retro-purple to-retro-pink rounded-lg border-4 border-retro-cyan animate-pixel-float">
            <div className="w-full h-full bg-retro-lime/20 rounded-lg flex items-center justify-center">
              <div className="w-16 h-16 bg-retro-yellow rounded-sm border-2 border-black"></div>
            </div>
          </div>
        </div>

        {/* Game-style Text */}
        <div className="space-y-4">
          <h1 className="font-pixel text-4xl md:text-6xl text-retro-lime animate-pulse">
            GAME DEV
          </h1>
          <h2 className="font-pixel text-xl md:text-2xl text-retro-cyan">
            FULL STACK DEVELOPER
          </h2>
          <div className="font-retro text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Welcome to my digital realm! I craft immersive web experiences 
            and bring ideas to life through code. Ready to start your quest?
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="retro-button"
          >
            VIEW PROJECTS
          </button>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="retro-button bg-gradient-to-r from-retro-orange to-retro-yellow"
          >
            START GAME
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-retro-cyan" size={32} />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-retro-lime rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
