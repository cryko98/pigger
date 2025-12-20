
import React from 'react';
import { motion } from 'framer-motion';

const exchanges = [
  { name: "WEEX", url: "https://weex.com/spot/PIGGER-US", tag: "STREET" },
  { name: "MEXC", url: "https://www.mexc.com/en-TR/exchange/PIGGER_USDT?_from=search", tag: "ELITE" },
  { name: "Maxbid", url: "https://maxbid.pro/spot/DBh9F2wSukCJdZeNkLYe2LMYnCwMyLcnBgeCf4pgpump", tag: "UNDERGROUND" },
];

const analytics = [
  { name: "CoinGecko", url: "https://www.coingecko.com/id/coins/wigger-pig" },
  { name: "CoinMarketCap", url: "https://dex.coinmarketcap.com/token/solana/DBh9F2wSukCJdZeNkLYe2LMYnCwMyLcnBgeCf4pgpump/" },
  { name: "DexScreener", url: "https://dexscreener.com/solana/81h1xlnbc6e16cdrz6std4quh1gk9oxv97t7wjqvdmb8" },
  { name: "GeckoTerminal", url: "https://www.geckoterminal.com/id/solana/pools/81H1xLnBC6E16CDrz6StD4qUh1gk9oxv97t7WJqVDMB8" },
];

const LinksSection: React.FC = () => {
  return (
    <section id="exchanges" className="py-40 px-6 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-9xl md:text-[18rem] font-sync font-black text-white/[0.03] absolute -top-20 right-0 select-none">ASSETS</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 relative z-10">
          <div className="lg:col-span-8">
            <h3 className="text-5xl font-marker text-white mb-16 transform -rotate-1">LICENSED DEALERS</h3>
            <div className="grid grid-cols-1 gap-6">
              {exchanges.map((ex, i) => (
                <motion.a 
                  key={i}
                  href={ex.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.01, x: 20 }}
                  className="group flex items-center justify-between p-12 glass-card border-white/5 hover:border-white/40 transition-all relative overflow-hidden"
                >
                  <div className="flex flex-col">
                    <span className="font-sync font-black text-4xl mb-2 tracking-tighter uppercase group-hover:text-white transition-colors">
                      {ex.name}
                    </span>
                    <span className="text-[10px] font-sync text-gray-600 tracking-[0.5em] uppercase">ACCESS GRANTED</span>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="font-sync text-[10px] text-white/30 tracking-[0.3em] group-hover:text-white transition-colors">{ex.tag}</span>
                    <span className="text-4xl text-white group-hover:translate-x-4 transition-transform">→</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-5xl font-marker text-gray-500 mb-16 transform rotate-1 uppercase">Surveillance</h3>
            <div className="space-y-2">
              {analytics.map((an, i) => (
                <a 
                  key={i}
                  href={an.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-8 border-b border-white/5 hover:bg-white hover:text-black transition-all group"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-sync font-bold text-xs tracking-[0.4em] text-gray-400 group-hover:text-black transition-colors uppercase">
                      {an.name}
                    </span>
                    <span className="text-black opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </div>
                </a>
              ))}
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="mt-20 p-12 bg-white text-black relative shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <span className="text-8xl font-black font-sync">PIG</span>
              </div>
              <h4 className="text-4xl font-marker mb-6 uppercase">Meme Depot</h4>
              <p className="font-sync text-[10px] font-bold tracking-[0.2em] mb-10 leading-relaxed uppercase">
                The full dossier of pigger propaganda. High resolution, high luxury.
              </p>
              <a 
                href="http://memedepot.com/d/pigger"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-black text-white px-10 py-5 font-sync font-black text-xs tracking-widest hover:scale-95 transition-all w-full text-center"
              >
                OPEN FOLDER
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
