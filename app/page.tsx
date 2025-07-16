'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';
import Particles from '@/components/Particles';
import ExperienceSection from '@/components/ExperienceSection';

export default function Home() {
  const handleAnimationComplete = () => {
    console.log('Name animation completed!');
  };

  const projects = [
    {
      title: "Beehive Queen-Presence Classifier",
      subtitle: "Audio DSP, scikit-learn, LightGBM",
      date: "January 2025 – Present",
      description: [
        "Engineered a full labeling pipeline that time-syncs 20k+ Urban-Beehive recordings with hive-inspection logs producing a richly annotated dataset in < 5 min/run.",
        "Designed a 308-dim acoustic feature stack (128-band Mel stats + MFCC & Δ-MFCC summaries) and automated caching to cut extraction time by 70%.",
        "Delivered queen-presence detection at 98.4% accuracy (LightGBM, imbalanced-aware) while boosting minority-class recall 2x with MFCC augmentation and targeted SMOTE."
      ],
      tags: ["Python", "Machine Learning", "Audio Processing", "scikit-learn", "LightGBM"],
      icon: "🐝",
      githubLink: "https://github.com/AaryanGusain/Wagglenet_Work",
      externalLink: "https://wagglenet.org/",
      externalLabel: "WaggleNet"
    },
    {
      title: "Conversational AI Avatar Platform",
      subtitle: "Python, Llama-3 8B, DeepSpeed, Docker, WebRTC",
      date: "January 2025 – May 2025",
      description: [
        "Fine-tuned a LoRA-adapted Llama-3 8B model on 500K Reddit/CharacterAI lines using DeepSpeed ZeRO-2 on H100s, cutting epoch time by ~3× and optimizing inference for real-time responsiveness.",
        "Collaborated with full-stack, audio, and frontend teams to integrate the model into a production-grade WebRTC-driven Kurisu VTuber demo with Live2D animation, CosyVoice TTS, and Whisper ASR.",
        "Contributed to Docker-based deployment by aligning model outputs with audio-visual sync targets (<120ms drift), supporting prompt iteration and debugging tools across microservices.",
        "Helped design and analyze feedback loops to improve perceived naturalness (~30% gain), working alongside the conversational and UI teams to guide prompt engineering and user testing."
      ],
      tags: ["Python", "LLM", "DeepSpeed", "Docker", "WebRTC", "Live2D", "TTS", "ASR"],
      icon: "🎭",
      githubLink: "https://github.com/AaryanGusain/TextFine_Tune",
      demoLink: ""
    },
    {
      title: "American Sign Language Detection",
      subtitle: "React, Django, Python, ML",
      date: "Aug 2024 – Dec 2024",
      description: [
        "Developed a real-time ASL translator using MediaPipe Hands and a custom CNN model, achieving over 70% accuracy in dynamic letter prediction.",
        "Engineered a seamless React-powered interface with low-latency WebSocket integration, enabling real-time predictions and an interactive ASL learning experience."
      ],
      tags: ["React", "Django", "Python", "Machine Learning", "MediaPipe", "CNN"],
      icon: "🤟",
      githubLink: "https://github.com/AaryanGusain/ASL_interpreter",
      demoLink: ""
    },
    {
      title: "Job-Genie Job-Matching Platform",
      subtitle: "React, Node.js, MySQL, NLP",
      date: "February – Apr 2025",
      description: [
        "Delivered a full-stack resume-to-job pipeline using intelligent PDF parsing and TF-IDF similarity search to rank best job matches and one-click apply, all exposed through a Tailwind/React interface and REST API (< 100 ms median latency).",
        "Developed MySQL stored procedures, triggers, and transaction logic in the backend that deduplicate applications and auto-notify users, boosting data integrity and cutting manual review time to zero."
      ],
      tags: ["React", "Node.js", "MySQL", "NLP", "Tailwind", "REST API"],
      icon: "💼",
      githubLink: "https://github.com/AaryanGusain/Job_Genie",
      demoLink: ""
    },
    {
      title: "Stock Market Analyser",
      subtitle: "Rust, ML, Monte Carlo Simulations",
      date: "February 2024 - May 2024",
      description: [
        "Developed a Rust-based CLI stock analysis tool that predicts stock trends using Random Forest classification, achieving over 70% prediction accuracy on historical stock movements.",
        "Implemented Monte Carlo simulations (50,000 trials) to forecast future stock prices, providing quantified risk assessment and price probability distributions."
      ],
      tags: ["Rust", "Machine Learning", "Monte Carlo", "CLI", "Random Forest"],
      icon: "📈",
      githubLink: "https://github.com/AaryanGusain/StockData",
      demoLink: ""
    }
  ];

  return (
    <>
      <Particles />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center py-20 md:py-28 relative z-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 order-2 md:order-1">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
              >
                Hi, I'm{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Aaryan Gusain
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl mb-6 text-gray-300"
              >
                Junior studying CS at UIUC
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8 max-w-lg text-gray-400"
              >
                Passionate about building software that solves real-world problems through ML, data science, and full-stack development.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#projects"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center"
                >
                  View Projects <FiArrowRight className="ml-2" />
                </a>
                <a
                  href="/Website/GusainAaryan_Pro_RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 text-white hover:bg-gray-800 px-6 py-3 rounded-md transition-colors inline-flex items-center"
                >
                  View Resume <FiDownload className="ml-2" />
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex mt-8 gap-6"
              >
                <Link href="https://github.com/AaryanGusain" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FiGithub size={22} className="text-gray-400 hover:text-blue-400 transition-colors" />
                </Link>
                <Link href="https://www.linkedin.com/in/aaryan-gusain" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FiLinkedin size={22} className="text-gray-400 hover:text-blue-400 transition-colors" />
                </Link>
                <Link href="mailto:agusain2@illinois.edu" aria-label="Email">
                  <FiMail size={22} className="text-gray-400 hover:text-blue-400 transition-colors" />
                </Link>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400/20"
              >
                <Image 
                  src="/Website/images/E_Gusain_Aaryan.png" 
                  alt="Aaryan Gusain" 
                  fill 
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Professional Experience Section */}
      <section id="experience" className="py-16 relative z-10">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-white"
          >
            Professional Experience
          </motion.h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 mb-8">
            <ExperienceSection 
              title="UL Solutions"
              location="Fremont, CA"
              position="Engineer Intern"
              date="May 2025- Aug 2025"
              description={[
                "Leveraged Python frameworks (e.g., PySerial, PyVISA) to control Chimp-driven test fixtures and DUTs over SCPI/LXI, seamlessly orchestrating communication with Keysight UXA analyzers and calibration equipment, reducing configuration time by ~50% and improving consistency for a new product launch for a Fortune 50 client, while enabling real-time monitoring of key metrics (e.g. OBW, SEM, CSE) to surface emissions anomalies early.",
                "Accelerated high-volume testing validation by 200% by harnessing software to automate spectrum capture and report generation pipelines, transforming a error-prone workflow into a streamlined, repeatable process."
              ]}
            />
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
            <ExperienceSection 
              title="Lumiere Education"
              position="Research Assistant"
              description={[
                "Utilized over 170+ years of NOAA historical data alongside 100+ web-scraped records of major hurricanes from Wikipedia and other diverse online repositories to conduct a comprehensive statistical analysis. Identified a strong (85%) correlation between tropical cyclone intensity, frequency, wind speed, and average temperature through various machine learning techniques, underscoring temperature as a primary driver of hurricane development and escalation."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 relative z-10">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-white"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50 hover:border-blue-400/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{project.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-blue-400">{project.subtitle}</p>
                      <p className="text-sm text-gray-400">{project.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FiGithub size={24} />
                    </a>
                    {project.externalLink && (
                      <a
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FiExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-gray-300 text-sm leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs border border-blue-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 relative z-10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">My Skills</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I've developed expertise in various technologies and methodologies throughout my career
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Python', icon: '🐍' },
              { name: 'Java', icon: '☕' },
              { name: 'JS/TS', icon: '💛' },
              { name: 'C++', icon: '⚡' },
              { name: 'React', icon: '⚛️' },
              { name: 'PyTorch', icon: '🔥' },
              { name: 'TensorFlow', icon: '🧠' },
              { name: 'Flask', icon: '🌶️' },
              { name: 'Docker', icon: '🐳' },
              { name: 'SQL/NoSQL', icon: '🗄️' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'Django', icon: '🐍' },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-gray-700/50 transition-colors border border-gray-700/50"
              >
                <div className="mb-3 text-3xl">
                  {skill.icon}
                </div>
                <h3 className="font-medium text-white">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 relative z-10">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-12 border border-gray-700/50"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Let's Work Together
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="mailto:agusain2@illinois.edu"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md transition-colors inline-flex items-center"
            >
              Get In Touch <FiMail className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}