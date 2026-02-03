import SectionReveal from "@/components/SectionReveal";
import ThemeToggle from "@/components/ThemeToggle";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

/* -------------------- DATA -------------------- */

const skills = [
  { title: "Languages", items: ["Python", "SQL", "R (Basics)"] },
  {
    title: "Data Analytics & BI",
    items: [
      "Data Cleaning & Transformation",
      "Exploratory Data Analysis (EDA)",
      "KPI Development & Reporting",
      "Statistical Analysis",
      "Data Storytelling",
      "ETL Concepts",
      "Reporting Automation",
    ],
  },
  {
    title: "Visualization & Reporting Tools",
    items: [
      "Power BI (DAX, Data Modeling, Dashboards)",
      "Tableau",
      "Microsoft Excel (Advanced Formulas, Pivot Tables, Power Query)",
      "Google Sheets",
    ],
  },
  {
    title: "Libraries & Frameworks",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "TensorFlow (Basics)",
      "Jupyter Notebook",
    ],
  },
  {
    title: "Machine Learning",
    items: [
      "Regression",
      "Classification",
      "Time-Series Forecasting",
      "Feature Engineering",
      "Model Evaluation (Precision, Recall, F1-Score, ROC-AUC)",
    ],
  },
  {
    title: "GenAI & NLP",
    items: [
      "Generative AI Concepts",
      "LLMs",
      "Prompt Engineering",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Databases",
      "NLP Fundamentals",
    ],
  },
  {
    title: "Databases",
    items: [
      "SQL",
      "MySQL",
      "Joins, CTEs, Subqueries",
      "Window Functions",
      "Query Optimization",
    ],
  },
  { title: "Cloud & Tools", items: ["Google Cloud Platform (Fundamentals)", "Git", "GitHub"] },
  {
    title: "Professional Skills",
    items: [
      "Business Requirement Analysis",
      "Stakeholder Collaboration",
      "Analytical Problem Solving",
      "Conceptual Data Pipelines",
    ],
  },
];

const projects = [
  {
    name: "Hospital Patient Flow & Bed Utilization Dashboard",
    description:
      "Operational dashboard to monitor patient flow, bed utilization, and bottlenecks for staffing and resource planning.",
    stack: ["Python", "Pandas", "Power BI / Tableau", "Excel"],
    status: "Prototype / Offline Project",
  },
  {
    name: "Retail Demand Forecasting & Customer Purchase Behaviour Analysis",
    description:
      "Demand forecasting and customer behavior analysis to support inventory planning and sales strategy.",
    stack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Power BI / Tableau"],
    status: "Code Available",
  },
  {
    name: "Credit Card Fraud Detection (ML Classification)",
    description:
      "ML classification pipeline to detect fraudulent transactions with recall-focused evaluation.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    status: "Code Available",
  },
  {
    name: "Customer Segmentation using K-Means",
    description:
      "Customer clustering to identify high-value segments and improve retention strategies.",
    stack: ["Python", "Scikit-learn", "Matplotlib", "Seaborn"],
    status: "Code Available",
  },
  {
    name: "Generative AI Customer Support Agent",
    description:
      "RAG-based GenAI assistant grounded in knowledge base content to reduce resolution time.",
    stack: ["Python", "LangChain", "LLM APIs", "Vector Database"],
    status: "Prototype / Offline Project",
  },
];

const experiences = [
  {
    role: "Junior Research Analyst",
    company: "Rein Labs LLP",
    period: "Apr 2025 – Aug 2025",
    points: [
      "Analyzed structured and semi-structured datasets to support research-driven insights.",
      "Performed exploratory data analysis (EDA) to identify trends, patterns, and anomalies.",
      "Designed analytical workflows to translate research questions into measurable metrics.",
      "Built reports and summaries to support data-driven decision-making.",
      "Collaborated with team members to validate findings and improve data quality.",
      "Strengthened analytical reasoning and business interpretation of real-world data.",
    ],
    tools: ["Python", "SQL", "Excel"],
    outcome:
      "Improved analytical thinking, structured analysis workflow, and insight communication.",
  },
  {
    role: "Data Science & Analytics Intern",
    company: "Cravita Technologies",
    period: "Nov 2024 – Apr 2025",
    points: [
      "Cleaned and transformed raw business data for analysis and reporting.",
      "Conducted EDA to uncover insights related to sales, operations, and customer behavior.",
      "Built dashboards to communicate KPIs and trends to non-technical stakeholders.",
      "Developed basic ML models for prediction and classification tasks.",
      "Assisted in model evaluation and interpretation of results.",
      "Worked across end-to-end analytics and ML pipelines.",
    ],
    tools: ["Python", "Power BI", "SQL"],
    outcome:
      "Hands-on exposure to real-world analytics workflows and ML use-cases.",
  },
];

const education = [
  {
    title: "B.E. Computer Science & Engineering (AI & ML)",
    institution: "Saraswati College of Engineering, Navi Mumbai",
    year: "2024",
  },
  {
    title: "Diploma – Computer Technology",
    institution: "Dr. V.V.P. Institute of Technology, Loni",
    year: "2021",
  },
];

const certifications = [
  "Data Science and Data Analytics Certification Course (6 Months Duration)",
  "Udemy – Master in Generative AI",
  "HackerRank – SQL Certification",
  "HackerRank – Python Certification",
  "LinkedIn Learning – Google Cloud ML Engineer (Basics)",
  "British Airways (Forage) – Data Science Job Simulation",
];

const contacts = [
  { label: "Phone", value: "9096506345", href: "tel:9096506345" },
  {
    label: "Email",
    value: "rushikeshsangamnere4561@gmail.com",
    href: "mailto:rushikeshsangamnere4561@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/rushi2372",
    href: "https://github.com/rushi2372",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rushikesh-sangamnere-66a413260",
    href: "https://www.linkedin.com/in/rushikesh-sangamnere-66a413260",
  },
];

/* -------------------- PAGE -------------------- */

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Rushikesh Sangamnere
            </p>
            <p className="text-xs text-muted">Data Analyst · Data Scientist</p>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* HERO */}
      <SectionReveal>
        <section className="bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h1 className="text-4xl font-semibold text-secondary sm:text-5xl">
              Rushikesh Ramesh Sangamnere
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              Data Analyst / Data Scientist turning complex data into actionable
              business insights using analytics and applied machine learning.
            </p>
          </div>
        </section>
      </SectionReveal>

      {/* ABOUT */}
      <SectionReveal id="about">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle max-w-3xl">
            I work at the intersection of data analytics, applied machine learning,
            and business decision-making. My focus is on turning raw datasets into
            reliable insights, dashboards, and models that support real-world
            outcomes.
          </p>
        </section>
      </SectionReveal>

      {/* SKILLS */}
      <SectionReveal id="skills">
        <section className="bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="section-title">Skills</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.title} className="rounded-2xl border bg-white p-6 shadow-card">
                  <h3 className="font-semibold">{skill.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {skill.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* PROJECTS */}
      <SectionReveal id="projects">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="section-title">Projects</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="rounded-2xl border bg-white p-6 shadow-card">
                <h3 className="font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-muted">{project.description}</p>
              </article>
            ))}
          </div>
        </section>
      </SectionReveal>

      {/* EXPERIENCE */}
      <SectionReveal id="experience">
        <section className="bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="section-title">Experience</h2>
            <div className="mt-8 space-y-6">
              {experiences.map((exp) => (
                <div key={exp.role} className="rounded-2xl border bg-white p-6 shadow-card">
                  <h3 className="font-semibold">{exp.company}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {exp.points.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

    </main>
  );
}
