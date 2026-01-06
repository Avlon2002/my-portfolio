import React from 'react';
import { SkillCategory } from '../types';

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Applied AI & ML',
      icon: '🧠',
      skills: [
        { name: 'Azure OpenAI (GPT-4)' },
        { name: 'Generative AI Systems' },
        { name: 'RAG Pipelines (LangChain)' },
        { name: 'Vector Databases (FAISS)' },
        { name: 'NLP & Semantic Search' },
        { name: 'Prompt Engineering' },
        { name: 'OpenCV (Computer Vision)' },
      ],
    },
    {
      title: 'Full-Stack Engineering',
      icon: '💻',
      skills: [
        { name: 'Python (FastAPI / Django)' },
        { name: 'JavaScript / TypeScript' },
        { name: 'React / Next.js' },
        { name: 'Tailwind CSS' },
        { name: 'Streamlit' },
        { name: 'Client-Side State & Form Logic' },
      ],
    },
    {
      title: 'APIs & Backend Systems',
      icon: '🔌',
      skills: [
        { name: 'REST API Design & Integration' },
        { name: 'FastAPI & API Architecture' },
        { name: 'Supabase (PostgreSQL)' },
        { name: 'Authentication & Authorization' },
        { name: 'JSONB Data Modeling' },
      ],
    },
    {
      title: 'Low-Code & Automation',
      icon: '⚡',
      skills: [
        { name: 'Power Automate' },
        { name: 'Power BI' },
        { name: 'Power Apps' },
        { name: 'Copilot Studio' },
        { name: 'SharePoint Integration' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-rose-400 font-semibold tracking-widest uppercase text-xs mb-3">
            The Toolkit
          </h2>
          <h3 className="text-4xl md:text-5xl font-black font-display mb-4">
            Technical Prowess
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            A carefully curated stack focused on AI systems, full-stack development,
            and production-ready automation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-white/5 
                         hover:border-indigo-500/30 hover:-translate-y-1 
                         transition-all duration-300 h-full"
            >
              <div className="text-3xl mb-4">{category.icon}</div>

              <h4 className="text-lg font-bold mb-5 font-display">
                {category.title}
              </h4>

              <ul className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="text-sm text-gray-300 flex items-center gap-2"
                  >
                    <span className="text-indigo-400">▹</span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
