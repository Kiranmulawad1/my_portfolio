// src/data/projects.js
const projectsData = [
    {
        id: "rag-chatbot",
        title: "RAG Chatbot for Student Support",
        image: "https://i.imgur.com/vHq4eYf.jpeg",
        description: "Built a Retrieval-Augmented Generation chatbot using LLAMA3 to answer student queries. This project focused on enhancing information retrieval and response generation for educational support.",
        tech: "LLAMA3, Python, PDF Chunking, Embedding Search, Modular Flow Control",
        role: "AI/ML Engineer",
        challenges: "Optimizing LLM orchestration for accurate and relevant responses from chunked PDF inputs. Ensured efficient embedding search to provide contextually appropriate answers.",
        outcomes: "Successfully developed a functional RAG chatbot capable of providing precise and timely answers to student inquiries, significantly improving access to information.",
        liveLink: "#", // Placeholder as no live link provided
        githubLink: "https://github.com/Kiranmulawad1/rag-chatbot"
    },
    {
        id: "data-pipeline",
        title: "End-to-End Data Pipeline with BigQuery",
        image: "https://i.imgur.com/kS5Yd1j.jpeg",
        description: "Automated data extraction, cleaning, and loading to Google BigQuery, culminating in Tableau dashboarding for business insights. This project showcased comprehensive data engineering skills from raw data to visualization.",
        tech: "Docker, Python, Google BigQuery, GCP SDK, MySQL, Tableau",
        role: "Data Engineer",
        challenges: "Designing a robust and scalable pipeline for automated data ingestion and transformation. Ensured data integrity and efficient loading into BigQuery for analytics.",
        outcomes: "Successfully implemented an automated, end-to-end data pipeline, providing clean and structured data for analysis. Enabled stakeholders to make data-driven decisions through interactive Tableau dashboards.",
        liveLink: "#", // Placeholder as no live link provided
        githubLink: "https://github.com/Kiranmulawad1/data-pipeline"
    },
    {
        id: "thermal-power",
        title: "Thermal Power Prediction Mars Express Orbiter",
        image: "https://i.imgur.com/z0jVb6h.jpeg",
        description: "Designed and containerized a full Machine Learning pipeline for thermal power prediction using satellite data from the Mars Express Orbiter. This involved data preprocessing, model training, and deployment.",
        tech: "PostgreSQL, XGBoost, CatBoost, Docker Compose",
        role: "ML Engineer",
        challenges: "Handling large volumes of satellite data and optimizing ML models for accurate thermal power predictions. Ensured the pipeline was robust and reproducible through containerization.",
        outcomes: "Developed a fully containerized ML pipeline that accurately predicts thermal power, demonstrating strong skills in machine learning, data handling, and MLOps.",
        liveLink: "#", // Placeholder as no live link provided
        githubLink: "https://github.com/Kiranmulawad1/mars-express-orbiter"
    },
    {
        id: "recruiter-system",
        title: "Recruiter Candidate Filtering System",
        image: "https://i.imgur.com/m2pP4vG.jpeg",
        description: "Developed a system to scrape GitHub profiles, cluster candidates using K-means algorithm, and automate email outreach. This project streamlined the recruitment process by identifying suitable candidates efficiently.",
        tech: "Python, PostgreSQL, Machine Learning (K-means), HTML, JS",
        role: "Software Developer & ML Practitioner",
        challenges: "Effectively scraping and parsing diverse GitHub profile data, and accurately clustering candidates based on their skills and experience. Automated email outreach while ensuring personalization.",
        outcomes: "Created an efficient system that significantly reduced manual effort in candidate sourcing and filtering, demonstrating practical application of machine learning and web development skills.",
        liveLink: "#", // Placeholder as no live link provided
        githubLink: "https://github.com/Kiranmulawad1/Hush-Hush-Recruiter"
    }
];

export default projectsData;