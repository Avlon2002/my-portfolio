
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 bg-[#05001a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative z-10 glass-card p-2 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src="https://i.imgflip.com/9rfpor.gif"
                alt="Divyani"
                className="w-full h-[500px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative background shapes */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-600/20 blur-[60px] rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-600/10 blur-[60px] rounded-full"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-4">Who I am</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-display mb-8">
              Passionate about solving <br />
              <span className="text-gray-400">industrial problems with AI.</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                First-Class Honours Computer Science graduate from the University of Westminster with a strong foundation in Artificial Intelligence, 
                Machine Learning, and modern full-stack development.
                 I specialize in building AI-powered, end-to-end applications, turning complex data and models into scalable, user-ready products.

                 
              </p>
              <p>
                My approach combines academic theory with real-world delivery. From engineering secure Generative AI and RAG pipelines to developing 
                 production-grade web platforms, I focus on creating scalable, maintainable solutions that bridge deep technical implementation with 
                 clear business and user value.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div className="p-6 glass-card rounded-2xl">
                <h4 className="text-white font-bold mb-1">Education</h4>
                <p className="text-indigo-400 text-sm font-semibold">BSc (Hons) Computer Science</p>
                <p className="text-gray-500 text-sm">First Class Honours</p>
                <p className="text-gray-500 text-xs mt-1">University of Westminster, London</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
