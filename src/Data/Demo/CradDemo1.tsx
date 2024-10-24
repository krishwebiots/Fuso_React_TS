import { Car, Location, SearchNormal1, Wallet } from "iconsax-react";
export const DropdownData = [
  {
    icon: <SearchNormal1 />,
    label: "Search",
    dropdownItems: [
      { icon: "ri-map-pin-line", label: "City, Locality" },
      { icon: "ri-map-pin-4-line", label: "Area (like a Salmina)" },
      { icon: "ri-building-4-line", label: "Project or Builder name" },
    ],
  },
  {
    icon: <Location />,
    label: "Location",
    dropdownItems: ["Amsterdam", "Kansas City", "Santiago", "Lisbon", "Los Angeles", "Sydney", "Beijing"],
  },
  {
    icon: <Car />,
    label: "Car Type",
    dropdownItems: ["Hatchback", "SUV", "Convertible", "Sedan", "Crossover"],
  },
  {
    icon: <Wallet />,
    label: "Price",
  },
];
