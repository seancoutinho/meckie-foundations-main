import driveway from "@/assets/product-driveway-pavers.jpg";
import cobbles from "@/assets/product-cobbles.jpg";
import hexagonal from "@/assets/product-hexagonal.jpg";
import coping from "@/assets/product-coping.jpg";
import cladding from "@/assets/product-cladding.jpg";
import feature from "@/assets/product-feature.jpg";

export type ProductCategory =
  | "Driveway Pavers"
  | "Cobbles & Slabs"
  | "Hexagonal Pavers"
  | "Coping & Edging"
  | "Blocks & Cladding"
  | "Feature Pieces";

export const CATEGORIES: ProductCategory[] = [
  "Driveway Pavers",
  "Cobbles & Slabs",
  "Hexagonal Pavers",
  "Coping & Edging",
  "Blocks & Cladding",
  "Feature Pieces",
];

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  price: string;
  spec: string;
  description: string;
  image: string;
};

export const PRODUCTS: Product[] = [
  { id: "dp-60",   name: "Standard Driveway Paver 60mm", category: "Driveway Pavers",  price: "$0.85 / piece", spec: "200×100×60mm · Charcoal, Grey, Terracotta", description: "The architectural workhorse — engineered for daily vehicle load with a refined surface finish.", image: driveway },
  { id: "dp-80",   name: "Heavy-Duty Paver 80mm",        category: "Driveway Pavers",  price: "$1.10 / piece", spec: "200×100×80mm · Reinforced concrete",        description: "Reinforced profile for high-traffic and commercial entrances. Quiet underfoot, decisive in load.", image: driveway },
  { id: "dp-bond", name: "Bond Paver",                   category: "Driveway Pavers",  price: "$0.95 / piece", spec: "225×112×60mm · Interlocking",               description: "A tighter geometric weave for residential driveways with a contemporary edge.", image: driveway },

  { id: "cs-cob",  name: "Antique Cobble",               category: "Cobbles & Slabs",  price: "$1.20 / piece", spec: "100×100×60mm · Tumbled finish",             description: "Hand-tumbled edges for a quietly aged, courtyard-quality surface.", image: cobbles },
  { id: "cs-slab", name: "Architectural Slab 400",       category: "Cobbles & Slabs",  price: "$3.40 / piece", spec: "400×400×40mm · Smooth honed",               description: "Generous format for terraces and patios — restrained, modern, monumental.", image: cobbles },
  { id: "cs-mini", name: "Mini Cobble",                  category: "Cobbles & Slabs",  price: "$0.65 / piece", spec: "100×50×60mm · Sandstone, Ash",              description: "A finer scale for pathways, courtyards and decorative bands.", image: cobbles },

  { id: "hx-200",  name: "Hexagonal Paver 200",          category: "Hexagonal Pavers", price: "$1.45 / piece", spec: "200mm flat-to-flat · 60mm thick",           description: "Six-sided geometry that draws a precise, architectural line through any landscape.", image: hexagonal },
  { id: "hx-150",  name: "Hexagonal Paver 150",          category: "Hexagonal Pavers", price: "$1.10 / piece", spec: "150mm flat-to-flat · 50mm thick",           description: "A finer hex module for pedestrian areas and feature courtyards.", image: hexagonal },

  { id: "ce-bull", name: "Bullnose Coping",              category: "Coping & Edging",  price: "$4.20 / metre", spec: "300×600×40mm · Honed white",                description: "A soft, rounded profile for pool perimeters and elevated terraces.", image: coping },
  { id: "ce-edge", name: "Garden Edge Strip",            category: "Coping & Edging",  price: "$2.80 / metre", spec: "1000×80×40mm · Charcoal, Stone",            description: "Disciplined linework — defines lawns, beds and paved transitions.", image: coping },
  { id: "ce-step", name: "Step Tread",                   category: "Coping & Edging",  price: "$6.50 / piece", spec: "1200×350×50mm · Anti-slip",                 description: "Long-format treads for monolithic, modern stair runs.", image: coping },

  { id: "bc-stack", name: "Stacked Stone Cladding",      category: "Blocks & Cladding",price: "$36 / m²",      spec: "Sandstone, Slate · Ledged finish",          description: "Architectural skin for perimeter walls, columns and feature elevations.", image: cladding },
  { id: "bc-block", name: "Architectural Block 200",     category: "Blocks & Cladding",price: "$1.10 / piece", spec: "390×190×190mm · Hollow",                    description: "A precision masonry unit — engineered for boundary walls and screens.", image: cladding },
  { id: "bc-cap",   name: "Wall Cap",                    category: "Blocks & Cladding",price: "$3.20 / piece", spec: "300×300×60mm · Weathered",                  description: "A clean architectural cap to crown perimeter walls.", image: cladding },

  { id: "fp-med",  name: "Compass Medallion",            category: "Feature Pieces",   price: "$185 / piece",  spec: "Ø 1200mm · Cast concrete relief",           description: "A centrepiece for forecourts and entrance driveways. One singular gesture.", image: feature },
  { id: "fp-fan",  name: "Radial Fan Set",               category: "Feature Pieces",   price: "$240 / set",    spec: "Ø 2400mm · 32 pieces",                      description: "A full radial composition for circular driveways and grand entrances.", image: feature },
  { id: "fp-band", name: "Inlay Band",                   category: "Feature Pieces",   price: "$28 / metre",   spec: "200mm wide · Contrasting tone",             description: "A linear inlay to articulate paths, thresholds and boundaries.", image: feature },
];
