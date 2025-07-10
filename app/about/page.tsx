'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiDownload, FiBook, FiAward, FiBriefcase } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 pb-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Learn more about my background, experience, and what drives me as a software engineer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/about-me.jpg"
                alt="Aaryan Gusain"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-4">My Journey</h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm Aaryan Gusain, a software engineer with a passion for building innovative and efficient solutions to complex problems. My journey in technology began at the University of Illinois, where I developed a strong foundation in computer science principles and practices.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Throughout my academic and professional career, I've been drawn to the intersection of software engineering and machine learning. I find it fascinating how data-driven approaches can create intelligent systems that enhance user experiences and solve real-world challenges.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and staying updated with the latest industry trends and best practices.
              </p>
              
              <a
                href="/GusainAaryan_Pro_RESUME.pdf"
                download
                className="btn btn-primary px-6 py-3 inline-flex items-center"
              >
                <FiDownload className="mr-2" /> Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center mb-6">
              <FiBook className="text-primary text-3xl mr-4" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            
            <div className="border-l-4 border-primary pl-6 ml-3 space-y-8">
              <div>
                <h3 className="text-xl font-bold">University of Illinois at Urbana-Champaign</h3>
                <p className="text-primary font-medium">Bachelor of Science in Computer Science</p>
                <p className="text-gray-600 dark:text-gray-400">2020 - 2024</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Relevant coursework: Data Structures, Algorithms, Machine Learning, Artificial Intelligence,
                  Database Systems, Computer Systems Engineering, Software Design
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center mb-6">
              <FiBriefcase className="text-primary text-3xl mr-4" />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            
            <div className="border-l-4 border-primary pl-6 ml-3 space-y-8">
              <div>
                <h3 className="text-xl font-bold">Software Engineering Intern</h3>
                <p className="text-primary font-medium">Microsoft</p>
                <p className="text-gray-600 dark:text-gray-400">Summer 2023</p>
                <ul className="mt-2 text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-1">
                  <li>Developed new features for Azure cloud services using C# and .NET Core</li>
                  <li>Implemented CI/CD pipelines that reduced deployment time by 40%</li>
                  <li>Collaborated with cross-functional teams to improve system architecture</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold">Research Assistant</h3>
                <p className="text-primary font-medium">UIUC Computer Vision Lab</p>
                <p className="text-gray-600 dark:text-gray-400">2022 - 2023</p>
                <ul className="mt-2 text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-1">
                  <li>Implemented computer vision algorithms for chess position recognition</li>
                  <li>Conducted experiments using PyTorch and TensorFlow</li>
                  <li>Co-authored a research paper on efficient image processing techniques</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold">Technical Lead</h3>
                <p className="text-primary font-medium">ACM Student Chapter</p>
                <p className="text-gray-600 dark:text-gray-400">2021 - 2023</p>
                <ul className="mt-2 text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-1">
                  <li>Led development of cybersecurity competition platform</li>
                  <li>Managed a team of 5 developers to meet project deadlines</li>
                  <li>Organized technical workshops and hackathons for 200+ students</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center mb-6">
              <FiAward className="text-primary text-3xl mr-4" />
              <h2 className="text-3xl font-bold">Skills</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Python</li>
                  <li>Java</li>
                  <li>JavaScript/TypeScript</li>
                  <li>C/C++</li>
                  <li>SQL</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Frameworks & Libraries</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>React & Next.js</li>
                  <li>Django</li>
                  <li>TensorFlow & PyTorch</li>
                  <li>Node.js & Express</li>
                  <li>Spring Boot</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Tools & Technologies</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Git & GitHub</li>
                  <li>Docker & Kubernetes</li>
                  <li>AWS & Azure</li>
                  <li>CI/CD (GitHub Actions, Jenkins)</li>
                  <li>Linux/Unix</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Machine Learning</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Supervised & Unsupervised Learning</li>
                  <li>Deep Learning</li>
                  <li>Computer Vision</li>
                  <li>Natural Language Processing</li>
                  <li>Data Analysis & Visualization</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Databases</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>Redis</li>
                  <li>Firebase</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Problem Solving</li>
                  <li>Team Leadership</li>
                  <li>Technical Communication</li>
                  <li>Project Management</li>
                  <li>Mentoring</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
