import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-pink-500/20 bg-gradient-to-t from-gray-900 to-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-pink-500 fill-current animate-pulse" />
          <span className="text-lg font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Aşkımızın Hikayesi
          </span>
          <Heart className="w-5 h-5 text-pink-500 fill-current animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
          Bu site, sonsuz aşkımızın bir anıtı. Her pixel sevgiyle kodlandı.
        </p>
        
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>Aşkla ve özenle hazırlandı</span>
          <Heart className="w-4 h-4 text-pink-500 fill-current" />
          <span>© 2024</span>
        </div>
        
        {/* Decorative hearts */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex gap-2">
            <Heart className="w-3 h-3 text-pink-500/30 fill-current animate-pulse" />
            <Heart className="w-3 h-3 text-pink-500/50 fill-current animate-pulse" style={{ animationDelay: '0.5s' }} />
            <Heart className="w-3 h-3 text-pink-500/30 fill-current animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;