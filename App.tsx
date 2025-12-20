
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";

const PIGGER_IMG = "https://wkkeyyrknmnynlcefugq.supabase.co/storage/v1/object/public/wasd/IMG_3013.jpeg.png";

// --- SEGÉDFÜGGVÉNYEK ---

const stylePresets = [
  { id: 'realistic', label: 'REALISTIC', prompt: 'photorealistic, cinematic, 8k resolution, highly detailed, professional photography' },
  { id: 'cartoon', label: 'CARTOON', prompt: 'cartoon style, bold lines, vibrant colors, 2d animation look, clean vector art' },
  { id: 'cyberpunk', label: 'CYBERPUNK', prompt: 'cyberpunk aesthetic, neon glowing lights, futuristic city background, synthwave colors' },
  { id: 'pixelart', label: 'PIXEL ART', prompt: 'pixel art style, 16-bit retro gaming aesthetic, blocky textures' },
  { id: 'vintage', label: 'VINTAGE', prompt: 'vintage film look, grainy, 90s photography style, retro color palette' }
];

const randomScenarios = [
  "wearing a massive gold crown and holding a diamond-encrusted staff",
  "playing high-stakes poker with bricks of cash on a glass table",
  "performing on a huge concert stage with flashing lights and smoke",
  "chilling in a high-rise penthouse overlooking a futuristic city",
  "floating in zero gravity inside a spaceship filled with floating coins",
  "as a high-profile DJ at a massive outdoor beach festival",
  "winning a Formula 1 race and spraying champagne on the podium",
  "riding a rocket to the moon while wearing a cool streetwear hoodie"
];

// --- KOMPONENSEK ---

const Header = () => (
  <motion.header 
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
  >
    <div className="max-w-7xl mx-auto flex items-center justify-between soft-glass rounded-full px-8 py-4">
      <div className="flex items-center gap-4">
        <img 
          src={PIGGER_IMG} 
          alt="Logo" 
          className="w-10 h-10 rounded-full border border-white/10"
        />
        <div className="hidden sm:flex flex-col">
          <span className="font-syne font-extrabold text-sm tracking-tight text-white">PIGGER</span>
          <span className="text-[8px] font-syne text-white/30 tracking-[0.2em] font-bold uppercase">Built Different</span>
        </div>
      </div>
      
      <nav className="hidden md:flex gap-8 lg:gap-10">
        {[
          { name: 'HOME', id: 'home' },
          { name: 'BLUEPRINT', id: 'blueprint' },
          { name: 'CONTRACT', id: 'ca' },
          { name: 'MEME GEN', id: 'ai' },
          { name: 'CONNECT', id: 'links' }
        ].map((item) => (
          <a 
            key={item.id}
            href={`#${item.id}`} 
            className="font-syne text-[10px] font-extrabold tracking-widest uppercase text-gray-400 hover:text-white transition-all"
          >
            {item.name}
          </a>
        ))}
      </nav>

      <a 
        href="https://x.com/i/communities/2002245587119341628" 
        target="_blank" 
        rel="noreferrer"
        className="btn-pigger px-8 lg:px-10 py-3 font-syne font-extrabold text-[10px] tracking-widest uppercase"
      >
        JOIN US
      </a>
    </div>
  </motion.header>
);

const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-32 px-6 relative">
    <div className="max-w-7xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="relative inline-block mb-10"
      >
        <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full" />
        <img 
          src={PIGGER_IMG} 
          alt="Pigger"
          className="w-64 h-64 md:w-[420px] md:h-[420px] rounded-full border-[8px] border-white/5 relative z-10 animate-float shadow-2xl"
        />
      </motion.div>

      <div className="relative">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-[9rem] font-syne font-extrabold leading-[0.85] tracking-tight gradient-text uppercase"
        >
          WIGGER<br/>PIG
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col items-center gap-6"
        >
          <p className="text-gray-400 font-syne text-sm md:text-lg tracking-[0.4em] font-bold uppercase">
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
            onClick={() => document.getElementById('ca')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-pigger px-14 py-6 font-syne font-extrabold text-[12px] tracking-[0.2em] uppercase"
          >
            GET THE BAG
          </button>
          <a 
            href="#blueprint"
            className="px-14 py-6 rounded-full border border-white/10 font-syne font-extrabold text-[12px] tracking-[0.2em] text-white hover:bg-white/5 transition-all uppercase"
          >
            THE BLUEPRINT
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="blueprint" className="py-40 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-7xl font-syne font-extrabold mb-10 uppercase leading-none gradient-text">
            What Is <br/>Wigger Pig?
          </h2>
          <div className="space-y-8 text-gray-400 font-syne text-lg md:text-xl leading-relaxed">
            <p>
              Wigger Pig is a meme coin built on the <span className="text-white">Solana blockchain</span>, leveraging the speed and low fees of Solana’s network to make token swaps and trading accessible. Its contract address begins with <span className="text-white font-mono">“DBh9F2wSukCJdZeNkLYe2LMYnCwMyLcnBgeCf4pgpump”</span> — typically a tag indicating a launch under the <span className="text-white">PumpSwap ecosystem</span>.
            </p>
            <p>
              The project appeared to have started as a community-driven meme token: the name <span className="text-white">“Wigger Pig”</span> is derived from a viral image or joke about a pig with a “wigger” hairstyle (a slang term).
            </p>
            <p className="border-l-2 border-white/10 pl-6 italic text-gray-500">
              According to one overview, the token is <span className="text-white">“more than just a meme coin filled with irony and sentiment”</span> but currently lacks documented utility.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              {['Solana Network', 'PumpSwap Era', 'Community Driven', 'Viral Energy'].map((tag) => (
                <span key={tag} className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-syne font-bold tracking-widest text-white/60 uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="soft-glass rounded-[3rem] p-12 relative overflow-hidden group">
          <img 
            src={PIGGER_IMG} 
            className="w-full h-auto rounded-2xl mb-8 shadow-2xl" 
            alt="The Original Pigger" 
          />
          <h3 className="font-marker text-4xl text-white mb-6 uppercase">The Culture</h3>
          <p className="text-gray-400 font-syne mb-8 text-lg">
            Wigger Pig represents a shift in meme culture where humor meets a solid technical foundation. By utilizing Solana, we ensure the streets can trade without heavy fees.
          </p>
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
    <section id="ca" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="soft-glass rounded-[4rem] p-10 md:p-24 text-center">
          <h2 className="text-4xl md:text-8xl font-syne font-extrabold mb-16 uppercase gradient-text">The Supply</h2>
          <div className="max-w-3xl mx-auto mb-20">
            <div className="bg-[#080808] border border-white/10 rounded-[2.5rem] p-6 flex flex-col md:flex-row items-center gap-6">
              <span className="flex-1 font-mono text-[11px] md:text-lg text-white/50 break-ca">{ca}</span>
              <button onClick={handleCopy} className="w-full md:w-auto px-10 py-5 bg-white text-black font-syne font-extrabold text-[12px] tracking-widest rounded-2xl hover:scale-95 transition-all uppercase">
                {copied ? 'SECURED' : 'COPY CA'}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { label: "TOTAL WORTH", val: "1 BILLION" },
              { label: "TAX FEE", val: "0% TAX" },
              { label: "LP STATUS", val: "BURNT FOREVER" }
            ].map((stat, i) => (
              <div key={i} className="p-12 border border-white/5 rounded-[3rem] bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                <p className="text-[10px] font-syne text-white/30 tracking-[0.4em] font-bold mb-4 uppercase">{stat.label}</p>
                <p className="text-2xl md:text-3xl font-syne font-extrabold text-white">{stat.val}</p>
              </div>
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
  const [customRefImage, setCustomRefImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const stages = ["CHECKING THE VIBE...", "STYLING THE PIG...", "INJECTING VIBRANT COLORS...", "FINAL RENDER..."];

  useEffect(() => {
    if (isGenerating) {
      const interval = setInterval(() => setLoadingStage((prev) => (prev + 1) % stages.length), 1500);
      return () => clearInterval(interval);
    }
  }, [isGenerating]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setCustomRefImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const triggerGeneration = async (currentPrompt: string, stylePrompt: string) => {
    if (!currentPrompt.trim()) return;
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      let base64Data: string;
      let mimeType = 'image/jpeg';

      if (customRefImage) {
        const split = customRefImage.split(',');
        mimeType = split[0].split(':')[1].split(';')[0];
        base64Data = split[1];
      } else {
        const logoRes = await fetch(PIGGER_IMG);
        const blob = await logoRes.blob();
        base64Data = await new Promise((res) => {
          const reader = new FileReader();
          reader.onloadend = () => res((reader.result as string).split(',')[1]);
          reader.readAsDataURL(blob);
        });
        mimeType = 'image/png';
      }

      const fullPrompt = `Create a high-quality image of the pig character from the reference in the style: ${stylePrompt}. 
      Scene: ${currentPrompt}. 
      IMPORTANT: The output must be in VIBRANT FULL COLOR, ultra-sharp focus, dynamic lighting.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ inlineData: { data: base64Data, mimeType } }, { text: fullPrompt }]
        },
        config: { imageConfig: { aspectRatio: "1:1" } }
      });

      const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
      if (part) setActiveImage(`data:image/png;base64,${part.inlineData.data}`);
    } catch (e) { 
      console.error("Generation failed:", e); 
    } finally { 
      setIsGenerating(false); 
    }
  };

  const generateMeme = () => {
    const preset = stylePresets.find(p => p.id === selectedPreset);
    triggerGeneration(prompt, preset?.prompt || "");
  };

  const handleRandomize = () => {
    const randomScene = randomScenarios[Math.floor(Math.random() * randomScenarios.length)];
    const randomPreset = stylePresets[Math.floor(Math.random() * stylePresets.length)];
    setPrompt(randomScene);
    setSelectedPreset(randomPreset.id);
    setTimeout(() => triggerGeneration(randomScene, randomPreset.prompt), 50);
  };

  return (
    <section id="ai" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-16">
          <div className="xl:w-1/3 space-y-10">
            <div>
              <h2 className="text-5xl md:text-7xl font-marker text-white mb-6 uppercase tracking-wider">Meme Maker</h2>
              <p className="text-gray-500 font-syne text-[11px] tracking-[0.4em] font-bold uppercase">Choose a style and forge greatness.</p>
            </div>

            <div className="space-y-4">
              <label className="font-syne text-[10px] text-white/40 tracking-[0.2em] font-bold uppercase">Reference Image</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="group relative cursor-pointer border-2 border-dashed border-white/10 rounded-[2rem] p-4 flex items-center gap-4 hover:border-white/30 transition-all bg-white/[0.02]"
              >
                <img src={customRefImage || PIGGER_IMG} className="w-16 h-16 rounded-2xl object-cover" alt="Ref" />
                <div>
                  <p className="font-syne text-[10px] font-bold text-white uppercase">{customRefImage ? 'CUSTOM_LOADED' : 'DEFAULT_PIGGER'}</p>
                  <p className="font-syne text-[9px] text-white/30 uppercase tracking-widest mt-1">CLICK TO CHANGE</p>
                </div>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <label className="font-syne text-[10px] text-white/40 tracking-[0.2em] font-bold uppercase">01. THE SCENE</label>
                <button 
                  onClick={handleRandomize}
                  className="text-[10px] font-syne font-bold text-white hover:opacity-50 transition-all underline underline-offset-4 decoration-white/20 uppercase tracking-widest"
                >
                  SURPRISE ME
                </button>
              </div>
              <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="What's pigger doing..." className="w-full h-36 bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 text-white font-syne text-xs font-bold outline-none focus:border-white/30 transition-all uppercase resize-none" />
            </div>

            <div className="space-y-6">
              <label className="font-syne text-[10px] text-white/40 tracking-[0.2em] font-bold uppercase">02. CHOOSE STYLE</label>
              <div className="flex flex-wrap gap-3">
                {stylePresets.map(p => (
                  <button key={p.id} onClick={() => setSelectedPreset(p.id)} className={`px-6 py-3 rounded-full font-syne text-[10px] font-extrabold tracking-widest transition-all ${selectedPreset === p.id ? 'bg-white text-black' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}>{p.label}</button>
                ))}
              </div>
            </div>

            <button onClick={generateMeme} disabled={isGenerating || !prompt} className="w-full btn-pigger py-8 font-syne font-extrabold text-[12px] tracking-[0.3em] uppercase disabled:opacity-30">{isGenerating ? 'FORGING...' : 'GENERATE MEME'}</button>
          </div>

          <div className="xl:w-2/3">
            <div className="relative aspect-square bg-white/[0.01] border border-white/10 rounded-[4rem] overflow-hidden">
              <AnimatePresence mode="wait">
                {isGenerating ? (
                  <motion.div key="loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md">
                    <div className="w-16 h-16 border-2 border-white/10 border-t-white rounded-full animate-spin mb-10" />
                    <p className="font-syne text-[11px] font-bold tracking-[0.6em] text-white uppercase">{stages[loadingStage]}</p>
                  </motion.div>
                ) : activeImage ? (
                  <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} src={activeImage} className="w-full h-full object-cover" alt="Result" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center opacity-60">
                    <img src={PIGGER_IMG} className="w-48 h-48 mb-8 rounded-full shadow-2xl" alt="Icon" />
                    <p className="font-syne text-xs font-bold tracking-[0.8em] uppercase">Ready To Forge</p>
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

const LinksSection = () => (
  <section id="links" className="py-40 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-24 text-center">
        <h2 className="text-4xl md:text-9xl font-syne font-extrabold gradient-text uppercase tracking-tighter">The Connect</h2>
        <p className="text-gray-500 font-syne text-[11px] font-bold tracking-[1em] mt-6 uppercase">Direct To The Streets</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h3 className="font-marker text-4xl text-white mb-10">Exchanges</h3>
          <div className="space-y-4">
            {[
              { name: "WEEX", url: "https://weex.com/spot/PIGGER-US" },
              { name: "MEXC", url: "https://www.mexc.com/en-TR/exchange/PIGGER_USDT" },
              { name: "Maxbid", url: "https://maxbid.pro/spot/DBh9F2wSukCJdZeNkLYe2LMYnCwMyLcnBgeCf4pgpump" }
            ].map((ex, i) => (
              <a key={i} href={ex.url} target="_blank" className="flex items-center justify-between p-10 soft-glass rounded-[3rem] hover:bg-white/[0.08] transition-all group">
                <span className="font-syne font-extrabold text-2xl uppercase text-white">{ex.name}</span>
                <span className="text-white/30 group-hover:text-white transition-all">→</span>
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-12">
          <div>
            <h3 className="font-marker text-4xl text-gray-500 mb-10">Tracking</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "CoinGecko", url: "https://www.coingecko.com/id/coins/wigger-pig" },
                { name: "MarketCap", url: "https://dex.coinmarketcap.com/token/solana/DBh9F2wSukCJdZeNkLYe2LMYnCwMyLcnBgeCf4pgpump/" },
                { name: "Screener", url: "https://dexscreener.com/solana/81h1xlnbc6e16cdrz6std4quh1gk9oxv97t7wjqvdmb8" },
                { name: "Terminal", url: "https://www.geckoterminal.com/id/solana/pools/81H1xLnBC6E16CDrz6StD4qUh1gk9oxv97t7WJqVDMB8" }
              ].map((an, i) => (
                <a key={i} href={an.url} target="_blank" className="p-8 border border-white/10 rounded-[2rem] hover:bg-white text-gray-400 hover:text-black font-syne font-bold text-[10px] transition-all text-center uppercase tracking-widest">{an.name}</a>
              ))}
            </div>
          </div>
          <a href="http://memedepot.com/d/pigger" target="_blank" className="block p-14 bg-white text-black rounded-[3.5rem] text-center hover:scale-[0.98] transition-all">
            <h4 className="font-marker text-4xl mb-4 uppercase">Meme Vault</h4>
            <p className="font-syne text-[10px] font-bold tracking-[0.4em] uppercase">Access The Depot</p>
          </a>
        </div>
      </div>
    </div>
  </section>
);

// --- MAIN APP ---

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
          <motion.div key="loader-scr" initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0d0d]">
            <motion.div animate={{ scale: [0.98, 1.02, 1], opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-center">
              <img src={PIGGER_IMG} className="w-20 h-20 rounded-full mb-6 mx-auto shadow-xl" alt="Logo" />
              <span className="font-syne text-[11px] tracking-[0.8em] font-bold text-white uppercase">Wigger Pig...</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {isLoaded && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative z-10">
          <Header />
          <main>
            <Hero />
            <About />
            <Tokenomics />
            <MemeGenerator />
            <LinksSection />
          </main>
          <footer className="py-24 border-t border-white/5 text-center bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-6">
              <p className="text-gray-500 font-syne text-[10px] tracking-[0.4em] uppercase mb-10">$PIGGER • Solana 2025 • The People's Choice</p>
              <div className="text-[10px] text-gray-800 font-syne tracking-[1em] uppercase">Built for the culture</div>
            </div>
          </footer>
        </motion.div>
      )}

      <div className="fixed inset-0 -z-0 pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] bg-white/[0.02] blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-white/[0.02] blur-[150px] rounded-full" />
      </div>
    </div>
  );
};

export default App;
