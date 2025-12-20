
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";

const PIGGER_IMG = "https://wkkeyyrknmnynlcefugq.supabase.co/storage/v1/object/public/wasd/IMG_3013.jpeg.png";

// --- KONSTANSOK ---
const stylePresets = [
  { id: 'realistic', label: 'REALISTIC', prompt: 'photorealistic, cinematic, 8k, highly detailed, professional photography' },
  { id: 'cartoon', label: 'CARTOON', prompt: 'cartoon style, bold lines, vibrant, 2d animation, clean vector' },
  { id: 'cyberpunk', label: 'CYBERPUNK', prompt: 'cyberpunk neon, futuristic city, synthwave colors, glowing' },
  { id: 'pixelart', label: 'PIXEL ART', prompt: 'pixel art, 16-bit retro gaming, blocky' },
  { id: 'gta', label: 'GTA STYLE', prompt: 'Rockstar Games loading screen style, digital painting, sharp shadows' }
];

const randomScenarios = [
  "wearing a massive gold crown and holding a diamond-encrusted staff",
  "playing high-stakes poker with bricks of cash on a glass table",
  "performing on a huge concert stage with flashing lights",
  "chilling in a high-rise penthouse overlooking a futuristic city",
  "floating in zero gravity inside a spaceship filled with floating coins",
  "winning a Formula 1 race and spraying champagne",
  "riding a rocket to the moon wearing a cool streetwear hoodie"
];

// --- KOMPONENSEK ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: 'BLUEPRINT', href: '#blueprint' },
    { name: 'CONTRACT', href: '#contract' },
    { name: 'MEME GEN', href: '#ai' },
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
          <img src={PIGGER_IMG} alt="Logo" className="w-8 h-8 rounded-full" />
          <span className="font-syne font-extrabold text-sm tracking-tighter">$PIGGER</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="font-syne text-[9px] font-extrabold tracking-[0.2em] text-white/40 hover:text-white transition-all uppercase">{item.name}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="https://x.com/i/communities/2002245587119341628" target="_blank" className="hidden sm:inline-flex btn-pigger px-6 py-2.5 font-syne font-extrabold text-[9px] tracking-widest uppercase">JOIN</a>
          
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
              <a href="https://x.com/i/communities/2002245587119341628" target="_blank" className="btn-pigger w-full py-4 font-syne font-extrabold text-[10px] tracking-widest uppercase">JOIN COMMUNITY</a>
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
      <motion.div style={{ y: y1, opacity }} className="text-center w-full">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} className="relative inline-block mb-8 md:mb-12">
          <div className="absolute inset-0 bg-white/10 blur-[60px] md:blur-[100px] rounded-full" />
          <img src={PIGGER_IMG} alt="Pigger" className="w-40 h-40 md:w-80 md:h-80 rounded-full border-4 border-white/5 relative z-10 animate-float" />
        </motion.div>
        <div className="relative">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.8 }} 
            className="text-5xl sm:text-7xl md:text-[10rem] font-syne font-extrabold leading-[0.9] tracking-tighter gradient-text uppercase"
          >
            WIGGER<br/>PIG
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 md:mt-8 text-white/30 font-syne text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.5em] font-bold uppercase px-4">The Culture Coin on Solana</motion.p>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-12 md:mt-16 flex flex-col sm:flex-row justify-center gap-4 px-6">
          <button onClick={() => document.getElementById('contract')?.scrollIntoView({ behavior: 'smooth' })} className="btn-pigger w-full sm:w-auto px-10 md:px-12 py-5 font-syne font-extrabold text-[11px] tracking-[0.2em]">GET $PIGGER</button>
          <a href="#ai" className="w-full sm:w-auto px-10 md:px-12 py-5 rounded-full border border-white/10 font-syne font-extrabold text-[11px] tracking-[0.2em] text-white/60 hover:text-white hover:bg-white/5 transition-all text-center">MEME GEN</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

const About = () => (
  <section id="blueprint" className="py-24 md:py-40 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl md:text-7xl font-syne font-extrabold mb-8 md:mb-10 uppercase gradient-text leading-tight">NOT JUST<br/>A MEME.</h2>
          <div className="space-y-6 text-white/50 font-syne text-base md:text-lg leading-relaxed">
            <p>Wigger Pig is the ultimate cultural fusion on <span className="text-white">Solana</span>. Born from the streets of the internet, it's designed to bring community power back to the people.</p>
            <p>By leveraging the <span className="text-white font-mono">PumpSwap</span> ecosystem, we ensure a fair start and a legendary journey. No big VCs, no gatekeepers—just the Pigger family.</p>
            <div className="flex flex-wrap gap-2 md:gap-3 mt-8 md:mt-10">
              {['0% TAX', 'BURNT LP', 'COMMUNITY DRIVEN', 'MEME POWER'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-[8px] md:text-[9px] font-syne font-bold tracking-widest text-white/40 uppercase">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
          <div className="soft-glass rounded-[2rem] md:rounded-[3rem] p-3 md:p-4 md:rotate-3 hover:rotate-0 transition-transform duration-700 overflow-hidden group">
            <img src={PIGGER_IMG} className="w-full rounded-[1.5rem] md:rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700" alt="Pigger Culture" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 md:p-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="font-marker text-2xl md:text-3xl text-white uppercase">The Original</span>
              <p className="text-white/60 font-syne text-[10px] tracking-widest mt-2 uppercase">Circa 2024</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Tokenomics = () => {
  const [copied, setCopied] = useState(false);
  const ca = "DBh9F2wSukCJdZeNkLYe2LMYnCwMyLcnBgeCf4pgpump";
  const handleCopy = () => {
    navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section id="contract" className="py-24 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="soft-glass rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <h2 className="text-4xl md:text-8xl font-syne font-extrabold mb-8 md:mb-12 uppercase gradient-text">SUPPLY INFO</h2>
          <div className="max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="bg-black/40 border border-white/5 rounded-2xl md:rounded-3xl p-4 md:p-5 flex flex-col md:flex-row items-center gap-4">
              <span className="flex-1 font-mono text-[9px] md:text-sm text-white/40 truncate w-full text-center md:text-left">{ca}</span>
              <button onClick={handleCopy} className="w-full md:w-auto px-8 py-4 bg-white text-black font-syne font-extrabold text-[10px] tracking-widest rounded-xl md:rounded-2xl hover:bg-white/90 transition-all uppercase">{copied ? 'COPIED!' : 'COPY ADDR'}</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[ { label: "SUPPLY", val: "1,000,000,000" }, { label: "BUY/SELL TAX", val: "0% TAX" }, { label: "LIQUIDITY", val: "BURNT" } ].map((stat, i) => (
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

const MemeGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedPreset, setSelectedPreset] = useState(stylePresets[0].id);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [loadingStage, setLoadingStage] = useState(0);
  const stages = ["SCANNING THE STREETS...", "PUMPING THE PIXELS...", "POLISHING THE GRIND...", "MEME SECURED."];

  useEffect(() => {
    let interval: any;
    if (isGenerating) {
      interval = setInterval(() => setLoadingStage((prev) => (prev + 1) % stages.length), 2000);
    } else {
      setLoadingStage(0);
    }
    return () => clearInterval(interval);
  }, [isGenerating]);

  const generateMeme = async () => {
    if (!prompt.trim() || isGenerating) return;
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const logoRes = await fetch(PIGGER_IMG);
      const blob = await logoRes.blob();
      const base64Data = await new Promise<string>((res) => {
        const reader = new FileReader();
        reader.onloadend = () => res((reader.result as string).split(',')[1]);
        reader.readAsDataURL(blob);
      });

      const preset = stylePresets.find(p => p.id === selectedPreset);
      const fullPrompt = `Generate a cinematic, high-quality meme image of the pig character from the reference image. Reference appearance: The pig in the provided image. Scene: ${prompt}. Artistic Style: ${preset?.prompt}. Keep the core features of the pig character consistent. High definition, vibrant.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType: 'image/png' } },
            { text: fullPrompt }
          ]
        },
        config: { imageConfig: { aspectRatio: "1:1" } }
      });

      if (response.candidates && response.candidates[0] && response.candidates[0].content && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            setActiveImage(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      }
    } catch (e) { 
      console.error("Meme Gen Error:", e);
    } finally { 
      setIsGenerating(false); 
    }
  };

  return (
    <section id="ai" className="py-24 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-start">
          <div className="lg:w-1/3 w-full space-y-8 md:space-y-10">
            <div>
              <h2 className="text-5xl md:text-7xl font-marker text-white mb-4 md:mb-6 uppercase">MEME GEN</h2>
              <p className="text-white/40 font-syne text-[10px] tracking-[0.3em] font-bold uppercase">The AI Meme Engine</p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="flex justify-between items-center">
                <label className="font-syne text-[9px] md:text-[10px] text-white/30 tracking-widest font-bold uppercase">DESCRIBE THE SCENE</label>
                <button onClick={() => setPrompt(randomScenarios[Math.floor(Math.random() * randomScenarios.length)])} className="text-[8px] md:text-[9px] font-syne font-bold text-white/60 hover:text-white transition-colors uppercase underline underline-offset-4">RANDOMIZE</button>
              </div>
              <textarea 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="Pigger riding a gold-plated jet..." 
                className="w-full h-28 md:h-32 bg-white/[0.02] border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 text-white font-syne text-xs outline-none focus:border-white/20 transition-all resize-none" 
              />
            </div>
            <div className="space-y-4">
              <label className="font-syne text-[9px] md:text-[10px] text-white/30 tracking-widest font-bold uppercase">SELECT STYLE</label>
              <div className="flex flex-wrap gap-2">
                {stylePresets.map(p => (
                  <button key={p.id} onClick={() => setSelectedPreset(p.id)} className={`px-4 py-2 rounded-full font-syne text-[8px] md:text-[9px] font-bold tracking-widest transition-all uppercase ${selectedPreset === p.id ? 'bg-white text-black' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}>{p.label}</button>
                ))}
              </div>
            </div>
            <button onClick={generateMeme} disabled={isGenerating || !prompt} className="w-full btn-pigger py-5 md:py-6 font-syne font-extrabold text-[11px] md:text-[12px] tracking-widest uppercase disabled:opacity-20">{isGenerating ? 'GENERATING...' : 'GENERATE MEME'}</button>
          </div>
          <div className="lg:w-2/3 w-full">
            <div className="relative aspect-square bg-white/[0.01] border border-white/5 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden group shadow-2xl shadow-white/5">
              <AnimatePresence mode="wait">
                {isGenerating ? (
                  <motion.div key="loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80 backdrop-blur-xl p-8 text-center">
                    <div className="w-12 h-12 border-2 border-white/10 border-t-white rounded-full animate-spin mb-8" />
                    <p className="font-syne text-[10px] font-bold tracking-[0.4em] text-white uppercase">{stages[loadingStage]}</p>
                  </motion.div>
                ) : activeImage ? (
                  <motion.img initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} key="result" src={activeImage} className="w-full h-full object-cover" alt="Forged Meme" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-10 opacity-30 group-hover:opacity-50 transition-opacity text-center">
                    <img src={PIGGER_IMG} className="w-24 h-24 md:w-32 md:h-32 mb-8 rounded-full grayscale" alt="Placeholder" />
                    <p className="font-syne text-[8px] md:text-[9px] font-bold tracking-[0.6em] md:tracking-[1em] uppercase">Meme Gen Is Ready</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {[
          { name: "DEXSCREENER", url: "https://dexscreener.com/solana/81h1xlnbc6e16cdrz6std4quh1gk9oxv97t7wjqvdmb8", desc: "Live Charting" },
          { name: "COMMUNITY", url: "https://x.com/i/communities/2002245587119341628", desc: "Join The Family" },
          { name: "MEXC GLOBAL", url: "https://www.mexc.com/en-TR/exchange/PIGGER_USDT", desc: "Trade Spot" },
          { name: "COINGECKO", url: "https://www.coingecko.com/id/coins/wigger-pig", desc: "Market Data" }
        ].map((link, i) => (
          <motion.a key={i} href={link.url} target="_blank" whileHover={{ scale: 0.98 }} className="flex items-center justify-between p-8 md:p-12 soft-glass rounded-[2rem] md:rounded-[3rem] hover:bg-white/[0.05] transition-all group">
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
            <motion.img animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} src={PIGGER_IMG} className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-6" />
            <span className="font-syne text-[8px] md:text-[10px] tracking-[0.6em] md:tracking-[1em] font-bold text-white/20 uppercase">Wigger Pig</span>
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
            <MemeGenerator />
            <Connect />
          </main>
          <footer className="py-12 md:py-20 border-t border-white/5 text-center bg-black/50">
            <div className="max-w-6xl mx-auto px-6">
              <p className="text-white/10 font-syne text-[8px] md:text-[9px] tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4">$PIGGER 2025 • THE STREETS WILL REMEMBER</p>
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
