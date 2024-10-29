import { Award, Calendar1, Call, Car, Coin1, Driving, Location, SearchNormal1, Tag2, Verify, Wallet, Wallet3 } from "iconsax-react";
import { Autoplay, Navigation } from "swiper/modules";
import { dynamicImage, Image } from "../../Utils";
import { Href } from "../../Constants/Constants";

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

export const CategoriesSettingData = {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: { delay: 2500, disableOnInteraction: false },
  modules: [Autoplay],
  loop: true,
};

export const CategoriesContentData = "Explore our range of compact cars, luxury sedans, rugged SUVs, and reliable trucks to find your ideal vehicle today.";

export const MostSearchedContentData = "Explore this year's hottest cars! From sports cars to family SUVs, discover the most searched models and why they're trending.";

export const ServiceContentData = "Enjoy outstanding service by utilising our best-rated products. Take advantage of rapid, courteous help and exceptional, customised solutions.";

export const ServiceData = [
  { icon: <Driving />, title: "Car for rent", description: "Rent a car for flexible travel and the freedom to explore at your own pace." },
  { icon: <Tag2 />, title: "Car for sale", description: "Reliable car for sale: low mileage, excellent condition, great value—test drive now!" },
  { icon: <Car />, title: "Book your car", description: "Book your car now to enjoy personalized travel with convenience and freedom." },
  { icon: <Call />, title: "Support 24/7*", description: "Our help is accessible around-the-clock to make sure you get help when you need it." },
];

export const WorkContentData = "Understanding how our system operates is crucial for maximizing the benefits you receive. Here’s why:";

export const WorkData = [
  { icon: <Location />, text: "Choose your pickup and drop-off points to find rental options.", duration: 300 },
  { icon: <Calendar1 />, text: "Set your desired rental period to see available vehicles.", duration: 500, svg: true },
  { icon: <Verify />, text: "Browse and pick the perfect car for your journey.", duration: 700 },
];

export const ExperienceContentData = "Discover why our customers trust us to make their car buying journey smooth and enjoyable.";

export const ExperienceData = [[{ icon: <Tag2 /> }, { icon: <Wallet3 /> }, { icon: <Call /> }], [{ image: true }], [{ icon: <Award /> }, { icon: <Coin1 /> }, { icon: <Car /> }]];

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

export const AboutData = [
  { image: "car/about/timer.svg", title: "Mileage unlimited" },
  { image: "car/about/driving.svg", title: "Pick up service" },
  { image: "car/about/door.svg", title: "Delivery to door" },
];

export const TestimonialsContentData = "Discover the appropriate property that is most acceptable for you, ranging from houses";

export const TestimonialsData = [
  {
    name: "Swiden J.",
    location: "Ontario",
    image: "car/testimonial/1.jpg",
    testimonial: "I had an amazing experience buying my SUV from fuso. The staff was helpful and knowing, making the process smooth and satisfying. I'm overjoyed.",
  },
  {
    name: "Sarah J.",
    location: "Toronto",
    image: "car/testimonial/2.jpg",
    testimonial: "The service at fuso was exceptional from start to finish. They kept me informed and satisfied throughout. Highly recommend for anyone buying a new car!",
  },
  {
    name: "David K.",
    location: "London",
    image: "car/testimonial/3.jpg",
    testimonial: "Excellent service at fuso. The team went above and beyond to secure a great deal on my new car. I'm very satisfied and will return.",
  },
  {
    name: "Sophia L.",
    location: "Vaughan",
    image: "car/testimonial/4.jpg",
    testimonial: "I was impressed by the wide vehicle selection and the team's expertise. They made finding and buying my car smooth and enjoyable. Thank you, fuso!",
  },
  {
    name: "James T.",
    location: "Hamilton",
    image: "car/testimonial/5.jpg",
    testimonial: "The service at fuso was top-notch from start to finish. I appreciated the transparency and honesty. I love my new sedan and will return for future buy.",
  },
  {
    name: "Emily S.",
    location: "Windsor",
    image: "car/testimonial/6.jpg",
    testimonial: "I had an outstanding experience with [Your Company Name]. The patient and knowledgeable team ensured I was satisfied with my new car. Thank you!",
  },
];

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

export const CarHomeSliderSettings = {
  customPaging: (i: number) => {
    return (
      <a href={Href}>
        <Image src={dynamicImage(`car/home-img/${i + 1}.png`)} className="img-fluid" />
      </a>
    );
  },
  dots: true,
  dotsClass: "slick-dots slick-thumb car-slider",
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
