
import React from 'react';
import { 
  Code2, 
  Database, 
  Smartphone, 
  Globe, 
  Wrench, 
  Palette,
  Gamepad2,
  Brain,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Smartphone,
      title: 'APP DEVELOPER',
      color: 'from-retro-cyan to-retro-lime',
      skills: ['React Native', 'Flutter', 'iOS Development', 'Android Development', 'Cross-Platform']
    },
    {
      icon: Gamepad2,
      title: 'GAME DEVELOPER',
      color: 'from-retro-purple to-retro-pink',
      skills: ['Unity', 'Unreal Engine', 'C#', 'Game Design', 'Physics Engine']
    },
    {
      icon: Brain,
      title: 'ML ENGINEER',
      color: 'from-retro-orange to-retro-yellow',
      skills: ['TensorFlow', 'PyTorch', 'Python', 'Neural Networks', 'Deep Learning']
    },
    {
      icon: Code2,
      title: 'FRONTEND',
      color: 'from-retro-pink to-retro-purple',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js']
    },
    {
      icon: Database,
      title: 'BACKEND',
      color: 'from-retro-lime to-retro-cyan',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express']
    },
    {
      icon: Wrench,
      title: 'TOOLS',
      color: 'from-retro-yellow to-retro-orange',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Firebase']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-3xl md:text-4xl text-retro-lime mb-4">
            SKILL TREE
          </h2>
          <div className="w-24 h-1 bg-retro-cyan mx-auto mb-8"></div>
          <p className="font-retro text-lg text-white/80 max-w-2xl mx-auto">
            Explore my arsenal of development skills, each carefully leveled 
            up through countless hours of practice and real-world battles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group bg-black/60 border-2 border-retro-cyan rounded-lg p-6 hover:border-retro-lime transition-all duration-300 hover:scale-105"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-pixel text-lg text-retro-cyan group-hover:text-retro-lime transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-retro-lime rounded-full animate-pulse"></div>
                    <span className="font-retro text-white/90 hover:text-retro-lime transition-colors cursor-default">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Skill Level Indicator */}
              <div className="mt-6 pt-4 border-t border-retro-purple/30">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-pixel text-xs text-retro-cyan">MASTERY</span>
                  <span className="font-pixel text-xs text-retro-lime">
                    {85 + Math.floor(Math.random() * 15)}%
                  </span>
                </div>
                <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${85 + Math.floor(Math.random() * 15)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Badges */}
        <div className="mt-16 text-center">
          <h3 className="font-pixel text-xl text-retro-pink mb-8">ACHIEVEMENTS UNLOCKED</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              '🏆 Code Warrior',
              '⚡ Speed Coder',
              '🎮 Game Builder',
              '🚀 Ship Master',
              '🔥 Bug Slayer',
              '🧠 AI Wizard',
              '📱 App Creator'
            ].map((achievement, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-retro-purple/20 to-retro-pink/20 border border-retro-cyan px-4 py-2 rounded-full font-retro text-sm text-retro-lime hover:scale-110 transition-transform duration-200 cursor-default"
              >
                {achievement}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
