import { Calendar1, Location } from "iconsax-react";
import { Autoplay, Navigation } from "swiper/modules";

export const CounterData = [
  { end: 135, suffix: "+", label: "Freelancer Joined" },
  { end: 8, prefix: "0", suffix: "%", label: "Years of Experience" },
  { end: 35, suffix: "K+", label: "Company Joined" },
];

export const DropdownData = [
  {
    icon: <Location />,
    label: "Location",
    dropdownItems: ["Amsterdam", "Kansas City", "Santiago", "Lisbon", "Los Angeles", "Sydney", "Beijing"],
  },
  {
    icon: <Calendar1 />,
    label: "Car Type",
  },
  {
    icon: <Calendar1 />,
    label: "Price",
  },
];

export const AboutListData = [
  { src: "car2/1.svg", text: "Wide Selection of Vehicles" },
  { src: "car2/4.svg", text: "24/7 Customer Support" },
  { src: "car2/2.svg", text: "Flexible Booking Options" },
  { src: "car2/5.svg", text: "Convenient Airport Services" },
  { src: "car2/3.svg", text: "Insurance Coverage" },
];

export const CategoriesContentData = "Whether you're planning a family vacation, a business trip, or a weekend getaway with friends, we've got you covered.";

export const CategoriesSettingData = {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: { delay: 2500, disableOnInteraction: false },
  modules: [Autoplay, Navigation],
};

export const StepBookingContentData = "When it comes to renting a car for your next adventure, we understand you have choices.";

export const StepsData = [
  {
    step: "01",
    title: "Search",
    description: "For finding the perfect vehicle for your journey, utilize our user-friendly search feature.",
  },
  {
    step: "02",
    title: "Choose",
    description: "Insurance coverage to GPS navigation systems, reserved to meet your specific preferences and requirements.",
  },
  {
    step: "03",
    title: "Customize",
    description: "Customize your reservation to fit your specific requirements for your memorable trip.",
  },
  {
    step: "04",
    title: "Confirmation",
    description: "Receive instant confirmation of your booking and prepare for an unforgettable journey!",
  },
];

export const ServiceListData = [
  { src: "car2/s-1.svg", text: "Mileage Unlimited" },
  { src: "car2/s-2.svg", text: "Pick up Services" },
  { src: "car2/s-3.svg", text: "Delivery to Door" },
];

export const BlogsContentData = "oin us on a heartwarming journey as we share the story of our happy family's adventures on the road.";
