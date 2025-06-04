
import React from 'react';
import { User, Code, Coffee, Gamepad2 } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Gamepad2, label: 'Years of Gaming', value: '15+' },
    { icon: User, label: 'Happy Clients', value: '25+' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-3xl md:text-4xl text-retro-lime mb-4">
            PLAYER STATS
          </h2>
          <div className="w-24 h-1 bg-retro-cyan mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Character Info */}
          <div className="space-y-6">
            <div className="bg-black/60 p-6 border-2 border-retro-purple rounded-lg">
              <h3 className="font-pixel text-xl text-retro-pink mb-4">CHARACTER BIO</h3>
              <div className="font-retro text-lg text-white/90 leading-relaxed space-y-4">
                <p>
                  Greetings, fellow adventurer! I'm a passionate full-stack developer 
                  who discovered the magic of coding through my love for video games. 
                  What started as curiosity about how games work has evolved into 
                  a quest to create amazing digital experiences.
                </p>
                <p>
                  When I'm not battling bugs or conquering new frameworks, you'll 
                  find me exploring virtual worlds, designing pixel art, or 
                  experimenting with the latest web technologies. My mission is 
                  to bring the same excitement and engagement found in games 
                  to every web application I build.
                </p>
              </div>
            </div>

            <div className="bg-black/60 p-6 border-2 border-retro-cyan rounded-lg">
              <h3 className="font-pixel text-xl text-retro-cyan mb-4">SPECIAL ABILITIES</h3>
              <div className="space-y-2 font-retro text-white/90">
                <div className="flex justify-between">
                  <span>Problem Solving</span>
                  <span className="text-retro-lime">███████████ 95%</span>
                </div>
                <div className="flex justify-between">
                  <span>Code Quality</span>
                  <span className="text-retro-lime">██████████ 90%</span>
                </div>
                <div className="flex justify-between">
                  <span>Team Collaboration</span>
                  <span className="text-retro-lime">███████████ 98%</span>
                </div>
                <div className="flex justify-between">
                  <span>Continuous Learning</span>
                  <span className="text-retro-lime">████████████ 100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-retro-purple/20 to-retro-pink/20 p-6 border-2 border-retro-cyan rounded-lg text-center hover:scale-105 transition-transform duration-200"
              >
                <stat.icon className="w-12 h-12 text-retro-lime mx-auto mb-4" />
                <div className="font-pixel text-2xl text-retro-cyan mb-2">
                  {stat.value}
                </div>
                <div className="font-retro text-sm text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
