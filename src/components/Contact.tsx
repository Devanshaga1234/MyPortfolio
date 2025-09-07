import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Send, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "da30@illinois.edu",
      link: "mailto:da30@illinois.edu",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (217) 721-8133",
      link: "tel:+12177218133",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/devanshagarwal2510/",
      link: "https://linkedin.com/in/devanshagarwal2510/",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Devanshaga1234",
      link: "https://github.com/Devanshaga1234",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Urbana-Champaign, IL",
      link: "https://www.google.com/maps/place/Champaign,+IL",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const handleContactClick = (link: string, type: string) => {
    if (type === 'email') {
      window.open(link, '_blank');
    } else if (type === 'phone') {
      window.open(link, '_blank');
    } else if (type === 'linkedin') {
      window.open(link, '_blank');
    } else if (type === 'location') {
      window.open(link, '_blank');
    } else if (type === 'github') {
      window.open(link, '_blank');
    }
  };

  return (
    <section id="contact" className="py-8 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-7">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {info.label}
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium truncate">
                      {info.value}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => handleContactClick(
                      info.link, 
                      info.label.toLowerCase()
                    )}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors text-sm font-medium"
                  >
                    {info.label === 'Email' ? 'Send Email' : 
                     info.label === 'Phone' ? 'Call' : 
                     info.label === 'LinkedIn' ? 'Connect' : 'View'}
                  </button>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Whether you have a project in mind, want to discuss potential opportunities, 
              or just want to connect, I'd love to hear from you. Let's explore how we 
              can collaborate to create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleContactClick("mailto:da30@illinois.edu", "email")}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start a Conversation
              </button>
              <button 
                onClick={() => handleContactClick("https://linkedin.com/in/devanshagarwal2510/", "linkedin")}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Connect on LinkedIn
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;