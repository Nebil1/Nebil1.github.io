export const projects = [
  {
    title: "Plastic Pollution Classifier",
    blurb:
      "CNN that classifies plastic types from images; trained with data augmentation and deployed as a Dockerized Gradio app.",
    stack: ["PyTorch", "Gradio", "Docker", "Hugging Face"],
    links: [
      { href: "https://github.com/Nebil1/plastic-pollution-classifier", label: "Code" },
    ],
  },
  {
    title: "AI Threat Intel (Sentiment x CTI)",
    blurb:
      "Pipeline that ranks emerging threats by cross-referencing CTI feeds with sentiment and anomaly signals.",
    stack: ["Python", "spaCy", "Azure", "n8n"],
    links: [{ href: "https://github.com/Nebil1", label: "Code" }],
  },
  {
    title: "Cleanroom Particle Simulator",
    blurb:
      "MATLAB model for airflow & particle concentration across a 10×10 grid; validates against ISO-5 targets.",
    stack: ["MATLAB", "NumPy", "Plotly"],
    links: [{ href: "https://github.com/Nebil1", label: "Docs" }],
  },
];

export const skills = {
  "AI & ML": ["PyTorch","TensorFlow","scikit-learn","OpenCV","Hugging Face","LangChain"],
  "Cloud & Security": ["AWS","Azure","Docker","Kubernetes","Nginx","IAM","SIEM","Threat Modeling"],
  "Data & MLOps": ["Pandas","Airflow","Mlflow","Weights & Biases","PostgreSQL","Spark"],
  Languages: ["Python","TypeScript","Bash","MATLAB"],
};

export const certs = [
  { name: "Microsoft Azure Fundamentals (AZ-900)", year: "2025", link: "https://learn.microsoft.com/en-us/users/nebilyisehak/credentials/cc9cfe964debdf50" },
  { name: "Microsoft Azure AI Fundamentals (AI-900)", year: "2025", link: "https://learn.microsoft.com/en-us/users/nebilyisehak-8001/credentials/fa4d6e1cd6c91345" },
  { name: "Microsoft Azure Data Fundamentals (DP-900)", year: "2025", link: "https://learn.microsoft.com/en-us/users/nebilyisehak/credentials/FEEA319601CF1496" },
  { name: "IBM Python for Data Science, AI & Development", year: "2024", link: "https://coursera.org/share/06a51f143eb881dae965d3bb8c759e47" },
  { name: "ALX Software Engineering Program", year: "2023", link: "https://savanna.alxafrica.com/certificates/8CpRyXGh3J" },
  { name: "Cisco Network Security", year: "2023", link: "https://coursera.org/share/c778c96d41fa9264c09c5b7f1c3fff90" },
];

export const featured = [
  { label: "Microsoft" },
  { label: "Udacity" },
  { label: "IBM Skills" },
  { label: "ALX / Holberton" },
  { label: "Hugging Face" },
];
