
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
            <span className="font-sync font-bold text-sm tracking-tighter">PIGGER</span>
            <span className="text-[7px] font-sync text-white/30 tracking-[0.4em]">ELITE CLASS</span>
          </div>
        </div>
        
        <nav className="hidden md:flex gap-10">
          {['Home', 'CA', 'AI', 'Links'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="font-sync text-[9px] font-bold tracking-[0.3em] uppercase text-gray-400 hover:text-white transition-all"
            >
              {item}
            </a>
          ))}
        </nav>

        <a 
          href="https://x.com/i/communities/2002245587119341628" 
          target="_blank" 
          rel="noreferrer"
          className="btn-lux px-8 py-2.5 font-sync font-black text-[9px] tracking-[0.2em] uppercase shadow-xl"
        >
          SYNDICATE
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
