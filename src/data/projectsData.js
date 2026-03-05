const projectsData = [
  {
    id: 1,
    title: "Interactive Tutoring Platform",
    description: "A responsive frontend website for my tutoring service, designed to present subject offerings, success stats, testimonials, and contact information in a clear and accessible way.",
    link: "https://manya-s19.github.io/b3tutoring/",
    linkText: "View Project",
    technologies: ["React", "Node.js", "TailwindCSS", "Supabase"],
    keyFeatures: [
      "Responsive and interactive site layout",
      "Structured landing page for each tutoring service",
      "Contact form UI and data storage (client-side)",
      "Hosted and version-controlled on GitHub",
    ],
    category: "Web Application",
    date: "2026",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    color: "#ED6A5A"
  },
  {
    id: 2,
    title: "AI Noise Cancellation System",
    description: "Award-winning hackathon project that uses machine learning to intelligently cancel background noise in real-time audio streams. Perfect for remote work and online meetings.",
    link: "https://github.com/LinHong149/noiseCancel",
    linkText: "View Project",
    technologies: ["Python", "MongoDB", "Next.js", "Google Gemini", "React", "TailwindCSS"],
    keyFeatures: [
      "Real-time noise detection and filtering",
      "ML-powered adaptive noise cancellation",
      "Low latency (<25ms) processing",
      "Custom noise profile training"
    ],
    category: "AI/ML Project",
    date: "2025",
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&q=80",
    color: "#9BC1BC"
  },
  {
    id: 3,
    title: "GNSS Satellite Simulation",
    link: "https://github.com/manya-s19/gnss_sim",
    description: "Simulation system for Global Navigation Satellite Systems (GNSS) that models satellite orbits, signals, and positioning for research and education. Built in GPS spoofing simulation.",
    linkText: "View Project",
    technologies: ["C++", "OpenGL", "Python", "NumPy", "Qt", "CUDA"],
    keyFeatures: [
      "Real-time satellite orbit visualization",
      "Signal propagation modeling",
      "Positioning algorithm simulation",
      "Multi-constellation support (GPS, GLONASS, Galileo)",
      "3D interactive earth visualization"
    ],
    category: "Scientific Software",
    date: "2025",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80",
    color: "#031927"
  },
  {
    id: 4,
    title: "Personal TFSA Digest",
    description: "An automatic email digest that summarizes stock updates for my TFSA holdings and delivers them at scheduled times.",
    link: "https://github.com/manya-s19/tfsa-daily-digest",
    linkText: "View Project",
    technologies: ["Python", "JavaScript", "OpenAI API", "macOS Automator"],
    keyFeatures: [
      "Configurable list of stocks defined in code",
      "AI-generated natural language market summaries",
      "Scheduled email delivery via macOS Automator",
      "Lightweight, automation-focused design",
      "Customizable prompt and update frequency"
    ],
    category: "Mobile Application",
    date: "2026",
    image: "https://images.unsplash.com/photo-1644995722044-6cd197ffb440",
    color: "#ED6A5A"
  },
  {
    id: 5,
    title: "Aerial Threat Detector",
    description: "Real-time aerial threat detector using YOLOv8; classifies drones, aircraft, and birds based on threat level.",
    link: "https://github.com/manya-s19/aerial-threat-detector",
    linkText: "View Project",
    technologies: ["PyTorch", "YOLOv8", "OpenCV", "Python"],
    keyFeatures: [
      "YOLOv8 model trained on 5,000+ aerial images",
      "Multi-class detection: drones, aircraft, birds",
      "Real-time webcam inference with threat prioritization",
      "Smoothed detection buffer to prevent flickering"
    ],
    category: "AI/ML Project",
    date: "2026",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e",
    color: "#9BC1BC"
  }
];

export default projectsData;