import { Award, Building, Calendar1, Call, Car, Coin1, Driving, Location, SearchNormal1, Tag2, Verify, Wallet, Wallet3 } from "iconsax-react";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import { NavType } from "../../Types/HomeDemo";

export const HomeTabData: NavType[] = [
  {
    id: 1,
    icon: <SearchNormal1 className="iconsax" />,
    label: "Search",
    inputLabel: "Enter Keyword...",
    dropdownMenu: [
      { title: "City,Locality", icon: <i className="ri-map-pin-line" /> },
      { title: "Area (like a Salmina)", icon: <i className="ri-map-pin-4-line" /> },
      { title: "Project or Builder name", icon: <i className="ri-building-4-line" /> },
    ],
  },
  {
    id: 2,
    icon: <Location className="iconsax" />,
    label: "Location",
    inputLabel: "Enter Location",
    dropdownMenu: [{ title: "Apartment" }, { title: "Kansas City" }, { title: "Santiago" }, { title: "Lisbon" }, { title: "Los Angeles" }, { title: "Sydney" }, { title: "Beijing" }],
  },
  {
    id: 3,
    icon: <Calendar1 className="iconsax" />,
    label: "Pick up Date",
    inputLabel: "Choose your Date",
  },
  {
    id: 4,
    icon: <Calendar1 className="iconsax" />,
    label: "Pick up Time",
    inputLabel: "Choose your Time",
  },
  {
    id: 5,
    icon: <Car className="iconsax" />,
    label: "Car Type",
    inputLabel: "Enter Car Type",
    dropdownMenu: [{ title: "Hatchback" }, { title: "SUV" }, { title: "Convertible" }, { title: "Sedan" }, { title: "Crossover" }],
  },
  {
    id: 6,
    icon: <Wallet className="iconsax" />,
    label: "Price",
    inputLabel: "Enter Your Price",
  },
  {
    id: 7,
    icon: <Building className="iconsax" />,
    label: "All Categories",
    inputLabel: "Enter Category Type",
    dropdownMenu: [{ title: "Education" }, { title: "Law & government" }, { title: "Arts" }, { title: "Construction" }, { title: "Finance" }, { title: "Technology" }, { title: "Communications" }, { title: "Health care" }],
  },
  {
    id: 8,
    icon: <Wallet className="iconsax" />,
    label: "Job Type",
    inputLabel: "Enter Job Type",
    dropdownMenu: [{ title: "Freelance" }, { title: "Full Time" }, { title: "Internship" }, { title: "Part Time" }],
  },
  {
    id: 9,
    icon: <Wallet className="iconsax" />,
    label: "Salary",
    inputLabel: "Enter Salary",
  },
  {
    id: 10,
    icon: <Building className="iconsax" />,
    label: "Property Type",
    inputLabel: "Enter Property Type",
    dropdownMenu: [{ title: "Apartment" }, { title: "House" }, { title: "Vila" }, { title: "Office" }, { title: "Farmhouse" }],
  },
  {
    id: 11,
    icon: <Wallet className="iconsax" />,
    label: "Price",
    inputLabel: "Enter Your Price",
  },
];

export const CategoriesSettingData = {
  slidesPerView: 5,
  spaceBetween: 40,
  autoplay: { delay: 2000, disableOnInteraction: false },
  modules: [Autoplay],
  loop: true,
  speed: 2000,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    420: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
};

export const CategoriesContentData = "Explore our range of compact cars, luxury sedans, rugged SUVs, and reliable trucks to find your ideal vehicle today.";

export const MostSearchedContentData = "Explore this year's hottest cars! From sports cars to family SUVs, discover the most searched models and why they're trending.";

export const ServiceContentData = "Enjoy outstanding service by utilising our best-rated products. Take advantage of rapid, courteous help and exceptional, customised solutions.";

export const ServiceData = [
  { icon: <Driving className="iconsax" />, title: "Car for rent", description: "Rent a car for flexible travel and the freedom to explore at your own pace." },
  { icon: <Tag2 className="iconsax" />, title: "Car for sale", description: "Reliable car for sale: low mileage, excellent condition, great value—test drive now!" },
  { icon: <Car className="iconsax" />, title: "Book your car", description: "Book your car now to enjoy personalized travel with convenience and freedom." },
  { icon: <Call className="iconsax" />, title: "Support 24/7*", description: "Our help is accessible around-the-clock to make sure you get help when you need it." },
];

export const WorkContentData = "Understanding how our system operates is crucial for maximizing the benefits you receive. Here’s why:";

export const WorkData = [
  { icon: <Location className="iconsax" />, text: "Choose your pickup and drop-off points to find rental options.", duration: 300 },
  { icon: <Calendar1 className="iconsax" />, text: "Set your desired rental period to see available vehicles.", duration: 500, svg: true },
  { icon: <Verify className="iconsax" />, text: "Browse and pick the perfect car for your journey.", duration: 700 },
];

export const ExperienceContentData = "Discover why our customers trust us to make their car buying journey smooth and enjoyable.";

export const ExperienceData = [[{ icon: <Tag2 className="iconsax" /> }, { icon: <Wallet3 className="iconsax" /> }, { icon: <Call className="iconsax" /> }], [{ image: true }], [{ icon: <Award className="iconsax" /> }, { icon: <Coin1 className="iconsax" /> }, { icon: <Car className="iconsax" /> }]];

export const ExperienceCarData = [
  { icon: "car/experience/1.svg", label: "Horsepower", value: "310" },
  { icon: "car/experience/2.svg", label: "Starting at", value: "$44,870" },
  { icon: "car/experience/3.svg", label: "MPG City/Hwy", value: "20/30" },
  { icon: "car/experience/4.svg", label: "Fuel (gal)", value: "15 cu.ft." },
  { icon: "car/experience/5.svg", label: "Seats up to", value: "5 Seats" },
  { icon: "car/experience/6.svg", label: "Drivetrain", value: "AWD" },
  { icon: "car/experience/7.svg", label: "Acceleration", value: "5.9 Seconds" },
  { icon: "car/experience/8.svg", label: "Length (in)", value: "180.6" },
];

export const AboutContentData = "Experience the new standard of quality with Fuso. Discover why we’re the trusted choice for Car and achieve your goals with confidence.";

export const LuxuryCarContentData = "We provide free consultation to help you find a tenant for your new house.We provide free consultation to help you find a tenant for your new house.We provide free consultation to help.";

export const AboutData = [
  { image: "car/about/timer.svg", title: "Mileage unlimited" },
  { image: "car/about/driving.svg", title: "Pick up service" },
  { image: "car/about/door.svg", title: "Delivery to door" },
];

export const TestimonialsContentData = "Discover the appropriate property that is most acceptable for you, ranging from houses";

export const TestimonialsSwiperSetting = {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  modules: [Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  className: "car-testimonials-slider",
};

export const ProductSwiperSetting = {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  modules: [Navigation],
  loop: true,
  className: "property-image-slider",
};

export const OfferContentData = "Get exclusive offers on high-end residences and coveted cars! Our incredible deals will help you save a tonne of money and improve your lifestyle.";

export const OfferSwiperSetting = {
  slidesPerView: 4,
  spaceBetween: 30,
  speed: 2000,
  autoplay: { delay: 2500, disableOnInteraction: false },
  modules: [Autoplay],
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 14,
    },
    350: {
      slidesPerView: 1.5,
      spaceBetween: 14,
    },
    525: {
      slidesPerView: 2,
      spaceBetween: 14,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 14,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    1150: {
      slidesPerView: 3.5,
      spaceBetween: 24,
    },
    1700: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};

export const CarSlider = {
  speed: 2000,
  spaceBetween: 10,
  freeMode: true,
  modules: [Thumbs],
};

export const CarSliderNav = {
  slidesPerView: 3,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
  },
};
