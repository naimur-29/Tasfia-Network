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
    id: "pkg-1",
    name: "Package 1",
    price: "BDT 500",
    features: [
      "Internet Bandwidth 10 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-blue-600",
    textColor: "text-white",
    borderColor: "border-blue-400",
  },
  {
    id: "pkg-2",
    name: "Package 2",
    price: "BDT 700",
    features: [
      "Internet Bandwidth 15 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-blue-700",
    textColor: "text-white",
    borderColor: "border-blue-500",
  },
  {
    id: "pkg-3",
    name: "Package 3",
    price: "BDT 800",
    features: [
      "Internet Bandwidth 20 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-blue-800",
    textColor: "text-white",
    borderColor: "border-blue-600",
  },
  {
    id: "pkg-4",
    name: "Package 4",
    price: "BDT 1000",
    features: [
      "Internet Bandwidth 25 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-blue-900",
    textColor: "text-white",
    borderColor: "border-blue-700",
  },
  {
    id: "pkg-5",
    name: "Package 5",
    price: "BDT 1200",
    features: [
      "Internet Bandwidth 30 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-indigo-900",
    textColor: "text-white",
    borderColor: "border-indigo-700",
  },
];
