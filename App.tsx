
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
    { name: 'CONNECT', href: '#connect' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:px-6 md:py-6 pointer-events-none"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between soft-glass rounded-3xl md:rounded-full px-6 py-4 pointer-events-auto relative">
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
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      <motion.div style={{ y: y1, opacity }} className="text-center w-full max-w-full">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} className="relative inline-block mb-8 md:mb-12">
          <div className="absolute inset-0 bg-white/10 blur-[60px] md:blur-[100px] rounded-full" />
          <img src={FEROCITER_IMG} alt="Ferociter" className="w-40 h-40 md:w-80 md:h-80 rounded-full border-4 border-white/5 relative z-10 animate-float" />
        </motion.div>
        <div className="relative w-full overflow-hidden px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.8 }} 
            className="text-[8.5vw] sm:text-6xl md:text-[8rem] font-syne font-extrabold leading-[0.9] tracking-tighter gradient-text uppercase"
          >
            GRADATIM<br/>FEROCITER
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 md:mt-8 text-white/30 font-syne text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.5em] font-bold uppercase px-4">Step By Step • Ferociously • Solana</motion.p>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-12 md:mt-16 flex flex-col sm:flex-row justify-center gap-4 px-6 w-full max-w-md mx-auto sm:max-w-none">
          <button onClick={() => document.getElementById('contract')?.scrollIntoView({ behavior: 'smooth' })} className="btn-ferociter w-full sm:w-auto px-10 md:px-12 py-5 font-syne font-extrabold text-[11px] tracking-[0.2em]">GET $FEROCITER</button>
          <a href={`https://dexscreener.com/solana/${CA}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 md:px-12 py-5 rounded-full border border-white/20 font-syne font-extrabold text-[11px] tracking-[0.2em] text-white/80 hover:text-white hover:bg-white/5 transition-all text-center uppercase">LIVE CHART</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

const About = () => (
  <section id="mission" className="py-24 md:py-40 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-syne font-extrabold mb-8 md:mb-10 uppercase gradient-text leading-tight break-words">THE BILLIONAIRE<br/>BEEF.</h2>
          <div className="space-y-6 text-white/50 font-syne text-base md:text-lg leading-relaxed">
            <p>Jeff Bezos has been loyal to this quote for literal YEARS. Now he shilled it again and Elon is not happy.</p>
            <p>They are literally going back and forth on twitter about it as we speak. The two of the most richest people on this planet are beefing over their space companies.</p>
            <p className="text-white font-bold">$Ferociter is the runner from all of that.</p>
            <p className="font-marker text-2xl md:text-4xl text-white pt-4">Step by step ferociously.</p>
            
            <div className="pt-8">
              <a 
                href={TWEET_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex flex-col sm:flex-row items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group text-center sm:text-left w-full sm:w-auto"
              >
                <span className="font-syne font-extrabold text-[10px] md:text-[11px] tracking-widest uppercase">THE TWEET THAT STARTED IT ALL</span>
                <span className="group-hover:translate-x-1 transition-transform hidden sm:inline">→</span>
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative z-0">
          <div className="soft-glass rounded-[2rem] md:rounded-[3rem] p-3 md:p-4 md:rotate-3 hover:rotate-0 transition-transform duration-700 overflow-hidden group">
            <img src={FEROCITER_IMG} className="w-full rounded-[1.5rem] md:rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700" alt="Ferociter Mission" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 md:p-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="font-marker text-2xl md:text-3xl text-white uppercase">Gradatim Ferociter</span>
              <p className="text-white/60 font-syne text-[10px] tracking-widest mt-2 uppercase">A Billionaire Rivalry</p>
            </div>
          </div>
        </motion.div>
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
    <section id="contract" className="py-24 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="soft-glass rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-12 lg:p-24 text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <h2 className="text-4xl md:text-8xl font-syne font-extrabold mb-8 md:mb-12 uppercase gradient-text">FLIGHT DATA</h2>
          <div className="max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="bg-black/40 border border-white/5 rounded-2xl md:rounded-3xl p-4 md:p-5 flex flex-col md:flex-row items-center gap-4">
              <span className="flex-1 font-mono text-[9px] md:text-sm text-white/40 truncate w-full text-center md:text-left overflow-hidden">{CA}</span>
              <button onClick={handleCopy} className="w-full md:w-auto px-8 py-4 bg-white text-black font-syne font-extrabold text-[10px] tracking-widest rounded-xl md:rounded-2xl hover:bg-white/90 transition-all uppercase whitespace-nowrap">{copied ? 'COPIED!' : 'COPY ADDR'}</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[ { label: "TOTAL SUPPLY", val: "1B" }, { label: "TAXES", val: "0% TAX" }, { label: "LIQUIDITY", val: "BURNED" } ].map((stat, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="p-8 md:p-10 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.01] flex flex-col items-center">
                <p className="text-[8px] md:text-[9px] font-syne text-white/20 tracking-[0.2em] md:tracking-[0.3em] font-bold mb-3 md:mb-4 uppercase">{stat.label}</p>
                <p className="text-lg md:text-2xl font-syne font-extrabold text-white uppercase">{stat.val}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Connect = () => (
  <section id="connect" className="py-24 md:py-40 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="mb-12 md:mb-20">
        <h2 className="text-4xl md:text-9xl font-syne font-extrabold gradient-text uppercase tracking-tighter text-center">CONNECT</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
        {[
          { name: "DEXSCREENER", url: `https://dexscreener.com/solana/${CA}`, desc: "Flight Charts" },
          { name: "X / TWITTER", url: X_LINK, desc: "Join The Crew" }
        ].map((link, i) => (
          <motion.a key={i} href={link.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 0.98 }} className="flex items-center justify-between p-8 md:p-12 soft-glass rounded-[2rem] md:rounded-[3rem] hover:bg-white/[0.05] transition-all group overflow-hidden">
            <div className="max-w-[80%]">
              <span className="font-syne font-extrabold text-xl md:text-2xl uppercase text-white block mb-2 truncate">{link.name}</span>
              <span className="text-[8px] md:text-[9px] font-syne font-bold text-white/20 tracking-widest uppercase">{link.desc}</span>
            </div>
            <span className="text-xl md:text-2xl opacity-40 group-hover:opacity-100 transition-opacity uppercase">→</span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

const Chart = () => (
  <section id="chart" className="py-24 md:py-40 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="mb-12 md:mb-20">
        <h2 className="text-4xl md:text-8xl font-syne font-extrabold gradient-text uppercase tracking-tighter text-center">FLIGHT PATH</h2>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full h-[500px] md:h-[700px] soft-glass rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 relative bg-[#050505]"
      >
        <iframe 
          src={`https://dexscreener.com/solana/${CA}?embed=1&theme=dark`}
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          title="DexScreener Chart"
        ></iframe>
      </motion.div>
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
    <div className="min-h-screen selection:bg-white selection:text-black w-full overflow-x-hidden">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div key="preloader" exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#050505]">
            <motion.img animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} src={FEROCITER_IMG} className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-6" />
            <span className="font-syne text-[8px] md:text-[10px] tracking-[0.6em] md:tracking-[1em] font-bold text-white/20 uppercase">Gradatim Ferociter</span>
          </motion.div>
        )}
      </AnimatePresence>
      {isLoaded && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10 w-full">
          <Navbar />
          <main className="w-full">
            <Hero />
            <About />
            <Tokenomics />
            <Connect />
            <Chart />
          </main>
          <footer className="py-12 md:py-24 border-t border-white/5 text-center bg-black/50">
            <div className="max-w-6xl mx-auto px-6">
              <p className="text-white/10 font-syne text-[8px] md:text-[9px] tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4">$FEROCITER 2025 • THE FUTURE IS NOW</p>
              <a href={`mailto:${EMAIL}`} className="text-white/40 hover:text-white font-mono text-[10px] md:text-xs transition-colors uppercase tracking-widest break-all px-4 block">{EMAIL}</a>
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
