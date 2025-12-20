
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-32 px-6 relative">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-block mb-12"
        >
          <div className="absolute inset-0 bg-white/10 blur-[100px] rounded-full" />
          <img 
            src="https://pbs.twimg.com/media/G8l7BYKawAEJOZm?format=jpg&name=small" 
            alt="Pigger"
            className="w-64 h-64 md:w-[480px] md:h-[480px] rounded-full border-[10px] border-white/5 relative z-10 grayscale animate-float-slow shadow-2xl"
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 border border-white/5 rounded-full pointer-events-none"
          />
        </motion.div>

        <div className="relative">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[11rem] font-sync font-black leading-[0.9] tracking-tighter silk-text uppercase"
          >
            WIGGER<br/>PIG
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex flex-col items-center gap-4"
          >
            <p className="text-gray-500 font-sync text-xs md:text-sm tracking-[0.8em] uppercase">
              The Platinum Standard of Solana
            </p>
            <div className="w-24 h-[1px] bg-white/20 mt-4" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex flex-wrap justify-center gap-8"
          >
            <button 
              onClick={() => document.getElementById('links')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-lux px-16 py-6 font-sync font-black text-xs tracking-widest uppercase hover:scale-105"
            >
              SECURE THE BAG
            </button>
            <a 
              href="https://x.com/i/communities/2002245587119341628"
              className="px-16 py-6 rounded-full border border-white/10 font-sync font-black text-xs tracking-widest text-white hover:bg-white/5 transition-all uppercase"
            >
              SYNDICATE
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
