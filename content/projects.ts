export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "acm",
    title: "ACM Cybersecurity CTF",
    description: "Led a team of developers to implement a secure, containerized platform for cybersecurity competitions supporting thousands of users. Developed with Docker, Django, and implemented a full CI/CD pipeline with GitHub Actions.",
    tags: ["Django", "Python", "Docker", "CI/CD", "AWS"],
    imageUrl: "/images/projects/ctf-platform.jpg",
    githubUrl: "https://github.com/acm-uiuc/ctf-platform",
    featured: true
  },
  {
    id: "spotify-clone",
    title: "Spotify Recommendation System",
    description: "Built a recommendation system that analyzes user listening habits and suggests new songs based on content-based filtering. Implemented machine learning models to provide personalized music recommendations.",
    tags: ["Python", "Machine Learning", "Spotify API", "Data Science"],
    imageUrl: "/images/projects/spotify-recommendations.jpg",
    githubUrl: "https://github.com/AaryanGusain/spotify-recommendations",
    featured: true
  },
  {
    id: "chessboard-reconstruction",
    title: "Chessboard Reconstruction from Images",
    description: "Developed computer vision algorithms to reconstruct chess positions from images with high accuracy. Implemented image processing techniques to handle varying lighting conditions and perspectives.",
    tags: ["Computer Vision", "Python", "TensorFlow", "OpenCV"],
    imageUrl: "/images/projects/chess-vision.jpg",
    githubUrl: "https://github.com/AaryanGusain/chess-vision",
    featured: true
  },
  {
    id: "stock-trading-bot",
    title: "Stock Trading Bot",
    description: "Created an automated trading bot that uses technical analysis and machine learning to identify potential trading opportunities in the stock market. Features backtesting capabilities and risk management strategies.",
    tags: ["Python", "Machine Learning", "Financial Analysis", "API Integration"],
    imageUrl: "/images/projects/trading-bot.jpg",
    githubUrl: "https://github.com/AaryanGusain/trading-bot",
    featured: false
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    description: "Designed and developed a responsive personal portfolio website using Next.js and Tailwind CSS. Features dynamic content, dark mode, and optimized performance.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/images/projects/portfolio.jpg",
    githubUrl: "https://github.com/AaryanGusain/portfolio",
    liveUrl: "https://aaryan-gusain.com",
    featured: false
  }
];

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
