import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Globe, Cpu, Database, Code, Brain, Zap } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "B.S. in Computer Engineering",
      minor: "Minor in Statistics",
      honors: "James Scholar",
      school: "University of Illinois Urbana-Champaign (UIUC)",
      graduation: "August 2023 - May 2027",
      icon: GraduationCap,
      description: "Pursuing a education in computer engineering with statistical analysis skills, maintaining academic excellence as a James Scholar.",
      techFocus: ["Digital Systems Design", "Artificial Intelligence", "Statistics", "Data Structures & Algorithms", "Machine Learning"]
    },
    {
      degree: "Data Science",
      degree2: "& Artificial Intelligence",
      minor: "Summer Program",
      school: "Nanyang Technological University (NTU), Singapore",
      graduation: "June 2024 - July 2024",
      icon: Globe,
      description: "Intensive international program focusing on cutting-edge data science and artificial intelligence technologies.",
      techFocus: ["Python Programming", "Deep Learning", "Neural Networks", "Data Visualization", "AI Ethics", "Big Data Analytics"]
    }
  ];

  return (
    <section id="education" className="py-8 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-slate-600 dark:text-slate-400">Education</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-gray-600 flex flex-col h-full"
            >
              {/* Header with Logo and Title */}
              <div className="text-center mb-6 flex-shrink-0">
                {index === 0 ? (
                  // UIUC Logo
                  <div className="mb-4">
                    <img 
                      src="/UIUCLOGO.png" 
                      alt="UIUC Logo" 
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  </div>
                ) : (
                  // NTU Logo
                  <div className="mb-4">
                    <img 
                      src="/NTULOGO.png" 
                      alt="NTU Logo" 
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${
                  index === 0 
                    ? 'text-uiuc-navy dark:text-uiuc-navy' 
                    : 'text-ntu-navy dark:text-ntu-navy'
                }`}>
                  {item.degree}
                </h3>
                {item.degree2 && (
                  <h3 className={`text-2xl font-bold mb-2 ${
                    index === 0 
                      ? 'text-uiuc-navy dark:text-uiuc-navy' 
                      : 'text-ntu-navy dark:text-ntu-navy'
                  }`}>
                    {item.degree2}
                  </h3>
                )}
                
                {item.minor && (
                  <p className={`text-lg mb-3 font-medium ${
                    index === 0 
                      ? 'text-uiuc-orange dark:text-uiuc-orange' 
                      : 'text-ntu-red dark:text-ntu-red'
                  }`}>
                    {item.minor}
                  </p>
                )}
                
                {item.honors && (
                  <div className={`inline-flex items-center px-4 py-2 rounded-full mb-2 ${
                    index === 0 
                      ? 'bg-uiuc-orange/10 dark:bg-uiuc-orange/20' 
                      : 'bg-ntu-red/10 dark:bg-ntu-red/20'
                  }`}>
                    <Award className={`w-5 h-5 mr-2 ${
                      index === 0 
                        ? 'text-uiuc-navy dark:text-uiuc-navy' 
                        : 'text-ntu-navy dark:text-ntu-navy'
                    }`} />
                    <span className={`text-sm font-semibold ${
                      index === 0 
                        ? 'text-uiuc-navy dark:text-uiuc-navy' 
                        : 'text-ntu-navy dark:text-ntu-navy'
                    }`}>
                      {item.honors}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Institution and Date */}
              <div className="text-center mb-6 flex-shrink-0">
                <p className={`text-xl font-bold mb-2 ${
                  index === 0 
                    ? 'text-uiuc-navy dark:text-uiuc-navy' 
                    : 'text-ntu-navy dark:text-ntu-navy'
                }`}>
                  {item.school}
                </p>
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                  {item.graduation}
                </p>
              </div>
              
              {/* Description */}
              <div className="text-center mb-6 flex-grow">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed min-h-[4rem]">
                  {item.description}
                </p>
              </div>
              
              {/* Tech Focus Areas */}
              <div className="border-t border-gray-200 dark:border-gray-600 pt-6 flex-shrink-0">
                <h4 className="text-center text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Technical Focus Areas
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {item.techFocus.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        index === 0 
                          ? 'bg-uiuc-orange/10 dark:bg-uiuc-orange/20 text-uiuc-navy dark:text-uiuc-navy border border-uiuc-orange/30 dark:border-uiuc-orange/50' 
                          : 'bg-ntu-red/10 dark:bg-ntu-red/20 text-ntu-navy dark:text-ntu-navy border border-ntu-red/30 dark:border-ntu-red/50'
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Excellence & Tech Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="bg-white dark:bg-gray-700 rounded-3xl p-10 border border-gray-100 dark:border-gray-600 shadow-xl max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Academic <span className="text-slate-900 dark:text-slate-400">Excellence</span>
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-600 dark:text-slate-400 mb-0">
                  James Scholar
                </h4>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-600 dark:text-slate-400 mb-0">
                  International
                </h4>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-600 dark:text-slate-400 mb-0">
                  Dual Focus
                </h4>
              </motion.div>
            </div>
            
            {/* Tech Stack Icons */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-600">
              <h4 className="text-center text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Core Technologies & Skills
              </h4>
              <div className="flex flex-wrap justify-center items-center gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/30 dark:to-slate-800/30 px-4 py-2 rounded-full"
                >
                  <Code className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Programming</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/30 dark:to-slate-800/30 px-4 py-2 rounded-full"
                >
                  <Cpu className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Hardware</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/30 dark:to-slate-800/30 px-4 py-2 rounded-full"
                >
                  <Database className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Data Science</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/30 dark:to-slate-800/30 px-4 py-2 rounded-full"
                >
                  <Brain className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">AI/ML</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/30 dark:to-gray-700/30 px-4 py-2 rounded-full"
                >
                  <Zap className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Statistics</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
