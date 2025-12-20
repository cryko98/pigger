
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-32 px-6 relative">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-block mb-10"
        >
          <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full" />
          <img 
            src="https://pbs.twimg.com/media/G8l7BYKawAEJOZm?format=jpg&name=small" 
            alt="Pigger"
            className="w-64 h-64 md:w-[460px] md:h-[460px] rounded-full border-[8px] border-white/5 relative z-10 grayscale animate-float shadow-2xl"
          />
        </motion.div>

        <div className="relative">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[10rem] font-syne font-extrabold leading-[0.85] tracking-tight gradient-text uppercase"
          >
            WIGGER<br/>PIG
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-col items-center gap-6"
          >
            <p className="text-gray-400 font-syne text-sm md:text-lg tracking-[0.5em] font-bold uppercase">
              The People's Coin on Solana
            </p>
            <div className="w-16 h-[1px] bg-white/10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-6"
          >
            <button 
              onClick={() => document.getElementById('links')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-pigger px-14 py-6 font-syne font-extrabold text-[12px] tracking-[0.2em] uppercase"
            >
              GET THE BAG
            </button>
            <a 
              href="#blueprint"
              className="px-14 py-6 rounded-full border border-white/10 font-syne font-extrabold text-[12px] tracking-[0.2em] text-white hover:bg-white/5 transition-all uppercase"
            >
              OUR STORY
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
