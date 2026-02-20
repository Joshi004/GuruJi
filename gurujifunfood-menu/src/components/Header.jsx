import { restaurantInfo } from '../data/menuData';

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-red-800 via-red-700 to-orange-600">
      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px),
                            radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px),
                            radial-gradient(circle at 60% 80%, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative px-5 py-8 text-center">
        {/* Logo mark */}
        <div className="inline-flex items-center justify-center w-16 h-16 mb-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
          <span className="text-3xl" role="img" aria-label="food">🍽️</span>
        </div>

        {/* Restaurant name */}
        <h1 className="text-3xl font-black tracking-tight text-white drop-shadow-md leading-tight">
          GuruJi
          <span className="block text-amber-300 text-4xl italic font-extrabold tracking-wide">
            Fun Food
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-2 text-sm text-white/80 tracking-widest uppercase font-medium">
          {restaurantInfo.tagline}
        </p>

        {/* Decorative divider */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="h-px w-12 bg-amber-300/60" />
          <span className="text-amber-300 text-xs">✦</span>
          <span className="h-px w-12 bg-amber-300/60" />
        </div>
      </div>
    </header>
  );
}
