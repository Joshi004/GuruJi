import { useEffect, useRef } from 'react';
import { menuData } from '../data/menuData';

export default function CategoryNav({ activeId, onTabClick }) {
  const navRef = useRef(null);
  const activeButtonRef = useRef(null);

  // Auto-scroll the nav to keep active tab visible
  useEffect(() => {
    if (activeButtonRef.current && navRef.current) {
      const nav = navRef.current;
      const btn = activeButtonRef.current;
      const navLeft = nav.getBoundingClientRect().left;
      const btnLeft = btn.getBoundingClientRect().left;
      const scrollTarget = nav.scrollLeft + (btnLeft - navLeft) - nav.clientWidth / 2 + btn.clientWidth / 2;
      nav.scrollTo({ left: scrollTarget, behavior: 'smooth' });
    }
  }, [activeId]);

  return (
    <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md shadow-sm border-b border-orange-100">
      <div
        ref={navRef}
        className="nav-scroll flex gap-2 px-3 py-2.5 overflow-x-auto"
        role="tablist"
        aria-label="Menu categories"
      >
        {menuData.map((category) => {
          const isActive = category.id === activeId;
          return (
            <button
              key={category.id}
              ref={isActive ? activeButtonRef : null}
              role="tab"
              aria-selected={isActive}
              onClick={() => onTabClick(category.id)}
              className={[
                'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 border',
                isActive
                  ? 'bg-red-700 text-white border-red-700 shadow-md shadow-red-200'
                  : 'bg-transparent text-stone-600 border-stone-200 hover:border-red-300 hover:text-red-700',
              ].join(' ')}
            >
              <span className="text-sm leading-none">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
