// src/data/packagesData.ts
export interface PackageItemData {
  id: string;
  name: string;
  price: string;
  features: string[];
  bgColor: string; // Tailwind background class
  textColor: string; // Tailwind text class
  borderColor: string; // Tailwind border class for the divider
}

export const packagesData: PackageItemData[] = [
  {
    id: "rose",
    name: "ROSE PACKAGE",
    price: "BDT 500",
    features: [
      "Internet Bandwidth 5 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-cyan-500",
    textColor: "text-white",
    borderColor: "border-cyan-300",
  },
  {
    id: "sunflower",
    name: "SUNFLOWER PACKAGE",
    price: "BDT 550",
    features: [
      "Internet Bandwidth 6 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-blue-600",
    textColor: "text-white",
    borderColor: "border-blue-400",
  },
  {
    id: "marigold",
    name: "MARIGOLD PACKAGE",
    price: "BDT 680",
    features: [
      "Internet Bandwidth 8 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-slate-700",
    textColor: "text-white",
    borderColor: "border-slate-500",
  },
  {
    id: "jasmine",
    name: "JASMINE PACKAGE",
    price: "BDT 800",
    features: [
      "Internet Bandwidth 10 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-pink-600",
    textColor: "text-white",
    borderColor: "border-pink-400",
  },
  {
    id: "lily",
    name: "LILY PACKAGE",
    price: "BDT 850",
    features: [
      "Internet Bandwidth 12 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-slate-700", // Re-using color
    textColor: "text-white",
    borderColor: "border-slate-500",
  },
  {
    id: "tulip",
    name: "TULIP PACKAGE",
    price: "BDT 1000",
    features: [
      "Internet Bandwidth 15 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-pink-600", // Re-using color
    textColor: "text-white",
    borderColor: "border-pink-400",
  },
  {
    id: "dahlia",
    name: "DAHLIA PACKAGE",
    price: "BDT 1200",
    features: [
      "Internet Bandwidth 20 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-cyan-500", // Re-using color
    textColor: "text-white",
    borderColor: "border-cyan-300",
  },
  {
    id: "lotus",
    name: "LOTUS PACKAGE",
    price: "BDT 1200+ Per Mbps 40/-",
    features: [
      "Above 20Mbps Customized",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-blue-700",
    textColor: "text-white",
    borderColor: "border-blue-500",
  },
];
