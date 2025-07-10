'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  date: string;
  description: string[];
  tags: string[];
  icon: string; // Changed from imageUrl to icon (emoji)
  githubLink?: string;
  demoLink?: string;
  index: number;
  externalLink?: string;
  externalLabel?: string;
}

export default function ProjectCard({
  title,
  subtitle,
  date,
  description,
  tags,
  icon,
  githubLink,
  demoLink,
  index,
  externalLink,
  externalLabel,
}: ProjectCardProps) {
  // Fix type error by ensuring description is typed as string | string[]
  let descArr: string[] = [];
  if (Array.isArray(description)) {
    descArr = description;
  } else if (typeof description === 'string' && description) {
    descArr = [description];
  }

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="project-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      {/* Header with Icon and Title */}
      <div className="flex items-start gap-4 mb-6">
        <div className="text-4xl">{icon}</div>
        <div className="flex-1">
          <h3 className="project-card-text text-xl font-bold mb-2 gradient-text">{title}</h3>
          <p className="project-card-description text-sm mb-1">{subtitle}</p>
          <p className="project-card-description text-xs">{date}</p>
        </div>
      </div>
      
      {/* Description */}
      <div className="mb-6">
        <ul className="space-y-2">
          {descArr.map((item, idx) => (
            <li key={idx} className="project-card-description text-sm leading-relaxed flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Links */}
      <div className="flex gap-4 flex-wrap">
        {githubLink && (
          <Link 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <FiGithub className="mr-2" /> GitHub
          </Link>
        )}
        {demoLink && (
          <Link 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <FiExternalLink className="mr-2" /> Live Demo
          </Link>
        )}
        {externalLink && (
          <Link
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <FiExternalLink className="mr-2" /> {externalLabel || "Learn More"}
          </Link>
        )}
      </div>
    </motion.article>
  );
}
//               <FiExternalLink className="mr-1" /> Live Demo
//             </Link>
//           )}
//           {externalLink && (
//             <Link
//               href={externalLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center text-sm hover:text-primary transition-colors"
//             >
//               <FiExternalLink className="mr-1" /> {externalLabel || "Learn More"}
//             </Link>
//           )}
//         </div>
//       </div>
//     </motion.article>
//   );
// }
