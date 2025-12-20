
import React from 'react';
import { motion } from 'framer-motion';

const exchanges = [
  { name: "WEEX", url: "https://weex.com/spot/PIGGER-US" },
  { name: "MEXC", url: "https://www.mexc.com/en-TR/exchange/PIGGER_USDT" },
  { name: "Maxbid", url: "https://maxbid.pro/spot/DBh9F2wSukCJdZeNkLYe2LMYnCwMyLcnBgeCf4pgpump" }
];

const analyticLinks = [
  { name: "CoinGecko", url: "https://www.coingecko.com/id/coins/wigger-pig" },
  { name: "MarketCap", url: "https://dex.coinmarketcap.com/token/solana/DBh9F2wSukCJdZeNkLYe2LMYnCwMyLcnBgeCf4pgpump/" },
  { name: "Screener", url: "https://dexscreener.com/solana/81h1xlnbc6e16cdrz6std4quh1gk9oxv97t7wjqvdmb8" },
  { name: "Terminal", url: "https://www.geckoterminal.com/id/solana/pools/81H1xLnBC6E16CDrz6StD4qUh1gk9oxv97t7WJqVDMB8" }
];

const LinksSection: React.FC = () => {
  return (
    <section id="links" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-8xl font-sync font-black silk-text uppercase tracking-tighter">The Connect</h2>
          <p className="text-gray-600 font-sync text-[10px] tracking-[1em] mt-4 uppercase">Direct Market Access</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="font-marker text-4xl text-white mb-12 transform -rotate-2">DEALERS</h3>
            <div className="space-y-4">
              {exchanges.map((ex, i) => (
                <motion.a 
                  key={i} 
                  href={ex.url} 
                  target="_blank" 
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-10 soft-glass rounded-[2rem] hover:bg-white/5 transition-all group"
                >
                  <span className="font-sync font-black text-2xl uppercase">{ex.name}</span>
                  <span className="text-white/20 group-hover:text-white transition-all">→</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-marker text-4xl text-gray-500 mb-12 transform rotate-2">TRACKING</h3>
            <div className="grid grid-cols-2 gap-4">
              {analyticLinks.map((an, i) => (
                <a 
                  key={i} 
                  href={an.url} 
                  target="_blank" 
                  className="p-8 border border-white/5 rounded-[2rem] hover:bg-white text-gray-400 hover:text-black font-sync font-bold text-[10px] transition-all text-center uppercase tracking-widest"
                >
                  {an.name}
                </a>
              ))}
            </div>
            
            <a 
              href="http://memedepot.com/d/pigger" 
              target="_blank"
              className="mt-8 block p-12 bg-white text-black rounded-[2.5rem] text-center shadow-2xl hover:scale-95 transition-all"
            >
              <h4 className="font-marker text-3xl mb-2">MEME DEPOT</h4>
              <p className="font-sync text-[9px] font-bold tracking-[0.3em] uppercase">Open The Vault</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
