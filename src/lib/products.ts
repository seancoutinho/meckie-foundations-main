export type ProductCategory =
  | "Pavers"
  | "Slabs"
  | "Coping"
  | "Cladding"
  | "Blocks"
  | "Kerbstones"
  | "Feature Products";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  price: string;
  size: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: "3d-arrow",
    name: "3D Arrow Pavers",
    category: "Pavers",
    price: "$16 per square meter",
    size: "33 units / 60mm",
    description:
      "Modern geometric paving solution for premium residential and commercial spaces.",
    image: "/assets/3d-arrow.png",
    featured: true,
  },

  {
    id: "dogbone",
    name: "Dog Bone Pavers",
    category: "Pavers",
    price: "$15",
    size: "25 units / 50mm",
    description:
      "Interlocking paving system engineered for durability and load resistance.",
    image: "/assets/dogbone.png",
  },

  {
    id: "herringbone",
    name: "Herringbone Pavers",
    category: "Pavers",
    price: "$16",
    size: "64 units / 50mm",
    description:
      "Classic herringbone paving layout for elegant driveways and pathways.",
    image: "/assets/herringbone.png",
  },

  {
    id: "slate",
    name: "Slate Tiles",
    category: "Slabs",
    price: "$15",
    size: "300×300mm × 20mm",
    description:
      "Textured slate-finish tiles for refined outdoor and landscape applications.",
    image: "/assets/slate.png",
  },

  {
    id: "pillar-coping",
    name: "Pillar Coping",
    category: "Coping",
    price: "$7",
    size: "500mm × 500mm",
    description:
      "Protective and decorative pillar coping for premium perimeter walls.",
    image: "/assets/pillar-coping.png",
  },

  {
    id: "giant-feet",
    name: "Giant Feet",
    category: "Feature Products",
    price: "$3",
    size: "600mm × 60mm",
    description:
      "Decorative stepping slabs designed for landscaped outdoor environments.",
    image: "/assets/giant-feet.png",
  },

  {
    id: "breeze-block",
    name: "Breeze Block",
    category: "Blocks",
    price: "$2",
    size: "300 × 300mm / 120mm",
    description:
      "Decorative ventilation block for architectural facades and feature walls.",
    image: "/assets/breeze-block.png",
    featured: true,
  },

  {
    id: "cobble-slab-400",
    name: "Cobble Slabs",
    category: "Slabs",
    price: "$2.50",
    size: "400 × 400mm / 50mm",
    description:
      "Heavy-duty outdoor slabs with a premium cobbled surface texture.",
    image: "/assets/cobble-slab-400.png",
  },

  {
    id: "twist-hex",
    name: "Twist Hexagonal",
    category: "Pavers",
    price: "$16",
    size: "28 units / 50mm",
    description:
      "Distinctive geometric paving pattern for contemporary outdoor spaces.",
    image: "/assets/twist-hex.png",
  },

  {
    id: "woodlock",
    name: "Woodlock Slipper",
    category: "Feature Products",
    price: "$7",
    size: "700mm × 320mm",
    description:
      "Wood-textured paving feature designed for premium landscape finishes.",
    image: "/assets/woodlock.png",
  },

  {
    id: "doomed-cladding",
    name: "Doomed Cladding",
    category: "Cladding",
    price: "$18",
    size: "230 × 60mm / 10mm",
    description:
      "Decorative wall cladding system with textured architectural finish.",
    image: "/assets/doomed-cladding.png",
  },

  {
    id: "cobble-slab-500",
    name: "Cobble Slabs",
    category: "Slabs",
    price: "$4.50",
    size: "500 × 500mm / 50mm",
    description:
      "Large-format premium cobble slabs for luxury outdoor environments.",
    image: "/assets/cobble-slab-500.png",
  },

  {
    id: "kerbstone",
    name: "Municipal Kerbstone",
    category: "Kerbstones",
    price: "$7",
    size: "300 × 1000mm / 100mm",
    description:
      "Durable kerbstones engineered for roads, pavements, and edging systems.",
    image: "/assets/kerbstone.png",
  },

  {
    id: "single-cobbles",
    name: "Single Cobbles",
    category: "Pavers",
    price: "$16",
    size: "100 units / 100 × 100mm",
    description:
      "Premium cobble paving units suitable for courtyards and pathways.",
    image: "/assets/single-cobbles.png",
  },

  {
    id: "maxi-block",
    name: "Maxi Block",
    category: "Blocks",
    price: "$0.60",
    size: "280mm × 130mm / 90mm",
    description:
      "Reliable structural block suitable for perimeter wall construction.",
    image: "/assets/maxi-block.png",
  },

  {
    id: "wall-coping",
    name: "Wall Coping",
    category: "Coping",
    price: "$7",
    size: "230mm × 1000mm",
    description:
      "Protective coping finish for perimeter and boundary walls.",
    image: "/assets/wall-coping.png",
  },

  {
    id: "octagon-slabs",
    name: "Octagon Slabs",
    category: "Slabs",
    price: "$16",
    size: "6.25 units × 60mm",
    description:
      "Decorative octagonal paving slabs for premium outdoor applications.",
    image: "/assets/octagon.png",
  },

  {
    id: "extra-1",
    name: "Milano Pavers",
    category: "Feature Products",
    price: " $18 per m²",
    size: "Custom",
    description: "Premium architectural concrete solution.",
    image: "/assets/extra1.png",
  },

  {
    id: "extra-2",
    name: "Basket Pavers",
    category: "Feature Products",
    price: "$18 per m²",
    size: "Custom",
    description: "Premium architectural concrete solution.",
    image: "/assets/extra2.png",
  },

  {
    id: "extra-3",
    name: "Premium Product 03",
    category: "Feature Products",
    price: "TBA",
    size: "Custom",
    description: "Premium architectural concrete solution.",
    image: "/assets/extra3.png",
  },

  {
    id: "extra-4",
    name: "Premium Product 04",
    category: "Feature Products",
    price: "TBA",
    size: "Custom",
    description: "Premium architectural concrete solution.",
    image: "/assets/extra4.png",
  },

  {
    id: "extra-5",
    name: "Breeze Block",
    category: "Feature Products",
    price: "$2",
    size: "Custom",
    description: "Premium architectural concrete solution.",
    image: "/assets/extra5.png",
  },

  {
    id: "extra-6",
    name: "Smooth Round dumble Cobble ",
    category: "Feature Products",
    price: "$ 18 per m²",
    size: "Custom",
    description: "Premium architectural concrete solution.",
    image: "/assets/extra6.png",
  },

  {
    id: "extra-7",
    name: "Outdoor tile 200x200x 10mm",
    category: "Feature Products",
    price: "$16 .   25 units required per m²",
    size: "Custom",
    description: "Premium architectural concrete solution.",
    image: "/assets/extra7.png",
  },

  {
    id: "extra-8",
    name: "Outdoor Tiles",
    category: "Feature Products",
    price: "$16/m² · 11 units required per m²",
    size: "Custom",
    description: "Premium architectural concrete solution.",
    image: "/assets/extra8.png",
  },

   {
    id: "extra-9",
    name: "Oslo Set",
    category: "Feature Products",
    price: "$ 20 per m²",
    size: "Custom",
    description: "Premium architectural concrete solution.",
    image: "/assets/extra9.png",
  },

    {
    id: "extra-10",
    name: "3D Diamond",
    category: "Feature Products",
    price: "$18",
    size: "Custom",
    description: "Premium architectural concrete solution.",
    image: "/assets/extra10.png",
  },

   {
    id: "extra-11",
    name: "Dripstone ",
    category: "Feature Products",
    price: "$6",
    size: "Custom",
    description: "Premium architectural concrete solution.",
    image: "/assets/extra11.png",
  },

];