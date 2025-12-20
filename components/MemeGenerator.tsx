
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";

interface ForgedAsset {
  id: string;
  url: string;
  prompt: string;
}

const stylePresets = [
  { id: 'jet', label: 'PRIVATE JET', prompt: 'on a Gulfstream G700 private jet with marble tables and leather seats' },
  { id: 'vault', label: 'DIAMOND VAULT', prompt: 'inside a high-security bank vault surrounded by stacks of cash and gold bars' },
  { id: 'studio', label: 'THE STUDIO', prompt: 'in a state-of-the-art recording studio with platinum records on the wall and a diamond microphone' },
  { id: 'mansion', label: 'CEO SUITE', prompt: 'sitting in a designer velvet chair in a penthouse overlooking the city at night' },
  { id: 'street', label: 'MATTE BLACK', prompt: 'standing next to a matte black luxury hypercar with butterfly doors open' }
];

const randomPrompts = [
  "pigger wearing a 24k gold crown and a fur coat",
  "pigger throwing stacks of cash in slow motion",
  "pigger playing poker with literal diamonds as chips",
  "pigger as the main character in a black-and-white noir film",
  "pigger walking a robotic diamond-plated guard dog",
  "pigger recording a hit rap song with headphones on"
];

const MemeGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedPreset, setSelectedPreset] = useState(stylePresets[0].id);
  const [blingLevel, setBlingLevel] = useState(2); // 1 to 3
  const [isGenerating, setIsGenerating] = useState(false);
  const [history, setHistory] = useState<ForgedAsset[]>([]);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loadingStage, setLoadingStage] = useState(0);

  const stages = ["Scanning Character...", "Calibrating Vibe...", "Injecting Bling...", "Final Rendering..."];

  useEffect(() => {
    if (isGenerating) {
      const interval = setInterval(() => {
        setLoadingStage((prev) => (prev + 1) % stages.length);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isGenerating]);

  const handleRandom = () => {
    const random = randomPrompts[Math.floor(Math.random() * randomPrompts.length)];
    setPrompt(random);
  };

  const generateMeme = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setError(null);
    setLoadingStage(0);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const logoUrl = "https://pbs.twimg.com/media/G8l7BYKawAEJOZm?format=jpg&name=small";
      const logoResponse = await fetch(logoUrl);
      const blob = await logoResponse.blob();
      const reader = new FileReader();
      const base64Data: string = await new Promise((res) => {
        reader.onloadend = () => res((reader.result as string).split(',')[1]);
        reader.readAsDataURL(blob);
      });

      const preset = stylePresets.find(p => p.id === selectedPreset);
      const blingDesc = blingLevel === 3 ? "covered in excessive diamond jewelry and gold chains" : blingLevel === 2 ? "wearing subtle expensive jewelry" : "clean luxury look";
      
      const fullPrompt = `Create a hyper-realistic, high-fashion luxury image of the character in the image. 
      Scenario: ${prompt}. 
      Background/Environment: ${preset?.prompt}. 
      Details: ${blingDesc}. 
      Style: Monochrome cinematic photography, sharp focus, 8k resolution, elegant, expensive atmosphere.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType: 'image/jpeg' } },
            { text: fullPrompt }
          ]
        },
        config: {
          imageConfig: { aspectRatio: "1:1" }
        }
      });

      const part = response.candidates[0].content.parts.find(p => p.inlineData);
      if (part) {
        const url = `data:image/png;base64,${part.inlineData.data}`;
        setActiveImage(url);
        setHistory(prev => [{ id: Date.now().toString(), url, prompt }, ...prev.slice(0, 4)]);
      } else {
        throw new Error("Empty response");
      }
    } catch (err) {
      setError("The syndicate terminal is busy. Try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="ai" className="py-40 px-6 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-20">
          
          {/* Controls Panel */}
          <div className="xl:w-1/3 space-y-10">
            <div>
              <h2 className="text-5xl md:text-7xl font-marker text-white mb-4 uppercase">The Forger</h2>
              <p className="text-gray-500 font-sync text-[10px] tracking-[0.4em] uppercase leading-loose opacity-60">
                Digital Asset Fabrication Terminal v2.5
              </p>
            </div>

            {/* Step 1: Scenario */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="font-sync text-[9px] text-white/40 tracking-widest uppercase">01. SCENARIO</label>
                <button 
                  onClick={handleRandom}
                  className="text-[9px] font-sync text-white border-b border-white/20 pb-0.5 hover:border-white transition-all uppercase"
                >
                  RANDOMIZE
                </button>
              </div>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the play..."
                className="w-full h-40 bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 text-white font-sync text-[11px] outline-none focus:border-white/40 transition-all uppercase resize-none shadow-inner"
              />
            </div>

            {/* Step 2: Presets */}
            <div className="space-y-4">
              <label className="font-sync text-[9px] text-white/40 tracking-widest uppercase">02. ENVIRONMENT</label>
              <div className="flex flex-wrap gap-2">
                {stylePresets.map(preset => (
                  <button
                    key={preset.id}
                    onClick={() => setSelectedPreset(preset.id)}
                    className={`px-5 py-3 rounded-full font-sync text-[8px] tracking-widest transition-all ${
                      selectedPreset === preset.id 
                      ? 'bg-white text-black' 
                      : 'bg-white/5 text-white/40 hover:bg-white/10'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Bling Level */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="font-sync text-[9px] text-white/40 tracking-widest uppercase">03. BLING DENSITY</label>
                <span className="font-sync text-[9px] text-white">{blingLevel === 1 ? 'CLASSIC' : blingLevel === 2 ? 'LUXURY' : 'EXTREME'}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="3" 
                step="1" 
                value={blingLevel}
                onChange={(e) => setBlingLevel(parseInt(e.target.value))}
                className="w-full h-1 bg-white/10 appearance-none rounded-full accent-white"
              />
            </div>

            <button 
              onClick={generateMeme}
              disabled={isGenerating || !prompt}
              className="w-full btn-lux py-8 font-sync font-black text-xs tracking-[0.4em] uppercase disabled:opacity-20 shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)] active:scale-95 transition-transform"
            >
              {isGenerating ? 'PROCESSING...' : 'INITIATE FORGERY'}
            </button>
          </div>

          {/* Visualization Panel */}
          <div className="xl:w-2/3">
            <div className="relative aspect-square bg-white/[0.02] border border-white/5 rounded-[3.5rem] overflow-hidden group shadow-2xl">
              <AnimatePresence mode="wait">
                {isGenerating ? (
                  <motion.div 
                    key="loader" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80 backdrop-blur-xl"
                  >
                    <div className="relative mb-8">
                      <div className="w-24 h-24 border-2 border-white/10 rounded-full" />
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-2 border-white border-t-transparent rounded-full"
                      />
                    </div>
                    <motion.p 
                      key={loadingStage}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="font-sync text-[10px] tracking-[1.2em] text-white uppercase text-center pl-4"
                    >
                      {stages[loadingStage]}
                    </motion.p>
                    
                    {/* Progress Bar */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-white/10">
                      <motion.div 
                        className="h-full bg-white"
                        animate={{ width: ['0%', '100%'] }}
                        transition={{ duration: 6, ease: "easeInOut" }}
                      />
                    </div>
                  </motion.div>
                ) : activeImage ? (
                  <motion.div 
                    key="img"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full h-full relative"
                  >
                    <img 
                      src={activeImage} 
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                      alt="Forged Identity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-12 flex items-end justify-between">
                       <div className="flex flex-col">
                         <span className="font-sync text-[10px] text-white/40 tracking-widest uppercase mb-2">ASSET_SERIAL</span>
                         <span className="font-sync text-sm text-white font-bold">{Date.now().toString().slice(-8)}</span>
                       </div>
                       <a 
                         href={activeImage} 
                         download="pigger_asset.png"
                         className="bg-white text-black px-8 py-4 rounded-full font-sync text-[9px] font-black tracking-widest uppercase hover:scale-105 transition-all shadow-xl"
                       >
                         EXPORT
                       </a>
                    </div>
                  </motion.div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-20 opacity-10">
                    <img 
                      src="https://pbs.twimg.com/media/G8l7BYKawAEJOZm?format=jpg&name=small" 
                      className="w-40 h-40 rounded-full mb-8 grayscale"
                      alt="Placeholder"
                    />
                    <p className="font-sync text-[10px] tracking-[1em] text-center uppercase">System Idle. Awaiting Credentials.</p>
                  </div>
                )}
              </AnimatePresence>

              {/* Error State */}
              <AnimatePresence>
                {error && (
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    className="absolute bottom-10 left-10 right-10 bg-red-950/40 border border-red-500/20 backdrop-blur-md p-6 rounded-3xl z-30 flex items-center justify-between"
                  >
                    <span className="font-sync text-[9px] text-red-200 tracking-widest uppercase">{error}</span>
                    <button onClick={() => setError(null)} className="text-red-200 font-bold">×</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Gallery (The Vault) */}
            <div className="mt-12">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-sync text-[9px] text-white/20 tracking-widest uppercase">RECENT FORGERIES</span>
                <div className="h-[1px] flex-1 bg-white/5" />
              </div>
              <div className="grid grid-cols-5 gap-4">
                {history.length > 0 ? history.map((asset) => (
                  <motion.button
                    layoutId={asset.id}
                    key={asset.id}
                    onClick={() => setActiveImage(asset.url)}
                    className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                      activeImage === asset.url ? 'border-white scale-105 shadow-xl' : 'border-white/5 opacity-40 hover:opacity-100'
                    }`}
                  >
                    <img src={asset.url} className="w-full h-full object-cover" alt="History" />
                  </motion.button>
                )) : (
                  Array(5).fill(0).map((_, i) => (
                    <div key={i} className="aspect-square rounded-2xl bg-white/[0.02] border border-white/5 border-dashed" />
                  ))
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MemeGenerator;
