import { Autoplay, EffectFade, FreeMode, Thumbs } from "swiper/modules";

export const Brands = [
  {
    id: 1,
    name: "Rolls Royce",
    value: "rolls_royce",
    models: [
      { name: "Phantom", value: "phantom" },
      { name: "Ghost", value: "ghost" },
      { name: "Wraith", value: "wraith" },
      { name: "Dawn", value: "dawn" },
      { name: "Cullinan", value: "cullinan" },
      { name: "Spectre", value: "spectre" },
      { name: "Silver Ghost", value: "silver_ghost" },
      { name: "Silver Wraith", value: "silver_wraith" },
    ],
  },
  {
    id: 2,
    name: "Bentley",
    value: "bentley",
    models: [
      { name: "Bentayga", value: "bentayga" },
      { name: "Continental GT", value: "continental_gt" },
      { name: "Flying Spur", value: "flying_spur" },
      { name: "Mulsanne", value: "mulsanne" },
      { name: "Bacalar", value: "bacalar" },
      { name: "Arnage", value: "arnage" },
    ],
  },
  {
    id: 3,
    name: "Aston Martin",
    value: "aston_martin",
    models: [
      { name: "DBX", value: "dbx" },
      { name: "Vantage", value: "vantage" },
      { name: "DB11", value: "db11" },
      { name: "DB12", value: "db12" },
      { name: "Valhalla", value: "valhalla" },
      { name: "Valkyrie", value: "valkyrie" },
      { name: "DB9", value: "db9" },
      { name: "Cygnet", value: "cygnet" },
    ],
  },
  {
    id: 4,
    name: "Maserati",
    value: "maserati",
    models: [
      { name: "Alfieri", value: "alfieri" },
      { name: "Ghibli", value: "ghibli" },
      { name: "Quattroporte", value: "quattroporte" },
      { name: "Levante", value: "levante" },
      { name: "MC20", value: "mc20" },
    ],
  },
  {
    id: 5,
    name: "Bugatti",
    value: "bugatti",
    models: [
      { name: "Veyron", value: "veyron" },
      { name: "Chiron", value: "chiron" },
      { name: "Divo", value: "divo" },
      { name: "Centodieci", value: "centodieci" },
      { name: "Bolide", value: "bolide" },
    ],
  },
  {
    id: 6,
    name: "Lamborghini",
    value: "lamborghini",
    models: [
      { name: "Aventador", value: "aventador" },
      { name: "Huracán", value: "huracan" },
      { name: "Urus", value: "urus" },
      { name: "Sián", value: "sian" },
      { name: "Revuelto", value: "revuelto" },
      { name: "Huracán Tecnica", value: "huracan_tecnica" },
    ],
  },
  {
    id: 7,
    name: "Ferrari",
    value: "ferrari",
    models: [
      { name: "Ferrari 296 GTB", value: "ferrari_296_gtb" },
      { name: "Ferrari SF90 Stradale", value: "ferrari_sf90_stradale" },
      { name: "Ferrari F8 Tributo", value: "ferrari_f8_tributo" },
      { name: "Ferrari Roma", value: "ferrari_roma" },
      { name: "Ferrari Portofino M", value: "ferrari_portofino_m" },
      { name: "Ferrari 812 GTS", value: "ferrari_812_gts" },
    ],
  },
  {
    id: 8,
    name: "Cadillac",
    value: "cadillac",
    models: [
      { name: "Cadillac CT4", value: "cadillac_ct4" },
      { name: "Cadillac CT5", value: "cadillac_ct5" },
      { name: "Cadillac CT6", value: "cadillac_ct6" },
      { name: "Cadillac XT4", value: "cadillac_xt4" },
      { name: "Cadillac Escalade", value: "cadillac_escalade" },
      { name: "Cadillac Lyriq", value: "cadillac_lyriq" },
    ],
  },
  {
    id: 9,
    name: "Lexus",
    value: "lexus",
    models: [
      { name: "Lexus IS", value: "lexus_is" },
      { name: "Lexus ES", value: "lexus_es" },
      { name: "Lexus GS", value: "lexus_gs" },
    ],
  },
  {
    id: 10,
    name: "BMW",
    value: "bmw",
    models: [
      { name: "BMW iX1", value: "bmw_ix1" },
      { name: "BMW iX", value: "bmw_ix" },
      { name: "BMW i4", value: "bmw_i4" },
      { name: "BMW Sedan", value: "bmw_sedan" },
      { name: "BMW GRAN Turismo", value: "bmw_gran_turismo" },
    ],
  },
  {
    id: 11,
    name: "Mercedes",
    value: "mercedes",
    models: [
      { name: "Mercedes-Benz GLA", value: "mercedes_benz_gla" },
      { name: "Mercedes-Benz AMG", value: "mercedes_benz_amg" },
      { name: "Mercedes-Benz C-Class", value: "mercedes_benz_c_class" },
      { name: "Mercedes-Benz EQB", value: "mercedes_benz_eqb" },
    ],
  },
];

export const CategoriesData = [
  { id: "categories-1", label: "All Cars", type: "all" },
  { id: "categories-2", label: "Certified Cars", type: "certified_cars" },
  { id: "categories-3", label: "Direct Owner Cars", type: "direct_owner_cars" },
  { id: "categories-4", label: "Partner Cars", type: "partner_cars" },
  { id: "categories-5", label: "Hot Deal", type: "hot_deal" },
];

export const FuelTypeData = [
  { id: "FuelType-1", label: "Petrol", type: "petrol" },
  { id: "FuelType-2", label: "Diesel", type: "diesel" },
  { id: "FuelType-3", label: "CNG", type: "CNG" },
  { id: "FuelType-4", label: "Electric", type: "electric" },
];

export const ModalYearData = [
  { id: "ModalYear-1", label: "2020 & above", type: "2020" },
  { id: "ModalYear-2", label: "2016 & above", type: "2016" },
  { id: "ModalYear-3", label: "2012 & above", type: "2012" },
  { id: "ModalYear-4", label: "2008 & above", type: "2008" },
];

export const SeatsData = [
  { id: "Seats-1", label: "4 Seats", type: "4" },
  { id: "Seats-2", label: "5 Seats", type: "5" },
  { id: "Seats-3", label: "6 Seats", type: "6" },
  { id: "Seats-4", label: "7 Seats", type: "7" },
];

export const CarColorData = [
  { id: "Color-1", label: "Blue", type: "blue" },
  { id: "Color-2", label: "Silver", type: "silver" },
  { id: "Color-3", label: "white", type: "white" },
  { id: "Color-4", label: "Black", type: "black" },
  { id: "Color-5", label: "Red", type: "red" },
];

export const TransmissionData = [
  { id: "Transmission-1", label: "Manual", type: "manual" },
  { id: "Transmission-2", label: "Automatic", type: "automatic" },
  { id: "Transmission-3", label: "Semi Automatic", type: "semi_automatic" },
];

export const OwnerData = [
  { id: "Owner-1", label: "1st Owner", type: "1" },
  { id: "Owner-2", label: "2st Owner", type: "2" },
  { id: "Owner-3", label: "3st Owner", type: "3" },
  { id: "Owner-4", label: "4st Owner", type: "4" },
];

export const CarCategoryData = ["Sedan", "Jeep", "SUV", "Hatchback", "Truck", "Electric", "Convertible", "Coupe"];

export const CategoryInnerSlider = {
  slidesPerView: 6,
  freeMode: true,
  modules: [FreeMode],
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
};

export const CarTitleListData = [
  { icon: "calendar", text: "2021" },
  { icon: "gas", text: "250 miles" },
  { icon: "plan", text: "Manual" },
  { icon: "tachometer", text: "Petrol" },
];

export const CarOverviewData = [
  { id: "1", label: "Register Year", value: "Jun 2018" },
  { id: "2", label: "Body", value: "Kia" },
  { id: "3", label: "Production Year", value: "2020" },
  { id: "4", label: "Transmission", value: "Manual" },
  { id: "5", label: "Engine Size", value: "6" },
  { id: "6", label: "Fuel Type", value: "Petrol" },
  { id: "7", label: "Color", value: "White, Blue, Red" },
  { id: "8", label: "VIN", value: "FCB123792" },
  { id: "9", label: "Seats", value: "7 Seats" },
  { id: "10", label: "Insurance Validity", value: "Third Party" },
  { id: "11", label: "Drive Type", value: "RWD – Rear-wheel drive" },
  { id: "12", label: "Mileage", value: "52201" },
  { id: "13", label: "Ownership", value: "Second Owner" },
  { id: "14", label: "Spare Key", value: "Yes" },
];

export const CarFeatureData = [
  {
    title: "Interior",
    features: ["Air Conditioner", "Fabric Upholstery", "Heater", "Leather Seats", "Digital Clock", "Tachometer", "Touchscreen Display"],
  },
  {
    title: "Exterior",
    features: ["Rain Sensing Wiper", "Tinted Glass", "Integrated Antenna", "Sun Roof", "Moon Roof", "Chrome Grille", "Alloy Wheels"],
  },
  {
    title: "Safety",
    features: ["Child Safety Locks", "Centeral Locking", "Power Door Locks", "Driver Air Bag", "Keyless Entry", "Crash Sensor", "Rear Camera"],
  },
];

export const FaqItemsData = [
  {
    id: "1",
    question: "How often should I get my car serviced?",
    answer: "Experiences might differ even within the same dealership chain, so it's always a good idea to do your homework and read reviews pertaining to the dealership you're interested in.",
  },
  {
    id: "2",
    question: "How often should I change my car's oil?",
    answer: "Experiences might differ even within the same dealership chain, so it's always a good idea to do your homework and read reviews pertaining to the dealership you're interested in.",
  },
  {
    id: "3",
    question: "What type of fuel should I use for my car?",
    answer: "Experiences might differ even within the same dealership chain, so it's always a good idea to do your homework and read reviews pertaining to the dealership you're interested in.",
  },
  {
    id: "4I",
    question: "What is the recommended tire pressure for my car?",
    answer: "Experiences might differ even within the same dealership chain, so it's always a good idea to do your homework and read reviews pertaining to the dealership you're interested in.",
  },
];

export const ReviewProgressData = [
  { title: "Comfort", rating: "Perfect", progress: 75 },
  { title: "Exterior Styling", rating: "Perfect", progress: 75 },
  { title: "Interior Design", rating: "Good", progress: 50 },
  { title: "Performance", rating: "Excellent", progress: 100 },
  { title: "Value For The Money", rating: "Perfect", progress: 75 },
  { title: "Reliability", rating: "Good", progress: 50 },
];

export const AddReviewListData = ["Comfort", "Interior Design", "Value For The Money", "Exterior Styling", "Performance", "Reliability"];

export const BackSlider = {
  spaceBetween: 10,
  effect: "fade",
  speed: 2000,
  grabCursor: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  modules: [Thumbs, EffectFade, Autoplay],
};

export const FrontSlider = {
  spaceBetween: 20,
  slidesPerView: 4,
  freeMode: true,
  modules: [FreeMode],
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    470: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
};
