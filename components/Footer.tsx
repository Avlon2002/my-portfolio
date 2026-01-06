
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold font-display tracking-tight">
            <span className="text-indigo-400">Divyani</span>
            <span className="text-rose-400">Kamburugamuwa</span>
          </div>
          
          <div className="text-gray-500 text-sm font-light">
            &copy; {new Date().getFullYear()} Divyani Kamburugamuwa.
          </div>
          
          <div className="flex gap-6">
             <a href="#home" className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Top</a>
             <a href="#about" className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">About</a>
             <a href="#projects" className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Work</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
