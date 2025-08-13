export const projects = [
  {
    title: "Plastic Pollution Classifier",
    blurb:
      "CNN that classifies plastic types from images; trained with data augmentation and deployed as a Dockerized Gradio app.",
    stack: ["PyTorch", "Gradio", "Docker", "Hugging Face"],
    links: [
      { href: "https://github.com/Nebil1/plastic-pollution-classifier", label: "Code" },
      { href: "https://huggingface.co/spaces/placeholder/plastic-classifier", label: "Demo" },
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
  { name: "Microsoft Certified: Azure AI Fundamentals (AI-900)", year: "2025" },
  { name: "Microsoft Certified: Azure Fundamentals (AZ-900)", year: "2025" },
  { name: "Microsoft Certified: Azure Data Fundamentals (DP-900)", year: "2025" },
];

export const featured = [
  { label: "Microsoft" },
  { label: "Udacity" },
  { label: "IBM Skills" },
  { label: "ALX / Holberton" },
  { label: "Hugging Face" },
];
