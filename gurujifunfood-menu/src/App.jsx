import { useState, useEffect, useRef, useCallback } from 'react';
import { menuData } from './data/menuData';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

export default function App() {
  const [activeId, setActiveId] = useState(menuData[0].id);
  const sectionRefs = useRef({});
  const isManualScrolling = useRef(false);
  const manualScrollTimer = useRef(null);

  // IntersectionObserver scroll-spy
  useEffect(() => {
    const observers = [];

    menuData.forEach((category) => {
      const el = sectionRefs.current[category.id];
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isManualScrolling.current) {
            setActiveId(category.id);
          }
        },
        {
          rootMargin: '-30% 0px -60% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleTabClick = useCallback((id) => {
    // Temporarily disable scroll-spy while we're programmatically scrolling
    isManualScrolling.current = true;
    clearTimeout(manualScrollTimer.current);

    setActiveId(id);

    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Re-enable scroll-spy after animation completes
    manualScrollTimer.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 800);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdf6ec]">
      {/* Constrain to mobile-width on large screens */}
      <div className="max-w-lg mx-auto bg-[#fdf6ec] min-h-screen shadow-2xl relative">
        <Header />

        <CategoryNav activeId={activeId} onTabClick={handleTabClick} />

        <main className="pb-4">
          {menuData.map((category) => (
            <MenuSection
              key={category.id}
              category={category}
              ref={(el) => { sectionRefs.current[category.id] = el; }}
            />
          ))}
        </main>

        <Footer />
      </div>
    </div>
  );
}
