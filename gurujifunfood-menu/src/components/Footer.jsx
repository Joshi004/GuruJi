import { restaurantInfo } from '../data/menuData';

const policyIcons = ['📦', '🚫', '🥣', '🚫', '⏱️'];

export default function Footer() {
  return (
    <footer className="mx-4 mb-8 mt-4">
      {/* Notes card */}
      <div className="rounded-2xl bg-stone-800 text-stone-200 px-4 py-5 shadow-lg">
        <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
          <span>📋</span> Please Note
        </h3>
        <ul className="space-y-2">
          {restaurantInfo.notes.map((note, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-stone-300">
              <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-400" />
              {note}
            </li>
          ))}
        </ul>
      </div>

      {/* Legend */}
      <div className="mt-3 flex items-center justify-center gap-4 text-xs text-stone-500">
        <span className="flex items-center gap-1.5">
          <span className="w-3.5 h-3.5 rounded-sm border-2 border-green-600 flex items-center justify-center flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600 block" />
          </span>
          Pure Veg
        </span>
        <span className="flex items-center gap-1.5">
          <span>🌶️</span>
          Spicy
        </span>
      </div>

      {/* Brand footer */}
      <p className="mt-4 text-center text-xs text-stone-400">
        © {new Date().getFullYear()} {restaurantInfo.name}
      </p>
    </footer>
  );
}
