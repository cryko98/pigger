
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";

const randomPrompts = [
  "pigger counting stacks of cash on a private jet while wearing diamond chains",
  "pigger driving a matte black phantom through the streets of solana at night",
  "pigger as a judge in an underground rap battle holding a platinum microphone",
  "pigger sitting on a throne made of bitcoin and gold bricks",
  "pigger throwing a party on a luxury yacht with stacks of money everywhere",
  "pigger wearing a black fur coat and a giant gold crown in a dark mansion",
  "pigger doing a backflip off a gold lamborghini into a pool of cash",
  "pigger recording a hit rap song in a high-end studio with gold records on the wall"
];

const MemeGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const logoUrl = "https://pbs.twimg.com/media/G8l7BYKawAEJOZm?format=jpg&name=small";

  const handleRandom = () => {
    const random = randomPrompts[Math.floor(Math.random() * randomPrompts.length)];
    setPrompt(random);
  };

  const generateMeme = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemPrompt = `You are a legendary luxury street artist. Generate a high-fashion, cinematic image featuring the "Pigger" character (a cool pink pig with a confident, high-rolling rapper/gangster vibe) from the reference image provided. 
      The art style should be gritty, ultra-detailed, and evoke a "luxury black and white movie" aesthetic even if the character has color. 
      User request: ${prompt}`;

      const logoResponse = await fetch(logoUrl);
      const blob = await logoResponse.blob();
      const reader = new FileReader();
      
      const base64Data: string = await new Promise((resolve) => {
        reader.onloadend = () => {
          const base64 = (reader.result as string).split(',')[1];
          resolve(base64);
        };
        reader.readAsDataURL(blob);
      });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType: 'image/jpeg' } },
            { text: systemPrompt }
          ]
        },
        config: { imageConfig: { aspectRatio: "1:1" } }
      });

      let imgFound = false;
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setGeneratedImage(`data:image/png;base64,${part.inlineData.data}`);
          imgFound = true;
          break;
        }
      }
      if (!imgFound) throw new Error("Terminal link failed.");
    } catch (err: any) {
      setError("Hustle aborted: High-tier security block.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="meme-ai" className="py-40 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:sticky lg:top-40 w-full lg:w-1/3">
            <h2 className="text-7xl font-marker text-white mb-8 tracking-wide">
              IDENTITY <br/><span className="text-gray-500">FORGER</span>
            </h2>
            <p className="text-gray-500 font-sync text-xs leading-relaxed mb-12 tracking-[0.3em] uppercase">
              Summon the boss. Type 'pigger' and your vision. 
            </p>
            
            <div className="space-y-6">
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Pigger on a private jet..."
                className="w-full h-40 bg-black border border-white/10 p-6 text-white font-sync text-[10px] uppercase outline-none focus:border-white transition-all resize-none shadow-inner"
              />
              <div className="flex gap-4">
                <button 
                  onClick={handleRandom}
                  className="flex-1 py-5 border border-white/20 text-white font-sync font-black text-[10px] tracking-[0.2em] hover:bg-white/10 transition-all uppercase"
                >
                  SURPRISE ME
                </button>
                <button 
                  onClick={generateMeme}
                  disabled={isGenerating || !prompt}
                  className="flex-[2] shimmer-btn py-5 bg-white text-black font-sync font-black text-[10px] tracking-[0.2em] hover:invert transition-all uppercase disabled:opacity-50"
                >
                  {isGenerating ? 'FORGING...' : 'INITIATE'}
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="aspect-square relative bg-black border border-white/10 overflow-hidden shadow-2xl">
              <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-sync text-white/50 tracking-[0.3em]">SECURE_FEED</span>
              </div>

              <AnimatePresence mode="wait">
                {isGenerating ? (
                  <motion.div 
                    key="loader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/95 z-10"
                  >
                    <div className="w-32 h-[1px] bg-white animate-[width_1.5s_ease-in-out_infinite]" />
                    <p className="mt-6 font-sync text-[9px] text-white tracking-[1em] animate-pulse">DECRYPTING PIGGER...</p>
                  </motion.div>
                ) : generatedImage ? (
                  <motion.div 
                    key="result"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full w-full"
                  >
                    <img src={generatedImage} alt="Forged Asset" className="h-full w-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000" />
                  </motion.div>
                ) : (
                  <div className="h-full w-full flex flex-col items-center justify-center border-4 border-dashed border-white/5 opacity-20">
                    <p className="font-sync font-black text-6xl uppercase tracking-tighter">OFFLINE</p>
                    <p className="font-sync text-[10px] tracking-widest mt-4">AWAITING INPUT</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
            
            {generatedImage && !isGenerating && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 flex justify-between items-center"
              >
                <span className="text-[10px] font-sync text-white/30 tracking-widest uppercase">Verified Asset: Pigger_V2.5.png</span>
                <a 
                  href={generatedImage} 
                  download="pigger_classified.png"
                  className="font-sync text-[11px] text-white border-b border-white hover:text-gray-500 hover:border-gray-500 transition-all uppercase tracking-[0.3em] pb-1"
                >
                  EXPORT FILE
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemeGenerator;
