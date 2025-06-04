
import React from 'react';
import { ExternalLink, Github, Star, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'RETRO ARCADE',
      subtitle: 'Web Game Platform',
      description: 'A nostalgic gaming platform featuring classic arcade games built with modern web technologies.',
      image: 'bg-gradient-to-br from-retro-purple to-retro-pink',
      tech: ['React', 'Canvas API', 'Node.js', 'Socket.io'],
      difficulty: 'EXPERT',
      status: 'COMPLETED',
      github: '#',
      demo: '#'
    },
    {
      title: 'NEON DASHBOARD',
      subtitle: 'Analytics Platform',
      description: 'A cyberpunk-inspired dashboard for real-time data visualization and analytics.',
      image: 'bg-gradient-to-br from-retro-cyan to-retro-lime',
      tech: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
      difficulty: 'HARD',
      status: 'COMPLETED',
      github: '#',
      demo: '#'
    },
    {
      title: 'PIXEL COMMERCE',
      subtitle: 'E-commerce Platform',
      description: 'A retro-themed online store with pixel-perfect design and smooth animations.',
      image: 'bg-gradient-to-br from-retro-orange to-retro-yellow',
      tech: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
      difficulty: 'HARD',
      status: 'COMPLETED',
      github: '#',
      demo: '#'
    },
    {
      title: 'CRYPTO QUEST',
      subtitle: 'Web3 Game',
      description: 'An adventure game where players collect NFTs and trade in a decentralized marketplace.',
      image: 'bg-gradient-to-br from-retro-pink to-retro-purple',
      tech: ['React', 'Solidity', 'Web3.js', 'IPFS'],
      difficulty: 'EXPERT',
      status: 'IN PROGRESS',
      github: '#',
      demo: '#'
    },
    {
      title: 'PIXEL PORTFOLIO',
      subtitle: 'Personal Website',
      description: 'This very website! A showcase of retro gaming aesthetics in web development.',
      image: 'bg-gradient-to-br from-retro-lime to-retro-cyan',
      tech: ['React', 'Tailwind', 'TypeScript', 'Vite'],
      difficulty: 'MEDIUM',
      status: 'COMPLETED',
      github: '#',
      demo: '#'
    },
    {
      title: 'AI COMPANION',
      subtitle: 'Chat Application',
      description: 'An AI-powered chat companion with personality and retro game references.',
      image: 'bg-gradient-to-br from-retro-yellow to-retro-orange',
      tech: ['React', 'OpenAI', 'Node.js', 'WebSocket'],
      difficulty: 'HARD',
      status: 'IN PROGRESS',
      github: '#',
      demo: '#'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'EASY': return 'text-retro-lime';
      case 'MEDIUM': return 'text-retro-yellow';
      case 'HARD': return 'text-retro-orange';
      case 'EXPERT': return 'text-retro-pink';
      default: return 'text-white';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'COMPLETED' ? 'text-retro-lime' : 'text-retro-cyan';
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-3xl md:text-4xl text-retro-lime mb-4">
            GAME LIBRARY
          </h2>
          <div className="w-24 h-1 bg-retro-cyan mx-auto mb-8"></div>
          <p className="font-retro text-lg text-white/80 max-w-2xl mx-auto">
            Check out my collection of digital adventures! Each project represents 
            a unique challenge conquered and a new skill level achieved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-black/60 border-2 border-retro-cyan rounded-lg overflow-hidden hover:border-retro-lime transition-all duration-300 hover:scale-105"
            >
              {/* Project Image/Preview */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute top-4 left-4 space-y-2">
                  <div className={`font-pixel text-xs px-2 py-1 bg-black/60 rounded ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </div>
                  <div className={`font-pixel text-xs px-2 py-1 bg-black/60 rounded ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="text-white w-8 h-8" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-pixel text-lg text-retro-cyan mb-1">
                    {project.title}
                  </h3>
                  <p className="font-retro text-sm text-retro-pink">
                    {project.subtitle}
                  </p>
                </div>

                <p className="font-retro text-sm text-white/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="font-pixel text-xs px-2 py-1 bg-retro-purple/20 border border-retro-purple/50 rounded text-retro-lime"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 bg-black/40 hover:bg-retro-purple/20 border border-retro-purple px-3 py-2 rounded transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 text-retro-cyan" />
                    <span className="font-pixel text-xs text-retro-cyan">CODE</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 bg-retro-lime/10 hover:bg-retro-lime/20 border border-retro-lime px-3 py-2 rounded transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 text-retro-lime" />
                    <span className="font-pixel text-xs text-retro-lime">PLAY</span>
                  </a>
                </div>

                {/* Star Rating */}
                <div className="mt-4 pt-4 border-t border-retro-purple/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star 
                          key={starIndex}
                          className={`w-3 h-3 ${starIndex < 4 ? 'text-retro-yellow fill-current' : 'text-white/30'}`}
                        />
                      ))}
                    </div>
                    <span className="font-pixel text-xs text-retro-cyan">
                      LVL {Math.floor(Math.random() * 50) + 50}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="retro-button">
            LOAD MORE LEVELS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
