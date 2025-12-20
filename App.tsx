
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import MemeGenerator from './components/MemeGenerator';
import LinksSection from './components/LinksSection';
import Tokenomics from './components/Tokenomics';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Artificial delay for smooth intro
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-white selection:text-black bg-black">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          >
            <motion.div 
              animate={{ scale: [0.9, 1.1, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-center"
            >
              <img 
                src="https://pbs.twimg.com/media/G8l7BYKawAEJOZm?format=jpg&name=small" 
                className="w-24 h-24 rounded-full border border-white/20 mb-4 mx-auto grayscale"
                alt="Logo"
              />
              <span className="font-sync text-[10px] tracking-[1em] text-white">LOADING LUXURY</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {isLoaded && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10"
        >
          <Header />
          <main className="space-y-0">
            <Hero />
            <Tokenomics />
            <MemeGenerator />
            <LinksSection />
          </main>
          
          <footer className="py-24 border-t border-white/5 text-center bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6">
              <p className="text-gray-600 font-sync text-[9px] tracking-[0.6em] uppercase mb-12">
                The Pigger Dynasty • Est. 2025 • Solana Mainnet
              </p>
              <div className="flex justify-center gap-20">
                <a href="https://x.com/i/communities/2002245587119341628" target="_blank" rel="noreferrer" className="text-white hover:text-gray-400 transition-all font-marker text-4xl">X</a>
                <a href="http://memedepot.com/d/pigger" target="_blank" rel="noreferrer" className="text-white hover:text-gray-400 transition-all font-marker text-4xl">DEPOT</a>
              </div>
              <div className="mt-16 text-[10px] text-gray-800 font-sync tracking-widest">
                BUILT FOR THE CHOSEN ONES
              </div>
            </div>
          </footer>
        </motion.div>
      )}

      {/* Luxury Atmos */}
      <div className="fixed inset-0 -z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-white/5 blur-[200px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-white/5 blur-[200px] rounded-full" />
      </div>
    </div>
  );
};

export default App;
