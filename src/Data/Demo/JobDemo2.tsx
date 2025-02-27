import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const Cities = [
  ["Amsterdam", "Ankara", "Athens", "Atlantic", "Baltimore", "Bangkok", "Beijing", "Berlin", "Berne", "Brussels", "Budapest", "Buenos Aires", "Cairo", "Canberra", "Cannes", "Cape Town", "Chicago", "Cologne", "Copenhagen", "Damascus", "Delhi", "Dubai", "Dublin", "Florence", "Hague", "Havana", "Helsinki", "Hong Kong"],
  ["Honolulu", "Istanbul", "Jakarta", "Jerusalem", "Kansas City", "Kathmandu", "Kuala Lumpur", "Lisbon", "London", "Los Angeles", "Luxembourg", "Madrid", "Manila", "Melbourne", "Milan", "Montreal", "Moscow", "Munich", "Nazareth", "New York", "Nice", "Osaka", "Ottawa", "Paris", "Philadelphia", "Phnom Penh", "Prague"],
  ["Quito", "Reykjavik", "Rio de Janeiro", "San Francisco", "Santa Fe", "Santiago", "Shanghai", "Singapore City", "Stockholm", "Saint Petersburg", "Seoul", "Sydney", "Taipei", "Toronto", "Venice", "Vienna", "Washington", "Armenia", "Argentina", "Australia", "Aruba", "Belize", "Burundi", "Cape Verde", "Wokha", "Chile", "Ethiopia", "Zunheboto"],
];

export const NextJobContent = "Discover trusted job opportunities tailored to your skills and aspirations. Join our community and let us guide you towards success.";

export const BrowseByCategoryContent = "Explore different job categories to discover roles that match your interests.";

export const Job2CategorySetting = {
  navigation: {
    prevEl: ".dark-category-prev",
    nextEl: ".dark-category-next",
  },
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  modules: [Navigation, Autoplay],
  className: "about-job-slider",
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 5,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1399: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1602: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
};

export const StepsGoalData = [
  {
    number: "01",
    title: "Account",
    description: "Make an account to control your application, monitor your progress, and get information for your job hunt.",
  },
  {
    number: "02",
    title: "CV / Resume",
    description: "The next step is to upload your resume and employ it to demonstrate how your skills align with any open positions.",
  },
  {
    number: "03",
    title: "Quick Job",
    description: "Your dream job is waiting for you. Find the best real estate in your country.",
  },
  {
    number: "04",
    title: "Apply Them",
    description: "Apply to your dream job easily. Find the best real estate in your country and start your career.",
  },
];

export const GoalsContent = "To obtain the job you desire, follow these procedures. We'll assist you in locating a career that aligns with your interests.";

export const ServiceIconData = ["job/category/1.svg", "job/category/5.svg", "job/category/7.svg"];

export const ServiceListData = ["Say goodbye to endless scrolling through unreliable job postings.", "Receive personalized job suggestions that match your criteria.", "We're more than just a job board."];

export const ServiceCounterListData = [
  { end: 135, label: "Freelancer Joined" },
  { end: 8, prefix: "0", label: "Years of Experience" },
  { end: 35, suffix: "K", label: "Company Joined" },
];

export const ServiceContent = "We will help you to find a job with your interests and help build your project more elegant.";

export const TestimonialsContent = "Discover why job seekers everywhere are raving about fuso. Here's what they have to say!";

export const LatestJobOpeningsContent = "Stay updated with the newest job opportunities across industries, tailored to match your skills and career goals.";

export const DarkTestimonialSlider = {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    clickable: true,
  },
  modules: [Pagination],
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1399: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

export const JobMarqueeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4];
