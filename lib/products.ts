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
    sizes: [{ label: "Standard", volume: "125mL", price: 23, sku: "DIF-EDEN-125" }],
    image: "/products/diffusers/eden.png",
    hoverImage: "/products/diffusers/eden.png",
    isBestseller: true,
    isNew: false,
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
    image: "/products/diffusers/cool.png",
    hoverImage: "/products/diffusers/cool.png",
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
    image: "/products/diffusers/calm.png",
    hoverImage: "/products/diffusers/calm.png",
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
    image: "/products/diffusers/warmth.png",
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
    image: "/products/diffusers/grounded.png",
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
    image: "/products/diffusers/confident.png",
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

// ─── CONCRETE CANDLE REFILLS (5) ──────────────────────────────────────────────

const concreteCandeRefills: Product[] = [
  {
    id: "r1",
    slug: "refill-vanille",
    name: "Vanille",
    subtitle: "Rich & creamy vanilla refill",
    type: "Concrete Candle Refill",
    scentFamily: "Gourmand",
    description: "Pure, unapologetic vanilla — rich, creamy, and endlessly comforting. The most-loved refill in the collection.",
    story: "Sourced from Madagascar vanilla absolute, blended into a clean coconut-soy wax for a slow, even burn.",
    sizes: [{ label: "Refill", volume: "180g", price: 3, sku: "REF-VAN-180" }],
    image: "/products/refills/vanille.jpg",
    hoverImage: "/products/refills/vanille.jpg",
    isBestseller: true,
    isNew: false,
    burnTime: "40 hours",
    collection: "Concrete Candle Refills",
  },
  {
    id: "r2",
    slug: "refill-lavender",
    name: "Lavender",
    subtitle: "Provençal lavender — calm & clean",
    type: "Concrete Candle Refill",
    scentFamily: "Floral",
    description: "Pure Provençal lavender — that clean, herbal clarity that clears the mind and slows the breath.",
    story: "Distilled from lavender fields near Valensole during peak bloom in July. No synthetic fillers.",
    sizes: [{ label: "Refill", volume: "180g", price: 3, sku: "REF-LAV-180" }],
    image: "/products/refills/lavender.jpg",
    hoverImage: "/products/refills/lavender.jpg",
    isBestseller: false,
    isNew: false,
    burnTime: "40 hours",
    collection: "Concrete Candle Refills",
  },
  {
    id: "r3",
    slug: "refill-jasmine",
    name: "Jasmine",
    subtitle: "White jasmine — rich & heady",
    type: "Concrete Candle Refill",
    scentFamily: "Floral",
    description: "Jasmine in full bloom — heady, sensual, and undeniably alive. The queen of all floral refills.",
    story: "Uses jasmine sambac absolute — the more intoxicating of the two jasmine species, prized in perfumery for its depth.",
    sizes: [{ label: "Refill", volume: "180g", price: 3, sku: "REF-JAS-180" }],
    image: "/products/refills/jasmine.jpg",
    hoverImage: "/products/refills/jasmine.jpg",
    isBestseller: false,
    isNew: false,
    burnTime: "40 hours",
    collection: "Concrete Candle Refills",
  },
  {
    id: "r4",
    slug: "refill-passion-fruit",
    name: "Passion Fruit",
    subtitle: "Tropical & bright — joyful energy",
    type: "Concrete Candle Refill",
    scentFamily: "Citrus",
    description: "Sunshine in wax — the sweet-tart burst of passion fruit balanced with tropical florals. Instantly uplifting.",
    story: "Our most joyful refill, designed to bring warmth and colour to grey winter days.",
    sizes: [{ label: "Refill", volume: "180g", price: 3, sku: "REF-PAS-180" }],
    image: "/products/refills/passion-fruit.jpg",
    hoverImage: "/products/refills/passion-fruit.jpg",
    isBestseller: false,
    isNew: true,
    burnTime: "40 hours",
    collection: "Concrete Candle Refills",
  },
  {
    id: "r5",
    slug: "refill-gardenia",
    name: "Gardenia",
    subtitle: "White gardenia — opulent & creamy",
    type: "Concrete Candle Refill",
    scentFamily: "Floral",
    description: "The gardenia — heavy, creamy, impossibly lush. A single bloom fills a room. This refill fills a world.",
    story: "Gardenia is the rarest flower in our collection to capture faithfully. This is the closest perfumery has come.",
    sizes: [{ label: "Refill", volume: "180g", price: 3, sku: "REF-GAR-180" }],
    image: "/products/refills/gardenia.jpg",
    hoverImage: "/products/refills/gardenia.jpg",
    isBestseller: true,
    isNew: false,
    burnTime: "40 hours",
    collection: "Concrete Candle Refills",
  },
];

// ─── SOY WAX CANDLES (12) ────────────────────────────────────────────────────

const soyWaxCandles: Product[] = [
  {
    id: "s1",
    slug: "lumiere-douce",
    name: "Lumière Douce",
    subtitle: "Soft candlelight & warm vanilla",
    type: "Soy Wax Candle",
    scentFamily: "Gourmand",
    description: "The quiet warmth of a candle-lit room at dusk — sweet vanilla wrapped in soft amber and a trace of sandalwood. Our most intimate scent.",
    story: "Hand-poured in small batches using 100% natural soy wax. Burns clean for 55 hours.",
    sizes: [{ label: "Classic", volume: "200g", price: 8, sku: "SOY-LD-200" }],
    image: "/products/soy-candles/soy01.jpg",
    hoverImage: "/products/soy-candles/soy01.jpg",
    isBestseller: true,
    isNew: false,
    burnTime: "55 hours",
    collection: "Soy Wax Candles",
  },
  {
    id: "s2",
    slug: "fleur-blanche",
    name: "Fleur Blanche",
    subtitle: "White petals & morning dew",
    type: "Soy Wax Candle",
    scentFamily: "Floral",
    description: "Clean, luminous, and effortlessly feminine. White florals layered over a dewy green base — a bouquet left on a windowsill in early morning light.",
    story: "Inspired by a Provençal flower market at sunrise, before the heat lifts the petals.",
    sizes: [{ label: "Classic", volume: "200g", price: 8, sku: "SOY-FB-200" }],
    image: "/products/soy-candles/soy02.jpg",
    hoverImage: "/products/soy-candles/soy02.jpg",
    isBestseller: false,
    isNew: false,
    burnTime: "55 hours",
    collection: "Soy Wax Candles",
  },
  {
    id: "s3",
    slug: "bois-sacre",
    name: "Bois Sacré",
    subtitle: "Sacred woods & warm smoke",
    type: "Soy Wax Candle",
    scentFamily: "Woody",
    description: "Deep, grounding, meditative. Ancient woods meet a breath of smoke — a scent that slows the room down and invites stillness.",
    story: "Drawn from the tradition of sacred wood burning in Japanese temples. Clean soy wax carries the ritual forward.",
    sizes: [{ label: "Classic", volume: "200g", price: 8, sku: "SOY-BS-200" }],
    image: "/products/soy-candles/soy03.jpg",
    hoverImage: "/products/soy-candles/soy03.jpg",
    isBestseller: true,
    isNew: false,
    burnTime: "55 hours",
    collection: "Soy Wax Candles",
  },
  {
    id: "s4",
    slug: "rose-sauvage",
    name: "Rose Sauvage",
    subtitle: "Wild rose & green thorns",
    type: "Soy Wax Candle",
    scentFamily: "Floral",
    description: "Not the rose of a florist — this is the rose of an open field, sharp and alive. Green stems, earthy roots, a bloom in full defiance.",
    story: "A tribute to the wild rosa damascena of the Bulgarian valleys, before it is ever touched by a perfumer.",
    sizes: [{ label: "Classic", volume: "200g", price: 8, sku: "SOY-RS-200" }],
    image: "/products/soy-candles/soy04.jpg",
    hoverImage: "/products/soy-candles/soy04.jpg",
    isBestseller: true,
    isNew: false,
    burnTime: "55 hours",
    collection: "Soy Wax Candles",
  },
  {
    id: "s5",
    slug: "nuit-veloutee",
    name: "Nuit Veloutée",
    subtitle: "Velvet night & dark musk",
    type: "Soy Wax Candle",
    scentFamily: "Oriental",
    description: "The feeling of stepping outside on a warm night — dark musk, soft resins, a whisper of midnight florals. Rich without being heavy.",
    story: "Created for evenings that deserve a scent of their own. Present without demanding attention.",
    sizes: [{ label: "Classic", volume: "200g", price: 8, sku: "SOY-NV-200" }],
    image: "/products/soy-candles/soy05.jpg",
    hoverImage: "/products/soy-candles/soy05.jpg",
    isBestseller: false,
    isNew: true,
    burnTime: "55 hours",
    collection: "Soy Wax Candles",
  },
  {
    id: "s6",
    slug: "jardin-secret",
    name: "Jardin Secret",
    subtitle: "Hidden garden & green leaves",
    type: "Soy Wax Candle",
    scentFamily: "Fresh",
    description: "Cool, green, and unhurried. The scent of a walled garden nobody else knows about — wet soil, fig leaves, morning air that hasn't been disturbed.",
    story: "Our freshest soy candle. A companion to the slower pace of a private garden.",
    sizes: [{ label: "Classic", volume: "200g", price: 8, sku: "SOY-JS-200" }],
    image: "/products/soy-candles/soy06.jpg",
    hoverImage: "/products/soy-candles/soy06.jpg",
    isBestseller: false,
    isNew: false,
    burnTime: "55 hours",
    collection: "Soy Wax Candles",
  },
  {
    id: "s7",
    slug: "ambre-solaire",
    name: "Ambre Solaire",
    subtitle: "Sun-warmed amber & golden resin",
    type: "Soy Wax Candle",
    scentFamily: "Oriental",
    description: "Opulent and glowing. Warm amber, golden resin and a trace of vanilla — the scent of skin in late afternoon sun, unhurried and radiant.",
    story: "Built on natural labdanum — the raw material at the heart of all great amber fragrances.",
    sizes: [{ label: "Classic", volume: "200g", price: 8, sku: "SOY-AS-200" }],
    image: "/products/soy-candles/soy07.png",
    hoverImage: "/products/soy-candles/soy07.png",
    isBestseller: false,
    isNew: false,
    burnTime: "55 hours",
    collection: "Soy Wax Candles",
  },
  {
    id: "s8",
    slug: "lavande-profonde",
    name: "Lavande Profonde",
    subtitle: "Deep lavender & cool herbs",
    type: "Soy Wax Candle",
    scentFamily: "Floral",
    description: "Pure Provençal lavender at full depth — herbal, calming, and completely uncompromised. The most honest lavender we have ever made.",
    story: "Distilled from lavender fields near Valensole at peak bloom. No synthetic fillers, no shortcuts.",
    sizes: [{ label: "Classic", volume: "200g", price: 8, sku: "SOY-LP-200" }],
    image: "/products/soy-candles/soy08.png",
    hoverImage: "/products/soy-candles/soy08.png",
    isBestseller: true,
    isNew: false,
    burnTime: "55 hours",
    collection: "Soy Wax Candles",
  },
  {
    id: "s9",
    slug: "jasmin-etoile",
    name: "Jasmin Étoilé",
    subtitle: "Star jasmine & warm skin",
    type: "Soy Wax Candle",
    scentFamily: "Floral",
    description: "Jasmine in full bloom — heady, sensual, completely alive. Not the idea of jasmine. The flower itself, caught at its most intoxicating.",
    story: "Uses jasmine sambac absolute, the more intoxicating of the two jasmine species, prized in perfumery for its depth.",
    sizes: [{ label: "Classic", volume: "200g", price: 8, sku: "SOY-JE-200" }],
    image: "/products/soy-candles/soy09.png",
    hoverImage: "/products/soy-candles/soy09.png",
    isBestseller: false,
    isNew: true,
    burnTime: "55 hours",
    collection: "Soy Wax Candles",
  },
  {
    id: "s10",
    slug: "cedre-mousse",
    name: "Cèdre & Mousse",
    subtitle: "Cedar bark & forest moss",
    type: "Soy Wax Candle",
    scentFamily: "Woody",
    description: "A cedar forest after rain — cool bark, damp moss, the deep quiet of old trees. Grounding without being heavy, present without being loud.",
    story: "A tribute to the cedar forests of the Atlas Mountains, where the air itself seems filtered through ancient wood.",
    sizes: [{ label: "Classic", volume: "200g", price: 8, sku: "SOY-CM-200" }],
    image: "/products/soy-candles/soy10.png",
    hoverImage: "/products/soy-candles/soy10.png",
    isBestseller: false,
    isNew: false,
    burnTime: "55 hours",
    collection: "Soy Wax Candles",
  },
];

// ─── COMBINED EXPORT ──────────────────────────────────────────────────────────

export const products: Product[] = [
  ...diffusers,
  ...concretePotCandles,
  ...concreteCandeRefills,
  ...soyWaxCandles,
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
    image: "/products/diffusers/warmth.png",
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
  {
    id: "concrete-candle-refills",
    label: "Concrete Candle Refills",
    description: "5 pure scent refills for your concrete vessel",
    image: "/products/refills/refills-main.jpg",
    href: "/shop?collection=Concrete Candle Refills",
    count: concreteCandeRefills.length,
  },
  {
    id: "soy-wax-candles",
    label: "Soy Wax Candles",
    description: "12 scents in 100% natural soy wax, 55-hour burn",
    image: "/products/soy-candles/soy02.jpg",
    href: "/shop?collection=Soy Wax Candles",
    count: soyWaxCandles.length,
  },
];
