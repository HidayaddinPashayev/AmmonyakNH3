import React, { useState } from 'react';
import { ChevronDown, Heart } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const [showLoveAnimation, setShowLoveAnimation] = useState(false);

  const handleButtonClick = () => {
    setShowLoveAnimation(true);
    setTimeout(() => {
      setShowLoveAnimation(false);
    }, 2000);
    
    // Scroll after a short delay
    setTimeout(() => {
      document.getElementById('baslangic')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          background: `
            radial-gradient(circle at 20% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(219, 39, 119, 0.2) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-pink-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
              Ammonyak NH3'ÜN
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              HEKAYƏSİ
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-12 opacity-90">
            Mənim gözəl Hanımımm, bu saytı hazırlamaqla sənə fərqli və gözəl bir hədiyyə bəxş etmək istədim. Çox düşünürdüm necə bir hədiyyə verə bilərəm deyə. Ümid edirəm bəyənəcəksən
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleButtonClick}
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <span className="relative z-10">Hekayəmizi Kəşf Et, GÜLÜM</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Love heart animation */}
      {showLoveAnimation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="love-heart-grow">
            <Heart className="w-16 h-16 text-pink-500 fill-current" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;