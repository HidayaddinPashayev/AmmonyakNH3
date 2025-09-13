import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const MemoryGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const memories = [
    {
      image: "https://images.pexels.com/photos/1024965/pexels-photo-1024965.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Kahkahalarla Dolu Akşamlar",
      description: "Birlikte güldüğümüz her an, kalbimizde bir ışık yakıyor.",
      mood: "Neşeli"
    },
    {
      image: "https://images.pexels.com/photos/1024968/pexels-photo-1024968.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Gün Batımında Aşk",
      description: "Gün batımının renkleri, aşkımızın güzelliğini yansıtıyor.",
      mood: "Romantik"
    },
    {
      image: "https://images.pexels.com/photos/1024969/pexels-photo-1024969.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Dans Eden Kalplerimiz",
      description: "Müzik bittiğinde bile, kalplerimiz birlikte dans etmeye devam ediyor.",
      mood: "Tutkulu"
    },
    {
      image: "https://images.pexels.com/photos/1024966/pexels-photo-1024966.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Sessiz Mutluluk Anları",
      description: "Bazen en güzel sözler, sessizlikte saklanır.",
      mood: "Huzurlu"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <section id="anilar" className="py-24 bg-gradient-to-b from-gray-900/50 to-purple-900/30 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Unutulmaz Anılar
        </h2>
        
        <div className="relative">
          {/* Main carousel */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {memories.map((memory, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
                    <img 
                      src={memory.image}
                      alt={memory.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
                    
                    <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
                      <span className="inline-block px-4 py-2 bg-pink-500/20 backdrop-blur-sm rounded-full text-pink-300 font-semibold text-sm mb-4">
                        {memory.mood}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {memory.title}
                      </h3>
                      <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                        {memory.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {memories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-pink-500 w-8' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Memory grid preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {memories.map((memory, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative group overflow-hidden rounded-xl transition-all duration-300 ${
                index === currentIndex ? 'ring-4 ring-pink-500 scale-105' : 'hover:scale-105'
              }`}
            >
              <img 
                src={memory.image}
                alt={memory.title}
                className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Heart className="w-6 h-6 text-pink-400 fill-current" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryGallery;