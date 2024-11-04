import { Navigation } from "swiper/modules";

export const Cities = [
  ["Amsterdam", "Ankara", "Athens", "Atlantic", "Baltimore", "Bangkok", "Beijing", "Berlin", "Berne", "Brussels", "Budapest", "Buenos Aires", "Cairo", "Canberra", "Cannes", "Cape Town", "Chicago", "Cologne", "Copenhagen", "Damascus", "Delhi", "Dubai", "Dublin", "Florence", "Hague", "Havana", "Helsinki", "Hong Kong"],
  ["Honolulu", "Istanbul", "Jakarta", "Jerusalem", "Kansas City", "Kathmandu", "Kuala Lumpur", "Lisbon", "London", "Los Angeles", "Luxembourg", "Madrid", "Manila", "Melbourne", "Milan", "Montreal", "Moscow", "Munich", "Nazareth", "New York", "Nice", "Osaka", "Ottawa", "Paris", "Philadelphia", "Phnom Penh", "Prague"],
  ["Quito", "Reykjavik", "Rio de Janeiro", "San Francisco", "Santa Fe", "Santiago", "Shanghai", "Singapore City", "Stockholm", "Saint Petersburg", "Seoul", "Sydney", "Taipei", "Toronto", "Venice", "Vienna", "Washington", "Armenia", "Argentina", "Australia", "Aruba", "Belize", "Burundi", "Cape Verde", "Wokha", "Chile", "Ethiopia", "Zunheboto"],
];

export const BrowseByCategoryContent = "Explore different job categories to discover roles that match your interests.";

export const Job2CategorySetting = {
  navigation: {
    prevEl: ".dark-category-prev",
    nextEl: ".dark-category-next",
  },
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  modules: [Navigation],
  className: "about-job-slider",
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