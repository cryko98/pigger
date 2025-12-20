
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-10 py-8 flex items-center justify-between pointer-events-none"
    >
      <div className="flex items-center gap-5 pointer-events-auto">
        <div className="relative group">
          <div className="absolute inset-0 bg-white rounded-full blur-[20px] opacity-0 group-hover:opacity-30 transition-opacity" />
          <img 
            src="https://pbs.twimg.com/media/G8l7BYKawAEJOZm?format=jpg&name=small" 
            alt="Pigger Icon" 
            className="w-14 h-14 rounded-full border border-white/20 relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-sync font-black text-2xl text-white tracking-tighter leading-none">PIGGER</span>
          <span className="font-sync text-[9px] text-white/40 tracking-[0.5em] uppercase">Private Syndicate</span>
        </div>
      </div>
      
      <nav className="hidden lg:flex gap-14 pointer-events-auto">
        {['Home', 'CA', 'Meme AI', 'Exchanges'].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`} 
            className="font-sync text-[10px] font-bold tracking-[0.4em] uppercase text-gray-500 hover:text-white transition-all relative group"
          >
            {item}
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-8 pointer-events-auto">
        <a 
          href="https://x.com/i/communities/2002245587119341628" 
          target="_blank" 
          rel="noreferrer"
          className="shimmer-btn bg-white text-black px-10 py-3 font-sync font-black text-[11px] tracking-[0.2em] uppercase hover:invert transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          ENTER THE CLUB
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
