
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
    <section id="ca" className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="soft-glass rounded-[3.5rem] p-10 md:p-24 text-center"
        >
          <h2 className="text-4xl md:text-8xl font-syne font-extrabold mb-16 uppercase gradient-text">The Supply</h2>
          
          <div className="max-w-3xl mx-auto mb-20">
            <div className="bg-[#080808] border border-white/10 rounded-[2rem] p-6 flex flex-col md:flex-row items-center gap-6">
              <span className="flex-1 font-mono text-[10px] md:text-lg text-white/50 break-ca tracking-tighter">
                {ca}
              </span>
              <button 
                onClick={handleCopy}
                className="w-full md:w-auto px-10 py-5 bg-white text-black font-syne font-extrabold text-[11px] tracking-widest rounded-2xl hover:scale-95 transition-all uppercase"
              >
                {copied ? 'SECURED' : 'COPY CA'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { label: "TOTAL WORTH", val: "1 BILLION" },
              { label: "TAX FEE", val: "ZERO" },
              { label: "STATUS", val: "LIQUIDITY BURNT" }
            ].map((stat, i) => (
              <div key={i} className="p-12 border border-white/5 rounded-[2.5rem] bg-white/[0.02] hover:bg-white/[0.04] transition-all">
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

export default Tokenomics;
