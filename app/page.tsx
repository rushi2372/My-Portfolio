import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

const skills = [
  {
    title: "Languages",
    items: ["Python", "SQL", "R (Basics)"],
  },
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
  {
    title: "Cloud & Tools",
    items: ["Google Cloud Platform (Fundamentals)", "Git", "GitHub"],
  },
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
      "Built an operational dashboard to track bed utilization, patient throughput, and bottlenecks, enabling faster decisions for staffing and resource planning.",
    stack: ["Python", "Pandas", "Power BI / Tableau", "Excel"],
    status: "Prototype / Offline Project",
  },
  {
    name: "Retail Demand Forecasting & Customer Purchase Behaviour Analysis",
    description:
      "Forecasted product demand while analyzing customer purchase patterns to inform inventory planning, campaign timing, and regional sales strategy.",
    stack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Power BI / Tableau"],
    status: "Code Available",
  },
  {
    name: "Credit Card Fraud Detection (ML Classification)",
    description:
      "Created a classification pipeline to detect fraudulent transactions with emphasis on recall, precision balance, and explainable model monitoring.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    status: "Code Available",
  },
  {
    name: "Customer Segmentation using K-Means",
    description:
      "Clustered customer cohorts to highlight high-value segments and support targeted retention and cross-sell strategies.",
    stack: ["Python", "Scikit-learn", "Matplotlib", "Seaborn"],
    status: "Code Available",
  },
  {
    name: "Generative AI Customer Support Agent",
    description:
      "Designed a GenAI support assistant with RAG workflow to ground responses in knowledge base content and reduce resolution time.",
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
      "Worked on structured and semi-structured datasets for analytical research.",
      "Conducted EDA, trend analysis, and insight generation.",
      "Supported data-driven decision-making through reports and analysis.",
    ],
    tools: ["Python", "SQL", "Excel"],
    outcome:
      "Improved analytical thinking, research workflow, and business interpretation of data.",
  },
  {
    role: "Data Science & Analytics Intern",
    company: "Cravita Technologies",
    period: "Nov 2024 – Apr 2025",
    points: [
      "Performed data cleaning, EDA, and dashboard development.",
      "Built basic ML models for prediction and classification.",
      "Created analytical reports for business insights.",
    ],
    tools: ["Python", "Power BI", "SQL"],
    outcome:
      "Hands-on industry exposure to analytics pipelines and ML use-cases.",
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Rushikesh Sangamnere
            </p>
            <p className="text-xs text-muted">Data Analyst · Data Scientist</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-secondary md:flex">
            <a href="#about" className="hover:text-primary">
              About
            </a>
            <a href="#skills" className="hover:text-primary">
              Skills
            </a>
            <a href="#projects" className="hover:text-primary">
              Projects
            </a>
            <a href="#experience" className="hover:text-primary">
              Experience
            </a>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-surface">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Data Analyst & Data Scientist
            </p>
            <h1 className="text-4xl font-semibold text-secondary sm:text-5xl">
              Rushikesh Ramesh Sangamnere
            </h1>
            <p className="text-lg text-muted">
              Building decision-ready analytics, dashboards, and applied machine
              learning that translate complex data into clear business action.
              Focused on job-ready outcomes across data analytics, ML, and
              AI-enabled systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200"
              >
                View Projects <FiArrowUpRight />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-secondary"
              >
                Contact Me <FiArrowUpRight />
              </a>
            </div>
            <div className="flex items-center gap-4 text-muted">
              <a
                href="https://github.com/rushi2372"
                aria-label="GitHub"
                className="rounded-full border border-slate-200 p-2 hover:border-primary hover:text-primary"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rushikesh-sangamnere-66a413260"
                aria-label="LinkedIn"
                className="rounded-full border border-slate-200 p-2 hover:border-primary hover:text-primary"
              >
                <FiLinkedin />
              </a>
              <a
                href="mailto:rushikeshsangamnere4561@gmail.com"
                aria-label="Email"
                className="rounded-full border border-slate-200 p-2 hover:border-primary hover:text-primary"
              >
                <FiMail />
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
            <h2 className="text-lg font-semibold text-secondary">
              Data-first, impact-oriented profile
            </h2>
            <p className="mt-4 text-sm text-muted">
              I help teams translate operational questions into measurable
              outcomes. My focus is on analytics storytelling, dashboard-driven
              decision support, and applied machine learning that improves
              revenue, efficiency, and customer experience.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start justify-between gap-4">
                <span className="text-muted">Specialties</span>
                <span className="font-medium text-secondary">
                  BI dashboards, forecasting, ML classification
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-muted">Preferred roles</span>
                <span className="font-medium text-secondary">
                  Data Analyst · Data Scientist · ML/AI Engineer (entry-level)
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-muted">Availability</span>
                <span className="font-medium text-secondary">
                  Full-time · Freelance · Remote/Relocation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle max-w-3xl">
          I solve real-world business and operational problems with analytics,
          practical machine learning, and AI-enabled workflows. My approach is
          industry-oriented: I prioritize clear KPIs, reliable pipelines, and
          actionable insights over academic experimentation. My career goal is
          to build a strong data science track focused on measurable business
          impact across analytics, ML, and modern AI systems.
        </p>
      </section>

      <section id="skills" className="bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            A focused toolkit for analytics delivery, ML model development, and
            business storytelling.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <h3 className="text-base font-semibold text-secondary">
                  {skill.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Top analytics and ML projects that demonstrate impact, modeling
          capability, and modern AI workflows.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
            >
              <div>
                <h3 className="text-lg font-semibold text-secondary">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm text-muted">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs font-semibold text-muted">
                <span>Status: {project.status}</span>
                <span>Repo: Available on request</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Industry experience focused on analytics workflows, research-grade
            insights, and ML use-cases.
          </p>
          <div className="mt-8 space-y-6">
            {experiences.map((experience) => (
              <div
                key={experience.role}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">
                      {experience.company}
                    </h3>
                    <p className="text-sm text-muted">{experience.role}</p>
                  </div>
                  <span className="text-sm font-medium text-muted">
                    {experience.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {experience.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold text-secondary">
                  {experience.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-200 px-3 py-1"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted">
                  Outcome: {experience.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="section-title">Education</h2>
        <div className="mt-6 space-y-4">
          {education.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
            >
              <h3 className="text-base font-semibold text-secondary">
                {item.title}
              </h3>
              <p className="text-sm text-muted">
                {item.institution} · {item.year}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="certifications" className="bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="section-title">Certifications</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-muted shadow-card"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Open to full-time roles, international opportunities, and freelance
          analytics engagements.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 text-sm font-medium text-secondary shadow-card hover:border-primary"
            >
              <span>{contact.label}</span>
              <span className="text-muted">{contact.value}</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-8 text-sm text-muted">
          © {new Date().getFullYear()} Rushikesh Ramesh Sangamnere. Built with
          Next.js & Tailwind CSS.
        </div>
      </footer>
    </main>
  );
}
