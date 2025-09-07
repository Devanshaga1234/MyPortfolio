import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900 py-4">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      <motion.div 
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-700 mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-6.5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Devansh Agarwal
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2 font-medium"
            >
              Software Engineer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Computer Engineering student (Junior) at UIUC with a minor in Statistics. Passionate about building{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">innovative software solutions</span> that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="/Devansh_Agarwal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-magenta-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 dark:hover:from-cyan-600 dark:hover:to-magenta-600 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  <span>View Resume</span>
                </div>
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-6 mt-8 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/devanshagarwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/devanshagarwal2510/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:da30@illinois.edu"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative"
            >
              {/* Computer Science Animated Elements */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Binary Code Particles */}
                <motion.div
                  animate={{ 
                    y: [0, -30, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -top-6 -right-6 text-blue-500 font-mono text-xs opacity-60"
                >
                  0101
                </motion.div>
                <motion.div
                  animate={{ 
                    y: [0, 25, 0],
                    x: [0, -15, 0],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-8 -left-8 text-purple-500 font-mono text-xs opacity-70"
                >
                  1010
                </motion.div>
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    x: [0, 20, 0],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute top-1/2 -right-10 text-cyan-500 font-mono text-xs opacity-50"
                >
                  1100
                </motion.div>
                <motion.div
                  animate={{ 
                    y: [0, 18, 0],
                    x: [0, -25, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 7, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute top-1/4 -left-10 text-green-500 font-mono text-xs opacity-60"
                >
                  0110
                </motion.div>

                {/* Circuit Board Traces */}
                <motion.div
                  animate={{ 
                    scaleX: [1, 1.1, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                />
                <motion.div
                  animate={{ 
                    scaleY: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0.5 h-24 bg-gradient-to-b from-transparent via-purple-400 to-transparent"
                />
                <motion.div
                  animate={{ 
                    scaleX: [1, 0.9, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute bottom-0 left-1/3 w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                />

                {/* Tech Icons */}
                {/* Code Icon */}
                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                    rotate: [0, 360, 0]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <polyline points="16,18 22,12 16,6"></polyline>
                      <polyline points="8,6 2,12 8,18"></polyline>
                    </svg>
                  </div>
                </motion.div>

                {/* Database Icon */}
                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    x: [0, -8, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                  className="absolute -bottom-8 right-1/4"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zM4 14v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
                    </svg>
                  </div>
                </motion.div>

                {/* Computer Icon */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    x: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 7, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2.5
                  }}
                  className="absolute top-1/3 -left-8"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
                    </svg>
                  </div>
                </motion.div>

                {/* Chip Icon */}
                <motion.div
                  animate={{ 
                    y: [0, 12, 0],
                    x: [0, -12, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 3
                  }}
                  className="absolute top-1/2 -left-12"
                >
                  <div className="w-7 h-7 bg-gradient-to-r from-cyan-500 to-blue-500 rounded flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 3v2H7V3h2m4 0v2h-2V3h2m4 0v2h-2V3h2M9 19v2H7v-2h2m4 0v2h-2v-2h2m4 0v2h-2v-2h2M21 9h-2V7h2v2m0 4h-2v-2h2v2m0 4h-2v-2h2v2M3 9h2V7H3v2m0 4h2v-2H3v2m0 4h2v-2H3v2M9 7h6v10H9V7z"/>
                    </svg>
                  </div>
                </motion.div>

                {/* Neural Networks Icon */}
                <motion.div
                  animate={{ 
                    y: [0, -18, 0],
                    x: [0, 15, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -top-6 -right-12"
                >
                  <div className="w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded flex items-center justify-center shadow-lg">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="4" r="2"/>
                      <circle cx="4" cy="12" r="2"/>
                      <circle cx="20" cy="12" r="2"/>
                      <circle cx="12" cy="20" r="2"/>
                      <line x1="12" y1="6" x2="6" y2="10"/>
                      <line x1="12" y1="6" x2="18" y2="10"/>
                      <line x1="6" y1="14" x2="12" y2="18"/>
                      <line x1="18" y1="14" x2="12" y2="18"/>
                    </svg>
                  </div>
                </motion.div>

                {/* Neural Network Nodes */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -top-4 -right-4 w-3 h-3 bg-blue-500 rounded-full shadow-lg"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-6 -left-6 w-2 h-2 bg-purple-500 rounded-full shadow-lg"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 0.9, 0.5]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute top-1/2 -right-8 w-2 h-2 bg-cyan-500 rounded-full shadow-lg"
                />

                {/* Connection Lines */}
                <motion.div
                  animate={{ 
                    scaleX: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute top-1/4 left-1/4 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform rotate-12"
                />
                <motion.div
                  animate={{ 
                    scaleX: [1, 0.9, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-1/4 right-1/4 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transform -rotate-12"
                />
              </div>

              {/* Large Profile Image */}
              <div className="relative w-96 h-[400px] rounded-3xl border border-gray-200 dark:border-gray-600 shadow-2xl overflow-hidden">
                <img 
                  src="/profile.jpg" 
                  alt="Devansh Agarwal" 
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Image Overlay Effects */}
                <motion.div
                  animate={{ 
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 pointer-events-none"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;