
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div {...fadeInUp} className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              About <span className="text-blue-500">ASTECH</span>
            </h2>
            <p className="text-blue-400 font-semibold text-xl mb-6 leading-relaxed">
              Igniting curiosity, ASTECH - a science club by the first-years, for first-years! ✨ Join us for hands-on fun & a whole lot of science curators.
            </p>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              At MIT ADT University, we focus on advancing knowledge in applied science and technology, including aerospace and space tech. Through workshops, projects, and events, we bridge curiosity with innovation. Recognized as the Active Club of the Year (Aug 2025), we're building a vibrant community for all science enthusiasts!
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-blue-500 font-bold text-xl mb-2">Our Vision</h4>
                <p className="text-zinc-500 text-sm">To be the epicenter of technical excellence and collaborative learning for future explorers.</p>
              </div>
              <div>
                <h4 className="text-blue-500 font-bold text-xl mb-2">Our Mission</h4>
                <p className="text-zinc-500 text-sm">Empowering students through space-tech exposure, networking, and hands-on experiments.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative group">
              <img
                src="https://picsum.photos/seed/astech-sci/800/800"
                alt="ASTECH Innovation"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-700" />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-zinc-900 p-8 rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex gap-10">
                <div>
                  <div className="text-3xl font-black text-white">500+</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Members</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">50+</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Events Yearly</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
