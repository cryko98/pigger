
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    }
  };

  return (
    <section 
      id="hero" 
      ref={ref}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex flex-col items-center justify-center pt-32 px-6 relative perspective-1000 overflow-hidden"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          {/* Silver Glow */}
          <div className="absolute -inset-10 bg-white rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000" />
          
          <img 
            src="https://pbs.twimg.com/media/G8l7BYKawAEJOZm?format=jpg&name=small" 
            alt="Wigger Pig Original"
            className="w-80 h-80 md:w-[500px] md:h-[500px] rounded-full border-[15px] border-white/5 relative z-10 shadow-[0_0_120px_rgba(255,255,255,0.1)] grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 font-marker text-5xl text-white drop-shadow-2xl z-20 -rotate-12 select-none"
          >
            $PIGGER
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="text-center mt-16 z-20 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="overflow-hidden"
        >
          <h1 className="text-8xl md:text-[14rem] font-sync font-black text-white leading-[0.85] tracking-tighter">
            WIGGER<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">PIG</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-lg md:text-2xl mt-8 font-sync font-bold text-gray-600 tracking-[1em] uppercase"
        >
          The Purest Form of Luxury
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex flex-wrap justify-center gap-10"
        >
          <button 
            onClick={() => document.getElementById('exchanges')?.scrollIntoView({ behavior: 'smooth' })}
            className="shimmer-btn px-16 py-6 bg-white text-black font-sync font-black text-xl tracking-[0.2em] transition-all hover:scale-105 active:scale-95"
          >
            ACQUIRE ASSETS
          </button>
          
          <a 
            href="https://x.com/i/communities/2002245587119341628"
            target="_blank"
            rel="noreferrer"
            className="px-16 py-6 border-2 border-white/20 text-white font-sync font-black text-xl tracking-[0.2em] hover:bg-white hover:text-black transition-all"
          >
            COMMUNITY
          </a>
        </motion.div>
      </div>
      
      {/* Background Text Parallax */}
      <motion.div 
        style={{ y: useTransform(useScroll().scrollYProgress, [0, 1], [0, -800]) }}
        className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none select-none opacity-[0.02]"
      >
        <h2 className="text-[35vw] font-black font-sync whitespace-nowrap leading-none uppercase">SYNDICATE</h2>
      </motion.div>
    </section>
  );
};

export default Hero;
