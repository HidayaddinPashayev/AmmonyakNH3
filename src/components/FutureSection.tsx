import React from 'react';
import { BellRing as Ring, Baby, Users } from 'lucide-react';

const FutureSection: React.FC = () => {
  const futureGoals = [
    {
      icon: <Ring className="w-8 h-8" />,
      title: "Evlilik Hayali",
      description: "Hayatımızın geri kalanını seninle geçirmek, en büyük hayalim.",
      image: "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Çocuklarımızla Geçireceğimiz Günler",
      description: "Ailemiz büyürken, aşkımız da onlarla birlikte büyüyor.",
      image: "https://images.pexels.com/photos/1648397/pexels-photo-1648397.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Birlikte Yaşlanmak",
      description: "Saçlarımız ağarırken bile, aşkımız ilk günkü gibi taze kalacak.",
      image: "https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section id="gelecek" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Gelecek Hayallerimiz
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {futureGoals.map((goal, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={goal.image}
                  alt={goal.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-[400px] flex flex-col justify-end">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                  {/* Icon */}
                  <div className={`inline-flex p-4 bg-gradient-to-br ${goal.color} rounded-2xl mb-4 shadow-lg`}>
                    <div className="text-white">
                      {goal.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {goal.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-200 leading-relaxed opacity-90">
                    {goal.description}
                  </p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
            </div>
          ))}
        </div>
        
        {/* Decorative quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic max-w-3xl mx-auto leading-relaxed">
            "Geleceğimizin her günü, bugünkü aşkımızın bir devamı olacak."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;