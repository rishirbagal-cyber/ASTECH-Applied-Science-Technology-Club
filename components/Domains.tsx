
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Palette, Atom, Megaphone, ShieldCheck, FileText, Database, Coins } from 'lucide-react';
import { DOMAINS } from '../constants';

const iconMap: { [key: string]: any } = {
  Briefcase, Palette, Atom, Megaphone, ShieldCheck, FileText, Database, Coins
};

const Domains: React.FC = () => {
  return (
    <section id="domains" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Our Domains</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Our association is structured into specialized departments that work in synergy to deliver excellence across all fronts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOMAINS.map((domain, index) => {
            const Icon = iconMap[domain.iconName];
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="text-blue-500 group-hover:text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{domain.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {domain.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Domains;
