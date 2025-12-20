
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import MemeGenerator from './components/MemeGenerator';
import LinksSection from './components/LinksSection';
import Tokenomics from './components/Tokenomics';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen selection:bg-white selection:text-black relative bg-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Custom Cursor Follower */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: 'spring', damping: 20, stiffness: 150, mass: 0.5 }}
      >
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/30" />
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white/30" />
      </motion.div>

      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          >
            <motion.div className="relative">
              <motion.img 
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                src="https://pbs.twimg.com/media/G8l7BYKawAEJOZm?format=jpg&name=small" 
                className="w-32 h-32 rounded-full grayscale hover:grayscale-0 transition-all border-4 border-white"
                alt="Loading..."
              />
              <motion.div 
                className="absolute inset-0 border-4 border-white rounded-full"
                animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Tokenomics />
          <MemeGenerator />
          <LinksSection />
        </main>
        
        <footer className="py-20 border-t border-white/5 text-center relative overflow-hidden bg-black">
          <div className="scanline" />
          <p className="text-gray-600 font-sync text-[10px] tracking-[0.5em] uppercase mb-8">
            Wigger Pig Syndicate • Luxury Tier Project • Established 2025
          </p>
          <div className="mt-6 flex justify-center gap-16">
            <a href="https://x.com/i/communities/2002245587119341628" target="_blank" rel="noreferrer" className="text-white hover:text-gray-400 transition-all font-marker text-3xl">𝕏 FAM</a>
            <a href="http://memedepot.com/d/pigger" target="_blank" rel="noreferrer" className="text-white hover:text-gray-400 transition-all font-marker text-3xl">DOSSIER</a>
          </div>
        </footer>
      </div>

      {/* Global Background Effects */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#111_0%,#000_100%)]" />
        <div className="absolute top-[10%] right-[5%] w-[40vw] h-[40vw] bg-white/5 blur-[180px] rounded-full" />
      </div>
    </div>
  );
};

export default App;
