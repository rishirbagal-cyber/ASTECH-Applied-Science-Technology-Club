
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Github, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Domains from './components/Domains';
import Team from './components/Team';
import EventsSection from './components/EventsSection';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          >
            <div className="flex flex-col items-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
              />
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-2xl font-bold tracking-widest text-blue-500"
              >
                ASTECH
              </motion.h1>
            </div>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Header />
            <Hero />
            <About />
            <Domains />
            <Team />
            <EventsSection />
            <Gallery />
            <Contact />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
