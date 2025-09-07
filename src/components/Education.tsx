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
      degree: "Summer Program in Data Science",
      degree2: "& Artificial Intelligence",
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Education</span>
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
              className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-gray-600"
            >
              {/* Header with Icon and Title */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.degree}
                </h3>
                {item.degree2 && (
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.degree2}
                  </h3>
                )}
                
                {item.minor && (
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-3 font-medium">
                    {item.minor}
                  </p>
                )}
                
                {item.honors && (
                  <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 px-4 py-2 rounded-full mb-2">
                    <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2" />
                    <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">
                      {item.honors}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Institution and Date */}
              <div className="text-center mb-4">
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {item.school}
                </p>
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                  {item.graduation}
                </p>
              </div>
              
              {/* Description */}
              <div className="text-center mb-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Tech Focus Areas */}
              <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
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
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700"
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
                Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Excellence</span>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  James Scholar
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Top academic distinction at UIUC
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  International
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Global learning experience
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
                  Dual Focus
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Engineering + Statistics
                </p>
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
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 px-4 py-2 rounded-full"
                >
                  <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-blue-700 dark:text-blue-300 font-medium">Programming</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 px-4 py-2 rounded-full"
                >
                  <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span className="text-purple-700 dark:text-purple-300 font-medium">Hardware</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 px-4 py-2 rounded-full"
                >
                  <Database className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-700 dark:text-green-300 font-medium">Data Science</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 px-4 py-2 rounded-full"
                >
                  <Brain className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <span className="text-orange-700 dark:text-orange-300 font-medium">AI/ML</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-cyan-900/30 dark:to-cyan-800/30 px-4 py-2 rounded-full"
                >
                  <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <span className="text-cyan-700 dark:text-cyan-300 font-medium">Statistics</span>
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
