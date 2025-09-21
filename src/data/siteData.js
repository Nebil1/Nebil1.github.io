export const projects = [
  {
    title: "Plastic Pollution Classifier",
    icon: "IconRecycle",
    blurb:
      "CNN that classifies plastic types from images; trained with data augmentation and deployed as a Dockerized Gradio app.",
    stack: ["PyTorch", "Gradio", "Docker", "Hugging Face"],
    links: [
      { href: "https://github.com/Nebil1/plastic-pollution-classifier", label: "Code" },
    ],
  },
  {
    title: "Digital Signal Processing Voice Recognition",
    icon: "IconMicrophone",
    blurb:
      "Advanced voice recognition system using digital signal processing techniques for real-time audio analysis and speech detection.",
    stack: ["Python", "NumPy", "pyttsx3", "Matplotlib"],
    links: [{ href: "https://github.com/Nebil1/Digital-signal-processing-Voice-recognition", label: "Code" }],
  },
  {
    title: "Gebeya E-Commerce Web App",
    icon: "IconShoppingCart",
    blurb:
      "Full-stack e-commerce platform with user authentication, product management, and secure payment integration.",
    stack: ["C#", "ASP.NET", "SQL Server", "Bootstrap", "Javascript"],
    links: [{ href: "https://github.com/Nebil1/E-Commerce", label: "Code" }],
  },
];

export const skills = {
  "Frontend": ["React","HTML","CSS","Bootstrap","JavaScript","TypeScript"],
  "Backend": ["ASP.NET","Spring Boot","Django","REST APIs"],
  "Databases": ["SQL Server","MySQL","PostgreSQL","Firebase"],
  "Cloud/DevOps": ["Azure","Docker","Web Apps","RBAC","CI/CD"],
  "AI/ML": ["PyTorch","TensorFlow","NLP"],
};

export const certs = [
  { name: "Microsoft Azure Fundamentals (AZ-900)", year: "2025", link: "https://learn.microsoft.com/en-us/users/nebilyisehak/credentials/cc9cfe964debdf50" },
  { name: "Microsoft Azure AI Fundamentals (AI-900)", year: "2025", link: "https://learn.microsoft.com/en-us/users/nebilyisehak-8001/credentials/fa4d6e1cd6c91345" },
  { name: "Microsoft Azure Data Fundamentals (DP-900)", year: "2025", link: "https://learn.microsoft.com/en-us/users/nebilyisehak/credentials/FEEA319601CF1496" },
  { name: "IBM Python for Data Science, AI & Development", year: "2024", link: "https://coursera.org/share/06a51f143eb881dae965d3bb8c759e47" },
  { name: "ALX Software Engineering Program", year: "2023", link: "https://savanna.alxafrica.com/certificates/8CpRyXGh3J" },
  { name: "Cisco Network Security", year: "2023", link: "https://coursera.org/share/c778c96d41fa9264c09c5b7f1c3fff90" },
];

export const websites = [
  {
    title: "Ethiopian Space Science Society",
    url: "https://ethiosss.org",
    preview: "/website-previews/ethiosss.jpg",
    description: "Official website for the Ethiopian Space Science Society, promoting space science education and research in Ethiopia."
  },
];

export const featured = [
  { label: "Microsoft" },
  { label: "Udacity" },
  { label: "IBM Skills" },
  { label: "ALX / Holberton" },
  { label: "Hugging Face" },
];
