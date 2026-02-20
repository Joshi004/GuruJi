export const menuData = [
  {
    id: "breakfast",
    name: "Breakfast",
    icon: "🍳",
    subtitle: "Served 8:30 AM – 11:00 Noon",
    items: [
      { name: "Aloo Paratha with Curd", qty: "2 Pc.", price: 100, popular: true },
      { name: "Pyaaz Paratha", qty: "2 Pc.", price: 100 },
      { name: "Gobhi Paratha", qty: "2 Pc.", price: 100 },
      { name: "Aloo Pyaaz Paratha", qty: "2 Pc.", price: 110 },
      { name: "Aloo Gobhi Paratha", qty: "2 Pc.", price: 110 },
      { name: "Paneer Paratha", qty: "2 Pc.", price: 130, popular: true },
      { name: "Puri Bhaji", qty: "4 Pc.", price: 100 },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    icon: "☕",
    subtitle: "Hot & Cold",
    items: [
      { name: "Tea", price: 20 },
      { name: "Masala Tea", price: 30, popular: true },
      { name: "Dudh (Milk)", price: 50 },
      { name: "Lemon Tea", price: 25 },
      { name: "Black Tea", price: 20 },
      { name: "Black Coffee", price: 20 },
      { name: "Coffee", price: 30 },
      { name: "Cold Coffee", price: 80, popular: true },
      { name: "Cold Coffee with Ice Cream", price: 100 },
      { name: "Plain Butter Milk (Chhachh)", price: 20 },
      { name: "Masala Butter Milk (Chhachh)", price: 30 },
      { name: "Sweet Lassi", price: 70, popular: true },
      { name: "Banana Shake", price: 100 },
      { name: "Chocolate Shake", price: 80 },
    ],
  },
  {
    id: "toast",
    name: "Toast",
    icon: "🍞",
    items: [
      { name: "Plain Toast", price: 50 },
      { name: "Bread Butter", price: 70 },
      { name: "Jam Bread", price: 70 },
      { name: "Butter Toast", price: 90 },
      { name: "Cheese Tomato Toast", price: 130, popular: true },
      { name: "Aloo Masala Toast", price: 100 },
      { name: "Paneer Masala Toast", price: 150 },
      { name: "Paneer Masala Cheese Toast", price: 170 },
    ],
  },
  {
    id: "sandwich",
    name: "Sandwich",
    icon: "🥪",
    items: [
      { name: "Vegetable Sandwich", price: 70 },
      { name: "Vegetable Cheese Sandwich", price: 100 },
      { name: "Cheese Sandwich", price: 90 },
      { name: "Club Sandwich", price: 150 },
      { name: "Vegetable Grilled Sandwich", price: 100 },
      { name: "Cheese Grilled Sandwich", price: 120 },
      { name: "Vegetable Cheese Grilled Sandwich", price: 130 },
      { name: "Club Grilled Sandwich", price: 200, popular: true },
    ],
  },
  {
    id: "chinese",
    name: "Chinese",
    icon: "🍜",
    subsections: [
      {
        title: "Noodles & Fried Rice",
        items: [
          { name: "Vegetable Noodle", price: 110 },
          { name: "Vegetable Paneer Noodle", price: 160 },
          { name: "Schezwan Noodle", price: 130, spicy: true },
          { name: "Hakka Noodle", price: 170, popular: true },
          { name: "Singaporean Noodle", price: 180 },
          { name: "Vegetable Fried Rice", price: 120 },
          { name: "Vegetable Paneer Fried Rice", price: 170 },
          { name: "Schezwan Fried Rice", price: 140, spicy: true },
          { name: "Mushroom Fried Rice", price: 150 },
          { name: "Mushroom Paneer Fried Rice", price: 200 },
          { name: "Vegetable Fried Rice + Manchurian", price: 200 },
          { name: "Vegetable Manchurian (Dry)", price: 150 },
          { name: "Vegetable Manchurian (Gravy)", price: 170 },
          { name: "Vegetable Spring Roll", price: 110 },
        ],
      },
      {
        title: "Starters & Sides",
        items: [
          { name: "Chilli Paneer (Dry)", price: 200, popular: true },
          { name: "Chilli Paneer (Gravy)", price: 220 },
          { name: "Chilli Potato", price: 160 },
          { name: "Honey Chilli Potato", price: 200, popular: true },
          { name: "Vegetable Crispy", price: 170 },
        ],
      },
    ],
  },
  {
    id: "south-indian",
    name: "South Indian",
    icon: "🫓",
    subsections: [
      {
        title: "Dosa",
        items: [
          { name: "Plain Dosa", price: 80 },
          { name: "Ghee Dosa", price: 150 },
          { name: "Ghee Podi Dosa", price: 180 },
          { name: "Plain Butter Dosa", price: 90 },
          { name: "Paper Plain Dosa", price: 120 },
          { name: "Paper Plain Butter Dosa", price: 130 },
          { name: "Mysore Plain Dosa", price: 100, spicy: true },
          { name: "Mysore Plain Butter Dosa", price: 110, spicy: true },
          { name: "Cheese Dosa (Processed Cheese)", price: 150 },
          { name: "Cheese Butter Dosa", price: 160 },
          { name: "Cheese Masala Dosa", price: 190 },
          { name: "Cheese Butter Masala Dosa", price: 200, popular: true },
          { name: "Masala Dosa", price: 120, popular: true },
          { name: "Ghee Podi Masala Dosa", price: 210 },
          { name: "Butter Masala Dosa", price: 130 },
          { name: "Paneer Masala Dosa", price: 150 },
          { name: "Paneer Butter Masala Dosa", price: 160 },
          { name: "Onion Dosa", price: 120 },
          { name: "Onion Butter Dosa", price: 130 },
          { name: "Onion Masala Dosa", price: 150 },
          { name: "Onion Butter Masala Dosa", price: 160 },
          { name: "Onion Paneer Masala Dosa", price: 190 },
          { name: "Onion Butter Paneer Masala Dosa", price: 200 },
          { name: "Paneer Dosa", price: 220 },
          { name: "Paneer Butter Dosa", price: 230 },
          { name: "Mysore Masala Dosa", price: 130, spicy: true, popular: true },
          { name: "Mysore Butter Masala Dosa", price: 140, spicy: true },
          { name: "Mysore Onion Masala Dosa", price: 170, spicy: true },
          { name: "Mysore Onion Butter Masala Dosa", price: 180, spicy: true },
          { name: "Mysore Paneer Dosa", price: 240, spicy: true },
          { name: "Mysore Paneer Butter Dosa", price: 250, spicy: true },
        ],
      },
    ],
  },
  {
    id: "uttappam",
    name: "Uttappam",
    icon: "🥞",
    items: [
      { name: "Plain Uttappam", price: 80 },
      { name: "Onion Uttappam", price: 110 },
      { name: "Tomato Uttappam", price: 110 },
      { name: "Cupsicum Uttappam", price: 110 },
      { name: "Onion Tomato Uttappam", price: 130 },
      { name: "Vegetable Uttappam", note: "Onion, Cupsicum, Tomato", price: 140 },
      { name: "Vegetable Paneer Uttappam", price: 180 },
      { name: "Paneer Uttappam", price: 200 },
      { name: "Mushroom Uttappam", price: 140 },
      { name: "Corn Uttappam", price: 160 },
    ],
  },
  {
    id: "idli-vada",
    name: "Idli & Vada",
    icon: "🍚",
    items: [
      { name: "Idli Sambhar", qty: "2 Pcs.", price: 80 },
      { name: "Ghee Podi Idli", price: 120 },
      { name: "Fried Idli", qty: "2 Pcs.", price: 100 },
      { name: "Vada Sambhar", qty: "2 Pcs.", price: 100 },
    ],
  },
  {
    id: "south-indian-rice",
    name: "SI Rice",
    icon: "🍛",
    fullName: "South Indian Rice",
    items: [
      { name: "Sambhar Rice", price: 120 },
      { name: "Curd Rice (Thayir Sadam)", price: 140 },
    ],
    callout: {
      type: "combo",
      text: "South Indian Combo",
      description: "1 Mini Dosa + 1 Mini Uttappam + 1 Pc. Idli + 1 Pc. Vada",
      price: 240,
    },
  },
  {
    id: "pizza-burger",
    name: "Pizza & Burger",
    icon: "🍕",
    subsections: [
      {
        title: "Burgers",
        items: [
          { name: "Vegetable Burger", price: 60 },
          { name: "Cheese Burger", price: 90 },
        ],
      },
      {
        title: "Pizza",
        items: [
          { name: "Vegetable Pizza", note: "Onion, Cupsicum, Tomato", price: 170 },
          { name: "Onion Pizza", price: 150 },
          { name: "Tomato Pizza", price: 150 },
          { name: "Capsicum Pizza", price: 150 },
          { name: "Margherita Pizza", price: 170, popular: true },
          { name: "Italian Pizza", price: 200 },
          { name: "Paneer Pizza", price: 230 },
          { name: "Corn Pizza", price: 200 },
          { name: "Corn Vegetable Pizza", price: 220 },
          { name: "Mushroom Pizza", price: 200 },
          { name: "Mushroom Vegetable Pizza", price: 220 },
        ],
        callout: "Add Extra Cheese @ ₹ 40",
      },
    ],
  },
  {
    id: "snacks",
    name: "Snacks",
    icon: "🍟",
    items: [
      { name: "French Fries", price: 110 },
      { name: "Pav Bhaji", price: 100, popular: true },
      { name: "Extra Pav", price: 20 },
    ],
  },
];

// ---------------------------------------------------------------------------
// Google Sheets CSV integration
//
// CSV columns (row 1 = header):
//   category_id, category_name, category_icon, category_subtitle,
//   subsection, item_name, qty, price, spicy, note, callout
//
// Paste your published sheet URL below after setting up the sheet.
// Leave as empty string to always use the static fallback above.
// ---------------------------------------------------------------------------
export const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSfXJuTFoWBTDX71_GtjIBmxIL9vuwL_wAWcoY8BYXv5Xk6EXBcdPaGiWjS_4I0351b5nZ63mwI6FgF/pub?gid=0&single=true&output=csv';

/**
 * Parses an array of CSV row objects (keyed by header name) into the
 * same nested structure that the existing components consume.
 */
export function parseSheetRows(rows) {
  const categoryMap = new Map();

  rows.forEach((row) => {
    const id = row.category_id?.trim();
    if (!id) return;

    if (!categoryMap.has(id)) {
      categoryMap.set(id, {
        id,
        name: row.category_name?.trim() || id,
        icon: row.category_icon?.trim() || '',
        subtitle: row.category_subtitle?.trim() || undefined,
        // subsections keyed by title, built up as we go
        _subsectionMap: new Map(),
        items: [],
      });
    }

    const cat = categoryMap.get(id);
    const subsectionTitle = row.subsection?.trim();

    const item = {
      name: row.item_name?.trim(),
      price: Number(row.price) || 0,
      spicy: row.spicy?.trim().toLowerCase() === 'true',
      popular: row.popular?.trim().toLowerCase() === 'true',
      qty: row.qty?.trim() || undefined,
      note: row.note?.trim() || undefined,
    };

    // Remove undefined keys so components don't receive empty props
    Object.keys(item).forEach((k) => item[k] === undefined && delete item[k]);

    if (subsectionTitle) {
      if (!cat._subsectionMap.has(subsectionTitle)) {
        cat._subsectionMap.set(subsectionTitle, { title: subsectionTitle, items: [] });
      }
      cat._subsectionMap.get(subsectionTitle).items.push(item);
    } else {
      cat.items.push(item);
    }

    // Handle section-level callout encoded as "text|description|price"
    // stored on the last row of a category in the callout column
    const calloutRaw = row.callout?.trim();
    if (calloutRaw && calloutRaw.includes('|')) {
      const [text, description, price] = calloutRaw.split('|');
      cat.callout = { type: 'combo', text, description, price: Number(price) };
    } else if (calloutRaw && !calloutRaw.includes('|')) {
      // Subsection-level plain text callout (e.g. "Add Extra Cheese @ ₹ 40")
      if (subsectionTitle && cat._subsectionMap.has(subsectionTitle)) {
        cat._subsectionMap.get(subsectionTitle).callout = calloutRaw;
      }
    }
  });

  // Convert map to final array, attach subsections or items
  return Array.from(categoryMap.values()).map((cat) => {
    const { _subsectionMap, ...rest } = cat;
    if (_subsectionMap.size > 0) {
      return { ...rest, subsections: Array.from(_subsectionMap.values()) };
    }
    return rest;
  });
}

/**
 * Parses a raw CSV string into an array of objects keyed by header row.
 * Handles quoted fields containing commas.
 */
function parseCSV(text) {
  const lines = text.trim().split('\n');
  const headers = lines[0].split(',').map((h) => h.trim().replace(/^"|"$/g, ''));

  return lines.slice(1).map((line) => {
    const values = [];
    let current = '';
    let insideQuote = false;

    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        insideQuote = !insideQuote;
      } else if (ch === ',' && !insideQuote) {
        values.push(current.trim());
        current = '';
      } else {
        current += ch;
      }
    }
    values.push(current.trim());

    return headers.reduce((obj, header, idx) => {
      obj[header] = values[idx] ?? '';
      return obj;
    }, {});
  });
}

/**
 * Fetches the published Google Sheet CSV URL and returns parsed menuData.
 * Throws on network/parse errors so the caller can fall back to static data.
 */
export async function fetchMenuFromSheet(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Sheet fetch failed: ${response.status}`);
  const text = await response.text();
  const rows = parseCSV(text);
  return parseSheetRows(rows);
}

export const restaurantInfo = {
  name: "GuruJi Fun Food",
  tagline: "Authentic Flavours, Joyful Bites",
  notes: [
    "Items are subject to availability.",
    "Packing Charges: ₹ 20/- Extra.",
    "Outside food is not allowed.",
    "After one bowl, Sambar & Chutney will be charged.",
    "Order once placed cannot be cancelled.",
    "Do not waste time sitting idle.",
  ],
};
