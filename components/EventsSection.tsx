
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { EVENTS } from '../constants';

const EventsSection: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Upcoming Events</h2>
            <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
          </div>
          <button className="text-blue-500 font-bold flex items-center hover:text-blue-400 transition-colors group">
            View All Activities <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-zinc-900/40 rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all flex flex-col h-full"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Featured
                </div>
              </div>
              <div className="p-8 flex-grow">
                <div className="flex items-center text-zinc-500 text-sm mb-4">
                  <Calendar size={14} className="mr-2" />
                  {event.date}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {event.description}
                </p>
                <button className="mt-auto px-6 py-2.5 bg-zinc-800 group-hover:bg-blue-600 text-white text-xs font-bold rounded-xl transition-all w-full">
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
