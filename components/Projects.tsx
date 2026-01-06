import React, { useState } from 'react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const projects: Project[] = [

    {
      id: 'gov-pulse-platform',
      title: 'Modern Citizen Case Management System',
      category: 'Full-Stack',
      description:
        'GovPulse is a prototype designed to simulate the modernization of legacy government systems. It demonstrates how modern technologies (Scala, React) can integrate seamlessly with established legacy infrastructure (.NET) to deliver efficient citizen services.',
      tech: ['.Net', 'C#', 'Scala', 'React', 'Web API','MongoDB','CSS3'],
      image:
        'https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=1200&q=80',
      github: 'https://github.com/Avlon2002/gov-pulse-platform.git',
      demo: 'https://your-demo-link.com',
      highlights: [
        'Citizen Portal (Frontend): A ReactJS dashboard where citizens submit permit applications.',
        'Modern Case Processor (Middleware): A Scala (Akka HTTP) microservice that handles asynchronous processing and high-volume requests.',
        'Legacy Identity Service (Backend): A .NET 8 Web API acting as the "System of Record" for citizen data.',
        'MongoDB: Stores case files and application status (Unstructured).',
        'In-Memory/SQL: Stores citizen identity records (Structured).',
      ],
    },

    {
      id: 'invoice-saas',
      title: 'SaaS Invoice Dashboard',
      category: 'Full-Stack',
      description:
        'A production-grade SaaS platform enabling freelancers to create, manage, and export invoices with real-time data consistency.',
      tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
      image:
        'https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=1200&q=80',
      github: 'https://github.com/Avlon2002/invoice-dashboard.git',
      demo: 'https://your-demo-link.com',
      highlights: [
        'Designed a scalable PostgreSQL schema using JSONB for dynamic invoice line items.',
        'Implemented Supabase Auth with Row Level Security (RLS) for secure multi-tenant access.',
        'Built client-side PDF invoice generation using react-to-print.',
        'Developed dynamic TypeScript forms with real-time calculations to reduce backend load.',
      ],
    },
    {
      id: 'rag-engine',
      title: 'Enterprise Knowledge RAG Engine',
      category: 'Generative AI',
      description:
        'A secure Retrieval-Augmented Generation (RAG) system enabling enterprises to query internal documents without data leakage.',
      tech: ['Python', 'LangChain', 'FAISS', 'Azure OpenAI'],
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
      github: 'https://github.com/Avlon2002/Enterprise-RAG-Retrieval-Augmented-Generation.git',
      highlights: [
        'Built ingestion pipelines to chunk and embed unstructured enterprise documents.',
        'Implemented FAISS-based semantic search for low-latency retrieval.',
        'Constrained LLM responses strictly to retrieved context to minimize hallucinations.',
        'Provided page-level source citations for auditability and trust.',
      ],
    },
    {
      id: 'helpdesk',
      title: 'AI Helpdesk Automation System',
      category: 'NLP & Automation',
      description:
        'An AI-powered helpdesk assistant automating employee FAQ resolution through NLP and workflow orchestration.',
      tech: ['Azure OpenAI', 'Power Automate', 'Power BI'],
      image:
        'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1200&q=80',
      github: 'https://github.com/your-username/ai-helpdesk',
      highlights: [
        'Integrated Azure OpenAI for natural language understanding of employee queries.',
        'Automated multi-step workflows using Power Automate.',
        'Built Power BI dashboards to analyze usage and response efficiency.',
      ],
    },
    {
      id: 'proctoring',
      title: 'Exam Proctoring System',
      category: 'Computer Vision',
      description:
        'A computer vision-based proctoring platform designed to maintain integrity in remote examinations.',
      tech: ['Python', 'Django', 'OpenCV'],
      image:
        'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80',
      github: 'https://github.com/Avlon2002/Exam-Proctoring-System.git',
      highlights: [
        'Implemented real-time face detection and gaze tracking using OpenCV.',
        'Automatically flagged suspicious behavior using ML heuristics.',
        'Developed a secure Django backend for session and user management.',
      ],
    },
  ];

  const categories = [
    'All',
    'Full-Stack',
    'Generative AI',
    'NLP & Automation',
    'Computer Vision',
  ];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 bg-[#030014]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <div>
            <h2 className="text-indigo-400 font-semibold tracking-widest uppercase text-xs mb-3">
              Selected Work
            </h2>
            <h3 className="text-4xl md:text-5xl font-black font-display">
              AI & Full-Stack Projects
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-indigo-600 text-white'
                    : 'glass-card text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/5 
                         hover:border-indigo-500/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold font-display text-white">
                    {project.title}
                  </h4>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-indigo-300 font-semibold">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-5">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-white/5 border border-white/10 
                                 rounded-md text-[10px] font-bold uppercase 
                                 tracking-wider text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-400 hover:text-white transition"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-400 hover:text-white transition"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
