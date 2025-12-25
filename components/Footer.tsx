
import React from 'react';
import { Github, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-3xl font-black tracking-tighter text-white mb-6 block">
              ASTECH <span className="text-blue-500">MIT ADT</span>
            </a>
            <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
              Applied Science & Technology Club. Igniting curiosity and bridging innovation in the field of science and aerospace at MIT ADT University.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-blue-600 transition-all border border-white/5"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-zinc-500 hover:text-blue-500 transition-colors text-sm">About ASTECH</a></li>
              <li><a href="#domains" className="text-zinc-500 hover:text-blue-500 transition-colors text-sm">Our Domains</a></li>
              <li><a href="#team" className="text-zinc-500 hover:text-blue-500 transition-colors text-sm">The Team</a></li>
              <li><a href="#events" className="text-zinc-500 hover:text-blue-500 transition-colors text-sm">Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-blue-500 transition-colors text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-blue-500 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#contact" className="text-zinc-500 hover:text-blue-500 transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-blue-500 transition-colors text-sm">FAQs</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} ASTECH MIT ADT. All rights reserved.
          </p>
          <p className="text-zinc-600 text-xs flex items-center">
            Designed with <Heart size={12} className="mx-1 text-red-500 fill-red-500" /> by ASTECH Web Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
