
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";

interface ForgedAsset {
  id: string;
  url: string;
  prompt: string;
}

const stylePresets = [
  { id: 'jet', label: 'THE HANGAR', prompt: 'in a private hangar next to a sleek jet, high-end vibes' },
  { id: 'vault', label: 'THE BAG', prompt: 'inside a high-security vault with stacks of cash and bricks' },
  { id: 'studio', label: 'BOOTH MODE', prompt: 'in a recording studio with a microphone and platinum plaques' },
  { id: 'mansion', label: 'PENTHOUSE', prompt: 'sitting in a designer chair in a high-rise penthouse at midnight' },
  { id: 'street', label: 'BLOCK STAR', prompt: 'standing next to a black supercar on the city street' }
];

const randomPrompts = [
  "pigger wearing a crown and a oversized jacket",
  "pigger throwing cash in a rain storm",
  "pigger as the main character in a classic noir flick",
  "pigger with a diamond guard dog",
  "pigger in the studio recording a certified hit",
  "pigger checking the portfolio on a curved monitor"
];

const MemeGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedPreset, setSelectedPreset] = useState(stylePresets[0].id);
  const [blingLevel, setBlingLevel] = useState(2); 
  const [isGenerating, setIsGenerating] = useState(false);
  const [history, setHistory] = useState<ForgedAsset[]>([]);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loadingStage, setLoadingStage] = useState(0);

  const stages = ["CHECKING THE VIBE...", "GETTING THE FIT...", "ADDING COLD ICE...", "FINAL RENDER..."];

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
      const blingDesc = blingLevel === 3 ? "heavy diamond jewelry and gold chains" : blingLevel === 2 ? "iced out with expensive gear" : "clean minimal fit";
      
      const fullPrompt = `Create a realistic cinematic image of the pig character in the provided reference. 
      Scenario: ${prompt}. 
      Background: ${preset?.prompt}. 
      Details: ${blingDesc}. 
      Vibe: Black and white high-contrast photography, moody lighting, professional gear.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType: 'image/jpeg' } },
            { text: fullPrompt }
          ]
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
      setError("The booth is full right now. Try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="ai" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-16">
          
          <div className="xl:w-1/3 space-y-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-marker text-white mb-6 uppercase tracking-wider">Meme Maker</h2>
              <p className="text-gray-500 font-syne text-[10px] tracking-[0.4em] font-bold uppercase leading-relaxed">
                Forge your status. Get the fit right.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <label className="font-syne text-[10px] text-white/40 tracking-[0.2em] font-bold uppercase">01. THE SCENE</label>
                <button onClick={handleRandom} className="text-[10px] font-syne text-white border-b border-white/20 pb-0.5 uppercase tracking-widest">RANDOM</button>
              </div>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="What's pigger doing..."
                className="w-full h-36 bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 text-white font-syne text-[12px] font-bold outline-none focus:border-white/30 transition-all uppercase resize-none"
              />
            </div>

            <div className="space-y-6">
              <label className="font-syne text-[10px] text-white/40 tracking-[0.2em] font-bold uppercase">02. SETTING</label>
              <div className="flex flex-wrap gap-3">
                {stylePresets.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPreset(p.id)}
                    className={`px-6 py-3 rounded-full font-syne text-[9px] font-extrabold tracking-widest transition-all ${
                      selectedPreset === p.id ? 'bg-white text-black' : 'bg-white/5 text-white/40 hover:bg-white/10'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={generateMeme}
              disabled={isGenerating || !prompt}
              className="w-full btn-pigger py-8 font-syne font-extrabold text-[12px] tracking-[0.3em] uppercase disabled:opacity-30"
            >
              {isGenerating ? 'WORKING...' : 'FORGE IMAGE'}
            </button>
          </div>

          <div className="xl:w-2/3">
            <div className="relative aspect-square bg-white/[0.01] border border-white/10 rounded-[3.5rem] overflow-hidden shadow-inner">
              <AnimatePresence mode="wait">
                {isGenerating ? (
                  <motion.div key="loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md">
                    <div className="w-16 h-16 border-2 border-white/10 border-t-white rounded-full animate-spin mb-10" />
                    <motion.p 
                      key={loadingStage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-syne text-[11px] font-bold tracking-[0.6em] text-white uppercase text-center"
                    >
                      {stages[loadingStage]}
                    </motion.p>
                  </motion.div>
                ) : activeImage ? (
                  <motion.img 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={activeImage} 
                    className="w-full h-full object-cover grayscale-[0.2]"
                    alt="Pigger Forgery"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-20 opacity-20">
                    <p className="font-syne text-[12px] font-bold tracking-[0.8em] text-center uppercase">Awaiting Connection</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="mt-10 grid grid-cols-5 gap-4">
               {history.map((h) => (
                 <button key={h.id} onClick={() => setActiveImage(h.url)} className="aspect-square rounded-2xl overflow-hidden border border-white/10 hover:border-white transition-all">
                   <img src={h.url} className="w-full h-full object-cover grayscale hover:grayscale-0" />
                 </button>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MemeGenerator;
