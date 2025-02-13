import { Autoplay, EffectFade, FreeMode, Thumbs } from "swiper/modules";

export const Brands = [
  {
    id: 1,
    name: "Rolls Royce",
    value: "rolls_royce",
    count: 640,
    models: [
      { name: "Phantom", value: "phantom", count: 320 },
      { name: "Ghost", value: "ghost", count: 110 },
      { name: "Wraith", value: "wraith", count: 50 },
      { name: "Dawn", value: "dawn", count: 66 },
      { name: "Cullinan", value: "cullinan", count: 43 },
      { name: "Spectre", value: "spectre", count: 65 },
      { name: "Silver Ghost", value: "silver_ghost", count: 123 },
      { name: "Silver Wraith", value: "silver_wraith", count: 14 },
    ],
  },
  {
    id: 2,
    name: "Bentley",
    value: "bentley",
    count: 790,
    models: [
      { name: "Bentayga", value: "bentayga", count: 3431 },
      { name: "Continental GT", value: "continental_gt", count: 541 },
      { name: "Flying Spur", value: "flying_spur", count: 187 },
      { name: "Mulsanne", value: "mulsanne", count: 61 },
      { name: "Bacalar", value: "bacalar", count: 19 },
      { name: "Arnage", value: "arnage", count: 15 },
    ],
  },
  {
    id: 3,
    name: "Aston Martin",
    value: "aston_martin",
    count: 690,
    models: [
      { name: "DBX", value: "dbx", count: 165 },
      { name: "Vantage", value: "vantage", count: 451 },
      { name: "DB11", value: "db11", count: 154 },
      { name: "DB12", value: "db12", count: 176 },
      { name: "Valhalla", value: "valhalla", count: 16 },
      { name: "Valkyrie", value: "valkyrie", count: 1 },
      { name: "DB9", value: "db9", count: 281 },
      { name: "Cygnet", value: "cygnet", count: 19 },
    ],
  },
  {
    id: 4,
    name: "Maserati",
    value: "maserati",
    count: 960,
    models: [
      { name: "Alfieri", value: "alfieri", count: 341 },
      { name: "Ghibli", value: "ghibli", count: 85 },
      { name: "Quattroporte", value: "quattroporte", count: 55 },
      { name: "Levante", value: "levante", count: 66 },
      { name: "MC20", value: "mc20", count: 700 },
    ],
  },
  {
    id: 5,
    name: "Bugatti",
    value: "bugatti",
    count: 460,
    models: [
      { name: "Veyron", value: "veyron", count: 91 },
      { name: "Chiron", value: "chiron", count: 19 },
      { name: "Divo", value: "divo", count: 81 },
      { name: "Centodieci", value: "centodieci", count: 18 },
      { name: "Bolide", value: "bolide", count: 71 },
    ],
  },
  {
    id: 6,
    name: "Lamborghini",
    value: "lamborghini",
    count: 760,
    models: [
      { name: "Aventador", value: "aventador", count: 71 },
      { name: "Huracán", value: "huracan", count: 221 },
      { name: "Urus", value: "urus", count: 441 },
      { name: "Sián", value: "sian", count: 551 },
      { name: "Revuelto", value: "revuelto", count: 21 },
      { name: "Huracán Tecnica", value: "huracan_tecnica", count: 13 },
    ],
  },
  {
    id: 7,
    name: "Ferrari",
    value: "ferrari",
    count: 960,
    models: [
      { name: "Ferrari 296 GTB", value: "ferrari_296_gtb", count: 19 },
      { name: "Ferrari SF90 Stradale", value: "ferrari_sf90_stradale", count: 871 },
      { name: "Ferrari F8 Tributo", value: "ferrari_f8_tributo", count: 16 },
      { name: "Ferrari Roma", value: "ferrari_roma", count: 51 },
      { name: "Ferrari Portofino M", value: "ferrari_portofino_m", count: 651 },
      { name: "Ferrari 812 GTS", value: "ferrari_812_gts", count: 551 },
    ],
  },
  {
    id: 8,
    name: "Cadillac",
    value: "cadillac",
    count: 640,
    models: [
      { name: "Cadillac CT4", value: "cadillac_ct4", count: 41 },
      { name: "Cadillac CT5", value: "cadillac_ct5", count: 15 },
      { name: "Cadillac CT6", value: "cadillac_ct6", count: 91 },
      { name: "Cadillac XT4", value: "cadillac_xt4", count: 199 },
      { name: "Cadillac Escalade", value: "cadillac_escalade", count: 157 },
      { name: "Cadillac Lyriq", value: "cadillac_lyriq", count: 156 },
    ],
  },
  {
    id: 9,
    name: "Lexus",
    value: "lexus",
    count: 460,
    models: [
      { name: "Lexus IS", value: "lexus_is", count: 110 },
      { name: "Lexus ES", value: "lexus_es", count: 100 },
      { name: "Lexus GS", value: "lexus_gs", count: 201 },
    ],
  },
  {
    id: 10,
    name: "BMW",
    value: "bmw",
    count: 670,
    models: [
      { name: "BMW iX1", value: "bmw_ix1", count: 167 },
      { name: "BMW iX", value: "bmw_ix", count: 761 },
      { name: "BMW i4", value: "bmw_i4", count: 17 },
      { name: "BMW Sedan", value: "bmw_sedan", count: 51 },
      { name: "BMW GRAN Turismo", value: "bmw_gran_turismo", count: 561 },
    ],
  },
  {
    id: 11,
    name: "Mercedes",
    value: "mercedes",
    count: 660,
    models: [
      { name: "Mercedes-Benz GLA", value: "mercedes_benz_gla", count: 651 },
      { name: "Mercedes-Benz AMG", value: "mercedes_benz_amg", count: 16 },
      { name: "Mercedes-Benz C-Class", value: "mercedes_benz_c_class", count: 51 },
      { name: "Mercedes-Benz EQB", value: "mercedes_benz_eqb", count: 91 },
    ],
  },
];

export const CategoriesData = [
  { id: "categories-1", label: "All Cars", type: "all", count: 1530 },
  { id: "categories-2", label: "Certified Cars", type: "certified_cars", count: 815 },
  { id: "categories-3", label: "Direct Owner Cars", type: "direct_owner_cars", count: 215 },
  { id: "categories-4", label: "Partner Cars", type: "partner_cars", count: 375 },
  { id: "categories-5", label: "Hot Deal", type: "hot_deal", count: 125 },
];

export const FuelTypeData = [
  { id: "FuelType-1", label: "Petrol", type: "petrol", count: 60 },
  { id: "FuelType-2", label: "Diesel", type: "diesel", count: 150 },
  { id: "FuelType-3", label: "CNG", type: "CNG", count: 80 },
  { id: "FuelType-4", label: "Electric", type: "electric", count: 50 },
];

export const ModalYearData = [
  { id: "ModalYear-1", label: "2020 & above", type: "2020", count: 28 },
  { id: "ModalYear-2", label: "2016 & above", type: "2016", count: 10 },
  { id: "ModalYear-3", label: "2012 & above", type: "2012", count: 18 },
  { id: "ModalYear-4", label: "2008 & above", type: "2008", count: 25 },
];

export const SeatsData = [
  { id: "Seats-1", label: "4 Seats", type: "4", count: 20 },
  { id: "Seats-2", label: "5 Seats", type: "5", count: 5 },
  { id: "Seats-3", label: "6 Seats", type: "6", count: 10 },
  { id: "Seats-4", label: "7 Seats", type: "7", count: 15 },
];

export const CarColorData = [
  { id: "Color-1", label: "Blue", type: "blue", count: 30 },
  { id: "Color-2", label: "Silver", type: "silver", count: 65 },
  { id: "Color-3", label: "white", type: "white", count: 10 },
  { id: "Color-4", label: "Black", type: "black", count: 35 },
  { id: "Color-5", label: "Red", type: "red", count: 55 },
];

export const TransmissionData = [
  { id: "Transmission-1", label: "Manual", type: "manual", count: 81 },
  { id: "Transmission-2", label: "Automatic", type: "automatic", count: 60 },
  { id: "Transmission-3", label: "Semi Automatic", type: "semi_automatic", count: 19 },
];

export const OwnerData = [
  { id: "Owner-1", label: "1st Owner", type: "1", count: 28 },
  { id: "Owner-2", label: "2st Owner", type: "2", count: 10 },
  { id: "Owner-3", label: "3st Owner", type: "3", count: 19 },
  { id: "Owner-4", label: "4st Owner", type: "4", count: 25 },
];

export const CarCategoryData = ["Sedan", "Jeep", "SUV", "Hatchback", "Truck", "Electric", "Convertible", "Coupe"];

export const CategoryInnerSlider = {
  slidesPerView: 6,
  freeMode: true,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  modules: [FreeMode, Autoplay],
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

export const CarDescription = ["The streamlined design of a Lamborghini elicits an instinctive reaction, as though speed itself has been condensed into its shape. These doors rise up like the wings of some mythological beast.", "Owning a Ferrari is one of the most apparent moves when it comes to marketing your riches. Naturally, some people cannot afford the million-dollar plus offers from Ferrari's Icona series, and even the more affordable variants would cost you half a million dollars. The 2022 Ferrari Portofino M is available for less expensive budgets."];

export const DropdownOptions = [
  {
    label: "Condition",
    options: [
      { value: 1, text: "New" },
      { value: 1, text: "Used" },
    ],
  },
  {
    label: "Category",
    options: [
      { value: 1, text: "Bus" },
      { value: 1, text: "Car" },
      { value: 1, text: "Truck" },
      { value: 1, text: "Trailers" },
    ],
  },
  {
    label: "Car Type",
    options: [
      { value: 1, text: "Diesel" },
      { value: 2, text: "Electric" },
      { value: 3, text: "Petrol" },
      { value: 4, text: "CNG" },
      { value: 5, text: "Hybrid" },
      { value: 6, text: "Convertible" },
    ],
  },
  {
    label: "Any Models",
    options: [
      { value: 1, text: "2020 & above" },
      { value: 2, text: "2016 & above" },
      { value: 3, text: "2012 & above" },
      { value: 4, text: "2008 & above" },
    ],
  },
];
