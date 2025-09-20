import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, TrendingUp, Users, Database } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Levrx Technologies Inc.",
      position: "Software Engineering Intern",
      duration: "May – Aug 2025",
      location: "Remote",
      icon: Database,
      highlights: [
        "Built Spring Boot Archiving Service that saved $10,000+ in storage costs",
        "Optimized database queries resulting in 40% faster performance",
        "Developed comprehensive dashboards for data visualization and monitoring",
        "Implemented microservices architecture for scalable data processing",
        "Collaborated with cross-functional teams to deliver production-ready solutions"
      ],
      technologies: ["Spring Boot", "Java", "Microservices", "Database Optimization", "Dashboard Development"],
      color: "from-slate-500 to-slate-700"
    },
    {
      company: "InGO Electric",
      position: "Software Engineering Intern",
      duration: "Summer 2024",
      location: "Bangalore, India",
      icon: Users,
      highlights: [
        "Supported 50+ users across multiple departments with technical assistance",
        "Improved OpsPod software functionality and user experience",
        "Conducted scooter telemetry analysis for performance optimization",
        "Recommended BMS-based solutions for battery management systems",
        "Collaborated with engineering team on IoT and embedded systems projects"
      ],
      technologies: ["IoT", "Telemetry Analysis", "BMS", "Embedded Systems", "User Support"],
      color: "from-slate-600 to-slate-800"
    }
  ];

  return (
    <section id="experience" className="py-8 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="text-slate-600 dark:text-slate-400">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-900"></div>
              )}

              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <exp.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.position}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Impact Metrics */}
                    {index === 0 && (
                      <div className="mt-4 md:mt-0 flex space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">
                            $10K+
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Cost Saved
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">
                            40%
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Faster
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-slate-600 dark:text-slate-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <motion.li
                          key={highlightIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (index * 0.2) + (highlightIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {highlight}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
