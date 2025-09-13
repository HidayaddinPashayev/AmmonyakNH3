import React from 'react';
import { Calendar, Camera, MapPin } from 'lucide-react';

const Timeline: React.FC = () => {
  const timelineEvents = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "İlk Tanışma",
      description: "Gözlerimiz ilk kez kesiştiğinde, kalbimde bir şarkı başladı.",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "İlk Gün"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "İlk Buluşma",
      description: "O gün, hayatımın en güzel hikayesine başladık.",
      image: "https://images.pexels.com/photos/1024970/pexels-photo-1024970.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "Başlangıç"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "İlk Seyahat",
      description: "Birlikte keşfettiğimiz her yeni yer, aşkımızın haritasında bir iz bıraktı.",
      image: "https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "Keşif"
    }
  ];

  return (
    <section id="baslangic" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Birlikte İlk Adımlar
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500 rounded-full hidden md:block"></div>
          
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 group">
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-pink-500/20 transform hover:scale-105 transition-all duration-500 hover:shadow-pink-500/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full text-white">
                        {event.icon}
                      </div>
                      <span className="text-sm text-pink-400 font-semibold">{event.date}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="relative hidden md:block">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full border-4 border-gray-900 shadow-lg animate-pulse"></div>
                </div>
                
                {/* Image */}
                <div className="flex-1">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;