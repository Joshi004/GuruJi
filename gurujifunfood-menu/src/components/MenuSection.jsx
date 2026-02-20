import { forwardRef, useState, useEffect, useRef } from 'react';
import MenuItem from './MenuItem';
import { checkAvailability } from '../data/menuData';

function Callout({ text }) {
  return (
    <div className="mt-2 mb-1 flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
      <span className="text-amber-500 text-sm">✦</span>
      <p className="text-xs text-amber-700 font-medium">{text}</p>
    </div>
  );
}

function ComboCallout({ callout }) {
  return (
    <div className="mt-3 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 border border-orange-200 p-3">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-xs font-bold text-red-700 uppercase tracking-wide">{callout.text}</p>
          <p className="mt-0.5 text-xs text-stone-500">{callout.description}</p>
        </div>
        <span className="flex-shrink-0 w-14 text-right text-sm font-bold text-red-700 tabular-nums">₹{callout.price}</span>
      </div>
    </div>
  );
}

function SubsectionBlock({ sub }) {
  return (
    <div className="mt-4 first:mt-0">
      <h4 className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1 pb-1 border-b border-orange-100">
        {sub.title}
      </h4>
      {sub.items.map((item, i) => (
        <MenuItem key={i} item={item} />
      ))}
      {sub.callout && <Callout text={sub.callout} />}
    </div>
  );
}

function AvailabilityBanner({ label }) {
  return (
    <div className="mx-4 mb-1 flex items-center gap-1.5 text-stone-400">
      <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}

const MenuSection = forwardRef(function MenuSection({ category, collapsed, onToggle }, ref) {
  const hasSubsections = Boolean(category.subsections);
  const [isVisible, setIsVisible] = useState(false);
  const innerRef = useRef(null);

  const availability = checkAvailability(category.availabilityStart, category.availabilityEnd);
  const isUnavailable = !availability.available;

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={(el) => {
        innerRef.current = el;
        if (typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      id={category.id}
      className={`scroll-mt-20 ${isVisible ? 'section-visible' : 'section-hidden'}`}
    >
      {/* Section header — clickable to collapse/expand */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left px-4 pt-5 pb-2 flex items-center gap-3 focus:outline-none"
        aria-expanded={!collapsed}
        aria-controls={`section-content-${category.id}`}
      >
        <span className="text-2xl" role="img" aria-label={category.name}>
          {category.icon}
        </span>
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-extrabold text-stone-900 leading-tight" style={{ fontFamily: 'var(--font-family-display)' }}>
            {category.fullName || category.name}
          </h2>
          {category.subtitle && (
            <p className="text-xs text-orange-600 font-medium">{category.subtitle}</p>
          )}
        </div>
        {/* Accent bar */}
        <div className="h-1 w-8 rounded-full bg-gradient-to-r from-red-600 to-orange-400 flex-shrink-0" />
        {/* Chevron */}
        <svg
          className={`w-4 h-4 text-stone-400 flex-shrink-0 transition-transform duration-300 ${collapsed ? '' : 'rotate-180'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      {/* Availability banner — shown outside the collapsible so it's always visible */}
      {isUnavailable && <AvailabilityBanner label={availability.label} />}

      {/* Collapsible content */}
      <div
        id={`section-content-${category.id}`}
        className={`section-content${collapsed ? ' collapsed' : ''}`}
      >
        <div>
          {/* Content card */}
          <div className={`mx-4 mb-2 bg-white rounded-2xl shadow-sm border border-stone-100 px-4 py-1 transition-opacity duration-300 ${isUnavailable ? 'opacity-60' : 'opacity-100'}`}>
            {hasSubsections ? (
              category.subsections.map((sub, i) => (
                <SubsectionBlock key={i} sub={sub} />
              ))
            ) : (
              category.items.map((item, i) => (
                <MenuItem key={i} item={item} />
              ))
            )}

            {/* Section-level callout (e.g. SI Rice combo) */}
            {category.callout && <ComboCallout callout={category.callout} />}
          </div>
        </div>
      </div>
    </section>
  );
});

export default MenuSection;
