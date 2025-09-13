import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const FinalMessage: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 via-purple-900/30 to-pink-900/20"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 text-pink-400 mx-auto mb-6 animate-pulse" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600 bg-clip-text text-transparent">
            Sonsuz Aşkımız
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
          Bu site, aşkımızın en güzel anılarını bir araya getiriyor. 
          Her saniyesi için minnettarım. Sen benim hayatımın en güzel hedayesisin.
        </p>
        
        <div className="relative inline-block">
          <button
            onClick={handleClick}
            className={`group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-bold text-lg hover:scale-110 transform transition-all duration-300 shadow-2xl hover:shadow-pink-500/50 ${
              clicked ? 'animate-pulse scale-125' : ''
            }`}
          >
            <span className="flex items-center gap-3">
              <Heart className={`w-6 h-6 fill-current ${clicked ? 'animate-bounce' : ''}`} />
              <span className="relative z-10">Seni Çok Seviyorum</span>
              {clicked && <Heart className="w-6 h-6 fill-current animate-bounce" />}
            </span>
            
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          {/* Heart explosion effect */}
          {clicked && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <Heart
                  key={i}
                  className="absolute w-4 h-4 text-pink-400 fill-current animate-ping"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-${20 + i * 5}px)`,
                    animationDelay: `${i * 100}ms`,
                    animationDuration: '1s'
                  }}
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-pink-500/20">
          <p className="text-lg text-gray-300 italic">
            "Aşk, iki kalbin tek ritimde çarpmasıdır. Bizim ritmimiz, sonsuzluk boyunca sürecek."
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalMessage;