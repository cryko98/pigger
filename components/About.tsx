
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="blueprint" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-5xl md:text-8xl font-syne font-extrabold mb-10 uppercase leading-none gradient-text">
              The <br/>Blueprint
            </h2>
            <div className="space-y-8 text-gray-400 font-syne text-lg md:text-xl leading-relaxed">
              <p>
                Wigger Pig (<span className="text-white font-bold">$PIGGER</span>) isn't just another memecoin; it's a movement born on the <span className="text-white">Solana blockchain</span>. Blending internet culture with the high-speed world of DeFi, it stands for the real ones who know how to hustle.
              </p>
              <p>
                Built with a "people-first" mindset, the project launched with a commitment to <span className="text-white">transparency and community power</span>. No shady presales, just straight energy.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                {['No Presale', 'Zero Tax', 'Burnt LP', '100% Community'].map((tag) => (
                  <span key={tag} className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-syne font-bold tracking-widest text-white/60 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="soft-glass rounded-[3rem] p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <span className="font-marker text-9xl">PIG</span>
            </div>
            <h3 className="font-marker text-4xl text-white mb-6 uppercase">Why Pigger?</h3>
            <p className="text-gray-400 font-syne mb-8 text-lg">
              The $PIGGER token represents a shift in meme culture—where humor meets a solid technical foundation. By utilizing Solana's lightning-fast infrastructure, Wigger Pig ensures that the community can trade and engage without the heavy fees seen elsewhere.
            </p>
            <div className="p-8 bg-white/[0.03] rounded-3xl border border-white/5">
              <p className="text-white font-syne font-bold mb-2 uppercase tracking-widest">Built Different</p>
              <p className="text-gray-500 text-sm italic">
                "It's about the culture, the memes, and the hustle. We don't follow trends, we create them."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
