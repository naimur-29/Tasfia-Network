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
      "Internet Bandwidth 5 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-blue-500", // Lighter blue
    textColor: "text-white",
    borderColor: "border-blue-300",
  },
  {
    id: "pkg-2",
    name: "Package 2",
    price: "BDT 600",
    features: [
      "Internet Bandwidth 7 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-blue-600", // Slightly darker blue
    textColor: "text-white",
    borderColor: "border-blue-400",
  },
  {
    id: "pkg-3",
    name: "Package 3",
    price: "BDT 680",
    features: [
      "Internet Bandwidth 8 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-blue-700", // Darker blue
    textColor: "text-white",
    borderColor: "border-blue-500",
  },
  {
    id: "pkg-4",
    name: "Package 4",
    price: "BDT 800",
    features: [
      "Internet Bandwidth 10 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-blue-800", // Even darker blue
    textColor: "text-white",
    borderColor: "border-blue-600",
  },
  {
    id: "pkg-5",
    name: "Package 5",
    price: "BDT 880",
    features: [
      "Internet Bandwidth 12 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-indigo-700", // Transition to a mid-dark indigo (perceived as darker/more premium than blue-900)
    textColor: "text-white",
    borderColor: "border-indigo-500",
  },
  {
    id: "pkg-6",
    name: "Package 6",
    price: "BDT 1,000",
    features: [
      "Internet Bandwidth 15 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-indigo-800", // Deepest blue
    textColor: "text-white",
    borderColor: "border-blue-700",
  },
  {
    id: "pkg-7",
    name: "Package 7",
    price: "BDT 1,200",
    features: [
      "Internet Bandwidth 20 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-indigo-900", // Deeper indigo
    textColor: "text-white",
    borderColor: "border-indigo-600",
  },
  {
    id: "pkg-8",
    name: "Package 8",
    price: "BDT 1,500",
    features: [
      "Internet Bandwidth 30 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-slate-800", // Very deep indigo
    textColor: "text-white",
    borderColor: "border-indigo-700",
  },
  {
    id: "pkg-9",
    name: "Package 9",
    price: "BDT 2,000",
    features: [
      "Internet Bandwidth 40 Mbps",
      "YouTube Bandwidth HD Buffer less",
      "FTP Bandwidth Unlimited",
      "BDIX Bandwidth Unlimited",
    ],
    bgColor: "bg-slate-900", // Very dark, near-black for the most premium look
    textColor: "text-white",
    borderColor: "border-slate-700",
  },
];
