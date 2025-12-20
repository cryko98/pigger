
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between soft-glass rounded-full px-8 py-4">
        <div className="flex items-center gap-4">
          <img 
            src="https://pbs.twimg.com/media/G8l7BYKawAEJOZm?format=jpg&name=small" 
            alt="Logo" 
            className="w-10 h-10 rounded-full border border-white/10 grayscale"
          />
          <div className="hidden sm:flex flex-col">
            <span className="font-syne font-extrabold text-sm tracking-tight text-white">PIGGER</span>
            <span className="text-[8px] font-syne text-white/30 tracking-[0.2em] font-bold">TOP TIER</span>
          </div>
        </div>
        
        <nav className="hidden md:flex gap-10">
          {[
            { name: 'HOME', id: 'home' },
            { name: 'BLUEPRINT', id: 'blueprint' },
            { name: 'CONTRACT', id: 'ca' },
            { name: 'MEME GEN', id: 'ai' },
            { name: 'CONNECT', id: 'links' }
          ].map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              className="font-syne text-[10px] font-extrabold tracking-widest uppercase text-gray-400 hover:text-white transition-all"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a 
          href="https://x.com/i/communities/2002245587119341628" 
          target="_blank" 
          rel="noreferrer"
          className="btn-pigger px-10 py-3 font-syne font-extrabold text-[10px] tracking-widest uppercase"
        >
          JOIN US
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
