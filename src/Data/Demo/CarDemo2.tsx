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

export const BlogsData = [
  {
    img: "car2/blog/2.jpg",
    title: "Perfect Ride with Our Car Rental",
    description: "It's about the experiences, the memories, and the freedom that come with each mile traveled.",
  },
  {
    img: "car2/blog/3.jpg",
    title: "A Beginner's Guide to Car Maintenance",
    description: "Owning a car comes with the responsibility of regular maintenance to keep it running smoothly.",
  },
  {
    img: "car2/blog/4.jpg",
    title: "Why Understanding Your Car Matters",
    description: "Planning a road trip can be exciting, but ensuring your car is ready for the journey is crucial.",
  },
];

export const TestimonialsContentData = "Take a moment to read through these testimonials and gain insight into why we're the preferred choice for travelers worldwide.";

export const TestimonialsData = [
  {
    name: "-Sarah M.",
    position: "Manager",
    text: "I am thoroughly impressed with the performance and reliability of my new car. The smooth ride and advanced features make every journey a pleasure.",
    rating: 4.5,
  },
  {
    name: "-Jane D.",
    position: "Manager",
    text: "I recently purchased my dream car, and the entire experience was seamless. The customer service was top-notch, and I couldn't be happier with my new ride!",
    rating: 4.5,
  },
  {
    name: "-Jane S.",
    position: "Manager",
    text: "This is my third car from this dealership, and each time the process has been smooth and efficient. I highly recommend them to anyone looking for a reliable vehicle.",
    rating: 4.5,
  },
  {
    name: "-Olivia D.",
    position: "Manager",
    text: "Excellent experience! The car was in perfect condition, and the team provided top-notch service from start to finish. Will definitely be coming back!",
    rating: 4.5,
  },
  {
    name: "-Emily D.",
    position: "Manager",
    text: "The test drive was a breeze, and the team was very accommodating with my busy schedule. I’m thrilled with my new car and would definitely return for future purchases.",
    rating: 4.5,
  },
  {
    name: "-Jessica T.",
    position: "Manager",
    text: "Amazing experience! The sales team was patient and listened to all my concerns. I ended up with a car I love and felt well taken care of throughout the entire process.",
    rating: 4.5,
  },
  {
    name: "-Megan W.",
    position: "Manager",
    text: "I couldn’t have asked for a better experience. The staff was helpful and ensured I understood every aspect of my purchase. Loving my new car and the smooth process!",
    rating: 4.5,
  },
];

export const InstagramSliderData = ["1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6"];

export const FeaturedCarContentData = "As one of the best-selling midsize sedans in America, the Camry offers an exceptional driving experience for both daily commutes and long road trips.";
