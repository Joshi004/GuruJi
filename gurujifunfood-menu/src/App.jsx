import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { menuData, SHEET_CSV_URL, fetchMenuFromSheet } from './data/menuData';
import { fuzzyMatch } from './utils/fuzzySearch';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import SearchBar from './components/SearchBar';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import MenuItem from './components/MenuItem';

export default function App() {
  // Start with static data instantly — no loading state shown to the user
  const [liveMenu, setLiveMenu] = useState(menuData);
  const [activeId, setActiveId] = useState(menuData[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRefs = useRef({});
  const isManualScrolling = useRef(false);
  const manualScrollTimer = useRef(null);

  // Background fetch from Google Sheet — silently falls back to static data on any error
  useEffect(() => {
    if (!SHEET_CSV_URL) return;

    fetchMenuFromSheet(SHEET_CSV_URL)
      .then((sheetMenu) => {
        if (sheetMenu && sheetMenu.length > 0) {
          setLiveMenu(sheetMenu);
        }
      })
      .catch(() => {
        // Static fallback already showing — nothing to do
      });
  }, []);

  // IntersectionObserver scroll-spy — re-runs when liveMenu changes
  useEffect(() => {
    const observers = [];

    liveMenu.forEach((category) => {
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
  }, [liveMenu]);

  // Flat list of fuzzy-matching items across all categories, sorted by relevance
  const searchResults = useMemo(() => {
    const q = searchQuery.trim();
    if (!q) return [];
    const results = [];
    liveMenu.forEach((category) => {
      const allItems = category.subsections
        ? category.subsections.flatMap((s) => s.items)
        : category.items || [];
      allItems.forEach((item) => {
        const { match, score } = fuzzyMatch(q, item.name);
        if (match) {
          results.push({ ...item, _category: category.name, _score: score });
        }
      });
    });
    // Best matches first
    results.sort((a, b) => b._score - a._score);
    return results;
  }, [searchQuery, liveMenu]);

  const handleTabClick = useCallback((id) => {
    isManualScrolling.current = true;
    clearTimeout(manualScrollTimer.current);

    setActiveId(id);

    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

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

        <SearchBar query={searchQuery} onChange={setSearchQuery} />

        <main className="pb-4">
          {searchQuery.trim() ? (
            // Search results view
            <div className="mx-4 mt-3">
              {searchResults.length === 0 ? (
                <div className="text-center py-12 text-stone-400">
                  <p className="text-4xl mb-2">🔍</p>
                  <p className="text-sm font-medium">No items found for "{searchQuery}"</p>
                </div>
              ) : (
                <>
                  <p className="text-xs text-stone-400 mb-2 font-medium">
                    {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                  </p>
                  <div className="bg-white rounded-2xl shadow-sm border border-stone-100 px-4 py-1">
                    {searchResults.map((item, i) => (
                      <div key={i}>
                        <p className="text-xs text-orange-500 font-semibold mt-2 -mb-1">{item._category}</p>
                        <MenuItem item={item} />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            // Normal menu view
            liveMenu.map((category) => (
              <MenuSection
                key={category.id}
                category={category}
                ref={(el) => { sectionRefs.current[category.id] = el; }}
              />
            ))
          )}
        </main>

        <Footer />
      </div>

      <BackToTop />
    </div>
  );
}
