
import React from 'react';
import { Experience } from '../types';

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 'intern-rizing',
      role: 'Intern – SAP Solutions Delivery',
      company: 'Rizing Consumer Industries',
      period: 'June 2023 – Sept 2023',
      location: 'Colombo, Sri Lanka',
      highlights: [
        'Gained hands-on exposure to SAP systems and Agile methodologies for enterprise clients.',
        'Assisted in preparing data-driven reports and visualizations for performance monitoring.',
        'Participated in solution testing (QA) and troubleshooting to ensure high-quality software releases.',
      ],
    },
    {
      id: 'proposals-manager',
      role: 'Proposals Manager',
      company: 'Digatha Integrated',
      period: 'Jan 2022 – Jan 2023',
      location: 'Hybrid',
      highlights: [
        'Bridged the gap between technical teams and clients, translating complex requirements into project documentation.',
        'Managed the full lifecycle of proposal development for digital transformation projects.',
        'Strengthened cross-functional collaboration and stakeholder communication.',
      ],
    },
    
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-[#05001a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-4">My Journey</h2>
          <h3 className="text-4xl md:text-6xl font-black font-display mb-4">Professional Path</h3>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-rose-500/50 to-indigo-500/50 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className={`p-8 glass-card rounded-3xl border-white/5 hover:border-indigo-500/30 transition-all duration-300 w-full max-w-xl shadow-xl ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-indigo-400 text-sm font-bold tracking-widest uppercase mb-2 block">{exp.period}</span>
                    <h4 className="text-2xl font-bold font-display text-white mb-1">{exp.role}</h4>
                    <p className="text-lg text-gray-400 mb-6 font-medium">{exp.company} • <span className="text-sm font-light">{exp.location}</span></p>
                    
                    <ul className={`space-y-3 ${idx % 2 === 0 ? '' : 'md:items-end md:text-right'}`}>
                      {exp.highlights.map((h, i) => (
                        <li key={i} className={`flex gap-3 text-sm text-gray-400 font-light leading-relaxed ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                          <span className="text-indigo-500 mt-1">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="relative z-10 hidden md:block">
                  <div className="w-4 h-4 bg-indigo-600 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)] border-4 border-[#05001a]"></div>
                </div>
                
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <h4 className="text-xl font-bold mb-8 font-display">Certifications & Achievements</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Data Science & Analytics',
              'Power BI Report Design',
              'Power Automate Expert',
              'Japanese Proficiency N5',
              'Deep Learning Fundamentals'
            ].map(cert => (
              <div key={cert} className="px-6 py-3 glass-card rounded-xl text-sm font-semibold text-gray-300 border-white/10">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
