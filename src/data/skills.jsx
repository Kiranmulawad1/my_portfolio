import { Code, Brain, Settings, Cloud, BarChart, Users, Languages } from 'lucide-react';

const skillsData = [
    { icon: <Code size={40} />, title: 'Programming', description: 'Python, SQL, R, HTML, JS' },
    { icon: <Brain size={40} />, title: 'ML & DL', description: 'Scikit-learn, PyTorch, TensorFlow, Hugging Face Transformers' },
    { icon: <Settings size={40} />, title: 'Data Engineering', description: 'ETL, Data Pipelines, Apache Airflow, APIs, PostgreSQL, MySQL, SQLite' },
    { icon: <Cloud size={40} />, title: 'Cloud & Tools', description: 'GCP, BigQuery, Azure, Docker, Git, Streamlit, Pinecone' },
    { icon: <BarChart size={40} />, title: 'Visualization', description: 'Tableau, Excel, SAS Visual Analytics' },
    { icon: <Users size={40} />, title: 'Soft Skills', description: 'Collaboration, Agile, Communication' },
    { icon: <Languages size={40} />, title: 'Languages', description: 'English (Fluent), German (A2), Kannada (Fluent), Hindi (Fluent)' }
];

export default skillsData;