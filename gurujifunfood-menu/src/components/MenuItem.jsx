export default function MenuItem({ item }) {
  return (
    <div className="flex items-start justify-between gap-3 py-3 border-b border-stone-100 last:border-0 group">
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-1.5 flex-wrap">
          {/* Veg indicator dot */}
          <span className="mt-0.5 flex-shrink-0 w-3.5 h-3.5 rounded-sm border-2 border-green-600 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600 block" />
          </span>

          <span className="text-sm font-medium text-stone-800 leading-snug">
            {item.name}
          </span>

          {item.spicy && (
            <span className="text-sm leading-none" title="Spicy" role="img" aria-label="spicy">
              🌶️
            </span>
          )}
        </div>

        {/* Sub-note (e.g. "Onion, Cupsicum, Tomato") */}
        {item.note && (
          <p className="mt-0.5 ml-5 text-xs text-stone-400 italic">{item.note}</p>
        )}

        {/* Quantity chip */}
        {item.qty && (
          <span className="mt-1 ml-5 inline-block text-xs bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded font-medium">
            {item.qty}
          </span>
        )}
      </div>

      {/* Price */}
      <span className="flex-shrink-0 text-sm font-bold text-red-700 tabular-nums">
        ₹{item.price}
      </span>
    </div>
  );
}
