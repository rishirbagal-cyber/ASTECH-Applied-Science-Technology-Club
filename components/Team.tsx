
import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">ASTECH Team</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Meet the dedicated individuals leading ASTECH toward new horizons.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden p-4 text-center transition-all group-hover:bg-zinc-800 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] h-full flex flex-col justify-between">
                <div>
                  <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-zinc-800 relative">
                    <img
                      src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${member.name}&backgroundColor=0f172a,1e293b,334155`}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors truncate">
                    {member.name}
                  </h3>
                </div>
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-semibold mt-2 border-t border-white/5 pt-2">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
