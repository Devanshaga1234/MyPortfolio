import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechIntroProps {
  onComplete: () => void;
}

const TechIntro: React.FC<TechIntroProps> = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState<'coding'>('coding');
  const [codeText, setCodeText] = useState('');
  const [showSkip, setShowSkip] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [binaryParticles, setBinaryParticles] = useState<Array<{id: number, x: number, y: number, value: string, move1x: number, move1y: number, move2x: number, move2y: number, move3x: number, move3y: number}>>([]);
  const [hackCode, setHackCode] = useState<Array<{id: number, x: number, y: number, text: string, move1x: number, move1y: number, move2x: number, move2y: number, move3x: number, move3y: number}>>([]);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const codeSnippet = `const portfolio = {
  name: "Devansh Agarwal",
  role: "Software Engineer",
  build: () => launch()
};`;

  // Generate background particles and hack code
  useEffect(() => {
    // Binary particles - avoid center area, spread around edges
    const particles = [];
    for (let i = 0; i < 80; i++) {
      let x, y;
      // Avoid circular area around code snippet (center 50%, 50% with radius ~10%)
      let distanceFromCenter;
      do {
        x = Math.random() * 100; // 0% to 100%
        y = Math.random() * 100; // 0% to 100%
        distanceFromCenter = Math.sqrt((x - 50) ** 2 + (y - 50) ** 2);
      } while (distanceFromCenter < 10);
      
      // Pre-calculate smoother movement offsets
      const move1x = (Math.random() - 0.5) * 8; // -4% to +4%
      const move1y = (Math.random() - 0.5) * 6;  // -3% to +3%
      const move2x = (Math.random() - 0.5) * 6;  // -3% to +3%
      const move2y = (Math.random() - 0.5) * 8; // -4% to +4%
      const move3x = (Math.random() - 0.5) * 4;  // -2% to +2%
      const move3y = (Math.random() - 0.5) * 4;  // -2% to +2%
      
      particles.push({
        id: i,
        x: x,
        y: y,
        value: i % 2 === 0 ? '1' : '0', // Equal distribution: even = 1, odd = 0
        move1x, move1y, move2x, move2y, move3x, move3y
      });
    }
    setBinaryParticles(particles);

    // Hacking code snippets - systematically distributed
    const hackTexts = [
      'sudo rm -rf /',
      'hack.exe',
      'access_granted',
      'firewall_bypass',
      'root@server',
      'inject_payload',
      'decrypt_key',
      'brute_force',
      'sql_injection',
      'buffer_overflow',
      'exploit_found',
      'system_compromised'
    ];

    const hackElements = [];
    for (let i = 0; i < 35; i++) {
      let x, y;
      // Avoid circular area around code snippet (center 50%, 50% with radius ~10%)
      let distanceFromCenter;
      do {
        x = Math.random() * 100; // 0% to 100%
        y = Math.random() * 100; // 0% to 100%
        distanceFromCenter = Math.sqrt((x - 50) ** 2 + (y - 50) ** 2);
      } while (distanceFromCenter < 10);
      
      // Pre-calculate smoother movement offsets
      const move1x = (Math.random() - 0.5) * 6;  // -3% to +3%
      const move1y = (Math.random() - 0.5) * 4;  // -2% to +2%
      const move2x = (Math.random() - 0.5) * 4;  // -2% to +2%
      const move2y = (Math.random() - 0.5) * 6;  // -3% to +3%
      const move3x = (Math.random() - 0.5) * 8; // -4% to +4%
      const move3y = (Math.random() - 0.5) * 3; // -1.5% to +1.5%
      
      hackElements.push({
        id: i,
        x: x,
        y: y,
        text: hackTexts[Math.floor(Math.random() * hackTexts.length)],
        move1x, move1y, move2x, move2y, move3x, move3y
      });
    }
    setHackCode(hackElements);
  }, []);

  useEffect(() => {
    // Show skip button after 0.3s
    const skipTimer = setTimeout(() => setShowSkip(true), 300);

    if (prefersReducedMotion) {
      // Reduced motion: show static frame and quick transition
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 300);
      }, 1500);
      return;
    }

    // Code typing animation
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < codeSnippet.length) {
        setCodeText(codeSnippet.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        // Transition directly after typing is complete
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 300);
        }, 1000);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(skipTimer);
    };
  }, [onComplete, prefersReducedMotion, codeSnippet]);



  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onComplete, 300);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-[#0f1115] overflow-hidden"
      >
        {/* Background Binary Particles */}
        <div className="absolute inset-0">
          {binaryParticles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ 
                left: particle.x + '%', 
                top: particle.y + '%',
                opacity: 0.2
              }}
              animate={{ 
                left: [
                  particle.x + '%',
                  (particle.x + particle.move1x) + '%',
                  (particle.x + particle.move2x) + '%',
                  (particle.x + particle.move3x) + '%',
                  particle.x + '%'
                ],
                top: [
                  particle.y + '%',
                  (particle.y + particle.move1y) + '%',
                  (particle.y + particle.move2y) + '%',
                  (particle.y + particle.move3y) + '%',
                  particle.y + '%'
                ],
                opacity: [0.2, 0.25, 0.20, 0.25, 0.2]
              }}
              transition={{ 
                duration: 12 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="fixed text-[#00FF99] text-sm font-mono pointer-events-none z-10"
              style={{
                left: particle.x + '%',
                top: particle.y + '%'
              }}
            >
              {particle.value}
            </motion.div>
          ))}
        </div>

        {/* Background Hacking Code */}
        <div className="absolute inset-0">
          {hackCode.map((hack) => (
            <motion.div
              key={hack.id}
              initial={{ 
                left: hack.x + '%', 
                top: hack.y + '%',
                opacity: 0.15
              }}
              animate={{ 
                left: [
                  hack.x + '%',
                  (hack.x + hack.move1x) + '%',
                  (hack.x + hack.move2x) + '%',
                  (hack.x + hack.move3x) + '%',
                  hack.x + '%'
                ],
                top: [
                  hack.y + '%',
                  (hack.y + hack.move1y) + '%',
                  (hack.y + hack.move2y) + '%',
                  (hack.y + hack.move3y) + '%',
                  hack.y + '%'
                ],
                opacity: [0.15, 0.20, 0.15, 0.20, 0.15]
              }}
              transition={{ 
                duration: 15 + Math.random() * 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="fixed text-[#FA6424] text-xs font-mono pointer-events-none z-10"
              style={{
                left: hack.x + '%',
                top: hack.y + '%'
              }}
            >
              {hack.text}
            </motion.div>
          ))}
        </div>

        {/* Skip Button - Bottom Right */}
        {showSkip && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleSkip}
            className="absolute bottom-6 right-6 px-4 py-2 text-gray-400 hover:text-white border border-gray-600 hover:border-gray-400 rounded-lg transition-all duration-300 backdrop-blur-sm bg-black/20"
          >
            Skip
          </motion.button>
        )}


        {/* Coding Phase */}
        {currentPhase === 'coding' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center h-full"
          >
            <div className="max-w-4xl mx-auto px-8">
              <div className="font-mono text-[#00FF99] text-lg leading-relaxed">
                <pre className="whitespace-pre-wrap">
                  {codeText}
                  {codeText.length < codeSnippet.length && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="ml-1"
                    >
                      |
                    </motion.span>
                  )}
                </pre>
              </div>
            </div>
          </motion.div>
        )}


      </motion.div>
    </AnimatePresence>
  );
};

export default TechIntro;
