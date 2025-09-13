import React, { useEffect, useState } from 'react';
import { Heart, ChevronDown, Calendar, Camera } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import MemoryGallery from './components/MemoryGallery';
import FinalMessage from './components/FinalMessage';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900/50 via-purple-900/30 to-pink-900/50 pointer-events-none" />
      
      <Header />
      <main className="relative z-10">
        <Hero scrollY={scrollY} />
        <Timeline />
        <MemoryGallery />
        <FinalMessage />
      </main>
      <Footer />
      
      {/* Floating hearts animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-pulse opacity-20">
          <Heart className="w-6 h-6 text-pink-400 fill-current animate-bounce" style={{ animationDelay: '0s' }} />
        </div>
        <div className="absolute top-3/4 right-1/4 animate-pulse opacity-15">
          <Heart className="w-4 h-4 text-pink-300 fill-current animate-bounce" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-pulse opacity-10">
          <Heart className="w-5 h-5 text-pink-500 fill-current animate-bounce" style={{ animationDelay: '4s' }} />
        </div>
      </div>
    </div>
  );
}

export default App;