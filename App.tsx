
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const FEROCITER_IMG = "https://pbs.twimg.com/profile_images/2021086854427136000/It80eJJ3_400x400.jpg";
const X_LINK = "https://x.com/ferociteronsol";
const TWEET_LINK = "https://x.com/jeffbezos/status/2020861883524247807?s=46";
const EMAIL = "ferociteronsol@gmail.com";
const CA = "7SYuU1Z6EKfpYQQ9VeTXfLW5ofhigdn8Y7iQsqoepump";

// --- KOMPONENSEK ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: 'MISSION', href: '#mission' },
    { name: 'CONTRACT', href: '#contract' },
    { name: 'CHART', href: '#chart' },
    { name: 'CONNECT', href: '#connect' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:px-6 md:py-6 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between soft-glass rounded-3xl md:rounded-full px-6 py-4 pointer-events-auto relative">
        <div className="flex items-center gap-3">
          <img src={FEROCITER_IMG} alt="Logo" className="w-8 h-8 rounded-full" />
          <span className="font-syne font-extrabold text-sm tracking-tighter">$FEROCITER</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="font-syne text-[9px] font-extrabold tracking-[0.2em] text-white/40 hover:text-white transition-all uppercase">{item.name}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href={X_LINK} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex btn-ferociter px-6 py-2.5 font-syne font-extrabold text-[9px] tracking-widest uppercase">JOIN</a>
          
          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          >
            <motion.span animate={isOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white block rounded-full" />
            <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-white block rounded-full" />
            <motion.span animate={isOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white block rounded-full" />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-4 soft-glass rounded-[2rem] p-8 md:hidden flex flex-col gap-6 items-center border border-white/10 z-[101]"
            >
              {menuItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="font-syne text-sm font-extrabold tracking-[0.3em] text-white/60 hover:text-white uppercase"
                >
                  {item.name}
                </a>
              ))}
              <a href={X_LINK} target="_blank" rel="noopener noreferrer" className="btn-ferociter w-full py-4 font-syne font-extrabold text-[10px] tracking-widest uppercase">JOIN COMMUNITY</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="min-h-[100dvh] flex items-center justify-center pt-28 pb-12 px-4 sm:px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        {/* Text Side - Left on Desktop, Bottom on Mobile */}
        <motion.div style={{ opacity }} className="order-2 lg:order-1 text-center lg:text-left z-10 flex flex-col items-center lg:items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="w-full">
             <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-[7rem] xl:text-[9rem] font-syne font-extrabold leading-[0.9] tracking-tighter gradient-text uppercase mb-4 lg:mb-8 w-full break-words">
              GRADATIM<br/>FEROCITER
            </h1>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-white/40 font-syne text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] font-bold uppercase mb-8 lg:mb-10 pl-1">
            Step By Step • Ferociously • Solana
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
            <button onClick={() => document.getElementById('contract')?.scrollIntoView({ behavior: 'smooth' })} className="btn-ferociter px-8 py-4 md:px-10 md:py-5 font-syne font-extrabold text-[11px] tracking-[0.2em] w-full sm:w-auto">GET $FEROCITER</button>
            <a href="#chart" className="px-8 py-4 md:px-10 md:py-5 rounded-full border border-white/10 font-syne font-extrabold text-[11px] tracking-[0.2em] text-white/60 hover:text-white hover:bg-white/5 transition-all text-center w-full sm:w-auto">LIVE CHART</a>
          </motion.div>
        </motion.div>

        {/* Image Side - Right on Desktop, Top on Mobile */}
        <motion.div style={{ y: y1 }} className="order-1 lg:order-2 flex justify-center lg:justify-end relative mb-6 lg:mb-0">
           <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} className="relative">
             {/* Glow Effects */}
             <div className="absolute inset-0 bg-white/5 blur-[60px] md:blur-[80px] rounded-full" />
             <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent blur-[30px] md:blur-[40px] rounded-full animate-pulse" />
             
             {/* The Framed Image */}
             <div className="relative z-10 p-2 md:p-4 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                <div className="p-1 rounded-full border border-white/20 bg-black/20">
                   <img 
                     src={FEROCITER_IMG} 
                     alt="Ferociter" 
                     className="w-48 h-48 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] rounded-full object-cover shadow-2xl shadow-white/5" 
                   />
                </div>
             </div>
           </motion.div>
        </motion.div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none"></div>
    </section>
  );
};

const About = () => (
  <section id="mission" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="soft-glass rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-6xl font-syne font-extrabold mb-8 uppercase gradient-text leading-tight">THE MEANING.</h2>
            <div className="space-y-6 text-white/60 font-syne text-sm md:text-base leading-relaxed text-justify">
              <p className="border-l-2 border-white/20 pl-4 italic text-white/80">
                <span className="text-white font-bold">"Gradatim Ferociter"</span> is a Latin phrase meaning "Step by step, ferociously". It is the official motto of Jeff Bezos' aerospace company, Blue Origin, representing a philosophy of combining slow, steady, and meticulous progress (no shortcuts) with intense, passionate effort to achieve ambitious, long-term goals.
              </p>
              <p>
                Jeff Bezos has been loyal to this quote for literal YEARS. Now he shilled it again and Elon is not happy.
              </p>
              <p>
                They are literally going back and forth on twitter about it as we speak. The two of the most richest people on this planet are beefing over their space companies.
              </p>
              <p className="text-white font-bold text-lg pt-2">
                $Ferociter is the runner from all of that.
              </p>
              
              <div className="pt-8">
                <a 
                  href={TWEET_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full hover:scale-105 transition-all group"
                >
                  <span className="font-syne font-extrabold text-[10px] tracking-widest uppercase">SEE THE TWEET</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative hidden lg:block">
            <div className="rotate-3 hover:rotate-0 transition-transform duration-700">
               <div className="aspect-square rounded-[2rem] overflow-hidden border border-white/10 opacity-60 shadow-2xl">
                 <img src={FEROCITER_IMG} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 scale-110" alt="Context" />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Tokenomics = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section id="contract" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-8xl font-syne font-extrabold mb-6 uppercase gradient-text">COIN DATA</h2>
            <div className="inline-flex flex-col md:flex-row items-center gap-2 bg-white/5 border border-white/10 rounded-2xl p-2 pl-6 pr-2">
               <span className="font-mono text-[10px] md:text-sm text-white/50">{CA}</span>
               <button onClick={handleCopy} className="px-6 py-3 bg-white text-black rounded-xl font-bold text-[10px] tracking-widest uppercase hover:bg-gray-200 transition-colors">
                 {copied ? 'COPIED' : 'COPY'}
               </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[ 
              { label: "TOTAL SUPPLY", val: "1B", sub: "TOKENS" }, 
              { label: "TAXES", val: "0/0", sub: "BUY / SELL" }, 
              { label: "LIQUIDITY", val: "BURNED", sub: "FOREVER" } 
            ].map((stat, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="p-10 border border-white/5 rounded-[2.5rem] bg-gradient-to-b from-white/[0.03] to-transparent text-center group hover:border-white/20 transition-all">
                <p className="text-[9px] font-syne text-white/30 tracking-[0.3em] font-bold mb-4 uppercase group-hover:text-white/50 transition-colors">{stat.label}</p>
                <p className="text-5xl font-syne font-extrabold text-white uppercase mb-2">{stat.val}</p>
                <p className="text-[10px] font-syne text-white/20 tracking-widest uppercase">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Chart = () => (
  <section id="chart" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
       <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-syne font-extrabold gradient-text uppercase tracking-tighter">LIVE CHART</h2>
       </div>
       <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         className="w-full h-[600px] md:h-[700px] soft-glass rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 p-2 md:p-4 shadow-2xl shadow-black/50"
       >
         <div className="w-full h-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-[#050505]">
           <iframe 
             src={`https://dexscreener.com/solana/${CA}?embed=1&theme=dark&trades=0&info=0`}
             className="w-full h-full border-0"
             title="DexScreener Chart"
           ></iframe>
         </div>
       </motion.div>
    </div>
  </section>
);

const Connect = () => (
  <section id="connect" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: "DEXSCREENER", url: `https://dexscreener.com/solana/${CA}`, desc: "View Analysis" },
          { name: "X / TWITTER", url: X_LINK, desc: "Join The Crew" }
        ].map((link, i) => (
          <motion.a key={i} href={link.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 0.98 }} className="flex items-center justify-between p-10 soft-glass rounded-[2.5rem] hover:bg-white/[0.08] transition-all group border border-white/5">
            <div>
              <span className="font-syne font-extrabold text-xl md:text-3xl uppercase text-white block mb-2">{link.name}</span>
              <span className="text-[9px] font-syne font-bold text-white/30 tracking-widest uppercase group-hover:text-white/50 transition-colors">{link.desc}</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <span className="text-xl">↗</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div key="preloader" exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#050505]">
            <motion.img animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} src={FEROCITER_IMG} className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-6" />
            <span className="font-syne text-[8px] md:text-[10px] tracking-[0.6em] md:tracking-[1em] font-bold text-white/20 uppercase">Gradatim Ferociter</span>
          </motion.div>
        )}
      </AnimatePresence>
      {isLoaded && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Tokenomics />
            <Chart />
            <Connect />
          </main>
          <footer className="py-12 md:py-24 border-t border-white/5 text-center bg-black/50">
            <div className="max-w-6xl mx-auto px-6">
              <p className="text-white/10 font-syne text-[8px] md:text-[9px] tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4">$FEROCITER 2025 • THE FUTURE IS NOW</p>
              <a href={`mailto:${EMAIL}`} className="text-white/40 hover:text-white font-mono text-[10px] md:text-xs transition-colors uppercase tracking-widest">{EMAIL}</a>
            </div>
          </footer>
        </motion.div>
      )}
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-10 md:opacity-20 overflow-hidden">
        <motion.div animate={{ x: [0, 50, 0], y: [0, 30, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute -top-[10%] -left-[10%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-white/5 blur-[80px] md:blur-[120px] rounded-full" />
        <motion.div animate={{ x: [0, -50, 0], y: [0, -30, 0] }} transition={{ duration: 25, repeat: Infinity }} className="absolute -bottom-[10%] -right-[10%] w-[70vw] md:w-[40vw] h-[70vw] md:h-[40vw] bg-white/5 blur-[80px] md:blur-[120px] rounded-full" />
      </div>
    </div>
  );
};

export default App;
