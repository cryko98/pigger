
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Tokenomics: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const ca = "DBh9F2wSukCJdZeNkLYe2LMYnCwMyLcnBgeCf4pgpump";

  const handleCopy = () => {
    navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tokenomics" className="py-40 px-6 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-7xl md:text-9xl font-sync font-black text-white mb-6 italic tracking-tighter uppercase">
              The <span className="text-gray-500">Contract</span>
            </h2>
            <p className="text-gray-600 font-sync text-sm tracking-[0.5em] uppercase">Unbreakable. Immutuable. Verified.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full md:w-auto p-[1px] bg-gradient-to-r from-white/20 to-transparent"
          >
            <div className="flex flex-col md:flex-row glass-card">
              <div className="bg-black/90 px-10 py-8 font-mono text-white text-lg break-all flex items-center border-r border-white/10">
                {ca}
              </div>
              <button 
                onClick={handleCopy}
                className={`shimmer-btn px-12 py-8 font-sync font-bold transition-all uppercase tracking-widest text-lg ${copied ? 'bg-white text-black' : 'bg-white text-black hover:invert'}`}
              >
                {copied ? 'SECURED' : 'COPY CA'}
              </button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10">
          {[
            { label: "NET WORTH", value: "1,000,000,000", sub: "$PIGGER TOTAL" },
            { label: "TRANSACTION FEE", value: "0%", sub: "TAX FREE WEALTH" },
            { label: "LP PROTECTION", value: "LIQUIDATED", sub: "KEYS PERMANENTLY LOST" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-16 border-white/10 border-r last:border-r-0 hover:bg-white/[0.03] transition-all group"
            >
              <h3 className="text-gray-600 font-sync text-[10px] tracking-[0.4em] mb-10 group-hover:text-white transition-colors uppercase">{item.label}</h3>
              <p className="text-6xl font-sync font-black text-white mb-4 tracking-tighter">{item.value}</p>
              <p className="text-gray-700 font-sync text-[10px] tracking-widest uppercase">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
