import { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects | Aaryan Gusain',
  description: 'Showcasing projects by Aaryan Gusain'
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "Beehive Queen-Presence Classifier",
      subtitle: "Audio DSP, scikit-learn, LightGBM",
      date: "January 2025 – Present",
      description: [
        "Engineered a full labeling pipeline that time-syncs 20k+ Urban-Beehive recordings with hive-inspection logs producing a richly annotated dataset in < 5 min/run.",
        "Designed a 308-dim acoustic feature stack (128-band Mel stats + MFCC & Δ-MFCC summaries) and automated caching to cut extraction time by 70%.",
        "Delivered queen-presence detection at 98.4% accuracy (LightGBM, imbalanced-aware) while boosting minority-class recall 2x with MFCC augmentation and targeted SMOTE."
      ],
      tags: ["Python", "Machine Learning", "Audio Processing", "scikit-learn", "LightGBM"],
      icon: "🐝",
      githubLink: "https://github.com/AaryanGusain/Wagglenet_Work",
      externalLink: "https://wagglenet.org/",
      externalLabel: "WaggleNet"
    },
    {
      title: "Conversational AI Avatar Platform",
      subtitle: "Python, Llama-3 8B, DeepSpeed, Docker, WebRTC",
      date: "January 2025 – May 2025",
      description: [
        "Fine-tuned a LoRA-adapted Llama-3 8B model on 500K Reddit/CharacterAI lines using DeepSpeed ZeRO-2 on H100s, cutting epoch time by ~3× and optimizing inference for real-time responsiveness.",
        "Collaborated with full-stack, audio, and frontend teams to integrate the model into a production-grade WebRTC-driven Kurisu VTuber demo with Live2D animation, CosyVoice TTS, and Whisper ASR.",
        "Contributed to Docker-based deployment by aligning model outputs with audio-visual sync targets (<120ms drift), supporting prompt iteration and debugging tools across microservices.",
        "Helped design and analyze feedback loops to improve perceived naturalness (~30% gain), working alongside the conversational and UI teams to guide prompt engineering and user testing."
      ],
      tags: ["Python", "LLM", "DeepSpeed", "Docker", "WebRTC", "Live2D", "TTS", "ASR"],
      icon: "🎭",
      githubLink: "https://github.com/AaryanGusain/TextFine_Tune",
      demoLink: ""
    },
    {
      title: "American Sign Language Detection",
      subtitle: "React, Django, Python, ML",
      date: "Aug 2024 – Dec 2024",
      description: [
        "Developed a real-time ASL translator using MediaPipe Hands and a custom CNN model, achieving over 70% accuracy in dynamic letter prediction.",
        "Engineered a seamless React-powered interface with low-latency WebSocket integration, enabling real-time predictions and an interactive ASL learning experience."
      ],
      tags: ["React", "Django", "Python", "Machine Learning", "MediaPipe", "CNN"],
      icon: "🤟",
      githubLink: "https://github.com/AaryanGusain/ASL_interpreter",
      demoLink: ""
    },
    {
      title: "Job-Genie Job-Matching Platform",
      subtitle: "React, Node.js, MySQL, NLP",
      date: "February – Apr 2025",
      description: [
        "Delivered a full-stack resume-to-job pipeline using intelligent PDF parsing and TF-IDF similarity search to rank best job matches and one-click apply, all exposed through a Tailwind/React interface and REST API (< 100 ms median latency).",
        "Developed MySQL stored procedures, triggers, and transaction logic in the backend that deduplicate applications and auto-notify users, boosting data integrity and cutting manual review time to zero."
      ],
      tags: ["React", "Node.js", "MySQL", "NLP", "Tailwind", "REST API"],
      icon: "💼",
      githubLink: "https://github.com/AaryanGusain/Job_Genie",
      demoLink: ""
    },
    {
      title: "Stock Market Analyser",
      subtitle: "Rust, ML, Monte Carlo Simulations",
      date: "February 2024 - May 2024",
      description: [
        "Developed a Rust-based CLI stock analysis tool that predicts stock trends using Random Forest classification, achieving over 70% prediction accuracy on historical stock movements.",
        "Implemented Monte Carlo simulations (50,000 trials) to forecast future stock prices, providing quantified risk assessment and price probability distributions."
      ],
      tags: ["Rust", "Machine Learning", "Monte Carlo", "CLI", "Random Forest"],
      icon: "📈",
      githubLink: "https://github.com/AaryanGusain/StockData",
      demoLink: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container-custom py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in software development, 
            machine learning, and data science.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
