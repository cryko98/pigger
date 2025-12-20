
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MemeGenerator from './components/MemeGenerator';
import LinksSection from './components/LinksSection';
import Tokenomics from './components/Tokenomics';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-white selection:text-black bg-[#0d0d0d]">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0d0d]"
          >
            <motion.div 
              animate={{ scale: [0.95, 1.05, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-center"
            >
              <img 
                src="https://pbs.twimg.com/media/G8l7BYKawAEJOZm?format=jpg&name=small" 
                className="w-20 h-20 rounded-full mb-6 mx-auto grayscale"
                alt="Logo"
              />
              <span className="font-syne text-[11px] tracking-[0.8em] font-bold text-white uppercase">Wigger Pig is Loading...</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {isLoaded && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <Header />
          <main>
            <Hero />
            <About />
            <Tokenomics />
            <MemeGenerator />
            <LinksSection />
          </main>
          
          <footer className="py-24 border-t border-white/5 text-center bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-gray-500 font-syne text-[10px] tracking-[0.4em] uppercase mb-10">
                Wigger Pig $PIGGER • Built Different • Solana 2025
              </p>
              <div className="flex justify-center gap-16 mb-16">
                <a href="https://x.com/i/communities/2002245587119341628" target="_blank" rel="noreferrer" className="text-white hover:opacity-50 transition-all font-marker text-3xl">𝕏</a>
                <a href="http://memedepot.com/d/pigger" target="_blank" rel="noreferrer" className="text-white hover:opacity-50 transition-all font-marker text-3xl">DEPOT</a>
              </div>
              <div className="text-[9px] text-gray-700 font-syne tracking-[1em] uppercase">
                THIS IS FOR THE STREETS
              </div>
            </div>
          </footer>
        </motion.div>
      )}

      {/* Background Decor */}
      <div className="fixed inset-0 -z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-white/[0.03] blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-white/[0.03] blur-[150px] rounded-full" />
      </div>
    </div>
  );
};

export default App;
