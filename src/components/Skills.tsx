import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Cloud, 
  BarChart3, 
  Globe, 
  Database,
  Zap,
  ChevronRight,
  FileText,
  Server,
  Monitor,
  Layers
} from 'lucide-react';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", icon: Code, description: "Data Science, ML, Web Development" },
        { name: "Java", icon: Code, description: "Spring Boot, Enterprise Apps" },
        { name: "C/C++", icon: Code, description: "System Programming, Algorithms" },
        { name: "SQL", icon: Database, description: "Database Design, Queries" },
        { name: "R", icon: BarChart3, description: "Statistical Analysis" },
        { name: "JavaScript/TypeScript", icon: Code, description: "React, Node.js, Full-stack" },
        { name: "HTML/CSS", icon: FileText, description: "Web Development, Styling" },
      ]
    },
    {
      title: "Backend",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Spring Boot", icon: Server, description: "Java Framework, REST APIs" },
        { name: "Flask", icon: Server, description: "Python Web Framework" },
        { name: "Node.js/Express", icon: Server, description: "JavaScript Backend" },
        { name: "ETL (FME)", icon: Layers, description: "Data Integration" },
      ]
    },
    {
      title: "Frontend",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "React", icon: Monitor, description: "Frontend Development, Hooks" },
        { name: "Vite", icon: Zap, description: "Build Tool, Fast Development" },
        { name: "Tailwind CSS", icon: FileText, description: "Utility-first CSS" },
        { name: "Framer Motion", icon: Zap, description: "Animation Library" },
      ]
    },
    {
      title: "Cloud/DevOps",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS (EC2, S3)", icon: Cloud, description: "Cloud Services" },
        { name: "Docker", icon: Server, description: "Containerization" },
        { name: "Git", icon: Code, description: "Version Control" },
        { name: "Cloudflare Workers", icon: Zap, description: "Edge Computing" },
        { name: "CI/CD", icon: Layers, description: "Automation Pipelines" },
        { name: "Linux", icon: Server, description: "System Administration" },
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "PostgreSQL", icon: Database, description: "Relational Database" },
        { name: "MySQL", icon: Database, description: "Open Source RDBMS" },
        { name: "MongoDB", icon: Database, description: "NoSQL Database" },
        { name: "Neo4j", icon: Database, description: "Graph Database" },
        { name: "Amazon Redshift", icon: Database, description: "Data Warehouse" },
        { name: "RDS/Aurora", icon: Database, description: "Managed Database" },
      ]
    },
    {
      title: "Data/Analytics",
      icon: BarChart3,
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "Tableau", icon: BarChart3, description: "Data Visualization" },
        { name: "FME", icon: Layers, description: "Data Integration" },
        { name: "R", icon: BarChart3, description: "Statistical Analysis" },
        { name: "Data Visualization", icon: BarChart3, description: "Charts, Dashboards" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-8 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-700 mb-6"
          >
            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">Technical Expertise</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Technologies</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-blue-500'
              }`}
            >
              <div className="flex items-center gap-2">
                <category.icon className="w-4 h-4" />
                <span>{category.title}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group relative"
            >
              <div className="bg-white dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600 hover:border-blue-500 transition-all duration-300 h-full shadow-lg">
                {/* Skill Content */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                    <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-semibold text-sm">{skill.name}</h3>
                </div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredSkill === skill.name ? 1 : 0,
                    y: hoveredSkill === skill.name ? 0 : 10
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 border border-gray-200 dark:border-gray-600 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
              Additional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Expertise</span>
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                "Performance Optimization","Machine Learning","Figma" 
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="group"
                >
                  <div className="bg-gray-100 dark:bg-gray-600 rounded-xl p-3 text-center border border-gray-200 dark:border-gray-500 hover:border-blue-500 transition-all duration-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;