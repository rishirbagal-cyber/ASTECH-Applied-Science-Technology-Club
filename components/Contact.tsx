
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/5"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Get In Touch</h2>
            <p className="text-zinc-400 mb-10 leading-relaxed">
              Have questions or want to collaborate with ASTECH? Reach out to us and let's build something amazing together.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mr-4 shrink-0 border border-white/5">
                  <Mail className="text-blue-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email Us</h4>
                  <p className="text-zinc-500 text-sm">astech.mitadt@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mr-4 shrink-0 border border-white/5">
                  <Phone className="text-blue-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Call Us</h4>
                  <p className="text-zinc-500 text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mr-4 shrink-0 border border-white/5">
                  <MapPin className="text-blue-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Our Location</h4>
                  <p className="text-zinc-500 text-sm">MIT ADT University, Loni Kalbhor, Pune - 412201</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <div className="bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Subject</label>
                  <input
                    type="text"
                    placeholder="Event Collaboration"
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Your Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project or query..."
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center group shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
