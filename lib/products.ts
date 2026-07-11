export type ScentFamily =
  | "Floral"
  | "Woody"
  | "Fresh"
  | "Oriental"
  | "Citrus"
  | "Gourmand"
  | "Earthy"
  | "Aquatic";

export type ProductType =
  | "Diffuser"
  | "Concrete Pot Candle"
  | "Concrete Candle Refill"
  | "Soy Wax Candle";

export type ProductSize = {
  label: string;
  volume: string;
  price: number;
  sku: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  type: ProductType;
  scentFamily: ScentFamily;
  scentNotes?: {
    top: string[];
    heart: string[];
    base: string[];
  };
  description: string;
  story: string;
  sizes: ProductSize[];
  image: string;
  hoverImage: string;
  isBestseller: boolean;
  isNew: boolean;
  burnTime?: string;
  scents?: string[];
  stock?: number;
  collection: "Diffusers" | "Concrete Pot Candles" | "Concrete Candle Refills" | "Soy Wax Candles";
};

// ─── DIFFUSERS (7) ────────────────────────────────────────────────────────────

const diffusers: Product[] = [
  {
    id: "d1",
    slug: "eden",
    name: "Eden",
    subtitle: "Gardenia & Musk — captivating, lush & paradisiacal",
    type: "Diffuser",
    scentFamily: "Floral",
    scentNotes: {
      top: ["Blooming Gardenia"],
      heart: ["Delicate Violet"],
      base: ["Soft White Musk"],
    },
    description:
      "Captivating, lush, and paradisiacal. Eden transports you to a sun-drenched sanctuary, pairing the creamy, opulent sweetness of fully bloomed gardenias with a soft, enduring undertone of white musk.",
    story:
      "The vibrant purple elixir is presented in an ornate glass bottle adorned with a white bow, set against a breathtaking stone fountain landscape that overflows with fresh gardenias, delicate violets, and golden warmth under a soft morning glow.",
    sizes: [{ label: "Standard", volume: "125mL", price: 20, sku: "DIF-EDEN-125" }],
    image: "/products/diffusers/eden.jpg",
    hoverImage: "/products/diffusers/eden.jpg",
    isBestseller: true,
    isNew: false,
    stock: 1,
    collection: "Diffusers",
  },
  {
    id: "d2",
    slug: "focus",
    name: "Focus",
    subtitle: "Amber & Oud — centered, thoughtful & luxurious",
    type: "Diffuser",
    scentFamily: "Oriental",
    scentNotes: {
      top: ["Golden Amber"],
      heart: ["Dark Oud Wood"],
      base: ["Smoky Resins", "Honeyed Wood"],
    },
    description:
      "Centered, thoughtful, and luxurious. Focus anchors your space with the warm, resinous glow of golden amber intertwined with the grounding, smoky sophistication of dark oud wood.",
    story:
      "The crystal-clear glass vessel reflects onto dark marble, set against dramatic, misty mountain peaks and raw, honeyed wood.",
    sizes: [{ label: "Standard", volume: "50mL", price: 8, sku: "DIF-FOCUS-50" }],
    image: "/products/diffusers/focus.jpg",
    hoverImage: "/products/diffusers/focus.jpg",
    isBestseller: false,
    isNew: false,
    collection: "Diffusers",
  },
  {
    id: "d3",
    slug: "cool",
    name: "Cool",
    subtitle: "Ocean Memories — sea salt, marine & fresh lemon",
    type: "Diffuser",
    scentFamily: "Aquatic",
    scentNotes: {
      top: ["Fresh Lemon"],
      heart: ["Sea Salt", "Marine Notes"],
      base: ["Coastal Breeze"],
    },
    description:
      "Revitalizing, bright, and breezy. Cool captures the essence of a sun-drenched coastline, blending refreshing marine accords with a sharp, uplifting splash of fresh citrus.",
    story:
      "The clear teal liquid is styled on a wooden dock over white sands and seashells, right beneath exploding, effervescent underwater lemon slices.",
    sizes: [{ label: "Standard", volume: "50mL", price: 8, sku: "DIF-COOL-50" }],
    image: "/products/diffusers/cool.jpg",
    hoverImage: "/products/diffusers/cool.jpg",
    isBestseller: false,
    isNew: true,
    collection: "Diffusers",
  },
  {
    id: "d4",
    slug: "calm",
    name: "Calm",
    subtitle: "Jasmine & Musk — serene, soft & deeply relaxing",
    type: "Diffuser",
    scentFamily: "Floral",
    scentNotes: {
      top: ["Blooming Night Jasmine"],
      heart: ["Jasmine Absolute"],
      base: ["Velvety Clean Musk"],
    },
    description:
      "Serene, soft, and deeply relaxing. Calm combines the intoxicating, ethereal sweetness of blooming night jasmine with a velvety, clean musk base to soothe your senses.",
    story:
      "The regal deep purple formulation is showcased beneath a dreamlike shower of floating white petals, creating an oasis of pure tranquility.",
    sizes: [{ label: "Standard", volume: "50mL", price: 8, sku: "DIF-CALM-50" }],
    image: "/products/diffusers/calm.jpg",
    hoverImage: "/products/diffusers/calm.jpg",
    isBestseller: false,
    isNew: false,
    collection: "Diffusers",
  },
  {
    id: "d5",
    slug: "warmth",
    name: "Warmth",
    subtitle: "Vanilla & Caramel — indulgent & deeply comforting",
    type: "Diffuser",
    scentFamily: "Gourmand",
    scentNotes: {
      top: ["Caramel", "Brown Sugar"],
      heart: ["Vanilla Bean"],
      base: ["Toasted Caramel", "Rich Cream"],
    },
    description:
      "Indulgent, sweet, and deeply comforting. Warmth envelops your space in a rich, buttery embrace, blending the creamy familiarity of vanilla bean with the decadent swirl of deeply toasted caramel.",
    story:
      "The rich golden liquid sits beautifully at the heart of a decadent landscape surrounded by glistening, syrup-drenched sugar cubes, vanilla pods, and cascades of rich cream.",
    sizes: [{ label: "Standard", volume: "50mL", price: 8, sku: "DIF-WARMTH-50" }],
    image: "/products/diffusers/warmth.jpg",
    hoverImage: "/products/diffusers/warmth.png",
    isBestseller: true,
    isNew: false,
    collection: "Diffusers",
  },
  {
    id: "d6",
    slug: "grounded",
    name: "Grounded",
    subtitle: "Oud & Honey — rich, earth-bound & deeply comforting",
    type: "Diffuser",
    scentFamily: "Oriental",
    scentNotes: {
      top: ["Precious Oud Wood"],
      heart: ["Warm Honey"],
      base: ["Desert Amber", "Smoking Wood"],
    },
    description:
      "Rich, earth-bound, and deeply comforting. Grounded pairs the majestic, resinous depth of precious oud wood with the golden, enveloping sweetness of warm honey.",
    story:
      "The deep amber liquid sits beautifully against a desert backdrop of ancient pyramids and smoking wood accents, embodying an age-old sense of stillness.",
    sizes: [{ label: "Standard", volume: "50mL", price: 8, sku: "DIF-GROUNDED-50" }],
    image: "/products/diffusers/grounded.jpg",
    hoverImage: "/products/diffusers/grounded.png",
    isBestseller: false,
    isNew: false,
    collection: "Diffusers",
  },
  {
    id: "d7",
    slug: "confident",
    name: "Confident",
    subtitle: "Sharp & sophisticated — green apple, cinnamon & cardamom",
    type: "Diffuser",
    scentFamily: "Fresh",
    scentNotes: {
      top: ["Tart Green Apple"],
      heart: ["Cinnamon", "Exotic Cardamom"],
      base: ["Warm Spice"],
    },
    description:
      "Sharp, sophisticated, and undeniably modern. Confident opens with a crisp burst of tart green apple before settling into a magnetic, spicy heart of cinnamon and exotic cardamom.",
    story:
      "The striking blue liquid rests underwater surrounded by floating apple slices and warm spices, projecting a clean yet powerful energy.",
    sizes: [{ label: "Standard", volume: "50mL", price: 8, sku: "DIF-CONF-50" }],
    image: "/products/diffusers/confident.jpg",
    hoverImage: "/products/diffusers/confident.png",
    isBestseller: false,
    isNew: true,
    collection: "Diffusers",
  },
];

// ─── CONCRETE POT CANDLES (8) ─────────────────────────────────────────────────

const concretePotCandles: Product[] = [
  {
    id: "cp1",
    slug: "corail",
    name: "Corail",
    subtitle: "Coral-texture sphere — sculptural & organic",
    type: "Concrete Pot Candle",
    scentFamily: "Floral",
    scents: ["Peony", "White Tea", "Rose Absolute", "Soft Musk"],
    description: "A sculptural sphere covered in a coral-like surface that catches light from every angle. Finished in white, Corail is playful, poetic, and utterly unlike anything else on your shelf.",
    story: "Inspired by the tidal pools of the French Riviera, where organic forms and clean white surfaces coexist in quiet harmony.",
    sizes: [{ label: "Standard", volume: "200g", price: 10, sku: "CP-COR-200" }],
    image: "/products/concrete-candles/corail.png",
    hoverImage: "/products/concrete-candles/corail.png",
    isBestseller: false,
    isNew: true,
    burnTime: "40 hours",
    collection: "Concrete Pot Candles",
  },
  {
    id: "cp2",
    slug: "manege",
    name: "Manège",
    subtitle: "Ornate relief vessel — Parisian carousel elegance",
    type: "Concrete Pot Candle",
    scentFamily: "Floral",
    scents: ["Neroli", "White Rose", "Jasmine", "White Musk", "Sandalwood"],
    description: "A white vessel engraved with carousel horses and baroque flourishes, resting on its own ornate display plate. Manège is the crown jewel of the collection — a piece that belongs as much on a vanity as it does in a museum.",
    story: "Each vessel is individually cast and hand-finished in white, its relief details a nod to the gilded carousels of nineteenth-century Paris.",
    sizes: [{ label: "Standard", volume: "200g", price: 13, sku: "CP-MAN-200" }],
    image: "/products/concrete-candles/manege.png",
    hoverImage: "/products/concrete-candles/manege.png",
    isBestseller: true,
    isNew: false,
    burnTime: "40 hours",
    collection: "Concrete Pot Candles",
  },
  {
    id: "cp3",
    slug: "ecorce",
    name: "Écorce",
    subtitle: "Bark-textured vessel — raw & organic",
    type: "Concrete Pot Candle",
    scentFamily: "Woody",
    scents: ["Bergamot", "Cedarwood", "Vetiver", "Oakmoss", "Dark Amber"],
    description: "A white vessel whose surface is carved with deep wood-grain lines that make it feel like a section of ancient timber. Available in white only, Écorce brings the quiet dignity of the forest indoors.",
    story: "The bark texture is pressed by hand into each mould before setting — no two vessels share exactly the same grain pattern.",
    sizes: [{ label: "Standard", volume: "200g", price: 10, sku: "CP-ECO-200" }],
    image: "/products/concrete-candles/ecorce.png",
    hoverImage: "/products/concrete-candles/ecorce.png",
    isBestseller: false,
    isNew: false,
    burnTime: "40 hours",
    collection: "Concrete Pot Candles",
  },
  {
    id: "cp4",
    slug: "tarte",
    name: "Tarte",
    subtitle: "Ruffled edge bowl — French pâtisserie chic",
    type: "Concrete Pot Candle",
    scentFamily: "Gourmand",
    scents: ["Caramel", "Vanilla", "Tonka Bean", "Warm Sandalwood"],
    description: "Shallow and wide, rimmed with pleated ruffled edges like a classic French tart mould — finished in white. An effortlessly chic piece that doubles as a decorative dish between burns.",
    story: "Named for the tarte aux fruits mould found in every Parisian pâtisserie. Simple in form, striking in white.",
    sizes: [{ label: "Standard", volume: "200g", price: 10, sku: "CP-TAR-200" }],
    image: "/products/concrete-candles/tarte.png",
    hoverImage: "/products/concrete-candles/tarte.png",
    isBestseller: false,
    isNew: false,
    burnTime: "35 hours",
    collection: "Concrete Pot Candles",
  },
  {
    id: "cp5",
    slug: "brut",
    name: "Brut",
    subtitle: "Raw vessel with wooden wick — brutalist minimal",
    type: "Concrete Pot Candle",
    scentFamily: "Woody",
    scents: ["Black Pepper", "Cedarwood", "Smoked Birch", "Dark Amber", "Musk"],
    description: "A rough-hewn white cylinder with a crackling wooden wick and a matching lidded top. Brut makes no apology for its rawness — honest, architectural, and made to last.",
    story: "Hand-cast in a single pour and left unsmoothed. Every scratch and pit on the white surface is part of the design.",
    sizes: [{ label: "Standard", volume: "200g", price: 10, sku: "CP-BRU-200" }],
    image: "/products/concrete-candles/brut.png",
    hoverImage: "/products/concrete-candles/brut.png",
    isBestseller: false,
    isNew: false,
    burnTime: "45 hours",
    collection: "Concrete Pot Candles",
  },
  {
    id: "cp6",
    slug: "rosette",
    name: "Rosette",
    subtitle: "Baroque goblet with lid — romantic & ornate",
    type: "Concrete Pot Candle",
    scentFamily: "Floral",
    scents: ["Raspberry", "Lychee", "Damask Rose", "Peony", "Cashmere"],
    description: "A white goblet vessel adorned with floral and baroque relief, crowned with a sculptural lidded top. Finished in white, Rosette is the most romantic piece in the collection — feminine, opulent, and completely unforgettable.",
    story: "The baroque detailing was inspired by antique French porcelain found in a Provençal market, reinterpreted here in pure white.",
    sizes: [{ label: "Standard", volume: "200g", price: 13, sku: "CP-ROS-200" }],
    image: "/products/concrete-candles/rosette.png",
    hoverImage: "/products/concrete-candles/rosette.png",
    isBestseller: true,
    isNew: false,
    burnTime: "40 hours",
    collection: "Concrete Pot Candles",
  },
  {
    id: "cp7",
    slug: "dome",
    name: "Dôme",
    subtitle: "Smooth sphere on wood — pure minimalism",
    type: "Concrete Pot Candle",
    scentFamily: "Fresh",
    scents: ["White Tea", "Neroli", "Jasmine", "Lily", "Sandalwood"],
    description: "A perfectly smooth, egg-shaped white vessel resting on a natural wood disc. Dôme is the quietest object in the room — and somehow the one everyone notices first.",
    story: "Conceived as an object of pure presence. No texture, no ornament — just a clean white form and the light it catches.",
    sizes: [{ label: "Standard", volume: "200g", price: 10, sku: "CP-DOM-200" }],
    image: "/products/concrete-candles/dome.png",
    hoverImage: "/products/concrete-candles/dome.png",
    isBestseller: false,
    isNew: true,
    burnTime: "40 hours",
    collection: "Concrete Pot Candles",
  },
  {
    id: "cp8",
    slug: "larme",
    name: "Larme",
    subtitle: "Teardrop vessel — soft & grounded",
    type: "Concrete Pot Candle",
    scentFamily: "Earthy",
    scents: ["Cardamom", "Pink Pepper", "Patchouli", "Vetiver", "Tonka"],
    description: "A white teardrop vessel, slightly tapered at the top and grounded at the base. Simple in silhouette, striking in white — Larme is the piece that anchors the room without demanding attention.",
    story: "The teardrop form references ancient water vessels made to be held, not just displayed. Finished in white for a timeless, clean presence.",
    sizes: [{ label: "Standard", volume: "200g", price: 10, sku: "CP-LAR-200" }],
    image: "/products/concrete-candles/larme.png",
    hoverImage: "/products/concrete-candles/larme.png",
    isBestseller: false,
    isNew: false,
    burnTime: "40 hours",
    collection: "Concrete Pot Candles",
  },
];

// ─── COMBINED EXPORT ──────────────────────────────────────────────────────────

export const products: Product[] = [
  ...diffusers,
  ...concretePotCandles,
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getProductsByCollection = (collection: Product["collection"]) =>
  products.filter((p) => p.collection === collection);

export const getBestsellers = () => products.filter((p) => p.isBestseller);

export const COLLECTIONS = [
  {
    id: "diffusers",
    label: "Diffusers",
    description: "7 signature scents in our reed diffuser collection",
    image: "/products/diffusers/warmth.jpg",
    href: "/shop?collection=Diffusers",
    count: diffusers.length,
  },
  {
    id: "concrete-pot-candles",
    label: "Concrete Pot Candles",
    description: "9 hand-cast concrete vessels, refillable for life",
    image: "/products/concrete-candles/mainpic2.png",
    href: "/shop?collection=Concrete Pot Candles",
    count: concretePotCandles.length,
  },
];
