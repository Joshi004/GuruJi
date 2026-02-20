export default function SearchBar({ query, onChange }) {
  return (
    <div className="px-4 py-2.5 bg-white border-b border-stone-100 sticky top-[52px] z-20">
      <div className="relative flex items-center">
        {/* Search icon */}
        <svg
          className="absolute left-3 w-4 h-4 text-stone-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
          />
        </svg>

        <input
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search menu items..."
          className="w-full pl-9 pr-9 py-2 text-sm bg-stone-50 border border-stone-200 rounded-xl text-stone-800 placeholder-stone-400 focus:outline-none focus:border-red-400 focus:bg-white transition-colors"
          aria-label="Search menu items"
        />

        {/* Clear button — only shown when there is a query */}
        {query && (
          <button
            onClick={() => onChange('')}
            className="absolute right-3 text-stone-400 hover:text-stone-600 transition-colors"
            aria-label="Clear search"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
