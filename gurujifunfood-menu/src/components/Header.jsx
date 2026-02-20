import { useState, useEffect } from 'react';
import { restaurantInfo } from '../data/menuData';

const BG_IMAGE_URL = '/GuruJi/background.png';

export default function Header() {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImgLoaded(true);
    img.onerror = () => setImgLoaded(false);
    img.src = BG_IMAGE_URL;
  }, []);

  const backgroundStyle = imgLoaded
    ? {
        backgroundColor: '#4a2010',
        backgroundImage: `url(${BG_IMAGE_URL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {
        backgroundImage: 'linear-gradient(135deg, #4a2010 0%, #8b4513 40%, #6d3411 70%, #3e1a09 100%)',
      };

  return (
    <header
      className="relative overflow-hidden"
      style={backgroundStyle}
    >
      {/* Dark overlay so white text stays readable over the wood texture */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Warm amber vignette at the bottom to blend into the cream page background */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/30 to-transparent" />

      <div className="relative px-5 py-8 text-center">
        {/* Logo mark */}
        <div className="inline-flex items-center justify-center w-16 h-16 mb-3 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 shadow-lg">
          <span className="text-3xl" role="img" aria-label="food">🍽️</span>
        </div>

        {/* Restaurant name */}
        <h1 className="text-3xl font-black tracking-tight text-white drop-shadow-lg leading-tight" style={{ fontFamily: 'var(--font-family-display)' }}>
          GuruJi
          <span className="block text-amber-300 text-4xl italic font-extrabold tracking-wide drop-shadow-md">
            Fun Food
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-2 text-sm text-white/80 tracking-widest uppercase font-medium drop-shadow">
          {restaurantInfo.tagline}
        </p>

        {/* Decorative divider */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="h-px w-12 bg-amber-300/70" />
          <span className="text-amber-300 text-xs">✦</span>
          <span className="h-px w-12 bg-amber-300/70" />
        </div>
      </div>
    </header>
  );
}
