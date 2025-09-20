import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Brain, Puzzle, Radio, TrendingUp, BarChart3 } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Sentiment Classifier",
      description: "Real-time sentiment analysis web application using Naive Bayes machine learning model for binary classification of reviews with high accuracy.",
      duration: "Aug – Sep 2025",
      icon: BarChart3,
      highlights: [
        "Implemented a sentiment classifier using Naive Bayes bag-of-words model",
        "Achieved 89% accuracy on dev set and 100% on custom test cases",
        "Built real-time web app with Flask and Cloudflare Workers integration",
        "Featured confidence scoring and mobile-responsive design",
        "Enabled sub-50ms latency and 99.9% uptime performance"
      ],
      technologies: ["Python", "Flask", "Cloudflare Workers", "Naive Bayes", "Machine Learning"],
      color: "from-gray-500 to-gray-700",
      github: "#",
      live: "#",
      impact: "89% accuracy, 99.9% uptime"
    },
    {
      title: "JobGenie",
      description: "AI-powered career companion that uses advanced algorithms to provide personalized job recommendations and career guidance.",
      duration: "Feb – May 2025",
      icon: Brain,
      highlights: [
        "Implemented TF-IDF algorithm for intelligent job matching",
        "Built comprehensive resume parsing system with Python",
        "Developed SQL database for efficient data storage and retrieval",
        "Created recommendation engine for personalized career suggestions",
        "Integrated multiple data sources for comprehensive job analysis"
      ],
      technologies: ["Python", "TF-IDF", "SQL", "Resume Parsing", "AI/ML", "Data Processing"],
      color: "from-slate-600 to-slate-800",
      github: "#",
      live: "#",
      impact: "AI-powered career guidance"
    },
    {
      title: "15-Puzzle Solver",
      description: "Advanced puzzle-solving application implementing multiple search algorithms with optimized heuristics for maximum efficiency.",
      duration: "Nov – Dec 2024",
      icon: Puzzle,
      highlights: [
        "Implemented BFS and A* search algorithms in C++",
        "Designed Manhattan distance heuristics for optimal pathfinding",
        "Achieved 85% faster solving times compared to baseline",
        "Built comprehensive testing suite for algorithm validation",
        "Optimized memory usage for large puzzle states"
      ],
      technologies: ["C++", "BFS", "A* Algorithm", "Heuristics", "Algorithm Optimization", "Data Structures"],
      color: "from-slate-500 to-slate-700",
      github: "#",
      live: "#",
      impact: "85% faster solving"
    },
    {
      title: "AM Radio Receiver",
      description: "Complete radio receiver system built from scratch, demonstrating understanding of RF engineering and signal processing principles.",
      duration: "Sep – Nov 2024",
      icon: Radio,
      highlights: [
        "Designed and built RF front-end circuitry",
        "Implemented mixing and filtering stages for signal processing",
        "Developed demodulation system for AM signal extraction",
        "Achieved 25% improvement in signal clarity",
        "Integrated all components into functional receiver system"
      ],
      technologies: ["RF Engineering", "Circuit Design", "Signal Processing", "AM Demodulation", "Hardware Integration"],
      color: "from-slate-600 to-slate-800",
      github: "#",
      live: "#",
      impact: "25% clarity boost"
    }
  ];

  return (
    <section id="projects" className="py-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-br ${project.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <project.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-90">{project.duration}</div>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">{project.description}</p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-slate-500" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <motion.li
                        key={highlightIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (highlightIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          {highlight}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (techIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Links - Show for Sentiment Classifier and JobGenie */}
                {(project.title === "Sentiment Classifier" || project.title === "JobGenie") && (
                  <div className="flex space-x-4">
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-slate-600 hover:text-slate-600 dark:hover:border-slate-400 dark:hover:text-slate-400 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800/20 dark:to-slate-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              More Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm constantly working on new projects and learning new technologies. 
              Check out my GitHub for more examples of my work.
            </p>
            <button className="px-8 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <Github className="inline mr-2" size={20} />
              View All Projects
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
