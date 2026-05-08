export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  unit: string;
  desc: string;
};

export const CATEGORIES = [
  "Cleaning Chemicals",
  "Housekeeping Tools",
  "Garbage Bags",
  "Tissue Products",
  "Washroom Supplies",
  "Office Stationery",
  "Pantry Supplies",
  "Packaging Materials",
  "Safety Products",
] as const;

export type ProductCategory = (typeof CATEGORIES)[number];

export const PRODUCTS: Product[] = [
  // Cleaning Chemicals
  { id: "cc-01", name: "Floor Cleaner Concentrate (5L)", category: "Cleaning Chemicals", unit: "Can", desc: "Industrial-grade neutral pH floor cleaner." },
  { id: "cc-02", name: "Glass Cleaner (500ml)", category: "Cleaning Chemicals", unit: "Bottle", desc: "Streak-free formula with trigger spray." },
  { id: "cc-03", name: "Toilet Bowl Cleaner (1L)", category: "Cleaning Chemicals", unit: "Bottle", desc: "Disinfectant acid cleaner for sanitaryware." },
  { id: "cc-04", name: "Disinfectant Liquid (5L)", category: "Cleaning Chemicals", unit: "Can", desc: "Hospital-grade surface disinfectant." },
  { id: "cc-05", name: "Liquid Hand Wash (5L)", category: "Cleaning Chemicals", unit: "Can", desc: "Refill pack for office washrooms." },
  { id: "cc-06", name: "Dishwash Liquid (5L)", category: "Cleaning Chemicals", unit: "Can", desc: "Pantry-grade degreasing dishwash." },

  // Housekeeping Tools
  { id: "hk-01", name: "Microfiber Mop with Bucket Set", category: "Housekeeping Tools", unit: "Set", desc: "Heavy-duty wringer mop set." },
  { id: "hk-02", name: "Microfiber Cleaning Cloth", category: "Housekeeping Tools", unit: "Pack of 10", desc: "Lint-free, multi-surface dusting." },
  { id: "hk-03", name: "Soft Broom (Premium)", category: "Housekeeping Tools", unit: "Piece", desc: "Long handle, dust-grip bristles." },
  { id: "hk-04", name: "Wet Floor Caution Sign", category: "Housekeeping Tools", unit: "Piece", desc: "Bilingual safety signage." },
  { id: "hk-05", name: "Dust Pan with Long Handle", category: "Housekeeping Tools", unit: "Piece", desc: "Standing dustpan, ergonomic." },

  // Garbage Bags
  { id: "gb-01", name: "Black Garbage Bag (Medium)", category: "Garbage Bags", unit: "Roll of 30", desc: "19x21 inch, 51 micron." },
  { id: "gb-02", name: "Black Garbage Bag (Large)", category: "Garbage Bags", unit: "Roll of 30", desc: "24x32 inch, 65 micron." },
  { id: "gb-03", name: "Biomedical Yellow Bags", category: "Garbage Bags", unit: "Roll of 50", desc: "Color-coded waste segregation." },
  { id: "gb-04", name: "Biodegradable Bin Liner", category: "Garbage Bags", unit: "Roll of 30", desc: "Compostable, eco-compliant." },

  // Tissue Products
  { id: "tp-01", name: "M-Fold Hand Towels", category: "Tissue Products", unit: "Bundle of 150", desc: "2-ply, dispenser-fit." },
  { id: "tp-02", name: "Toilet Roll (2-Ply)", category: "Tissue Products", unit: "Pack of 10", desc: "Premium soft tissue roll." },
  { id: "tp-03", name: "Facial Tissue Box (200 pulls)", category: "Tissue Products", unit: "Box", desc: "Pantry & meeting room standard." },
  { id: "tp-04", name: "Jumbo Roll Tissue", category: "Tissue Products", unit: "Roll", desc: "For high-traffic washrooms." },

  // Washroom
  { id: "wr-01", name: "Soap Dispenser (Manual)", category: "Washroom Supplies", unit: "Piece", desc: "Wall-mount, 500ml capacity." },
  { id: "wr-02", name: "Automatic Air Freshener", category: "Washroom Supplies", unit: "Set", desc: "Programmable spray with refill." },
  { id: "wr-03", name: "Urinal Screen with Block", category: "Washroom Supplies", unit: "Piece", desc: "Deodorising mesh screen." },
  { id: "wr-04", name: "Naphthalene Balls (1kg)", category: "Washroom Supplies", unit: "Pack", desc: "Premium grade." },

  // Office Stationery
  { id: "os-01", name: "A4 Copier Paper (75 GSM)", category: "Office Stationery", unit: "Ream of 500", desc: "JK / Trident, 80% brightness." },
  { id: "os-02", name: "Ball Pen (Blue)", category: "Office Stationery", unit: "Pack of 10", desc: "Smooth-flow office pens." },
  { id: "os-03", name: "Sticky Notes (3x3 inch)", category: "Office Stationery", unit: "Pack of 5", desc: "Repositionable, 100 sheets each." },
  { id: "os-04", name: "Box File (Lever Arch)", category: "Office Stationery", unit: "Piece", desc: "Heavy-duty document storage." },
  { id: "os-05", name: "Stapler with Pins", category: "Office Stationery", unit: "Set", desc: "Medium duty + 1000 pins." },

  // Pantry
  { id: "pt-01", name: "Tea Bags (Assam Black)", category: "Pantry Supplies", unit: "Pack of 100", desc: "Premium CTC, individually wrapped." },
  { id: "pt-02", name: "Filter Coffee Powder (1kg)", category: "Pantry Supplies", unit: "Pack", desc: "South Indian filter blend." },
  { id: "pt-03", name: "Disposable Paper Cups (150ml)", category: "Pantry Supplies", unit: "Pack of 100", desc: "Food-grade for hot beverages." },
  { id: "pt-04", name: "Sugar Sachets", category: "Pantry Supplies", unit: "Box of 500", desc: "5g portion packs." },
  { id: "pt-05", name: "Bottled Drinking Water (1L)", category: "Pantry Supplies", unit: "Case of 12", desc: "BIS-certified packaged water." },

  // Packaging
  { id: "pk-01", name: "BOPP Tape (2 inch)", category: "Packaging Materials", unit: "Roll of 6", desc: "Transparent, high-strength." },
  { id: "pk-02", name: "Bubble Wrap Roll", category: "Packaging Materials", unit: "Roll", desc: "Standard 1m x 50m." },
  { id: "pk-03", name: "Corrugated Boxes (Medium)", category: "Packaging Materials", unit: "Bundle of 25", desc: "3-ply, 12x10x8 inch." },
  { id: "pk-04", name: "Stretch Film", category: "Packaging Materials", unit: "Roll", desc: "Pallet wrap, industrial grade." },

  // Safety
  { id: "sf-01", name: "Nitrile Hand Gloves", category: "Safety Products", unit: "Box of 100", desc: "Powder-free, multi-purpose." },
  { id: "sf-02", name: "3-Ply Surgical Masks", category: "Safety Products", unit: "Box of 50", desc: "ISO-certified PPE." },
  { id: "sf-03", name: "Safety Goggles", category: "Safety Products", unit: "Piece", desc: "Anti-fog, splash protection." },
  { id: "sf-04", name: "First Aid Kit (Office)", category: "Safety Products", unit: "Kit", desc: "30-component starter kit." },
];
