import {
  ArrowUpRight,
  BrainCircuit,
  Mail,
  Waves,
  Code2,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const projects = [
  {
    title: "HydroGuard AI",
    description: "AI-powered environmental evidence analysis and report generation.",
    stack: ["Python", "FastAPI", "RAG", "AI Agents"],
    icon: Waves,
    color: "text-cyan-400",
  },
  {
    title: "Alon AI",
    description: "An intelligent assistant for environmental compliance and decision support.",
    stack: ["Generative AI", "LLMs", "Chatbots"],
    icon: BrainCircuit,
    color: "text-violet-400",
  },
  {
    title: "Data Quest",
    description: "A gamified learning experience for Python and SQL challenges.",
    stack: ["Python", "SQL", "Streamlit"],
    icon: Code2,
    color: "text-emerald-400",
  },
];

const skills = [
  "Python", "SQL", "Snowflake", "Power BI",
  "Machine Learning", "Generative AI",
  "Agentic AI", "AWS", "FastAPI",
  "Docker", "Git", "React"
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1020] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1020]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-bold text-cyan-400">
            AA.
          </a>
          <div className="flex gap-5 text-sm text-slate-300">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section id="home" className="flex min-h-[75vh] flex-col justify-center py-24">
          <p className="mb-6 text-sm font-semibold tracking-widest text-cyan-400">
            DATA SCIENCE · GEN AI · AGENTIC AI
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Transforming data into{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              intelligent solutions.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            Data Scientist and AI Solutions Developer building
            practical applications with analytics, machine learning,
            and intelligent AI systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
              Explore My Projects
            </a>
            <a
              href="https://github.com/00-Amee-Ayco/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 hover:border-cyan-400"
            >
              <FaGithub size={18} /> GitHub
            </a>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-t border-white/10 py-20">
          <h2 className="mb-6 text-3xl font-bold">About Me</h2>
          <p className="max-w-3xl leading-8 text-slate-400">
            I have eight years of experience spanning banking and
            engineering operations, combining data analytics,
            machine learning, and AI innovation to develop
            solutions for real-world problems.
          </p>
        </section>

        <section id="projects" className="scroll-mt-24 py-20">
          <p className="mb-3 text-sm font-semibold text-cyan-400">
            SELECTED WORK
          </p>
          <h2 className="mb-10 text-3xl font-bold">Featured Projects</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.title}
                  className="rounded-2xl border border-white/10 bg-[#151F38] p-7 transition-transform hover:-translate-y-1 hover:border-cyan-400/40"
                >
                  <Icon className={`mb-7 h-9 w-9 ${project.color}`} />
                  <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
                  <p className="mb-6 min-h-20 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span key={tag} className="rounded-md bg-white/5 px-2 py-1 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 py-20">
          <h2 className="mb-8 text-3xl font-bold">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-lg border border-white/10 bg-[#151F38] px-4 py-3 text-sm text-slate-300">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-white/10 py-20">
          <h2 className="mb-5 text-3xl font-bold">Let's Connect</h2>
          <p className="mb-8 text-slate-400">
            Interested in data science, machine learning, or AI collaboration?
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/00-Amee-Ayco/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400">
              <FaGithub size={19} /> GitHub <ArrowUpRight size={14} />
            </a>
            <a href="https://www.linkedin.com/in/ameeayco" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400">
              <FaLinkedinIn size={19} /> LinkedIn <ArrowUpRight size={14} />
            </a>
            <span className="flex items-center gap-2 text-slate-400">
              <Mail size={19} /> Email details coming soon
            </span>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} AA Portfolio. Built with React.
      </footer>
    </div>
  );
}
