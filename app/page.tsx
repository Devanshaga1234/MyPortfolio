'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import ProjectCard from '@/components/ProjectCard';
import ExperienceSection from '@/components/ExperienceSection';
import { getFeaturedProjects } from '@/content/projects';

export default function Home() {
  // Debug: Log to console to check if component is rendering and Tailwind is loaded
  if (typeof window !== "undefined") {
    // This will show up in your browser console
    console.log("Home page rendered. Tailwind test:", window.getComputedStyle(document.body).backgroundColor);
    // Test for a Tailwind class
    const testDiv = document.createElement("div");
    testDiv.className = "bg-blue-500";
    document.body.appendChild(testDiv);
    const testColor = window.getComputedStyle(testDiv).backgroundColor;
    console.log("Tailwind bg-blue-500 computed color:", testColor);
    document.body.removeChild(testDiv);
  }

  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 order-2 md:order-1">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              >
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Aaryan Gusain</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl mb-6 text-muted-foreground"
              >
                Software Engineer & Machine Learning Enthusiast
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 max-w-lg"
              >
                I'm a computer science student at the University of Illinois Urbana-Champaign, passionate 
                about building software that solves real-world problems through ML, data science, and full-stack development.
              </motion.p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects" className="btn-primary px-6 py-3 rounded-md">
                  View Projects <FiArrowRight className="ml-2 inline" />
                </Link>
                <a
                  href="/api/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline px-6 py-3"
                >
                  View Resume <FiDownload className="ml-2" />
                </a>
              </div>
              <div className="flex mt-8 gap-6">
                <Link href="https://github.com/AaryanGusain" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FiGithub size={22} className="text-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="https://www.linkedin.com/in/aaryan-gusain" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FiLinkedin size={22} className="text-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="mailto:agusain2@illinois.edu" aria-label="Email">
                  <FiMail size={22} className="text-foreground hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <Image 
                  src="/images/E_Gusain_Aaryan.png" 
                  alt="Aaryan Gusain" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Professional Experience Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Professional Experience
          </motion.h2>
          
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
          
          <ExperienceSection 
            title="Lumiere Education"
            position="Research Assistant"
            description={[
              "Utilized over 170+ years of NOAA historical data alongside 100+ web-scraped records of major hurricanes from Wikipedia and other diverse online repositories to conduct a comprehensive statistical analysis. Identified a strong (85%) correlation between tropical cyclone intensity, frequency, wind speed, and average temperature through various machine learning techniques, underscoring temperature as a primary driver of hurricane development and escalation."
            ]}
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I've developed expertise in various technologies and methodologies throughout my career
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Python', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 mx-auto"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="#3776AB"/></svg> },
              { name: 'Java', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 mx-auto"><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.93.828-.093-1.307-.92-7.644 1.637-3.27 2.339 11.944 1.918 21.75-.825 15.604-2.272M9.292 13.21s-5.424 1.288-1.922 1.754c1.479.198 4.428.153 7.186-.078 2.249-.191 4.502-.599 4.502-.599s-.792.34-1.363.731c-5.509 1.449-16.139.779-13.07-.713 2.594-1.26 4.667-1.095 4.667-1.095M17.127 17.208c5.596-2.911 3.007-5.711 1.202-5.333-.417.093-.615.439-.615.439s.159-.246.461-.353c3.442-1.209 6.086 3.713-1.158 5.682 0-.001.087-.077.11-.136M14.401 0s3.099 3.099-2.938 7.863c-4.834 3.834-1.103 6.022-.002 8.517-2.822-2.547-4.897-4.786-3.506-6.869 2.044-3.053 7.712-4.534 6.446-9.511M9.734 23.924c5.366.343 13.613-.189 13.809-2.716 0 0-.378.963-4.442 1.728-4.586.861-10.249.759-13.618.207 0 0 .688.571 4.251.78" fill="#007396"/></svg> },
              { name: 'JS/TS', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 mx-auto"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#F7DF1E"/></svg> },
              { name: 'C++', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 mx-auto"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.109-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="#00599C"/></svg> },
              { name: 'React', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 mx-auto"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="#61DAFB"/></svg> },
              { name: 'PyTorch', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 mx-auto"><path d="M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582 2.58-5.5 5.501L24 12.005l-3.06-3.06 1.354-1.487L12.005 0zM9.13 10.825a1.316 1.316 0 10.001 2.633 1.316 1.316 0 00-.001-2.633z" fill="#EE4C2C"/></svg> },
              { name: 'TensorFlow', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 mx-auto"><path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l10.262-5.856-4.096-2.378V7.603l4.096-2.365v5.929z" fill="#FF6F00"/></svg> },
              { name: 'Flask', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 mx-auto"><path d="M7.172 22.83a2.667 2.667 0 01-1.768-1.242 2.73 2.73 0 01-.377-2.121L7.97 9.894 6.867 7.755a.075.075 0 01-.009-.069.074.074 0 01.054-.045l.188-.031 5.007-1.776c.023-.007.05-.005.072.008a.078.078 0 01.04.05l.94 2.639 2.95-10.467a.074.074 0 01.055-.053.072.072 0 01.072.017c.017.016.027.039.028.063l.609 11.958 2.7-3.095a.074.074 0 01.103-.011c.033.029.043.078.024.118l-6.587 14.026a2.73 2.73 0 01-1.708 1.41 2.667 2.667 0 01-2.073-.279l-1.16-.656zM7.199 7.89l1.105 2.154a.077.077 0 01.007.068l-2.83 9.89c-.137.467-.089.961.14 1.386.238.437.632.755 1.111.894.48.131.991.094 1.441-.106a1.655 1.655 0 00.85-.981l6.538-13.931-2.412 2.763a.071.071 0 01-.06.026.072.072 0 01-.054-.036.077.077 0 01-.01-.07l1.177-3.535L8.571 7.889h-1.37z" fill="#000000"/></svg> },
              { name: 'Docker', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 mx-auto"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.638.403 2.18.45.495 1.116.733 1.994.733.855 0 1.74-.25 2.28-.589l.97-.39-.103.82-.145.44-.415.447c-.3.299-.803.605-1.487.787-.382.12-.778.182-1.177.185-1.382 0-2.34-.86-2.816-1.708l-.505-.842c-.275.502-.57.975-.92 1.428-.893 1.148-2.058 1.757-3.516 1.866-.41.03-.704.036-1.034.036-1.79 0-3.45-.71-4.074-1.663l-.248-.401c-.89.459-.508.491-1.189.491-.547 0-1.091-.58-1.283-.917l-.108-.181-.147.126a1.14 1.14 0 01-.823.35c-.48 0-.928-.267-1.114-.696l-.074-.158-.132.12a1.14 1.14 0 01-.778.314c-.58 0-1.05-.467-1.05-1.043 0-.46.3-.858.736-.99l.157-.046v-.059c0-1.291.419-2.43 1.23-3.308C4.854 4.387 5.87 3.833 7.33 3.44c.914-.242 1.844-.362 2.798-.362 1.055 0 2.032.126 2.915.375 1.903.536 3.379 1.805 4.247 3.655a8.93 8.93 0 011.536-.137c1.334 0 2.293.45 2.952 1.382.597.845.893 1.972.919 3.499l.01.785.27.301c.33.372.666.99.717 1.773l.002.14-.017.053z" fill="#2496ED"/></svg> },
              { name: 'SQL/NoSQL', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 mx-auto"><path d="M12 2C8.741 2 6 3.057 6 4.5v15C6 20.943 8.741 22 12 22s6-1.057 6-2.5v-15C18 3.057 15.259 2 12 2zM12 20c-2.21 0-4-.897-4-2v-1.042C9.075 17.541 10.393 18 12 18c1.607 0 2.925-.459 4-1.042V18c0 1.103-1.79 2-4 2zm0-4.5c-2.21 0-4-.897-4-2v-1.042C9.075 13.041 10.393 13.5 12 13.5c1.607 0 2.925-.459 4-1.042V13.5c0 1.103-1.79 2-4 2zm0-4.5c-2.21 0-4-.897-4-2V8.458C9.075 9.041 10.393 9.5 12 9.5c1.607 0 2.925-.459 4-1.042V9c0 1.103-1.79 2-4 2zm0-4.5c-2.21 0-4-.897-4-2s1.79-2 4-2 4 .897 4 2-1.79 2-4 2z" fill="#4479A1"/></svg> },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow hover:scale-105 duration-300"
              >
                <div className="mb-3">
                  {skill.icon}
                </div>
                <h3 className="font-medium">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {/*
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my technical skills and problem-solving abilities
            </p>
          </motion.div>

          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="btn btn-outline px-6 py-3">
              View All Projects <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      {/*
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in working together?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Let's Connect
            </Link>
          </motion.div>
        </div>
      </section>
      */}
    </>
  );
}