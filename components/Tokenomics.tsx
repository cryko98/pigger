
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
    <section id="ca" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="soft-glass rounded-[3rem] p-12 md:p-20 text-center"
        >
          <h2 className="text-4xl md:text-7xl font-sync font-black mb-12 uppercase silk-text">The Proof</h2>
          
          <div className="max-w-3xl mx-auto mb-20">
            <div className="bg-black/40 border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
              <span className="flex-1 font-mono text-xs md:text-lg text-white/60 break-ca">
                {ca}
              </span>
              <button 
                onClick={handleCopy}
                className="w-full md:w-auto px-10 py-5 bg-white text-black font-sync font-black text-[10px] tracking-widest rounded-2xl hover:invert transition-all uppercase whitespace-nowrap"
              >
                {copied ? 'COPIED' : 'COPY CA'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "NET SUPPLY", val: "1 BILLION" },
              { label: "FEES", val: "ZERO" },
              { label: "SECURITY", val: "LP BURNT" }
            ].map((stat, i) => (
              <div key={i} className="p-10 border border-white/5 rounded-[2.5rem] bg-white/[0.01]">
                <p className="text-[10px] font-sync text-white/30 tracking-[0.4em] mb-4 uppercase">{stat.label}</p>
                <p className="text-3xl font-sync font-black text-white">{stat.val}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
