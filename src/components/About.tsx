
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-3xl md:text-4xl text-retro-lime mb-4">
            PLAYER STATS
          </h2>
          <div className="w-24 h-1 bg-retro-cyan mx-auto"></div>
        </div>

        {/* Full Screen Character Bio */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-black/60 p-8 md:p-12 border-2 border-retro-purple rounded-lg backdrop-blur-sm">
            <h3 className="font-pixel text-2xl md:text-3xl text-retro-pink mb-8 text-center">CHARACTER BIO</h3>
            <div className="font-retro text-lg md:text-xl text-white/90 leading-relaxed space-y-6 text-center max-w-4xl mx-auto">
              <p>
                Greetings, fellow adventurer! I'm a passionate full-stack developer 
                who discovered the magic of coding through my love for video games. 
                What started as curiosity about how games work has evolved into 
                a quest to create amazing digital experiences across multiple platforms.
              </p>
              <p>
                As an App Developer, Game Developer, and ML Engineer, I bring together 
                the creativity of game design, the precision of mobile development, 
                and the innovation of machine learning to create truly unique solutions.
              </p>
              <p>
                When I'm not battling bugs or conquering new frameworks, you'll 
                find me exploring virtual worlds, designing pixel art, or 
                experimenting with the latest AI technologies. My mission is 
                to bring the same excitement and engagement found in games 
                to every application I build.
              </p>
            </div>
          </div>
        </div>

        {/* Special Abilities Section Below */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/60 p-8 border-2 border-retro-cyan rounded-lg backdrop-blur-sm">
            <h3 className="font-pixel text-xl md:text-2xl text-retro-cyan mb-8 text-center">SPECIAL ABILITIES</h3>
            <div className="grid md:grid-cols-2 gap-6 font-retro text-white/90">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Problem Solving</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-black/50 h-3 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-retro-lime to-retro-cyan w-[95%] rounded-full"></div>
                    </div>
                    <span className="text-retro-lime font-pixel text-sm">95%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Code Quality</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-black/50 h-3 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-retro-purple to-retro-pink w-[90%] rounded-full"></div>
                    </div>
                    <span className="text-retro-lime font-pixel text-sm">90%</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Team Collaboration</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-black/50 h-3 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-retro-orange to-retro-yellow w-[98%] rounded-full"></div>
                    </div>
                    <span className="text-retro-lime font-pixel text-sm">98%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Continuous Learning</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-black/50 h-3 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-retro-pink to-retro-purple w-full rounded-full"></div>
                    </div>
                    <span className="text-retro-lime font-pixel text-sm">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
