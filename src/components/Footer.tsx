import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/devanshagarwal",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/devanshagarwal2510/",
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    {
      icon: Mail,
      label: "Email",
      link: "mailto:da30@illinois.edu",
      color: "hover:text-red-600 dark:hover:text-red-400"
    },
    {
      icon: FileText,
      label: "Resume",
      link: "/Devansh_Agarwal.pdf",
      color: "hover:text-green-600 dark:hover:text-green-400"
    }
  ];

  return (
    <footer className="bg-gray-150 dark:bg-gray-900 text-gray-900 dark:text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-2">
              Devansh Agarwal
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Computer Engineering student (Junior) with a minor in Statistics at UIUC. 
              Software Engineer passionate about building innovative solutions and pushing the boundaries of technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {['Home', 'Education', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm text-center"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className={`p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Devansh Agarwal.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-xs mt-2">
            UIUC Computer Engineering (Junior) • Minor in Statistics • James Scholar • Software Engineer
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
